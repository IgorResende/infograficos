"use strict";var infografico=function(){function init(){$("html, body").animate({scrollTop:88}),jQuery.fn.reverse=[].reverse,bindMenuAnimation(),bindHome(),bindPrevNext(),start(!0),$("#share").velocity({opacity:1},{duration:500,delay:1500}),ratingVote(),keyboardNav(),ad()}function keyboardNav(){$(document).keydown(function(e){return 37==e.keyCode&&$(".all-back","#"+openSection).trigger("click"),38==e.keyCode||27==e.keyCode?($(".all-home","#"+openSection).trigger("click"),!1):void(39==e.keyCode&&$(".all-next","#"+openSection).trigger("click"))})}function ratingVote(){$("#rating li a").on("click",function(e){e.preventDefault(),$(".vote-active").removeClass("vote-active"),$(this).addClass("vote-active")})}function bindMenuAnimation(){var $share=$("#share");$(".nav-section, .arena-hover").on("click",function(evt){evt.preventDefault(),evt.stopPropagation();var section=$(this).data("section");eval(section+"(true)"),$share.velocity({opacity:0},{duration:100,delay:0}),$share.delay(200).attr("class",section),$share.velocity({opacity:1},{duration:500,delay:1500}),start(!1)})}function bindHome(){$(".all-home").on("click",function(evt){evt.preventDefault(),evt.stopPropagation(),$("#share").velocity({opacity:0},{duration:200,delay:0}),eval(openSection+"(false)"),start(!0)})}function bindPrevNext(){$(".all-back, .all-next").on("click",function(evt){evt.preventDefault(),evt.stopPropagation();var ind=_.indexOf(sectionSequence,openSection);$(this).hasClass("all-back")?ind-=1:ind+=1,$("#share").velocity({opacity:0},{duration:200,delay:0}),eval(openSection+"(false)"),eval(sectionSequence[ind]+"(true)")})}function ad(){{var e=$("#ad"),t=$("#helicopter"),n=$("#corda"),r=$("#descendo_corda");$("#ad-bg2",e),$("#ad-logo",e),$("#aiden",e),$("#ad-watch",e),$("#ad-back",e)}t.velocity({top:200,left:-1600,rotateX:"3deg"},{duration:3e3,delay:300}),t.velocity({scaleX:-1,scale:.12,top:-100,rotateZ:"-10deg"},{duration:1,delay:1}),t.velocity({top:153,left:-210,rotateX:"-20deg",rotateZ:"3deg"},{duration:4e3,delay:500}),t.velocity({scale:.121,rotateZ:"2deg"},{duration:400,loop:10}),n.velocity({height:340},{duration:800,delay:8e3}),n.velocity({rotateZ:"-2deg"},{duration:500,loop:10}),r.velocity({top:288},{duration:500,delay:8500}),backAd()}function backAd(){$("#ad-back").on("click",function(){$("#ad").velocity({opacity:0,top:700},{duration:400})})}function start(e){var t=$("#start"),n=$(".title",t),r=$("#pontos",t),i=$("#menu ul li",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:500}),r.velocity({opacity:1},{duration:1e3,delay:700}),i.delay(800).each(function(e){i.eq(e).velocity({opacity:1,marginTop:0},{duration:600,delay:100*e})}),openSection="start"):(i.reverse().each(function(e){i.eq(e).velocity({opacity:1,marginTop:200},{duration:600,delay:100*e})}),n.delay(400).velocity("reverse"),r.delay(500).velocity("reverse"),t.delay(600).velocity("reverse"))}function numbers(e){var t=$("#numbers"),n=$(".title",t),r=$("#numbers-image",t),i=$("#numbers-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:600}),i.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:600}),openSection="numbers"):(r.velocity({opacity:0,marginLeft:1e3},{duration:500}),i.velocity({opacity:0,marginLeft:-1e3},{duration:500}),n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function bleachers(e){var t=$("#bleachers"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="bleachers"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function coverage(e){var t=$("#coverage"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="coverage"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function cabins(e){var t=$("#cabins"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="cabins"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function parking(e){var t=$("#parking"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="parking"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function comparative(e){var t=$("#comparative"),n=$(".title",t),r=$("#stadiuns-text",t),i=$("#stadiuns-list li",t),o=$("#comparative-table",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1e3}),i.reverse().delay(1e3).each(function(e){i.eq(e).velocity({opacity:1,marginLeft:0},{duration:600,delay:100*e})}),r.velocity({opacity:1},{duration:500,delay:1800}),o.velocity({opacity:1,marginTop:0},{duration:500,delay:1400}),openSection="comparative"):(o.velocity({opacity:0,marginTop:500},{duration:500,delay:0}),r.velocity({opacity:0},{duration:500,delay:300}),i.delay(1e3).each(function(e){i.eq(e).velocity({opacity:1,marginLeft:-2e3},{duration:600,delay:100*e})}),n.velocity({opacity:0},{duration:1e3,delay:0}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function about(e){var t=$("#about"),n=$(".title",t),r=$("#workers-silhouette",t),i=$("#about-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),i.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),openSection="about"):(i.velocity({opacity:1,marginLeft:1e3},{duration:500,delay:0}),r.velocity({opacity:1,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:400}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}function curiosities(e){var t=$("#curiosities"),n=$(".title",t),r=$("#curiosities-image",t),i=$("#curiosities-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),i.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),openSection="curiosities"):(i.velocity({opacity:1,marginLeft:1e3},{duration:500,delay:0}),r.velocity({opacity:1,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:400}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}function screen(e){var t=$("#screen"),n=$(".title",t),r=$("#screen-image",t),i=$("#screen-title",t),o=$("#screen-schema",t),a=$("#screen-infos",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),i.velocity({opacity:1,marginTop:0},{duration:1e3,delay:1e3}),o.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),a.velocity({opacity:1,marginTop:0},{duration:1e3,delay:1e3}),openSection="screen"):(a.velocity({opacity:1,marginTop:500},{duration:500,delay:0}),o.velocity({opacity:1,marginLeft:1e3},{duration:500,delay:0}),i.velocity({opacity:1,marginTop:-500},{duration:500,delay:0}),r.velocity({opacity:1,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:400}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}function field(e){var t=$("#field"),n=$(".title",t),r=$("#field-image",t),i=$("#field-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1},{duration:500,delay:1500}),openSection="field"):(i.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,marginLeft:-1e3},{duration:500,delay:500}),n.velocity({opacity:0},{duration:500,delay:300}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function lockers(e){var t=$("#lockers"),n=$(".title",t),r=$("#locker-details",t),i=$("#locker-image",t),o=$("#locker-image-desc",t),a=$("#locker-image-thumbs",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1,marginTop:0},{duration:500,delay:1e3}),o.velocity({opacity:1},{duration:400,delay:1600}),a.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),openSection="lockers"):(a.velocity({opacity:0,marginLeft:500},{duration:500,delay:0}),o.velocity({opacity:0},{duration:300,delay:0}),i.velocity({opacity:0,marginTop:1e3},{duration:500,delay:300}),r.velocity({opacity:0,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:300}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function east_building(e){var t=$("#east_building"),n=$(".title",t),r=$("#east_building-cut",t),i=$("#east_building-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1},{duration:500,delay:1500}),openSection="east_building"):(i.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,marginLeft:-1e3},{duration:500,delay:500}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function west_building(e){var t=$("#west_building"),n=$(".title",t),r=$("#west_building-cut",t),i=$("#west_building-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1},{duration:500,delay:1500}),openSection="west_building"):(i.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,marginLeft:1e3},{duration:500,delay:500}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function controversies(e){var t=$("#controversies"),n=$(".title",t),r=$("#controversies-info",t),i=$("#controversies-money ul li",t),o=$("#controversies-money h3",t),a=$("#controversies-info2 h3",t),s=$("#controversies-info2 ul li",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1},{duration:1e3,delay:1e3}),o.velocity({opacity:1},{duration:1e3,delay:1e3}),i.each(function(e,t){var n=200*e,r=$(t),i=r.find("div"),o=i.data("width"),a=r.find("b"),s=r.find(".inside-text"),l=r.find(".outside-text");i.velocity({opacity:1,width:o+"%"},{duration:500,delay:1e3+n}),a.velocity({opacity:1},{duration:500,delay:1500+n}),s.velocity({opacity:1},{duration:500,delay:1700+n}),l.velocity({opacity:1},{duration:500,delay:1900+n})}),a.velocity({opacity:1},{duration:1e3,delay:1500}),s.each(function(e){var t=200*e;s.eq(e).velocity({opacity:1},{duration:500,delay:1500+t})}),openSection="controversies"):(s.reverse().each(function(e){var t=200*e;s.eq(e).velocity({opacity:0},{duration:500,delay:300+t})}),a.velocity({opacity:0},{duration:1e3,delay:600}),i.each(function(e,t){var n=$(t),r=n.find("div"),i=(r.data("width"),n.find("b")),o=n.find(".inside-text"),a=n.find(".outside-text");i.velocity({opacity:0},{duration:500,delay:0}),o.velocity({opacity:0},{duration:500,delay:0}),a.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,width:0},{duration:500,delay:500})}),o.velocity({opacity:0},{duration:1e3,delay:500}),r.velocity({opacity:0},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function vote(e){var t=$("#vote"),n=$(".title",t),r=$("#rating li",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.eq(2).velocity({opacity:1,marginTop:0},{duration:200,delay:1e3}),r.eq(1).velocity({opacity:1,marginTop:0},{duration:300,delay:1e3}),r.eq(3).velocity({opacity:1,marginTop:0},{duration:300,delay:1e3}),r.eq(0).velocity({opacity:1,marginTop:0},{duration:400,delay:1e3}),r.eq(4).velocity({opacity:1,marginTop:0},{duration:400,delay:1e3}),openSection="vote"):(r.eq(2).velocity({opacity:0,marginTop:500},{duration:200,delay:0}),r.eq(1).velocity({opacity:0,marginTop:500},{duration:300,delay:0}),r.eq(3).velocity({opacity:0,marginTop:500},{duration:300,delay:0}),r.eq(0).velocity({opacity:0,marginTop:500},{duration:400,delay:0}),r.eq(4).velocity({opacity:0,marginTop:500},{duration:400,delay:0}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}var sectionSequence=["start","west_building","east_building","field","bleachers","coverage","cabins","screen","lockers","parking","numbers","about","controversies","curiosities","comparative","vote"],openSection="";return{init:init}}();$(document).ready(function(){infografico.init()});