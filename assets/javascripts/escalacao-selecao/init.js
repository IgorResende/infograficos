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


  var players = {
    1 : {
      1: {
        name: 'Julio Cesar',
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
        name: 'Henrique',
        games: 4,
        goals: 0,
        image: 'henrique',
        link: 'http://www.espn.com.br/noticia/408621_henrique'
      },
    },
    5 : {
      1: {
        name: 'Luiz Gustavo',
        games: 17,
        goals: 1,
        image: 'luiz-gustavo',
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
        name: 'Bernard',
        games: 10,
        goals: 1,
        image: 'bernard',
        link: 'http://www.espn.com.br/noticia/408673_bernard'
      },
    }
  }

  function init() {
    changeSchema();
    start();
    chooseInField();
    confirmSelection();
    backButton();
    keyboardNav();
    shareFb();
  }

  function encode (decode, string) {
    var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
    if(decode){
      return Base64.decode(string);
    } else{
      return Base64.encode(string);
    }
  }

  function shareFb () {
    $('.share-fb1').on('click',function(event) {
      event.preventDefault();
      //encode(false, JSON.stringify(userChoice))
      FB.ui({
        method: 'feed',
        // link: 'http://espnbr.github.io/infograficos/escalacao-selecao/',
        link: window.location.href,
        picture: 'http://espnbr.github.io/infograficos/assets/images/escalacao-selecao/share/schema.png',
        name: 'ESPN: Escale sua seleção!',
        caption: 'ESPN: Escale sua seleção!',
        description: 'Prendemos o Felipão e agora você é o técnico.',
        message: 'Veja a minha escalação para a seleção brasileira e monte a sua: http://espn.uol.com.br/infografico/escalacao-selecao'
      });
    });
    $('.share-fb2').on('click',function(event) {
      event.preventDefault();
      //encode(false, JSON.stringify(userChoice))
      FB.ui({
        method: 'feed',
        // link: 'http://espnbr.github.io/infograficos/escalacao-selecao/',
        link: window.location.href,
        picture: 'http://espnbr.github.io/infograficos/assets/images/escalacao-selecao/share/page.png',
        name: 'ESPN: Escale sua seleção!',
        caption: ESPN: Escale sua seleção!',
        description: 'Prendemos o Felipão e agora você é o técnico.',
        message: 'O Felipão já anunciou seus convocados, monte já sua escalação: http://espn.uol.com.br/infografico/escalacao-selecao'
      });
    });
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
        $pointActive.html('<img src="../assets/images/escalacao-selecao/players/jogadores_small/' + image + '.png"><span class="avatar-name">' + players[playerTypeSelected][playerSelected].name + '</span>')
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
      });
  }

  function start () {
    var $start = $('#start');
    var $title = $('#title', $start);
    var $desc = $('#desc', $start);
    var $field = $('#field', $start);
    var $players = $('.player', $start);
    var $schema = $('#schema-select-area', $start);
    var $coach = $('#coach', $start);
    var $share = $('#share', $start);
    var $shareBt = $('#share-team-area', $start);

    $title.velocity({ opacity: 1 }, { duration: 500 });
    $desc.velocity({ opacity: 1 }, { duration: 500, delay: 200  });
    $field.velocity({ opacity: 1, marginTop: 0 }, { duration: 500, delay: 200  });
    $players.delay(500).each(function (i, p) {
      $players.eq(i).velocity({ opacity: 1 }, { duration: 300, delay: 100 * i });
    });
    $schema.velocity({ opacity: 1 }, { duration: 500, delay: 2000 });
    $coach.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 2000 });
    $share.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 2000 });
    $shareBt.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 2000 });
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
      $('.player').removeClass('point-selected').empty();
      $.each(userChoice.players, function (i, p) {
        userChoice.players[i] = null;
      });
      $field.attr('class', userChoice.schema);
    });
  }

  return {
    init:init
  };

}());

$(document).ready(function() {
    $("body").queryLoader2({
      backgroundColor: '#00a750',
      barColor: '#fff',
      completeAnimation: 'grow',
      onComplete: function (argument) {
        infografico.init();
      }
    });
});
