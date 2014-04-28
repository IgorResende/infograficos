'use strict'
var infografico = (function() {
  'use strict';

  function init() {
    $('.nav-section').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var section = $(this).data('section');
      $('#'+section).addClass('animated slideInUp').show();
       var wait = window.setTimeout( function(){
            $('#'+section).removeClass('slideInUp')}, 1300
        );
    });
    bindBack();
  }

  function bindBack () {
    $('.all-back').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var $section = $(this).parents('.section');
      $section.removeClass('slideInUp').addClass('slideOutDown')
      var wait = window.setTimeout( function(){
        $section.removeClass('slideOutDown')
        $section.hide()
      }, 1300 );
    });
  }

  return {
    init:init
  };

}());

$(document).ready(function() {
  infografico.init();
});
