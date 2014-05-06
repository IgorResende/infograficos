'use strict'
var infografico = (function() {
  'use strict';

  var schemaSelected = '4-4-2';

  var playerPositions = {
    1 : 'Goleiro',
    2 : 'Lateral direito',
    3 : 'Lateral esquerdo',
    4 : 'Zagueiro',
    5 : 'Volante',
    6 : 'Meia',
    7 : 'Atacante'
  }
  var schemas = {
    '4-4-2': { '1': 1, '2': 4, '3': 4, '4': 2, '5': 2, '6': 3, '7': 3, '8': 5, '9': 5, '10': 7, '11': 7 },
    '4-2-4': { '1': 1, '2': 4, '3': 4, '4': 4, '5': 2, '6': 3, '7': 3, '8': 5, '9': 5, '10': 7, '11': 7 },
    '2-4-4': { '1': 1, '2': 4, '3': 4, '4': 2, '5': 3, '6': 3, '7': 5, '8': 5, '9': 7, '10': 7, '11': 7 },
  };

  var players = {
    1 : {
      1: {
        name: 'Júlio César',
        games: 77,
        goals: 0,
        image: 'julio-cesar'
      },
      2: {
        name: 'Jefferson',
        games: 77,
        goals: 0,
        image: 'jefferson'
      },
      3: {
        name: 'Victor',
        games: 77,
        goals: 0,
        image: ''
      },
      4: {
        name: 'Diego Cavalieri',
        games: 77,
        goals: 0,
        image: ''
      }
    },
    2 : {
      1: {
        name: 'Daniel Alves',
        games: 77,
        goals: 0,
        image: ''
      },
      2: {
        name: 'Maicon',
        games: 77,
        goals: 0,
        image: ''
      },
      3: {
        name: 'Rafinha',
        games: 77,
        goals: 0,
        image: ''
      }
    },
    3 : {
      1: {
        name: 'Marcelo',
        games: 77,
        goals: 0,
        image: ''
      },
      2: {
        name: 'Maxwell',
        games: 77,
        goals: 0,
        image: ''
      },
      3: {
        name: 'Filipe Luis',
        games: 77,
        goals: 0,
        image: ''
      },
    },
    4 : {
      1: {
        name: 'Thiago Silva',
        games: 77,
        goals: 0,
        image: ''
      },
      2: {
        name: 'David Luiz',
        games: 77,
        goals: 0,
        image: ''
      },
      3: {
        name: 'Dante',
        games: 77,
        goals: 0,
        image: ''
      },
      4: {
        name: 'Dedé',
        games: 77,
        goals: 0,
        image: ''
      },
      5: {
        name: 'Miranda',
        games: 77,
        goals: 0,
        image: ''
      },
      6: {
        name: 'Marquinhos',
        games: 77,
        goals: 0,
        image: ''
      },
      7: {
        name: 'Henrique',
        games: 77,
        goals: 0,
        image: ''
      },
      8: {
        name: 'Réver',
        games: 77,
        goals: 0,
        image: ''
      }
    },
    5 : {
      1: {
        name: 'Luis Gustavo',
        games: 77,
        goals: 0,
        image: ''
      },
      2: {
        name: 'Paulinho',
        games: 77,
        goals: 0,
        image: ''
      },
      3: {
        name: 'Hernanes',
        games: 77,
        goals: 0,
        image: ''
      },
      4: {
        name: 'Ramires',
        games: 77,
        goals: 0,
        image: ''
      },
      5: {
        name: 'Fernandinho',
        games: 77,
        goals: 0,
        image: ''
      },
      6: {
        name: 'Fernandinho',
        games: 77,
        goals: 0,
        image: ''
      }
    },
    6 : {
      1: {
        name: 'Oscar',
        games: 77,
        goals: 0,
        image: ''
      },
      2: {
        name: 'Willian',
        games: 77,
        goals: 0,
        image: ''
      },
      3: {
        name: 'Bernard',
        games: 77,
        goals: 0,
        image: ''
      },
      4: {
        name: 'Philippe Coutinho',
        games: 77,
        goals: 0,
        image: ''
      },
      5: {
        name: 'Bernard',
        games: 77,
        goals: 0,
        image: ''
      }
    },
    7 : {
      1: {
        name: 'Neymar',
        games: 77,
        goals: 0,
        image: ''
      },
      2: {
        name: 'Hulk',
        games: 77,
        goals: 0,
        image: ''
      },
      3: {
        name: 'Fred',
        games: 77,
        goals: 0,
        image: ''
      },
      4: {
        name: 'Jô',
        games: 77,
        goals: 0,
        image: ''
      },
      5: {
        name: 'Lucas',
        games: 77,
        goals: 0,
        image: ''
      },
      6: {
        name: 'Robinho',
        games: 77,
        goals: 0,
        image: ''
      }
    }
  }

  function init() {
    console.log('escalacao-selecao')
    changeSchema();
    start();
    player();
    chooseInField();
  }

  function normalize(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž ';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz-";
    for (var y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) != -1) {
        strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
      } else
        strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
  }

  function chooseInField () {
    $('#field .player').on('click', function () {
      var point = $(this).data('point');
      // console.log(point)
      var playerType = schemas[schemaSelected][point];
      // console.log( playerType )
      var disponiblePlayers = players[playerType];
      console.log( disponiblePlayers )
      var sizeList = _.size(disponiblePlayers) ;
      console.log( sizeList )
      var htmlList = '';
      for (var i = 0; i <= sizeList; i++) {
        if (disponiblePlayers.hasOwnProperty(i)) {
          console.log(disponiblePlayers[i])
          var image = normalize(disponiblePlayers[i].name).toLowerCase()
          htmlList += ''+
           '<li class="item-1-' + sizeList + '">'+
               '<div class="img-player">'+
                 '<div class="circle-container">'+
                   '<div class="circle"></div>'+
                 '</div>'+
                 '<img src="/assets/images/escalacao-selecao/players/jogadores_big/' + image + '.png">'+
                 '<div class="name-player">' + disponiblePlayers[i].name + '</div>'+
                 '<div class="tooltip-info">'+
                   '<div class="tooltip-info-name">' + disponiblePlayers[i].name + '</div>'+
                   '<div class="tooltip-info-games"><b>' + disponiblePlayers[i].games + '</b> <span>jogos pela seleção</span></div>'+
                   '<div class="tooltip-info-goals"><b>' + disponiblePlayers[i].goals + '</b> <span>gols pela seleção</span></div>'+
                 '</div>'+
               '</div>'+
             '</li>';
        }
      };
      $('#player-position').text(playerPositions[playerType]);
      $('#list-players ul').html(htmlList);
      $('#players').velocity({ opacity: 1 }, { duration: 400, display: 'block'});
    })
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
