"use strict";var infografico=function(){function e(){t(),p(),d(),c(),s(),l(),a(),r(),o()}function t(){var e=window.location.search.replace("?","").replace("%3D","=");if(""!=e){$("#desc").text("Agora que voc\xea j\xe1 viu a escala\xe7\xe3o do seu amigo(a), monte e compartilhe a sua!"),$("#share-team-area").css("top",236);var t=i(!0,e),n=jQuery.parseJSON(t);_.isObject(n)&&(b=n,g=b.schema.replace("schema-",""),$("#field").attr("class","schema-"+g),_.each(b.players,function(e,t){var n=e.split("-"),i=x[n[0]][n[1]].image;$("#player"+t).addClass("point-selected").html('<img src="'+h+"escalacao-selecao/players/jogadores_small/"+i+'.png"><span class="avatar-name">'+x[n[0]][n[1]].name+"</span>")}),k=$('#schema-select-options li a[href="#schema-'+g+'"]').parent("li").index(),$("#schema-select-options").velocity({marginLeft:-(80*k)}))}}function n(e,t){_gaq&&(1==e&&_gaq.push(["_trackSocial",t.rede,"Compartilhar",t.url],["_trackEvent","InfograficosEscalacao\\"+t.secao,"Compartilhar "+t.rede,t.url]),2==e&&_gaq.push(["_trackEvent","InfograficosEscalacao","Jogador",t.pos+"|"+t.player]),3==e&&_gaq.push(["_trackEvent","InfograficosEscalacao","Tatica","<Escolher Tatica>\\"+g]))}function i(e,t){return e?Base64.decode(t):Base64.encode(t)}function o(){$(".share-tt").on("click",function(){$(this).attr("href","https://twitter.com/intent/tweet?hashtags=espn&text="+encodeURIComponent("Prendemos o Felip\xe3o e agora voc\xea \xe9 o t\xe9cnico.")+"&url="+encodeURIComponent(window.location.href.split("?")[0])),n(1,{rede:"Twitter",url:window.location.href,secao:"Social buttons"})})}function r(){$(".share-fb1").on("click",function(e){e.preventDefault(),n("Facebook",window.location.href,"Share team");_.contains(b.players,null);if(_.contains(b.players,null)){var t=$("#warn-fb");return t.velocity({opacity:1},{duration:400,display:"block"}),void t.velocity({opacity:0},{duration:400,delay:1e3,display:"block"})}var o=i(!1,JSON.stringify(b));FB.ui({method:"feed",link:window.location.href.split("?")[0]+"?"+o,picture:"http://espnbr.github.io/infograficos/assets/images/escalacao-selecao/share/schema.png",name:"ESPN: Escale sua sele\xe7\xe3o!",caption:"ESPN: Escale sua sele\xe7\xe3o!",description:"Prendemos o Felip\xe3o e agora voc\xea \xe9 o t\xe9cnico."})}),$(".share-fb2").on("click",function(e){e.preventDefault(),n("Facebook",window.location.href,"Social buttons"),FB.ui({method:"feed",link:window.location.href.split("?")[0],picture:"http://espnbr.github.io/infograficos/assets/images/escalacao-selecao/share/page.png",name:"ESPN: Escale sua sele\xe7\xe3o!",caption:"ESPN: Escale sua sele\xe7\xe3o!",description:"Prendemos o Felip\xe3o e agora voc\xea \xe9 o t\xe9cnico."})})}function a(){$(document).keyup(function(e){27==e.keyCode&&$("#backField").trigger("click")})}function s(){$("#confirm").on("click",function(){if(null===f){var e=$("#validate-alert");e.velocity({opacity:1},{duration:400,display:"block"}),e.velocity({opacity:0},{duration:400,delay:1e3,display:"block"})}else{n(2,{pos:v[y],player:x[y][f].name}),b.players[w.data("point")]=y+"-"+f,$("#players").velocity({opacity:0},{duration:400,display:"none"}),w.addClass("point-selected");var t=x[y][f].image;w.html('<img src="'+h+"escalacao-selecao/players/jogadores_small/"+t+'.png"><span class="avatar-name">'+x[y][f].name+"</span>"),f=null,y=null}})}function l(){$("#backField").on("click",function(){$("#players").velocity({opacity:0},{duration:400,display:"none"}),f=null,y=null})}function c(){$("#field .player").on("click",function(){var e=$(this).data("point");w=$(this);var t=m[g][e];y=t;for(var n=x[t],i=_.size(n),o="",r=0;i>=r;r++)if(n.hasOwnProperty(r)){var a=n[r].image,s=_.contains(b.players,t+"-"+r);o+='<li class="item-1-'+i+" "+(s?"disabled":"")+'"><div class="img-player '+(s?"disabled":"")+'" data-id="'+r+'"><div class="circle-container"><div class="circle"></div></div><img src="'+h+"escalacao-selecao/players/jogadores_big/"+a+'.png"><div class="name-player">'+n[r].name+'</div><div class="tooltip-info"><div class="tooltip-info-name">'+n[r].name+'</div><div class="tooltip-info-games"><b>'+n[r].games+'</b> <span>jogos pela sele\xe7\xe3o</span></div><div class="tooltip-info-goals"><b>'+n[r].goals+"</b> <span>"+(1==t?"gols sofridos":"gols pela sele\xe7\xe3o")+'</span></div><div class="tooltip-info-more"><a href="'+n[r].link+'" target="_blank">Saiba mais</a></div></div></div></li>'}$("#player-position").text(v[t]),$("#list-players ul").html(o),$("#players").velocity({opacity:1},{duration:400,display:"block"}),f=null,u(e)})}function u(){$(".img-player").not(".disabled").on("click",function(){var e=$(this);f=e.data("id"),e.parent("li").hasClass("selected")?e.parent("li").removeClass("selected"):($(".selected").removeClass("selected"),e.parent("li").addClass("selected"))})}function d(){var e=$("#start"),t=$("#title",e),n=$("#desc",e),i=$("#field",e),o=$(".player",e),r=$("#schema-select-area",e),a=$("#coach",e),s=$("#share",e),l=$("#share-team-area",e);t.velocity({opacity:1},{duration:500}),n.velocity({opacity:1},{duration:500,delay:200}),i.velocity({opacity:1,marginTop:0},{duration:500,delay:200}),o.delay(500).each(function(e){o.eq(e).velocity({opacity:1},{duration:300,delay:100*e})}),r.velocity({opacity:1},{duration:500,delay:2e3}),a.velocity({opacity:1,marginLeft:0},{duration:500,delay:2e3}),s.velocity({opacity:1,marginLeft:0},{duration:500,delay:2e3}),l.velocity({opacity:1,marginLeft:0},{duration:500,delay:2e3,display:"block"})}function p(){var e=$("#schema-select-options"),t=$("#schema-select-options li"),i=$("#field"),o=t.size();$(".schema-select-button").on("click",function(){var r=$(this),a=!1;r.hasClass("prev")&&k>0&&(e.velocity({marginLeft:"+=80"}),a=!0,k--),r.hasClass("next")&&o-1>k&&(e.velocity({marginLeft:"-=80"}),a=!0,k++),b.schema=t.eq(k).find("a").attr("href").replace("#schema-",""),g=b.schema,a&&(n(3),$(".player").removeClass("point-selected").empty(),$.each(b.players,function(e){b.players[e]=null}),i.attr("class","schema-"+b.schema))})}var f=null,y=null,h="http://content.espn.com.br/infograficos/escalacao-selecao/assets/images/",g="4-3-3",v={1:"Goleiro",2:"Zagueiro",4:"Lateral esquerdo",3:"Lateral direito",5:"Volante",6:"Meia",7:"Atacante"},m={"4-3-3":{1:1,2:2,3:2,4:3,5:4,6:7,7:7,8:6,9:5,10:7,11:5},"4-2-3-1":{1:1,2:2,3:2,4:3,5:4,6:5,7:5,8:6,9:6,10:6,11:7},"4-3-1-2":{1:1,2:2,3:2,4:3,5:4,6:5,7:5,8:7,9:5,10:7,11:6},"4-4-2":{1:1,2:2,3:2,4:3,5:4,6:6,7:6,8:7,9:5,10:7,11:5},"3-4-3":{1:1,2:2,3:2,4:6,5:6,6:7,7:7,8:2,9:5,10:7,11:5},"3-5-2":{1:1,2:2,3:2,4:3,5:4,6:7,7:7,8:2,9:6,10:5,11:6}},b={schema:"4-3-3",players:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null,11:null}},x={1:{1:{name:"Julio Cesar",games:78,goals:56,image:"julio-cesar",link:"http://www.espn.com.br/noticia/408369_julio-cesar"},2:{name:"Jefferson",games:9,goals:4,image:"jefferson",link:"http://www.espn.com.br/noticia/408408_jefferson"},3:{name:"Victor",games:6,goals:1,image:"victor",link:"http://www.espn.com.br/noticia/408456_victor"}},3:{1:{name:"Daniel Alves",games:74,goals:5,image:"daniel-alves",link:"http://www.espn.com.br/noticia/408465_daniel-alves"},2:{name:"Maicon",games:66,goals:6,image:"maicon",link:"http://www.espn.com.br/noticia/408473_maicon"}},4:{1:{name:"Marcelo",games:30,goals:4,image:"marcelo",link:"http://www.espn.com.br/noticia/408484_marcelo"},2:{name:"Maxwell",games:7,goals:0,image:"maxwell",link:"http://www.espn.com.br/noticia/408491_maxwell"}},2:{1:{name:"Thiago Silva",games:45,goals:2,image:"thiago-silva",link:"ttp://www.espn.com.br/noticia/408604_thiago-silva"},2:{name:"David Luiz",games:34,goals:4,image:"david-luiz",link:"http://www.espn.com.br/noticia/408508_david-luiz"},3:{name:"Dante",games:11,goals:2,image:"dante",link:"http://www.espn.com.br/noticia/408609_dante"},4:{name:"Henrique",games:4,goals:0,image:"henrique",link:"http://www.espn.com.br/noticia/408621_henrique"}},5:{1:{name:"Luiz Gustavo",games:17,goals:1,image:"luiz-gustavo",link:"http://www.espn.com.br/noticia/408639_luiz-gustavo"},2:{name:"Paulinho",games:25,goals:5,image:"paulinho",link:"http://www.espn.com.br/noticia/408642_paulinho"},3:{name:"Hernanes",games:23,goals:2,image:"hernanes",link:"http://www.espn.com.br/noticia/408646_hernanes"},4:{name:"Ramires",games:41,goals:4,image:"ramires",link:"http://www.espn.com.br/noticia/408648_ramires"},5:{name:"Fernandinho",games:6,goals:1,image:"fernandinho",link:"http://www.espn.com.br/noticia/408653_fernandinho"}},6:{1:{name:"Oscar",games:29,goals:9,image:"oscar",link:"http://www.espn.com.br/noticia/408658_oscar"},2:{name:"Willian",games:5,goals:1,image:"willian",link:"http://www.espn.com.br/noticia/408667_willian"}},7:{1:{name:"Neymar",games:47,goals:30,image:"neymar",link:"http://www.espn.com.br/noticia/407623_neymar"},2:{name:"Hulk",games:33,goals:8,image:"hulk",link:"http://www.espn.com.br/noticia/408677_hulk"},3:{name:"Fred",games:32,goals:16,image:"fred",link:"http://www.espn.com.br/noticia/408681_fred"},4:{name:"J\xf4",games:15,goals:5,image:"jo",link:"http://www.espn.com.br/noticia/408680_jo"},5:{name:"Bernard",games:10,goals:1,image:"bernard",link:"http://www.espn.com.br/noticia/408673_bernard"}}},w=null,k=0;return{init:e}}();$(document).ready(function(){$("body").queryLoader2({backgroundColor:"#00a750",barColor:"#fff",completeAnimation:"grow",onComplete:function(){infografico.init()}})});