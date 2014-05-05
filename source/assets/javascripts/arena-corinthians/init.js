'use strict'
var infografico = (function() {
  'use strict';

  var openSection = '';

  function init() {
    jQuery.fn.reverse = [].reverse;
    bindMenuAnimation();
    bindBack();
    start(true);
    $('#share').velocity({ opacity: 1 }, { duration: 500, delay: 1500 });
    ratingVote();
  }

  function ratingVote () {
    $('#rating li a').on('click', function (evt) {
      evt.preventDefault();
      $('.vote-active').removeClass('vote-active');
      $(this).addClass('vote-active');
      //ajax
    })
  }

  function bindMenuAnimation () {
    var $share = $('#share');
    $('.nav-section, .arena-hover').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var section = $(this).data('section');
      eval(section + '(true)')
      $share.velocity({ opacity: 0 }, { duration: 100, delay: 0 });
      $share.delay(200).attr('class', section)
      $share.velocity({ opacity: 1 }, { duration: 500, delay: 1500 });
      start(false);
    });
  }

  function bindBack () {
    $('.all-back').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $('#share').velocity({ opacity: 0 }, { duration: 200, delay: 0 });
      eval(openSection + '(false)');
      start(true);
    });
  }

  function start (enter) {
    var $start = $('#start');
    var $title = $('.title', $start);
    var $pontos = $('#pontos', $start);
    var $menuItens = $('#menu ul li', $start);

    if(enter){
      $start.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 1000, delay: 500 });
      $pontos.velocity({ opacity: 1 }, { duration: 1000, delay: 700 });
      $menuItens.delay(800).each(function (i, item) {
        $menuItens.eq(i).velocity({ opacity: 1, marginTop: 0 }, { duration: 600, delay: 100 * i });
      });
      openSection = 'start';
    } else {
      $menuItens.reverse().each(function (i, item) {
        $menuItens.eq(i).velocity({ opacity: 1, marginTop: 200 }, { duration: 600, delay: 100 * i });
      });
      $title.delay(400).velocity('reverse');
      $pontos.delay(500).velocity('reverse');
      $start.delay(600).velocity('reverse');
    }
  }

  function numbers (enter) {
    var $numbers = $('#numbers');
    var $title = $('.title', $numbers);
    var $numbersImage = $('#numbers-image', $numbers);
    var $numbersInfo = $('#numbers-info', $numbers);
    if(enter){
      $numbers.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 1000, delay: 1200 });
      $numbersImage.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 600 });
      $numbersInfo.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 600 });
      openSection = 'numbers';
    } else {
      $numbersImage.velocity({ opacity: 0, marginLeft: 1000 }, { duration: 500 });
      $numbersInfo.velocity({ opacity: 0, marginLeft: -1000 }, { duration: 500 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 0 });
      $numbers.delay(400).velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none" });
    }
  }

  function comparative (enter) {
    var $comparative = $('#comparative');
    var $title = $('.title', $comparative);
    var $stadiunsText = $('#stadiuns-text', $comparative);
    var $stadiunsListItens = $('#stadiuns-list li', $comparative);
    var $comparativeTable = $('#comparative-table', $comparative);
    if(enter){
      $comparative.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 1000, delay: 1000 });
      $stadiunsListItens.reverse().delay(1000).each(function (i, e) {
        $stadiunsListItens.eq(i).velocity({ opacity: 1, marginLeft: 0 }, { duration: 600, delay: 100 * i });
      });
      $stadiunsText.velocity({ opacity: 1 }, { duration: 500, delay: 1800 });
      $comparativeTable.velocity({ opacity: 1, marginTop: 0 }, { duration: 500, delay: 1400 });
      openSection = 'comparative';
    } else {
      $comparativeTable.velocity({ opacity: 0, marginTop: 500 }, { duration: 500, delay: 0 });
      $stadiunsText.velocity({ opacity: 0 }, { duration: 500, delay: 300 });
      $stadiunsListItens.delay(1000).each(function (i, e) {
        $stadiunsListItens.eq(i).velocity({ opacity: 1, marginLeft: -2000 }, { duration: 600, delay: 100 * i });
      });
      $title.velocity({ opacity: 0 }, { duration: 1000, delay: 0 });
      $comparative.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none" });
    }
  }

  function about (enter) {
    var $about = $('#about');
    var $title = $('.title', $about);
    var $workersSilhouette = $('#workers-silhouette', $about);
    var $aboutInfo = $('#about-info', $about);
    if(enter){
      $about.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 1000, delay: 1000 });
      $workersSilhouette.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 1000 });
      $aboutInfo.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 1000 });
      openSection = 'about';
    } else {
      $aboutInfo.velocity({ opacity: 1, marginLeft: 1000 }, { duration: 500, delay: 0 });
      $workersSilhouette.velocity({ opacity: 1, marginLeft: -1000 }, { duration: 500, delay: 0 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 400 });
      $about.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 500 });
    }
  }

  function curiosities (enter) {
    var $curiosities = $('#curiosities');
    var $title = $('.title', $curiosities);
    var $curiositiesImage = $('#curiosities-image', $curiosities);
    var $curiositiesInfo = $('#curiosities-info', $curiosities);
    if(enter){
      $curiosities.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 1000, delay: 1000 });
      $curiositiesImage.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 1000 });
      $curiositiesInfo.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 1000 });
      openSection = 'curiosities';
    } else {
      $curiositiesInfo.velocity({ opacity: 1, marginLeft: 1000 }, { duration: 500, delay: 0 });
      $curiositiesImage.velocity({ opacity: 1, marginLeft: -1000 }, { duration: 500, delay: 0 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 400 });
      $curiosities.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 500 });
    }
  }

  function screen (enter) {
    var $screen = $('#screen');
    var $title = $('.title', $screen);
    var $screenImage = $('#screen-image', $screen);
    var $screenTitle = $('#screen-title', $screen);
    var $screenSchema = $('#screen-schema', $screen);
    var $screenInfos = $('#screen-infos', $screen);
    if(enter){
      $screen.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $screenImage.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 1000 });
      $screenTitle.velocity({ opacity: 1, marginTop: 0 }, { duration: 1000, delay: 1000 });
      $screenSchema.velocity({ opacity: 1, marginLeft: 0 }, { duration: 1000, delay: 1000 });
      $screenInfos.velocity({ opacity: 1, marginTop: 0 }, { duration: 1000, delay: 1000 });
      openSection = 'screen';
    } else {
      $screenInfos.velocity({ opacity: 1, marginTop: 500 }, { duration: 500, delay: 0 });
      $screenSchema.velocity({ opacity: 1, marginLeft: 1000 }, { duration: 500, delay: 0 });
      $screenTitle.velocity({ opacity: 1, marginTop: -500 }, { duration: 500, delay: 0 });
      $screenImage.velocity({ opacity: 1, marginLeft: -1000 }, { duration: 500, delay: 0 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 400 });
      $screen.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 500 });
    }
  }

  function field (enter) {
    var $field = $('#field');
    var $title = $('.title', $field);
    var $fieldImage = $('#field-image', $field);
    var $fieldInfo = $('#field-info', $field);
    if (enter) {
      $field.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $fieldImage.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 1000 });
      $fieldInfo.velocity({ opacity: 1 }, { duration: 500, delay: 1500 });
      openSection = 'field';
    } else {
      $fieldInfo.velocity({ opacity: 0 }, { duration: 500, delay: 0 });
      $fieldImage.velocity({ opacity: 0, marginLeft: -1000 }, { duration: 500, delay: 500 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 300 });
      $field.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 1000 });
    }
  }

  function lockers (enter) {
    var $lockers = $('#lockers');
    var $title = $('.title', $lockers);
    var $lockerDetails = $('#locker-details', $lockers);
    var $lockerImage = $('#locker-image', $lockers);
    var $lockerImageDesc = $('#locker-image-desc', $lockers);
    var $lockerImageThumbs = $('#locker-image-thumbs', $lockers);
    if (enter) {
      $lockers.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $lockerDetails.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 1000 });
      $lockerImage.velocity({ opacity: 1, marginTop: 0 }, { duration: 500, delay: 1000 });
      $lockerImageDesc.velocity({ opacity: 1 }, { duration: 400, delay: 1600 });
      $lockerImageThumbs.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 1000 });
      openSection = 'lockers';
    } else {
      $lockerImageThumbs.velocity({ opacity: 0, marginLeft: 500 }, { duration: 500, delay: 0 });
      $lockerImageDesc.velocity({ opacity: 0 }, { duration: 300, delay: 0 });
      $lockerImage.velocity({ opacity: 0, marginTop: 1000 }, { duration: 500, delay: 300 });
      $lockerDetails.velocity({ opacity: 0, marginLeft: -1000 }, { duration: 500, delay: 0 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 300 });
      $lockers.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 1000 });
    }
  }

  function east_building (enter) {
    var $east_building = $('#east_building');
    var $title = $('.title', $east_building);
    var $cut = $('#east_building-cut', $east_building);
    var $info = $('#east_building-info', $east_building);
    if (enter) {
      $east_building.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $cut.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 1000 });
      $info.velocity({ opacity: 1 }, { duration: 500, delay: 1500 });
      openSection = 'east_building';
    } else {
      $info.velocity({ opacity: 0 }, { duration: 500, delay: 0 });
      $cut.velocity({ opacity: 0, marginLeft: -1000 }, { duration: 500, delay: 500 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 500 });
      $east_building.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 1000 });
    }
  }

  function west_building (enter) {
    var $west_building = $('#west_building');
    var $title = $('.title', $west_building);
    var $cut = $('#west_building-cut', $west_building);
    var $info = $('#west_building-info', $west_building);
    if (enter) {
      $west_building.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $cut.velocity({ opacity: 1, marginLeft: 0 }, { duration: 500, delay: 1000 });
      $info.velocity({ opacity: 1 }, { duration: 500, delay: 1500 });
      openSection = 'west_building';
    } else {
      $info.velocity({ opacity: 0 }, { duration: 500, delay: 0 });
      $cut.velocity({ opacity: 0, marginLeft: 1000 }, { duration: 500, delay: 500 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 500 });
      $west_building.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 1000 });
    }
  }

  function controversies (enter) {
    var $controversies = $('#controversies');
    var $title = $('.title', $controversies);
    var $info = $('#controversies-info', $controversies);
    var $money = $('#controversies-money ul li', $controversies);
    var $moneyTitle = $('#controversies-money h3', $controversies);
    var $controversiesInfo2Title = $('#controversies-info2 h3', $controversies);
    var $controversiesInfo2Itens = $('#controversies-info2 ul li', $controversies);
    if (enter) {
      $controversies.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $info.velocity({ opacity: 1 }, { duration: 1000, delay: 1000 });
      $moneyTitle.velocity({ opacity: 1 }, { duration: 1000, delay: 1000 });
      $money.each(function (i, e) {
        var delay = 200 * i;
        var $e = $(e);
        var $divPercent = $e.find('div');
        var valPercent = $divPercent.data('width');
        var $num = $e.find('b');
        var $txtIn = $e.find('.inside-text');
        var $txtOut = $e.find('.outside-text');
        $divPercent.velocity({ opacity: 1, width: valPercent+'%' }, { duration: 500, delay: 1000 + delay});
        $num.velocity({ opacity: 1 }, { duration: 500, delay: 1500 + delay});
        $txtIn.velocity({ opacity: 1 }, { duration: 500, delay: 1700 + delay });
        $txtOut.velocity({ opacity: 1 }, { duration: 500, delay: 1900 + delay });
      });
      $controversiesInfo2Title.velocity({ opacity: 1 }, { duration: 1000, delay: 1500 });
      $controversiesInfo2Itens.each(function (i, e) {
        var delay = 200 * i;
        $controversiesInfo2Itens.eq(i).velocity({ opacity: 1 }, { duration: 500, delay: 1500 + delay});
      })
      openSection = 'controversies';
    } else {
      $controversiesInfo2Itens.reverse().each(function (i, e) {
        var delay = 200 * i;
        $controversiesInfo2Itens.eq(i).velocity({ opacity: 0 }, { duration: 500, delay: 300 + delay});
      })
      $controversiesInfo2Title.velocity({ opacity: 0 }, { duration: 1000, delay: 600 });
      $money.each(function (i, e) {
        var $e = $(e);
        var $divPercent = $e.find('div');
        var valPercent = $divPercent.data('width');
        var $num = $e.find('b');
        var $txtIn = $e.find('.inside-text');
        var $txtOut = $e.find('.outside-text');
        $num.velocity({ opacity: 0 }, { duration: 500, delay: 0});
        $txtIn.velocity({ opacity: 0 }, { duration: 500, delay: 0});
        $txtOut.velocity({ opacity: 0 }, { duration: 500, delay: 0 });
        $divPercent.velocity({ opacity: 0, width: 0 }, { duration: 500, delay:500});
      });
      $moneyTitle.velocity({ opacity: 0 }, { duration: 1000, delay: 500 });
      $info.velocity({ opacity: 0 }, { duration: 500, delay: 0 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 500 });
      $controversies.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 1000 });
    }
  }

  function vote (enter) {
    var $vote = $('#vote');
    var $title = $('.title', $vote);
    var $ratingItens = $('#rating li', $vote);
    if (enter) {
      $vote.velocity({ opacity: 1, top: 0 }, { duration: 1000, display: "block" });
      $title.velocity({ opacity: 1 }, { duration: 500, delay: 1000 });
      $ratingItens.eq(2).velocity({ opacity: 1, marginTop: 0 }, { duration: 200, delay: 1000 });
      $ratingItens.eq(1).velocity({ opacity: 1, marginTop: 0 }, { duration: 300, delay: 1000 });
      $ratingItens.eq(3).velocity({ opacity: 1, marginTop: 0 }, { duration: 300, delay: 1000 });
      $ratingItens.eq(0).velocity({ opacity: 1, marginTop: 0 }, { duration: 400, delay: 1000 });
      $ratingItens.eq(4).velocity({ opacity: 1, marginTop: 0 }, { duration: 400, delay: 1000 });
      openSection = 'vote';
    } else {
      $ratingItens.eq(2).velocity({ opacity: 0, marginTop: 500 }, { duration: 200, delay: 0 });
      $ratingItens.eq(1).velocity({ opacity: 0, marginTop: 500 }, { duration: 300, delay: 0 });
      $ratingItens.eq(3).velocity({ opacity: 0, marginTop: 500 }, { duration: 300, delay: 0 });
      $ratingItens.eq(0).velocity({ opacity: 0, marginTop: 500 }, { duration: 400, delay: 0 });
      $ratingItens.eq(4).velocity({ opacity: 0, marginTop: 500 }, { duration: 400, delay: 0 });
      $title.velocity({ opacity: 0 }, { duration: 500, delay: 500 });
      $vote.velocity({ opacity: 0, top: 700 }, { duration: 1000, display: "none", delay: 500 });
    }
  }
  // vote

  return {
    init:init
  };

}());

$(document).ready(function() {
  $("body").queryLoader2({
    backgroundColor: '#623cc7',
    barColor: '#fff',
    completeAnimation: 'grow',
    onComplete: function (argument) {
      infografico.init();
    }
  });
});
