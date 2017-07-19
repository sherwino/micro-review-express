$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

  $(".linkpost").on("click",function(e) {
    e.preventDefault(); // cancel the link itself
    $.post(this.href,function(data) {
      $(".body-other").html(data);
    });
  });
});
