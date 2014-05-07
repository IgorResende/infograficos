"use strict";var infografico=function(){function e(){console.log("escalacao-selecao"),l(),s(),o(),i(),r(),t()}function t(){$(document).keyup(function(e){27==e.keyCode&&$("#backField").trigger("click")})}function n(e){for(var e=e.split(""),t=new Array,n=e.length,i="\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xd2\xd3\xd4\xd5\xd5\xd6\xd8\xf2\xf3\xf4\xf5\xf6\xf8\xc8\xc9\xca\xcb\xe8\xe9\xea\xeb\xf0\xc7\xe7\xd0\xcc\xcd\xce\xcf\xec\xed\xee\xef\xd9\xda\xdb\xdc\xf9\xfa\xfb\xfc\xd1\xf1\u0160\u0161\u0178\xff\xfd\u017d\u017e ",r="AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz-",o=0;n>o;o++)t[o]=-1!=i.indexOf(e[o])?r.substr(i.indexOf(e[o]),1):e[o];return t=t.join("")}function i(){$("#confirm").on("click",function(){if(null===c){var e=$("#validate-alert");e.velocity({opacity:1},{duration:400,display:"block"}),e.velocity({opacity:0},{duration:400,delay:1e3,display:"block"})}else{h.players[g.data("point")]=u+"-"+c,$("#players").velocity({opacity:0},{duration:400,display:"none"}),g.addClass("point-selected");var t=n(y[u][c].name).toLowerCase();g.html('<img src="../assets/images/escalacao-selecao/players/jogadores_small/'+t+'.png"><span class="avatar-name">'+y[u][c].name+"</span>"),c=null,u=null,console.log(h)}})}function r(){$("#backField").on("click",function(){$("#players").velocity({opacity:0},{duration:400,display:"none"}),c=null,u=null})}function o(){$("#field .player").on("click",function(){var e=$(this).data("point");g=$(this);var t=f[p][e];u=t;for(var i=y[t],r=_.size(i),o="",s=0;r>=s;s++)if(i.hasOwnProperty(s)){var l=n(i[s].name).toLowerCase(),m=_.contains(h.players,t+"-"+s);o+='<li class="item-1-'+r+" "+(m?"disabled":"")+'"><div class="img-player '+(m?"disabled":"")+'" data-id="'+s+'"><div class="circle-container"><div class="circle"></div></div><img src="../assets/images/escalacao-selecao/players/jogadores_big/'+l+'.png"><div class="name-player">'+i[s].name+'</div><div class="tooltip-info"><div class="tooltip-info-name">'+i[s].name+'</div><div class="tooltip-info-games"><b>'+i[s].games+'</b> <span>jogos pela sele\xe7\xe3o</span></div><div class="tooltip-info-goals"><b>'+i[s].goals+'</b> <span>gols pela sele\xe7\xe3o</span></div><div class="tooltip-info-more"><a href="'+i[s].link+'" target="_blank">Saiba mais</a></div></div></div></li>'}$("#player-position").text(d[t]),$("#list-players ul").html(o),$("#players").velocity({opacity:1},{duration:400,display:"block"}),c=null,a(e)})}function a(){$(".img-player").not(".disabled").on("click",function(){var e=$(this);c=e.data("id"),e.parent("li").hasClass("selected")?e.parent("li").removeClass("selected"):($(".selected").removeClass("selected"),e.parent("li").addClass("selected"))})}function s(){var e=$("#start"),t=$("#title",e),n=$("#desc",e),i=$("#field",e),r=$(".player",e),o=$("#schema-select-area",e),a=$("#coach",e);t.velocity({opacity:1},{duration:500}),n.velocity({opacity:1},{duration:500,delay:200}),i.velocity({opacity:1,marginTop:0},{duration:500,delay:200}),r.delay(500).each(function(e){r.eq(e).velocity({opacity:1},{duration:300,delay:100*e})}),o.velocity({opacity:1},{duration:500,delay:2e3}),a.velocity({opacity:1,marginLeft:0},{duration:500,delay:2e3})}function l(){var e=$("#schema-select-options"),t=$("#schema-select-options li"),n=$("#field"),i=t.size(),r=0;$(".schema-select-button").on("click",function(){var o=$(this);o.hasClass("prev")&&r>0&&(e.velocity({marginLeft:"+=80"}),r--),o.hasClass("next")&&i-1>r&&(e.velocity({marginLeft:"-=80"}),r++),h.schema=t.eq(r).find("a").attr("href").replace("#",""),n.attr("class",h.schema)})}var c=null,u=null,p="4-4-2",d={1:"Goleiro",2:"Zagueiro",3:"Lateral direito",4:"Lateral esquerdo",5:"Volante",6:"Meia",7:"Atacante"},f={"4-2-3-1":{1:1,2:2,3:2,4:3,5:4,6:5,7:5,8:6,9:6,10:6,11:7},"4-3-1-2":{1:1,2:2,3:2,4:3,5:4,6:5,7:5,8:7,9:5,10:7,11:6},"4-4-2":{1:1,2:2,3:2,4:3,5:4,6:6,7:6,8:7,9:5,10:7,11:5},"4-3-3":{1:1,2:2,3:2,4:3,5:4,6:7,7:7,8:6,9:5,10:7,11:5},"3-4-3":{1:1,2:2,3:2,4:6,5:6,6:7,7:7,8:2,9:5,10:7,11:5},"3-5-2":{1:1,2:2,3:2,4:6,5:6,6:7,7:7,8:2,9:6,10:5,11:6}},h={schema:"4-2-3-1",players:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null,11:null}},y={1:{1:{name:"Julio Cesar",games:78,goals:56,image:"julio-cesar",link:"http://www.espn.com.br/noticia/408369_julio-cesar"},2:{name:"Jefferson",games:9,goals:4,image:"jefferson",link:"http://www.espn.com.br/noticia/408408_jefferson"},3:{name:"Victor",games:6,goals:1,image:"victor",link:"http://www.espn.com.br/noticia/408456_victor"}},2:{1:{name:"Daniel Alves",games:74,goals:5,image:"daniel-alves",link:"http://www.espn.com.br/noticia/408465_daniel-alves"},2:{name:"Maicon",games:66,goals:6,image:"maicon",link:"http://www.espn.com.br/noticia/408473_maicon"}},3:{1:{name:"Marcelo",games:30,goals:4,image:"marcelo",link:"http://www.espn.com.br/noticia/408484_marcelo"},2:{name:"Maxwell",games:7,goals:0,image:"maxwell",link:"http://www.espn.com.br/noticia/408491_maxwell"}},4:{1:{name:"Thiago Silva",games:45,goals:2,image:"thiago-silva",link:"ttp://www.espn.com.br/noticia/408604_thiago-silva"},2:{name:"David Luiz",games:34,goals:4,image:"david-luiz",link:"http://www.espn.com.br/noticia/408508_david-luiz"},3:{name:"Dante",games:11,goals:2,image:"dante",link:"http://www.espn.com.br/noticia/408609_dante"},4:{name:"Henrique",games:4,goals:0,image:"henrique",link:"http://www.espn.com.br/noticia/408621_henrique"}},5:{1:{name:"Luiz Gustavo",games:17,goals:1,image:"luiz-gustavo",link:"http://www.espn.com.br/noticia/408639_luiz-gustavo"},2:{name:"Paulinho",games:25,goals:5,image:"paulinho",link:"http://www.espn.com.br/noticia/408642_paulinho"},3:{name:"Hernanes",games:23,goals:2,image:"hernanes",link:"http://www.espn.com.br/noticia/408646_hernanes"},4:{name:"Ramires",games:41,goals:4,image:"ramires",link:"http://www.espn.com.br/noticia/408648_ramires"},5:{name:"Fernandinho",games:6,goals:1,image:"fernandinho",link:"http://www.espn.com.br/noticia/408653_fernandinho"}},6:{1:{name:"Oscar",games:29,goals:9,image:"oscar",link:"http://www.espn.com.br/noticia/408658_oscar"},2:{name:"Willian",games:5,goals:1,image:"william",link:"http://www.espn.com.br/noticia/408667_willian"}},7:{1:{name:"Neymar",games:47,goals:30,image:"neymar",link:"http://www.espn.com.br/noticia/407623_neymar"},2:{name:"Hulk",games:33,goals:8,image:"hulk",link:"http://www.espn.com.br/noticia/408677_hulk"},3:{name:"Fred",games:32,goals:16,image:"fred",link:"http://www.espn.com.br/noticia/408681_fred"},4:{name:"J\xf4",games:15,goals:5,image:"jo",link:"http://www.espn.com.br/noticia/408680_jo"},5:{name:"Bernard",games:10,goals:1,image:"bernard",link:"http://www.espn.com.br/noticia/408673_bernard"}}},g=null;return{init:e}}();$(document).ready(function(){$("body").queryLoader2({backgroundColor:"#00a750",barColor:"#fff",completeAnimation:"grow",onComplete:function(){infografico.init()}})});