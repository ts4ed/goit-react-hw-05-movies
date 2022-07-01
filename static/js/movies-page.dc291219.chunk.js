"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{8500:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a=n(5861),c=n(885),i=n(168),u=n(7757),o=n.n(u),s=n(3530),l=n(2791),p=n(501),f=n(6871),g="SearchMovies_list__S8euj",h="SearchMovies_item__oZwux",v="SearchMovies_title__9ws98",m="SearchMovies_img__K1wu0",d="SearchMovies_form__Aa9iv",_={btn1:"Pagination_btn1__M2Oai",container:"Pagination_container__DgzGU"},x=n(184),b=function(e){var t=e.page,n=e.totalPage,r=e.changeDownPage,a=e.changeUpPage,c=function(e){var c=e.currentTarget.name;"forward"===c&&t!==n&&a(),"back"===c&&1!==t&&r()};return(0,x.jsxs)("div",{className:_.container,children:[(0,x.jsx)("button",{className:_.btn1,onClick:c,name:"back",children:"past page"}),(0,x.jsx)("button",{className:_.btn,onClick:c,name:"forward",children:"next page"})]})},w=n(7088),j=(0,n(6031).ZP)(p.rU)(r||(r=(0,i.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),k=function(){var e,t,n=(0,f.TH)(),r=(0,l.useState)(""),i=(0,c.Z)(r,2),u=i[0],_=i[1],k=(0,l.useState)(""),y=(0,c.Z)(k,2),S=y[0],Z=y[1],N=(0,l.useState)(!1),P=(0,c.Z)(N,2),M=P[0],U=P[1],T=(0,l.useState)(""),q=(0,c.Z)(T,2),C=q[0],H=q[1],D=(0,p.lr)(),I=(0,c.Z)(D,2),z=I[0],A=I[1],E=(0,f.s0)(),G=null!==(e=z.get("query"))&&void 0!==e?e:"",K=null!==(t=z.get("page"))&&void 0!==t?t:1;(0,l.useEffect)((function(){if(!G)return A("");function e(){return(e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{U(!0),(0,s.gH)(G,K).then((function(e){0===e.results.length&&alert("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"),H(e.results),Z(e.total_pages),U(!1)}))}catch(t){t&&E("/home")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[G,A,E,K]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var t=e.target.elements.movie.value;if(""===u.trim()&&alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"))return console.log(t);A({query:t.trim(),page:1})},children:[(0,x.jsx)("input",{type:"text",name:"movie",value:u,onChange:function(e){return _(e.target.value)}}),(0,x.jsx)("button",{type:"submit",children:"Search Movie"})]}),M&&(0,x.jsx)(w.g,{}),(0,x.jsx)("ul",{className:g,children:C&&C.map((function(e){return(0,x.jsx)("li",{className:h,children:(0,x.jsxs)(j,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,x.jsx)("img",{className:m,src:"".concat(s.TS).concat(s.Ie).concat(e.poster_path),alt:e.title}),(0,x.jsx)("h2",{className:v,children:e.original_title})]})},e.id)}))}),0!==C.length&&(0,x.jsx)(b,{changeUpPage:function(){A({query:G,page:Number(K)+1})},changeDownPage:function(){A({query:G,page:Number(K)-1})},page:Number(K),totalPage:S})]})},y=function(){var e=(0,f.TH)();return(0,x.jsxs)("div",{children:["/movies"===e.pathname&&(0,x.jsx)(k,{}),(0,x.jsx)(f.j3,{})]})}},3530:function(e,t,n){n.d(t,{TS:function(){return s},nP:function(){return p},Ie:function(){return l},TP:function(){return h},gH:function(){return g},Hg:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),u=n.n(i),o="119d79b053f922516c6af4b71b0fd3ac";u().defaults.baseURL="https://api.themoviedb.org/3";var s="https://image.tmdb.org/t/p",l="/w400",p="/w200",f=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,u().get("/trending/movie/week?api_key=".concat(o,"&page=").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US&append_to_response=credits,reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movies-page.dc291219.chunk.js.map