'use strict'
var infografico = (function() {
  'use strict';

  var mapAnim = {
    start: {
      1: { elem: '.title' , enter: 'fadeInUp', delay: 1},
      2: { elem: '#menu'  , enter: 'fadeInUp', delay: 2},
      3: { elem: '#pontos', enter: 'fadeIn', delay: 4},
    },
    numbers: {
      1: { elem: '.title' , enter: 'fadeInUp', delay: 2},
      2: { elem: '#numbers-image' , enter: 'slideInRight', delay: 3},
      3: { elem: '#numbers-info' , enter: 'slideInLeft', delay: 3}
    }
  }

  function init() {
    bindMenuAnimation();
    bindBack();
    animSection('start');
  }

  function _addAnimation ($elem, effect, type) {
    $elem.addClass('animated ' + effect ).show();
    var wait = window.setTimeout( function(){
      $elem.removeClass(effect);
      if(type === 'hide'){
        $elem.hide();
      }
    }, 1300 );
    $elem.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      // callback();
    });
  }

  function animSection (section) {
    var $section = $('#'+section);
    $.each( mapAnim[section], function (ind, elemAnim) {
      // console.log(ind, elemAnim)
      setTimeout(function(){
        var $elem = $(elemAnim.elem, $section)
        _addAnimation ($elem, elemAnim.enter);
      },100 * elemAnim.delay);
    });
  }

  function bindMenuAnimation () {
    $('.nav-section').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var section = $(this).data('section');
      _addAnimation( $('#'+section), 'slideInUp' );
      animSection(section);
    });
  }

  function bindBack () {
    $('.all-back').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var $section = $(this).parents('.section');
      _addAnimation( $section, 'slideOutDown', 'hide' );
    });
  }

  return {
    init:init
  };

}());

$(document).ready(function() {
  infografico.init();
});
