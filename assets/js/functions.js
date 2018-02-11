$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

  $('.rocks').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });

  if(wScroll > $('.projects').offset().top - ($(window).height() / 1.2)) {

    $('.projects .figure').each(function(i) {

      setTimeout(function() {
      $('.projects .figure').eq(i).addClass('is-showing');
    }, 200 * (i+1));
    });
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()) {

    $('.large-window').css({'background-position': 'center ' + (wScroll - $('.large-window').offset().top) + 'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity})

  }

  if(wScroll > $('.online').offset().top - $(window).height()) {

    var offset = Math.min(0, wScroll - $('.online').offset().top +$(window).height() - 470);

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

});
