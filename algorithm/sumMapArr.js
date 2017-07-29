// 给定一个很大的数组，数组里面有许多整数，要求：
// 将数组中【和】为 10 的每一对数配对并找出，返回这些数配对后的数组
// 例如：[11, 3, 8, 9, 7, -1, 1, 2, 4...]
// 得到：[[11,-1],[3,7],[8,2],[9,1]...]

// 版本一
function getMapArr(list) {
    const resArr = [];
    const len = list.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (list[i] + list[j] === 10) {
                resArr.push([list[i], list[j]]);
            }
        }
    }

    return resArr;
}

// 版本二
function getMapArr2(list) {
    const resArr = [];
    list = list.sort((a, b) => a - b);

    for (let i = 0, j = list.length - 1; i < j;) {
        const a = list[i];
        const b = list[j];
        if (a + b === 10) {
            resArr.push([a, b]);
            i++;
            j--;
        }
		else if (a + b < 10) {
            i++;
        }
		else {
            j--;
        }
    }

    return resArr;
}

const list = [11, 4, 9, 3, -1, -3, 6, 7, 9, 13, 8];
console.log(JSON.stringify(getMapArr(list)));
console.log(JSON.stringify(getMapArr2(list)));
