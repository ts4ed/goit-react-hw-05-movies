"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[57],{8888:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(8152),r=t(2791),i=t(3504),s=t(6871),c=t(3530),o={img:"MovieDetails_img__D3WH9",container:"MovieDetails_container__o8VqJ",linkList:"MovieDetails_linkList__GQS+F",link:"MovieDetails_link__wf74g",reviews:"MovieDetails_reviews__tdSgP",overview:"MovieDetails_overview__EVogb",info:"MovieDetails_info__0TKY1",genres:"MovieDetails_genres__80iSK",span:"MovieDetails_span__CWeYx",btn:"MovieDetails_btn__tCU2l"},u=t(7088),l=t(184),v=function(){var e=(0,r.useState)(!1),n=(0,a.Z)(e,2),t=n[0],v=n[1],_=(0,s.UO)().movieId,f=(0,r.useState)(),d=(0,a.Z)(f,2),p=d[0],h=d[1],g=(0,s.s0)(),m=(0,s.TH)();(0,r.useEffect)((function(){v(!0),c.TP(_).then((function(e){h(e),v(!1)}))}),[_]);return(0,l.jsxs)("div",{children:[t&&(0,l.jsx)(u.g,{}),p&&(0,l.jsx)("button",{className:o.btn,onClick:function(e){null!==m.state?g("".concat(m.state.from.pathname).concat(m.state.from.search)):g("/home")},children:"Back"}),p&&(0,l.jsxs)("div",{className:o.container,children:[(0,l.jsx)("img",{className:o.img,src:"".concat(c.TS).concat(c.Ie).concat(p.poster_path),alt:"".concat(p.original_title)}),(0,l.jsxs)("div",{className:o.info,children:[(0,l.jsxs)("h1",{className:o.title,children:[p.original_title," (",p.release_date.slice(0,4),")"]}),(0,l.jsxs)("h2",{className:o.rating,children:["Rating: ",p.vote_average.toFixed(2)]}),(0,l.jsx)("p",{className:o.overview,children:p.overview}),(0,l.jsx)("h4",{children:"Genres"}),(0,l.jsx)("div",{className:o.genres,children:p.genres.map((function(e){return(0,l.jsx)("span",{className:o.span,children:e.name},e.id)}))})]})]}),p&&(0,l.jsxs)("ul",{className:o.linkList,children:[(0,l.jsx)(i.rU,{className:o.link,to:"cast",children:"Cast"}),(0,l.jsx)(i.rU,{className:o.reviews,to:"reviews",children:"Reviews"}),(0,l.jsx)(s.j3,{context:p})]})]})}},3530:function(e,n,t){t.d(n,{TS:function(){return u},nP:function(){return v},Ie:function(){return l},TP:function(){return d},gH:function(){return f},Hg:function(){return _}});var a=t(5861),r=t(7757),i=t.n(r),s=t(4569),c=t.n(s),o="119d79b053f922516c6af4b71b0fd3ac";c().defaults.baseURL="https://api.themoviedb.org/3";var u="https://image.tmdb.org/t/p",l="/w400",v="/w200",_=function(){var e=(0,a.Z)(i().mark((function e(){var n,t,a,r=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,c().get("/trending/movie/week?api_key=".concat(o,"&page=").concat(n));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(i().mark((function e(n,t){var a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(n,"&page=").concat(t,"&include_adult=false"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(i().mark((function e(n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US&append_to_response=credits,reviews"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movieDetails-page.e58b9640.chunk.js.map