"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{8500:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a,r=n(5861),c=n(8152),s=n(168),i=n(7757),u=n.n(i),o=n(3530),l=n(2791),p=n(3504),f=n(6871),h="SearchMovies_list__S8euj",g="SearchMovies_item__oZwux",v="SearchMovies_title__9ws98",m="SearchMovies_img__K1wu0",d="SearchMovies_form__Aa9iv",_={btn1:"Pagination_btn1__M2Oai",container:"Pagination_container__DgzGU"},x=n(184),b=function(e){var t=e.page,n=e.totalPage,a=e.changePage,r=function(e){var r=e.currentTarget.name;"forward"===r&&t!==n&&a(t+1),"back"===r&&1!==t&&a(t-1)};return(0,x.jsxs)("div",{className:_.container,children:[(0,x.jsx)("button",{className:_.btn1,onClick:r,name:"back",children:"past page"}),(0,x.jsx)("button",{className:_.btn,onClick:r,name:"forward",children:"next page"})]})},w=n(7088),j=(0,n(6031).ZP)(p.rU)(a||(a=(0,s.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),S=function(){var e,t=(0,f.TH)(),n=new URLSearchParams(t.search),a=(0,l.useState)(""),s=(0,c.Z)(a,2),i=s[0],p=s[1],_=(0,l.useState)(""),S=(0,c.Z)(_,2),k=S[0],y=S[1],Z=(0,l.useState)(""),P=(0,c.Z)(Z,2),N=P[0],M=P[1],T=(0,f.s0)(),U=(0,l.useState)(""),q=(0,c.Z)(U,2),C=q[0],H=q[1],D=(0,l.useState)(!1),I=(0,c.Z)(D,2),L=I[0],R=I[1],z=(0,l.useState)(null!==(e=n.get("page"))&&void 0!==e?e:1),A=(0,c.Z)(z,2),E=A[0],G=A[1];""===C&&null!==n.get("query")&&H(n.get("query"));(0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{R(!0),(0,o.gH)(C,E).then((function(e){0===e.results.length&&alert("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"),p(e.results),M(e.total_pages),G(e.page),R(!1)}))}catch(t){t&&T("/home")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""!==C.trim()&&function(){e.apply(this,arguments)}()}),[C,T,t.search,E]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var n=e.target.elements.movie.value;if(""===k.trim()&&alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"))return console.log(n);n!==C&&(G(1),H(n),t={pathname:"/movies",search:"?query=".concat(n,"&page=1")},T(t.search),y(""),y(""))},children:[(0,x.jsx)("input",{type:"text",name:"movie",value:k,onChange:function(e){return y(e.target.value)}}),(0,x.jsx)("button",{type:"submit",children:"Search Movie"})]}),L&&(0,x.jsx)(w.g,{}),(0,x.jsx)("ul",{className:h,children:i&&i.map((function(e){return(0,x.jsx)("li",{className:g,children:(0,x.jsxs)(j,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,x.jsx)("img",{className:m,src:"".concat(o.TS).concat(o.Ie).concat(e.poster_path),alt:e.title}),(0,x.jsx)("h2",{className:v,children:e.original_title})]})},e.id)}))}),0!==i.length&&(0,x.jsx)(b,{changePage:function(e){G(e),t={search:"?query=".concat(C,"&page=").concat(e)},T(t.search)},page:E,totalPage:N})]})},k=function(){var e=(0,f.TH)();return(0,x.jsxs)("div",{children:["/movies"===e.pathname&&(0,x.jsx)(S,{}),(0,x.jsx)(f.j3,{})]})}},3530:function(e,t,n){n.d(t,{TS:function(){return o},nP:function(){return p},Ie:function(){return l},TP:function(){return g},gH:function(){return h},Hg:function(){return f}});var a=n(5861),r=n(7757),c=n.n(r),s=n(4569),i=n.n(s),u="119d79b053f922516c6af4b71b0fd3ac";i().defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p",l="/w400",p="/w200",f=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,i().get("/trending/movie/week?api_key=".concat(u,"&page=").concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(c().mark((function e(t,n){var a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US&append_to_response=credits,reviews"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movies-page.dad2d129.chunk.js.map