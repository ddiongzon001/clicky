(window.webpackJsonpclicky=window.webpackJsonpclicky||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":"1","name":"squirtle","image":"http://u.cubeupload.com/diskinected/picture1.png"},{"id":"2","name":"charmander","image":"http://u.cubeupload.com/diskinected/picture2.png"},{"id":3,"name":"bulbasaur","image":"http://u.cubeupload.com/diskinected/picture3.png"},{"id":4,"name":"meowth","image":"http://u.cubeupload.com/diskinected/picture4.png"},{"id":5,"name":"pikachu","image":"http://u.cubeupload.com/diskinected/picture5.png"},{"id":6,"name":"togepi","image":"http://u.cubeupload.com/diskinected/picture6.png"},{"id":7,"name":"clafairy","image":"http://u.cubeupload.com/diskinected/picture7.png"},{"id":8,"name":"psyduck","image":"http://u.cubeupload.com/diskinected/picture8.png"}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(2),o=a.n(i),r=a(3),s=a(4),u=a(7),l=a(5),m=a(8);a(14);var d=function(e){return n.a.createElement("div",{className:"card",onClick:e.userClick},n.a.createElement("img",{alt:e.id,src:e.image}))};a(15);var p=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(16);var k=function(e){return n.a.createElement("nav",{className:"navbar navbar-dark sticky-top"},n.a.createElement("h1",{className:"title"},"Pok\xe9mon Clicky Game"),n.a.createElement("h1",{className:"score"},"Score: ",e.score," | Top Score: ",e.topScore))};a(17);var g=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Pok\xe9mon Clicky Game!"),n.a.createElement("p",{className:"lead"},"Click on an image! Try not to click on any Pok\xe9mon more than once.")))},h=a(6),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={pokemons:h,clicked:[],score:0,topScore:0},a.reset=function(){a.setState({score:0,clicked:[]})},a.setTop=function(){a.state.score>a.state.topScore&&a.setState({topScore:a.state.score})},a.randomize=function(){a.state.pokemons.sort(function(e,t){return.5-Math.random()})},a.userClick=function(e){e.preventDefault();var t=e.target.alt,c=a.state.clicked.indexOf(t);console.log(c),-1===c?a.setState({clicked:a.state.clicked.concat(t),score:a.state.score+1}):(a.setTop(),a.reset()),a.randomize()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("guessed: "+this.state.clicked),n.a.createElement(n.a.Fragment,null,n.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(g,null),n.a.createElement(p,null,this.state.pokemons.map(function(t){return n.a.createElement(d,{userClick:e.userClick,id:t.id,key:t.id,image:t.image})})))}}]),t}(c.Component);a(18);o.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.ba0b1320.chunk.js.map