"use strict";var infografico=function(){function e(){console.log("escalacao-selecao"),r(),i(),n(),t()}function t(){$("#field .player").on("click",function(){$("#players").velocity({opacity:1},{duration:400,display:"block"})})}function n(){$(".img-player").on("click",function(){var e=$(this);e.parent("li").hasClass("selected")?e.parent("li").removeClass("selected"):($(".selected").removeClass("selected"),e.parent("li").addClass("selected"))})}function i(){var e=$("#start"),t=$("#title",e),n=$("#desc",e),i=$("#field",e),r=$(".player",e),o=$("#schema-select-area",e),a=$("#coach",e);t.velocity({opacity:1},{duration:500}),n.velocity({opacity:1},{duration:500,delay:200}),i.velocity({opacity:1,marginTop:0},{duration:500,delay:200}),r.delay(500).each(function(e){r.eq(e).velocity({opacity:1},{duration:300,delay:100*e})}),o.velocity({opacity:1},{duration:500,delay:2e3}),a.velocity({opacity:1,marginLeft:0},{duration:500,delay:2e3})}function r(){var e=$("#schema-select-options"),t=$("#field"),n=e.size(),i=0;$(".schema-select-button").on("click",function(){var r=$(this);r.hasClass("prev")&&i>0&&(e.velocity({marginLeft:"+=80"}),i--),r.hasClass("next")&&n>=i&&(e.velocity({marginLeft:"-=80"}),i++);var o=e.find("li").eq(i).find("a").attr("href").replace("#","");t.attr("class",o)})}return{init:e}}();$(document).ready(function(){infografico.init()});