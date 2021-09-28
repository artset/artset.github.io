var $filter = $('.filter').click(function() {
  if (this.id == 'all') {
    $('.entries > div').fadeIn(1000);
  } else {
    var $el = $('.' + this.id).fadeIn(1000);
    $('.entries > div').not($el).hide();
  }
  $filter.removeClass('active');
  $(this).addClass('active');
})
