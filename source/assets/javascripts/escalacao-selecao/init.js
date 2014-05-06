'use strict'
var infografico = (function() {
  'use strict';

  var openSection = '';

  function init() {
    console.log('escalacao-selecao')
    changeSchema();
    start();
    player();
  }

  function player () {
    $('.img-player')
      .on('click', function () {
        var $player = $(this);
        if( $player.parent('li').hasClass('selected') ){
          $player.parent('li').removeClass('selected')
        } else{
          $('.selected').removeClass('selected');
          $player.parent('li').addClass('selected');
        }
      })
      // .on('mouseenter', function () {
      //   var $player = $(this);
      //   var $tooltip = $player.find('.tooltip-info');
      //   var $name = $player.find('.name-player');
      //   if( !$player.parent('li').hasClass('selected') ){
      //     // $player.velocity({ scale: 1.4 }, { duration: 200, display: 'block', delay: 50});
      //     // $name.velocity({ opacity: 0, marginTop: -22 }, { duration: 500, display: 'block', delay: 500});
      //     // $tooltip.velocity({ opacity: 1, marginTop: -10 }, { duration: 500, display: 'block', delay: 500 });
      //   }
      // })
      // .on('mouseleave', function () {
      //   var $player = $(this);
      //   if( !$player.parent('li').hasClass('selected') ){
      //     var $name = $player.find('.name-player');
      //     var $tooltip = $player.find('.tooltip-info');
      //     $player.velocity('stop').velocity('reverse');
      //     $name.velocity('stop').velocity('reverse');
      //     $tooltip.velocity('stop').velocity('reverse');
      //   }
      // })
  }

  function start () {
    var $start = $('#start');
    var $title = $('#title', $start);
    var $desc = $('#desc', $start);
    var $field = $('#field', $start);
    var $players = $('.player', $start);
    var $schema = $('#schema-select-area', $start);
    var $coach = $('#coach', $start);

    $title.velocity({ opacity: 1 }, { duration: 500 });
    $desc.velocity({ opacity: 1 }, { duration: 500, delay: 200  });
    $field.velocity({ opacity: 1, marginTop: 0 }, { duration: 500, delay: 200  });
    $players.delay(500).each(function (i, p) {
      $players.eq(i).velocity({ opacity: 1 }, { duration: 300, delay: 100 * i });
    });
    $schema.velocity({ opacity: 1 }, { duration: 500, delay: 2000 });
    $coach.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 2000 });
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
    // $("body").queryLoader2({
    //   backgroundColor: '#00a750',
    //   barColor: '#fff',
    //   completeAnimation: 'grow',
    //   onComplete: function (argument) {
        infografico.init();
    //   }
    // });
});
