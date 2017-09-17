$('.dropdown-submenu .info').popover({
    html: true,
    template: `
        <div class='popover info' role='menu'>
            <div class='popover-content'></div>
        </div>
    `
});

$('.dropdown-submenu .more').popover({
    html: true,
    template: `
        <div class='popover more' role='menu'>
            <div class='popover-content'></div>
        </div>
    `
});

$('#filter-modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(recipient);
})
