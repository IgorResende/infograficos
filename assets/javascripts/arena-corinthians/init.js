"use strict";var infografico=function(){function init(){$("html, body").animate({scrollTop:88}),jQuery.fn.reverse=[].reverse,bindMenuAnimation(),bindHome(),bindPrevNext(),start(!0),$("#share").velocity({opacity:1},{duration:500,delay:1500}),ratingVote(),keyboardNav(),startAd(),shareFb(),shareTt()}function shareTt(){$("#share-tt a").on("click",function(){$(this).attr("href","https://twitter.com/intent/tweet?hashtags=espn&text="+encodeURIComponent(shareTexts[openSection])+"&url="+encodeURIComponent(window.location.href.split("?")[0])),gaEvents(1,{rede:"Twitter",url:window.location.href,secao:"Social buttons"})})}function shareFb(){$("#share-fb a").on("click",function(e){e.preventDefault(),console.log(shareTexts[openSection]),FB.ui({method:"feed",link:window.location.href,name:"Infogr\xe1fico ESPN: Arena Corinthians",caption:"Infogr\xe1fico ESPN: Arena Corinthians",description:shareTexts[openSection]})})}function keyboardNav(){$(document).keydown(function(e){if(37==e.keyCode)return $(".all-back","#"+openSection).trigger("click"),!1;if(38==e.keyCode||27==e.keyCode)return $(".all-home","#"+openSection).trigger("click"),!1;if(39==e.keyCode)return $(".all-next","#"+openSection).trigger("click"),!1;var t=$("#keyboard-alert");t.velocity({opacity:1},{duration:500,display:"block"}),t.velocity({opacity:0},{duration:500,display:"none",delay:1e3})})}function ratingVote(){$("#rating li a").on("click",function(e){e.preventDefault(),$(".vote-active").removeClass("vote-active"),$(this).addClass("vote-active")})}function bindMenuAnimation(){var $share=$("#share");$(".nav-section, .arena-hover").on("click",function(evt){evt.preventDefault(),evt.stopPropagation();var section=$(this).data("section");$("#ad").fadeOut("fast"),eval(section+"(true)"),$share.velocity({opacity:0},{duration:100,delay:0}),$share.delay(200).attr("class",section),$share.velocity({opacity:1},{duration:500,delay:1500}),start(!1)})}function bindHome(){$(".all-home").on("click",function(evt){evt.preventDefault(),evt.stopPropagation(),$("#share").velocity({opacity:0},{duration:200,delay:0}),eval(openSection+"(false)"),start(!0)})}function bindPrevNext(){$(".all-back, .all-next").on("click",function(evt){evt.preventDefault(),evt.stopPropagation();var ind=_.indexOf(sectionSequence,openSection);$(this).hasClass("all-back")?ind-=1:ind+=1,$("#share").velocity({opacity:0},{duration:200,delay:0}),eval(openSection+"(false)"),eval(sectionSequence[ind]+"(true)")})}function startAd(){console.time("ad");var e=($("#ad"),$("#helicopter")),t=$("#corda"),n=$("#descendo_corda"),r=$("#personagem-small"),i=$("#aiden-home"),o=$("#aiden-home-hand"),a=$("#ad-telao"),s=$("#ad-telao-hack"),l=$("#ad-telao-hacked"),c=$("#ad-call"),u=$("#ad-call-text1"),f=$("#ad-call-text2"),d=$("#start-call");e.velocity({top:200,left:-1200,rotateX:"3deg"},{duration:3e3}),e.velocity({scaleX:-1,scale:.12,top:100,left:-700,rotateZ:"-10deg"},{duration:1,delay:1}),e.velocity({top:153,left:-210,rotateX:"-20deg",rotateZ:"3deg"},{duration:3e3,delay:0}),e.velocity({scale:.121,rotateZ:"2deg"},{duration:400,loop:2}),t.velocity({height:340},{duration:800,delay:6e3}),t.velocity({rotateZ:"-2deg"},{duration:300,loop:2}),n.velocity({top:288},{duration:500,delay:7200}),n.velocity({opacity:0},{duration:100,display:"none"}),r.velocity({opacity:1},{duration:100,delay:7700,display:"block"}),t.velocity({height:0},{duration:800}),e.velocity({top:-200,left:810},{duration:5e3,delay:500}),d.velocity({opacity:0},{duration:500,delay:6e3}),i.velocity({left:-160},{duration:1e3,delay:7e3}),o.velocity({rotateZ:67},{duration:0,delay:7e3}),o.velocity({left:-30},{duration:500,delay:0}),o.velocity({rotateZ:26},{duration:500,delay:10}),a.velocity({opacity:1},{duration:50,delay:8300,display:"block"}),a.velocity({opacity:1},{duration:50,delay:1e3,display:"block",complete:function(){a.addClass("hacking"),s.typed({strings:["$ username...connecting...access granted"],typeSpeed:0})}}),l.velocity({opacity:1},{duration:500,delay:12e3,display:"block"}),o.velocity({rotateZ:37},{duration:500,delay:4500}),o.velocity({left:-520},{duration:1e3}),i.velocity({left:-560},{duration:1e3,delay:5500,complete:function(){d.velocity({opacity:1},{duration:500}),u.delay(800).typed({strings:["Tudo est\xe1"],typeSpeed:0,callback:function(){$("#typed-cursor",c).remove(),f.typed({strings:["conectado"],typeSpeed:0})}})}}),c.velocity({opacity:1},{duration:500,delay:14500,display:"block",complete:function(){console.timeEnd("ad")}}),a.velocity({opacity:0},{duration:500,delay:6e3,display:"none"}),r.velocity({opacity:0},{duration:500,delay:7e3,display:"none"}),$("#ad-call-bt").on("click",function(){$("#ad-call").addClass("openned"),showAd()})}function showAd(){var e=$("#ad"),t=$("#ad-bg1",e),n=$("#ad-bg2",e),r=$("#ad-logo",e),i=$("#ad-all-connected",e),o=$("#aiden",e),a=$("#ad-watch",e),s=$("#ad-back",e),l=$("#ad-gamebox"),c=$("#ad-plataformas"),u=$("#ad-site-oficial");t.height(700),t.velocity({opacity:1,top:0},{duration:600,delay:300}),n.height(700),n.velocity({opacity:1,top:0},{duration:600,delay:300}),r.velocity({opacity:1},{duration:300,delay:1200,display:"block",complete:function(){i.show(),$("#aac1").typed({strings:["Tudo est\xe1"],typeSpeed:0,callback:function(){$("#typed-cursor").remove(),$("#aac2").typed({strings:["conectado"],loop:!1,typeSpeed:0,callback:function(){var e=$("#ad-launch");$("#adt1").typed({strings:["Lan\xe7amento"],typeSpeed:0,callback:function(){$("#typed-cursor",e).remove(),$("#adt2").typed({strings:["mundial"],typeSpeed:0,callback:function(){$("#typed-cursor",e).remove(),$("#adt3 span").typed({strings:["27.05"],typeSpeed:0,callback:function(){}})}})}})}})}})}}),o.velocity({opacity:1},{duration:600,delay:2e3,display:"block"}),a.velocity({opacity:1},{duration:600,delay:3e3}),l.velocity({opacity:1},{duration:600,delay:3e3,display:"block"}),c.velocity({opacity:1},{duration:600,delay:3e3,display:"block"}),u.velocity({opacity:1},{duration:600,delay:3e3,display:"block"}),s.velocity({opacity:1},{duration:600,delay:3e3}),backAd()}function backAd(){$("#ad-back").on("click",function(){$("#ad").velocity({opacity:0,top:700},{duration:400})})}function start(e){var t=$("#start"),n=$(".title",t),r=$("#pontos",t),i=$("#menu ul li",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:500}),r.velocity({opacity:1},{duration:1e3,delay:700}),i.delay(800).each(function(e){i.eq(e).velocity({opacity:1,marginTop:0},{duration:600,delay:100*e})}),openSection="start"):(i.reverse().each(function(e){i.eq(e).velocity({opacity:1,marginTop:200},{duration:600,delay:100*e})}),n.delay(400).velocity("reverse"),r.delay(500).velocity("reverse"),t.delay(600).velocity("reverse"))}function numbers(e){var t=$("#numbers"),n=$(".title",t),r=$("#numbers-image",t),i=$("#numbers-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:600}),i.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:600}),openSection="numbers"):(r.velocity({opacity:0,marginLeft:1e3},{duration:500}),i.velocity({opacity:0,marginLeft:-1e3},{duration:500}),n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function bleachers(e){var t=$("#bleachers"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="bleachers"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function coverage(e){var t=$("#coverage"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="coverage"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function cabins(e){var t=$("#cabins"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="cabins"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function parking(e){var t=$("#parking"),n=$(".title",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1200}),openSection="parking"):(n.velocity({opacity:0},{duration:500,delay:0}),t.delay(400).velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function comparative(e){var t=$("#comparative"),n=$(".title",t),r=$("#stadiuns-text",t),i=$("#stadiuns-list li",t),o=$("#comparative-table",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1e3}),i.reverse().delay(1e3).each(function(e){i.eq(e).velocity({opacity:1,marginLeft:0},{duration:600,delay:100*e})}),r.velocity({opacity:1},{duration:500,delay:1800}),o.velocity({opacity:1,marginTop:0},{duration:500,delay:1400}),openSection="comparative"):(o.velocity({opacity:0,marginTop:500},{duration:500,delay:0}),r.velocity({opacity:0},{duration:500,delay:300}),i.delay(1e3).each(function(e){i.eq(e).velocity({opacity:1,marginLeft:-2e3},{duration:600,delay:100*e})}),n.velocity({opacity:0},{duration:1e3,delay:0}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none"}))}function about(e){var t=$("#about"),n=$(".title",t),r=$("#workers-silhouette",t),i=$("#about-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),i.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),openSection="about"):(i.velocity({opacity:1,marginLeft:1e3},{duration:500,delay:0}),r.velocity({opacity:1,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:400}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}function curiosities(e){var t=$("#curiosities"),n=$(".title",t),r=$("#curiosities-image",t),i=$("#curiosities-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:1e3,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),i.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),openSection="curiosities"):(i.velocity({opacity:1,marginLeft:1e3},{duration:500,delay:0}),r.velocity({opacity:1,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:400}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}function screen(e){var t=$("#screen"),n=$(".title",t),r=$("#screen-image",t),i=$("#screen-title",t),o=$("#screen-schema",t),a=$("#screen-infos",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),i.velocity({opacity:1,marginTop:0},{duration:1e3,delay:1e3}),o.velocity({opacity:1,marginLeft:0},{duration:1e3,delay:1e3}),a.velocity({opacity:1,marginTop:0},{duration:1e3,delay:1e3}),openSection="screen"):(a.velocity({opacity:1,marginTop:500},{duration:500,delay:0}),o.velocity({opacity:1,marginLeft:1e3},{duration:500,delay:0}),i.velocity({opacity:1,marginTop:-500},{duration:500,delay:0}),r.velocity({opacity:1,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:400}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}function field(e){var t=$("#field"),n=$(".title",t),r=$("#field-image",t),i=$("#field-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1},{duration:500,delay:1500}),openSection="field"):(i.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,marginLeft:-1e3},{duration:500,delay:500}),n.velocity({opacity:0},{duration:500,delay:300}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function lockers(e){var t=$("#lockers"),n=$(".title",t),r=$("#locker-details",t),i=$("#locker-image",t),o=$("#locker-image-desc",t),a=$("#locker-image-thumbs",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1,marginTop:0},{duration:500,delay:1e3}),o.velocity({opacity:1},{duration:400,delay:1600}),a.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),openSection="lockers"):(a.velocity({opacity:0,marginLeft:500},{duration:500,delay:0}),o.velocity({opacity:0},{duration:300,delay:0}),i.velocity({opacity:0,marginTop:1e3},{duration:500,delay:300}),r.velocity({opacity:0,marginLeft:-1e3},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:300}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function east_building(e){var t=$("#east_building"),n=$(".title",t),r=$("#east_building-cut",t),i=$("#east_building-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1},{duration:500,delay:1500}),openSection="east_building"):(i.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,marginLeft:-1e3},{duration:500,delay:500}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function west_building(e){var t=$("#west_building"),n=$(".title",t),r=$("#west_building-cut",t),i=$("#west_building-info",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1,marginLeft:0},{duration:500,delay:1e3}),i.velocity({opacity:1},{duration:500,delay:1500}),openSection="west_building"):(i.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,marginLeft:1e3},{duration:500,delay:500}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function controversies(e){var t=$("#controversies"),n=$(".title",t),r=$("#controversies-info",t),i=$("#controversies-money ul li",t),o=$("#controversies-money h3",t),a=$("#controversies-info2 h3",t),s=$("#controversies-info2 ul li",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.velocity({opacity:1},{duration:1e3,delay:1e3}),o.velocity({opacity:1},{duration:1e3,delay:1e3}),i.each(function(e,t){var n=200*e,r=$(t),i=r.find("div"),o=i.data("width"),a=r.find("b"),s=r.find(".inside-text"),l=r.find(".outside-text");i.velocity({opacity:1,width:o+"%"},{duration:500,delay:1e3+n}),a.velocity({opacity:1},{duration:500,delay:1500+n}),s.velocity({opacity:1},{duration:500,delay:1700+n}),l.velocity({opacity:1},{duration:500,delay:1900+n})}),a.velocity({opacity:1},{duration:1e3,delay:1500}),s.each(function(e){var t=200*e;s.eq(e).velocity({opacity:1},{duration:500,delay:1500+t})}),openSection="controversies"):(s.reverse().each(function(e){var t=200*e;s.eq(e).velocity({opacity:0},{duration:500,delay:300+t})}),a.velocity({opacity:0},{duration:1e3,delay:600}),i.each(function(e,t){var n=$(t),r=n.find("div"),i=(r.data("width"),n.find("b")),o=n.find(".inside-text"),a=n.find(".outside-text");i.velocity({opacity:0},{duration:500,delay:0}),o.velocity({opacity:0},{duration:500,delay:0}),a.velocity({opacity:0},{duration:500,delay:0}),r.velocity({opacity:0,width:0},{duration:500,delay:500})}),o.velocity({opacity:0},{duration:1e3,delay:500}),r.velocity({opacity:0},{duration:500,delay:0}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:1e3}))}function vote(e){var t=$("#vote"),n=$(".title",t),r=$("#rating li",t);e?(t.velocity({opacity:1,top:0},{duration:1e3,display:"block"}),n.velocity({opacity:1},{duration:500,delay:1e3}),r.eq(2).velocity({opacity:1,marginTop:0},{duration:200,delay:1e3}),r.eq(1).velocity({opacity:1,marginTop:0},{duration:300,delay:1e3}),r.eq(3).velocity({opacity:1,marginTop:0},{duration:300,delay:1e3}),r.eq(0).velocity({opacity:1,marginTop:0},{duration:400,delay:1e3}),r.eq(4).velocity({opacity:1,marginTop:0},{duration:400,delay:1e3}),openSection="vote"):(r.eq(2).velocity({opacity:0,marginTop:500},{duration:200,delay:0}),r.eq(1).velocity({opacity:0,marginTop:500},{duration:300,delay:0}),r.eq(3).velocity({opacity:0,marginTop:500},{duration:300,delay:0}),r.eq(0).velocity({opacity:0,marginTop:500},{duration:400,delay:0}),r.eq(4).velocity({opacity:0,marginTop:500},{duration:400,delay:0}),n.velocity({opacity:0},{duration:500,delay:500}),t.velocity({opacity:0,top:700},{duration:1e3,display:"none",delay:500}))}var sectionSequence=["start","west_building","east_building","field","bleachers","coverage","cabins","screen","lockers","numbers","about","controversies","curiosities","comparative","vote"],shareTexts={start:"Veja todos os detalhes e fa\xe7a um tour virtual pelo est\xe1dio corintiano, palco da abertura da Copa do Mundo de 2014!",west_building:"Conhe\xe7a todas os detalhes do pr\xe9dio Oeste da Arena Corinthians.",east_building:"Conhe\xe7a todas os detalhes do pr\xe9dio Leste da Arena Corinthians.",field:"Conhe\xe7a em detalhes o gramado da Arena Corinthias e suas tecnologias de drenagem e resfriamento.",bleachers:"Conhe\xe7a as arquibancadas que ser\xe3o o palco de grandes espet\xe1culos na Arena Corinthians.",coverage:"Conhe\xe7a a tecnologia utilizada na cobertura da Arena Corinthians.",cabins:"Confira os detalhes dos camarotes da Arena Corinthians.",screen:"Confira os detalhes do grande tel\xe3o da Fachada da Arena Corinthians.",lockers:"Conhe\xe7a em detalhes os vesti\xe1rios da Arena Corinthians.",numbers:"Confira os n\xfameros sobre essa grande obra.",about:"Conhe\xe7a detalhes sobre essa grande obra.",controversies:"Relembre as pol\xeamicas em torno da obra da Arena Corinthians.",curiosities:"Confira algumas curiosidades sobre o est\xe1dio e sua obra.",comparative:"Compare a Arena Corinthians com outros grandes palcos do futebol nacional.",vote:"D\xea a sua nota para a Arena Corinthians."},openSection="";return{init:init}}();$(document).ready(function(){$("body").queryLoader2({backgroundColor:"#623cc7",barColor:"#fff",completeAnimation:"grow",onComplete:function(){infografico.init()}})});