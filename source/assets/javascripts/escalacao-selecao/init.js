'use strict'
var infografico = (function() {
  'use strict';

  var playerSelected = null;
  var playerTypeSelected = null;

  var schemaSelected = '4-4-2';

  var playerPositions = {
    1 : 'Goleiro',
    2 : 'Zagueiro',
    3 : 'Lateral direito',
    4 : 'Lateral esquerdo',
    5 : 'Volante',
    6 : 'Meia',
    7 : 'Atacante'
  }
  var schemas = {
    '4-2-3-1': { '1': 1, '2': 2, '3': 2, '4': 3, '5': 4, '6': 5, '7': 5, '8': 6, '9': 6, '10': 6, '11': 7 },
    '4-3-1-2': { '1': 1, '2': 2, '3': 2, '4': 3, '5': 4, '6': 5, '7': 5, '8': 7, '9': 5, '10': 7, '11': 6 },
    '4-4-2'  : { '1': 1, '2': 2, '3': 2, '4': 3, '5': 4, '6': 6, '7': 6, '8': 7, '9': 5, '10': 7, '11': 5 },
    '4-3-3'  : { '1': 1, '2': 2, '3': 2, '4': 3, '5': 4, '6': 7, '7': 7, '8': 6, '9': 5, '10': 7, '11': 5 },
    '3-4-3'  : { '1': 1, '2': 2, '3': 2, '4': 6, '5': 6, '6': 7, '7': 7, '8': 2, '9': 5, '10': 7, '11': 5 },
    '3-5-2'  : { '1': 1, '2': 2, '3': 2, '4': 6, '5': 6, '6': 7, '7': 7, '8': 2, '9': 6, '10': 5, '11': 6 }
  };

  var userChoice = {
    schema: '4-2-3-1',
    players: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null
    }
  };

  // var playersAlternative = {
  //   5 : {
  //     5 1
  //     5 2
  //     5 4
  //     5 5
  //     5 6
  //   },
  //   6 : {
  //     6 1
  //     7 1
  //     7 2
  //     5 3
  //     6 2
  //     6 4
  //     7 6
  //   },
  //   7 : {
  //     7 3
  //     7 4
  //   }
  // }

  var players = {
    1 : {
      1: {
        name: 'Júlio César',
        games: 78,
        goals: 56,
        image: 'julio-cesar',
        link: 'http://www.espn.com.br/noticia/408369_julio-cesar'
      },
      2: {
        name: 'Jefferson',
        games: 9,
        goals: 4,
        image: 'jefferson',
        link: 'http://www.espn.com.br/noticia/408408_jefferson'
      },
      3: {
        name: 'Victor',
        games: 6,
        goals: 1,
        image: 'victor',
        link: 'http://www.espn.com.br/noticia/408456_victor'
      },
      4: {
        name: 'Diego Cavalieri',
        games: 3,
        goals: 4,
        image: 'diego-cavalieri',
        link: 'http://www.espn.com.br/noticia/408418_diego-cavalieri'
      }
    },
    2 : {
      1: {
        name: 'Daniel Alves',
        games: 74,
        goals: 5,
        image: 'daniel-alves',
        link: 'http://www.espn.com.br/noticia/408465_daniel-alves'
      },
      2: {
        name: 'Maicon',
        games: 66,
        goals: 6,
        image: 'maicon',
        link: 'http://www.espn.com.br/noticia/408473_maicon'
      },
      3: {
        name: 'Rafinha',
        games: 2,
        goals: 0,
        image: 'rafinha',
        link: 'http://www.espn.com.br/noticia/408477_rafinha'
      }
    },
    3 : {
      1: {
        name: 'Marcelo',
        games: 30,
        goals: 4,
        image: 'marcelo',
        link: 'http://www.espn.com.br/noticia/408484_marcelo'
      },
      2: {
        name: 'Maxwell',
        games: 7,
        goals: 0,
        image: 'maxwell',
        link: 'http://www.espn.com.br/noticia/408491_maxwell'
      },
      3: {
        name: 'Filipe Luis',
        games: 4,
        goals: 0,
        image: 'filipe-luis',
        link: 'http://www.espn.com.br/noticia/408498_filipe-luis'
      },
    },
    4 : {
      1: {
        name: 'Thiago Silva',
        games: 45,
        goals: 2,
        image: 'thiago-silva',
        link: 'ttp://www.espn.com.br/noticia/408604_thiago-silva'
      },
      2: {
        name: 'David Luiz',
        games: 34,
        goals: 4,
        image: 'david-luiz',
        link: 'http://www.espn.com.br/noticia/408508_david-luiz'
      },
      3: {
        name: 'Dante',
        games: 11,
        goals: 2,
        image: 'dante',
        link: 'http://www.espn.com.br/noticia/408609_dante'
      },
      4: {
        name: 'Dedé',
        games: 9,
        goals: 1,
        image: 'dede',
        link: 'http://www.espn.com.br/noticia/408610_dede'
      },
      5: {
        name: 'Miranda',
        games: 7,
        goals: 0,
        image: 'miranda',
        link: 'http://www.espn.com.br/noticia/408614_miranda'
      },
      6: {
        name: 'Marquinhos',
        games: 1,
        goals: 0,
        image: 'marquinhos',
        link: 'http://www.espn.com.br/noticia/408617_marquinhos'
      },
      7: {
        name: 'Henrique',
        games: 4,
        goals: 0,
        image: 'henrique',
        link: 'http://www.espn.com.br/noticia/408621_henrique'
      },
      8: {
        name: 'Réver',
        games: 9,
        goals: 1,
        image: 'rever',
        link: 'http://www.espn.com.br/noticia/408624_rever'
      }
    },
    5 : {
      1: {
        name: 'Luis Gustavo',
        games: 17,
        goals: 1,
        image: 'luis-gustavo',
        link: 'http://www.espn.com.br/noticia/408639_luiz-gustavo'
      },
      2: {
        name: 'Paulinho',
        games: 25,
        goals: 5,
        image: 'paulinho',
        link: 'http://www.espn.com.br/noticia/408642_paulinho'
      },
      3: {
        name: 'Hernanes',
        games: 23,
        goals: 2,
        image: 'hernanes',
        link: 'http://www.espn.com.br/noticia/408646_hernanes'
      },
      4: {
        name: 'Ramires',
        games: 41,
        goals: 4,
        image: 'ramires',
        link: 'http://www.espn.com.br/noticia/408648_ramires'
      },
      5: {
        name: 'Fernandinho',
        games: 6,
        goals: 1,
        image: 'fernandinho',
        link: 'http://www.espn.com.br/noticia/408653_fernandinho'
      },
      6: {
        name: 'Lucas Leiva',
        games: 25,
        goals: 0,
        image: 'lucas-leiva',
        link: 'http://www.espn.com.br/noticia/408655_lucas-leiva'
      }
    },
    6 : {
      1: {
        name: 'Oscar',
        games: 29,
        goals: 9,
        image: 'oscar',
        link: 'http://www.espn.com.br/noticia/408658_oscar'
      },
      2: {
        name: 'Willian',
        games: 5,
        goals: 1,
        image: 'william',
        link: 'http://www.espn.com.br/noticia/408667_willian'
      },
      3: {
        name: 'Bernard',
        games: 10,
        goals: 1,
        image: 'bernard',
        link: 'http://www.espn.com.br/noticia/408673_bernard'
      },
      4: {
        name: 'Philippe Coutinho',
        games: 1,
        goals: 0,
        image: 'philippe-coutinho',
        link: 'http://www.espn.com.br/noticia/408675_philippe-coutinho'
      },
    },
    7 : {
      1: {
        name: 'Neymar',
        games: 47,
        goals: 30,
        image: 'neymar',
        link: 'http://www.espn.com.br/noticia/407623_neymar'
      },
      2: {
        name: 'Hulk',
        games: 33,
        goals: 8,
        image: 'hulk',
        link: 'http://www.espn.com.br/noticia/408677_hulk'
      },
      3: {
        name: 'Fred',
        games: 32,
        goals: 16,
        image: 'fred',
        link: 'http://www.espn.com.br/noticia/408681_fred'
      },
      4: {
        name: 'Jô',
        games: 15,
        goals: 5,
        image: 'jo',
        link: 'http://www.espn.com.br/noticia/408680_jo'
      },
      5: {
        name: 'Lucas',
        games: 31,
        goals: 4,
        image: 'lucas',
        link: 'http://www.espn.com.br/noticia/408687_lucas'
      },
      6: {
        name: 'Robinho',
        games: 90,
        goals: 29,
        image: 'robinho',
        link: 'http://www.espn.com.br/noticia/408697_robinho'
      }
    }
  }

  function init() {
    console.log('escalacao-selecao')
    changeSchema();
    start();
    chooseInField();
    confirmSelection();
    backButton();
    keyboardNav();
  }

  function keyboardNav (argument) {
    $(document).keyup(function(e) {
      // esc
      if (e.keyCode == 27) {
        $('#backField').trigger('click');
      }
    });
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

  function confirmSelection () {
    $('#confirm').on('click', function () {
      if( playerSelected === null){
        var $alert = $('#validate-alert')
        $alert.velocity({ opacity: 1 }, { duration: 400, display: 'block'});
        $alert.velocity({ opacity: 0 }, { duration: 400, delay: 1000,  display: 'block'});
      } else {
        userChoice.players[ $pointActive.data('point') ] = playerTypeSelected + '-' + playerSelected;
        $('#players').velocity({ opacity: 0 }, { duration: 400, display: 'none'});
        $pointActive.addClass('point-selected');
        var image = normalize(players[playerTypeSelected][playerSelected].name).toLowerCase();
        $pointActive.html('<img src="../assets/images/escalacao-selecao/players/jogadores_small/' + image + '.png">')
        playerSelected = null;
        playerTypeSelected = null;
        console.log(userChoice)
      }
    });
  }

  function backButton () {
    $('#backField').on('click', function () {
      $('#players').velocity({ opacity: 0 }, { duration: 400, display: 'none'});
      playerSelected = null;
      playerTypeSelected = null;
    });
  }

  var $pointActive = null;

  function chooseInField () {
    $('#field .player').on('click', function () {
      var point = $(this).data('point');
      $pointActive = $(this);
      // console.log(point)
      var playerType = schemas[schemaSelected][point];
      playerTypeSelected = playerType;
      // console.log( playerType )
      var disponiblePlayers = players[playerType];
      var sizeList = _.size(disponiblePlayers) ;
      var htmlList = '';
      for (var i = 0; i <= sizeList; i++) {
        if (disponiblePlayers.hasOwnProperty(i)) {
          var image = normalize(disponiblePlayers[i].name).toLowerCase();
          var alreadyChosen = _.contains(userChoice.players, playerType+'-'+i);
          htmlList += ''+
           '<li class="item-1-' + sizeList + ' ' + (alreadyChosen ? 'disabled': '' ) + '">'+
               '<div class="img-player ' + (alreadyChosen ? 'disabled': '' ) + '" data-id="' + i + '">'+
                 '<div class="circle-container">'+
                   '<div class="circle"></div>'+
                 '</div>'+
                 '<img src="../assets/images/escalacao-selecao/players/jogadores_big/' + image + '.png">'+
                 '<div class="name-player">' + disponiblePlayers[i].name + '</div>'+
                 '<div class="tooltip-info">'+
                   '<div class="tooltip-info-name">' + disponiblePlayers[i].name + '</div>'+
                   '<div class="tooltip-info-games"><b>' + disponiblePlayers[i].games + '</b> <span>jogos pela seleção</span></div>'+
                   '<div class="tooltip-info-goals"><b>' + disponiblePlayers[i].goals + '</b> <span>gols pela seleção</span></div>'+
                   '<div class="tooltip-info-more"><a href="' + disponiblePlayers[i].link + '" target="_blank">Saiba mais</a></div>'+
                 '</div>'+
               '</div>'+
             '</li>';
        }
      };
      $('#player-position').text(playerPositions[playerType]);
      $('#list-players ul').html(htmlList);
      $('#players').velocity({ opacity: 1 }, { duration: 400, display: 'block'});
      playerSelected = null;
      choosePlayer(point);
    });
  }

  function choosePlayer (point) {
    $('.img-player').not('.disabled')
      .on('click', function () {
        var $player = $(this);
        playerSelected = $player.data('id');
        if( $player.parent('li').hasClass('selected') ){
          $player.parent('li').removeClass('selected');
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
    var $optionsLi = $('#schema-select-options li');
    var $field = $('#field');
    var quant = $optionsLi.size();
    var actual = 0;
    $('.schema-select-button').on('click', function () {
      var $bt = $(this);
      if( $bt.hasClass('prev') && actual > 0){
        $options.velocity({marginLeft: '+=80'});
        actual--;
      }
      if( $bt.hasClass('next') && actual < quant-1){
        $options.velocity({marginLeft: '-=80'});
        actual++;
      }
      userChoice.schema = $optionsLi.eq(actual).find('a').attr('href').replace('#', '');
      $field.attr('class', userChoice.schema)
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
