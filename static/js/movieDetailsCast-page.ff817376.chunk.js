"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[398],{6588:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(6871),a=n(3530),c="MovieDetailsCast_list__+7WIA",i="MovieDetailsCast_item__XWaZf",s="MovieDetailsCast_title__ZmmBg",u="MovieDetailsCast_img__AsyXL",o=n(184),p=function(){var t=(0,r.bx)();return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:c,children:t.credits.cast.map((function(t){return(0,o.jsxs)("li",{className:i,children:[(0,o.jsx)("img",{className:u,src:t.profile_path&&"".concat(a.TS).concat(a.nP).concat(t.profile_path),alt:t.name}),(0,o.jsx)("h2",{className:s,children:t.name})]},t.id)}))})})}},3530:function(t,e,n){n.d(e,{TS:function(){return o},nP:function(){return f},Ie:function(){return p},TP:function(){return d},gH:function(){return _},Hg:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),s=n.n(i),u="119d79b053f922516c6af4b71b0fd3ac";s().defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p",p="/w400",f="/w200",l=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,s().get("/trending/movie/week?api_key=".concat(u,"&page=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US&append_to_response=credits,reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movieDetailsCast-page.ff817376.chunk.js.map