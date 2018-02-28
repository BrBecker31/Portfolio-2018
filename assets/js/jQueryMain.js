$(document).ready(function(){
  $("#main").click(function(){
    $("#main").animate({height: '800px', width: '800px'});
    $("#icon").fadeOut();
    $("#menu ul").delay(300).animate({opacity: '1'});
    $("#menu ul").css({'visibility': 'visible'});
    $("#menu_circle_layer").animate({height: '850px', width: '850px'});

    $("#social_media").animate({height: '400px', width: '400px'});
    $("#container").delay(300).animate({opacity: '1'});
    $("#container").css({'visibility': 'visible'});
    $("#social_circle_layer").animate({height: '430px', width: '430px'});
// showing the background. need to still add image or movie
    $("#background").delay(200).animate({opacity: '1'});
    $("#background").css({'visibility': 'visible'});
  });

  $("#background").click(function(){
    $("#main").animate({height: '60px', width: '60px'});
    $("#icon").fadeIn();
    $("#menu ul").animate({opacity: '0'});
    $("#menu ul").css({'visibility': 'hidden'});
    $("#menu_circle_layer").animate({height: '0px', width: '0px'});

    $("#social_media").animate({height: '0px', width: '0px'});
    $("#container").animate({opacity: '0'});
    $("#container").css({'visibility': 'hidden'});
    $("#social_circle_layer").animate({height: '0px', width: '0px'});

    $("#background").animate({opacity: '0'});
    $("#background").css({'visibility': 'hidden'});
  });

  // about me modal
      $('#about-me').on('show.bs.modal', function (e) {
      $('.modal .modal-dialog').attr('class', 'modal-dialog  fadeInLeftBig  animated');
    });
      $('#about-me').on('hide.bs.modal', function (e) {
      $('.modal .modal-dialog').attr('class', 'modal-dialog  fadeOutRightBig  animated');
    });

// contact modal
    $('#contact-me').on('show.bs.modal', function (e) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomIn  animated');
  });
    $('#contact-me').on('hide.bs.modal', function (e) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  zoomOut  animated');
  });
});
