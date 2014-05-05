'use strict'
var infografico = (function() {
  'use strict';

  var openSection = '';

  function init() {
    console.log('escalacao-selecao')
    changeSchema();
  }

  function changeSchema () {
    var $options = $('#schema-select-options');
    var $field = $('#field');
    var quant = $options.size();
    var actual = 0;
    $('.schema-select-button').on('click', function () {
      var $bt = $(this);
      if( $bt.hasClass('prev') && actual > 0){
        $options.velocity({marginLeft: '+=80'});
        actual--;
      }
      if( $bt.hasClass('next') && actual <= quant){
        $options.velocity({marginLeft: '-=80'});
        actual++;
      }
      var schema = $options.find('li').eq(actual).find('a').attr('href').replace('#', '');
      $field.attr('class', schema)
    });
  }

  return {
    init:init
  };

}());

$(document).ready(function() {
  infografico.init();
});
