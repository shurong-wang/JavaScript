
// demo 中 slider 硬编码为 priceSlider，需要处理
//
class Filter {
    constructor(filterUrl) {
        this.filterList = [
            'Bullish',
            'Bearish',
            'Neutral',
            'Price',
            'S&P 500',
            'Russell 1000'
        ];
        this.filterHash = {};
        this.filterSet = new Set([]);
        this.filterSection = $('.filter-section');
        this.filterTags = $('#filter-tags');
        this.priceSlider = $('#filter-Price');
        this.preventCallBack = false;
        this.filterUrl = filterUrl;
    }

    init(filters) {
        this.initHash(this.filterList)
        this.initTagsAndSet(filters);
        this.registerEvents(this);
    }

    initHash(list) {
        this.filterHash = list.reduce((prevHash, currVal, currIndex) => {
            prevHash[currVal] = currIndex;
            return prevHash;
        }, {});
    }

    initTagsAndSet(filters) {
        this.filterTags.tagsinput({
            itemValue: 'value',
            itemLabel: 'label',
            itemIndex: 'index'
        });
        for (let fLabel in filters) {
            if (filters.hasOwnProperty(fLabel)) {
                if ('Price' === fLabel) {
                    const [startVal, endVal] = filters[fLabel].split(',');
                    const tagOpt = {
                        'value': `$${startVal} - $${endVal}`,
                        'label': fLabel,
                        'index': this.filterHash[fLabel]
                    };
                    this.filterTags.tagsinput('add', tagOpt);

                    // Initialize filterSet
                    const setElem = JSON.stringify(Object.assign(
                        {},
                        tagOpt,
                        {'value': `${startVal},${endVal}`}
                    ));
                    this.filterSet.add(setElem);
                }
                else {
                    filters[fLabel].split(',').forEach((fValue) => {
                        const tagOpt = {
                            'value': fValue,
                            'label': fLabel,
                            'index': this.filterHash[fValue]
                        };
                        this.filterTags.tagsinput('add', tagOpt);
                        // Initialize filterSet
                        this.filterSet.add(JSON.stringify(tagOpt));
                    });
                }
            }
        }
    }

    onChangePrice(sliderVal, sliderAct) {
        const [startVal, endVal] = sliderVal;
        const tagOpt = {
            'value': `$${startVal} - $${endVal}`,
            'label': 'Price',
            'index': this.filterHash.Price
        };
        const setElem = JSON.stringify(Object.assign(
            {},
            tagOpt,
            {'value': `${startVal},${endVal}`}
        ));

        if (sliderAct === 'add') {
            // Update tags
            this.filterTags.tagsinput('add', tagOpt);
            // Update filterSet
            this.filterSet.add(setElem);

            this.fetchFilterChart();
        }
        else {
            // Update tags
            this.preventCallBack = true;
            this.filterTags.tagsinput('remove', tagOpt);
            this.preventCallBack = false;
            // Update filterSet
            this.filterSet.delete(setElem);
        }
    }

    resetPrice() {
        const $ticks = $('#Price-slider').find('.slider-tick-label');
        $ticks.eq(0).text(`$0`);
        $ticks.eq(1).text(`$1000`);
        this.priceSlider.slider('setValue', [0, 0]);
        this.filterSet = new Set([...this.filterSet].filter(elem => !elem.includes('Price')));
    }

    buildApiParams() {
        const queryHash = {};
        for (let item of this.filterSet.values()) {
            const {
                value: fValue,
                label: fLabel
            } = JSON.parse(item);
            if (queryHash[fLabel]) {
                queryHash[fLabel] += (`,${fValue}`);
            }
            else {
                queryHash[fLabel] = fValue;
            }
        }
        return JSON.stringify(queryHash);
    }

    // Request api
    fetchFilterChart() {
        const params = this.buildApiParams(this.filterSet);
        console.log(params);

        // var jqxhr = $.get(this.filterUrl, params)
        // .done(function(resp) {
        //     console.log(resp);
        // })
        // .fail(function(jqXHR, textStatus, errorThrown) {
        //     console.log(textStatus);
        // });

    }

    registerEvents(that) {
        // Change checkbox
        this.filterSection.on('change', 'input:checkbox', function () {
            const $checkbox = $(this);
            const fLabel = $checkbox.parents('.filter-section').data('label');
            const fValue = $checkbox.val();
            const isChecked = $checkbox.is(':checked');
            const tagOpt = {
                'value': fValue,
                'label': fLabel,
                'index': that.filterHash[fValue]
            };
            // Update tags
            that.preventCallBack = true;
            that.filterTags.tagsinput((isChecked ? 'add' : 'remove'), tagOpt);
            that.preventCallBack = false;
            // Update filterSet
            that.filterSet[isChecked ? 'add' : 'delete'](JSON.stringify(tagOpt));

            that.fetchFilterChart();
        });

        // Change price slider
        this.priceSlider.on('change', (slideEvt) => {
            that.onChangePrice(slideEvt.value.oldValue, 'remove');
        }).on('slide', (slideEvt) => {
            const $ticks = $('#Price-slider').find('.slider-tick-label');
            const [startVal, endVal] = slideEvt.value;
            $ticks.eq(0).text(`$${startVal}`);
            $ticks.eq(1).text(`$${endVal}`);
        }).on('slideStop', (slideEvt) => {
            that.onChangePrice(slideEvt.value, 'add');
        });

        // Clear
        $('.clear-filter').on('click', function () {
            const $section = $(this).parents('.filter-section');
            const fLabel = $section.data('label');
            if (fLabel === 'Price') {
                that.resetPrice();
            }
            else {
                $section.find('input:checked').prop('checked', false);
            }
            that.preventCallBack = true;
            const tagItems = that.filterTags.tagsinput('items');
            const tags = JSON.parse(JSON.stringify(tagItems));
            tags.forEach(tag => {
                if (tag.label === fLabel) {
                    that.filterTags.tagsinput('remove', tag);
                }
            });
            that.preventCallBack = false;
            that.filterSet = new Set([...that.filterSet].filter(elem => !elem.includes(fLabel)));

            that.fetchFilterChart();
        });

        // Clear all
        $('#clear-all').on('click', function () {
            that.filterSection.find('input:checked').prop('checked', false);
            that.resetPrice();
            that.filterTags.tagsinput('removeAll');
            that.filterSet.clear();

            that.fetchFilterChart();
        });

        // Remove tag
        this.filterTags.on('itemRemoved', function (tagEvt) {
            const delTag = tagEvt.item;
            if (that.preventCallBack) {
                return;
            }
            if (delTag) {
                const {
                    value: fValue,
                    label: fLabel
                } = delTag;

                if ('Price' === fLabel) {
                    that.resetPrice();
                }
                else {
                    $(`#${fLabel}`).find(`:checkbox[value='${fValue}']`).prop('checked', false);
                }
                that.filterSet.delete(JSON.stringify(delTag));

                that.fetchFilterChart();
            }
        });

        // Sort tags
        this.filterTags.on('itemAdded', function (tagEvt) {
            const addTag = tagEvt.item;
            const {
                value: fValue,
                label: fLabel
            } = addTag;
            const tagItems = that.filterTags.tagsinput('items');
            const tags = JSON.parse(JSON.stringify(tagItems));
            const insIndex = tags.findIndex(tag => tag.index > addTag.index);
            if (insIndex > -1) {
                const newTags = [...tags.slice(0, insIndex), addTag, ...tags.slice(insIndex)];
                that.filterTags.tagsinput('removeAll');
                newTags.forEach(tag => {
                    that.filterTags.tagsinput('add', tag);
                });
            }
        });
    }

}

/* mock data start */
const filterUrl = '/api/filter';
const apiData = {
    'filters': {
        'Trend': 'Bullish,Bearish',
        'Price': '30,960',
        'Universe': 'S&P 500'
    }
};
/* mock data end */

const {filters} = apiData;
const filter = new Filter(filterUrl);
filter.init(filters);
