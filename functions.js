$( window ).on( "load", function() {

    // var artists_info = $('.popup-wrp');
    var artists_names = $('[data-artist-name]');
    var artists_images = $('[data-artist-image]');
    var artist_image_default = $('.foto-artistas__default');

    artists_names.hover(
      function() {
        var artist_name = $(this).attr('data-artist-name');
        artists_images.addClass('foto-artistas__hidding');
        $('[data-artist-image='+ artist_name +']').addClass('foto-artistas__show-fixed');
      }, function() {
        var artist_name = $(this).attr('data-artist-name');
        $('[data-artist-image='+ artist_name +']').removeClass('foto-artistas__show-fixed');
        artist_image_default.removeClass('foto-artistas__hidding');
      }
    );

});
