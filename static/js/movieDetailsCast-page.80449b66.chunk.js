"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[398],{6588:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(6871),a=n(3530),c="MovieDetailsCast_list__+7WIA",i="MovieDetailsCast_item__XWaZf",s="MovieDetailsCast_title__ZmmBg",u="MovieDetailsCast_img__AsyXL",o=n(184),p=function(){var e=(0,r.bx)();return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:c,children:e.credits.cast.map((function(e){return(0,o.jsxs)("li",{className:i,children:[(0,o.jsx)("img",{className:u,src:e.profile_path&&"".concat(a.TS).concat(a.Ie).concat(e.profile_path),alt:e.name}),(0,o.jsx)("h2",{className:s,children:e.name})]},e.id)}))})})}},3530:function(e,t,n){n.d(t,{TS:function(){return o},Ie:function(){return p},TP:function(){return _},gH:function(){return l},Hg:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),s=n.n(i),u="119d79b053f922516c6af4b71b0fd3ac";s().defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p",p="/w400",f=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,s().get("/trending/movie/week?api_key=".concat(u,"&page=").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US&append_to_response=credits,reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movieDetailsCast-page.80449b66.chunk.js.map