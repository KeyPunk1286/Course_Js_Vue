(function(){"use strict";var t={2777:function(t,e,i){var o=i(9242),r=i(3396),s=i(7139);const c={class:"parent__nav"};function a(t,e){const i=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",c,[(0,r.Wm)(i,{to:"/home",class:(0,s.C_)(["nav__link",{"active-class":"/home"===t.$route.path}])},{default:(0,r.w5)((()=>[(0,r.Uk)("Головна")])),_:1},8,["class"]),(0,r.Wm)(i,{to:"/shop",class:(0,s.C_)(["nav__link",{"active-class":"/shop"===t.$route.path}])},{default:(0,r.w5)((()=>[(0,r.Uk)("Магазин")])),_:1},8,["class"]),(0,r.Wm)(i,{to:"/policy",class:(0,s.C_)(["nav__link",{"active-class":"/policy"===t.$route.path}])},{default:(0,r.w5)((()=>[(0,r.Uk)("Правила оплати")])),_:1},8,["class"]),(0,r.Wm)(i,{to:"/contact",class:(0,s.C_)(["nav__link",{"active-class":"/contact"===t.$route.path}])},{default:(0,r.w5)((()=>[(0,r.Uk)("Контакти")])),_:1},8,["class"])]),(0,r.Wm)(o)],64)}var n=i(89);const l={},u=(0,n.Z)(l,[["render",a]]);var p=u,d=i(2483);const g={class:"page-main"},_=(0,r._)("h2",{class:"main__title"},"Цей магазин належить програмісту на фрілансі",-1),m=(0,r._)("p",{class:"main__name-list"},"Тому:",-1),h=(0,r._)("ul",{class:"main__list"},[(0,r._)("li",null,"* Магиз працює коли хоче"),(0,r._)("li",null,"* Товари надсиолає швидко"),(0,r._)("li",null,"* На запитання відповідає коли висипається")],-1),w=[_,m,h];function f(t,e,i,o,s,c){return(0,r.wg)(),(0,r.iD)("div",g,w)}var v={name:"HomeView"};const y=(0,n.Z)(v,[["render",f]]);var k=y;const b={class:"page__shop"},C=(0,r._)("h2",{class:"shop__title"},"Список товарів:",-1),L={class:"shop__list"},P=["onClick"];function O(t,e,i,o,c,a){return(0,r.wg)(),(0,r.iD)("div",b,[C,(0,r._)("ul",L,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.getCategoriesProduct,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t,onClick:e=>a.onCategoryClick(t)},(0,s.zw)(t),9,P)))),128))])])}i(560);var x=i(65),j={name:"ShopView",computed:{...(0,x.Se)(["getProductList"]),getCategoriesProduct(){const t=new Set(this.getProductList.map((t=>t.categories))),e=Array.from(t);return e}},methods:{onCategoryClick(t){console.log(t,"testClick"),this.$router.push({name:"category",params:{category:t}})}}};const z=(0,n.Z)(j,[["render",O]]);var D=z;const S={class:"page-category"},H=["src"],A={class:"cards__title"},G={class:"cards__price"},V=(0,r._)("button",{class:"button__home"},"На головну",-1),B=[V];function U(t,e,i,o,c,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.productList,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"category__cards"},[(0,r._)("img",{src:t.img,class:"cards__img"},null,8,H),(0,r._)("h2",A,(0,s.zw)(t.title),1),(0,r._)("p",G,(0,s.zw)(t.price),1)])))),128))]),(0,r._)("div",{onClick:e[0]||(e[0]=(...t)=>a.onHomeClick&&a.onHomeClick(...t)),class:"page-button"},B)],64)}var $={name:"CategoryView",data(){return{productList:[]}},computed:{...(0,x.Se)(["getFilteredProductList"]),categoryName(){return this.$route.params.category}},methods:{onHomeClick(){this.$router.push({name:"home"})}},created(){this.productList=this.getFilteredProductList(this.categoryName),console.log(this.productList,"tets product")}};const T=(0,n.Z)($,[["render",U]]);var Z=T;const E={class:"page__payment"},F=(0,r._)("ul",{class:"payment__list"},[(0,r._)("li",null,"При отриманні"),(0,r._)("li",null,"Переказ на карту"),(0,r._)("li",null,"Записати у зошит")],-1),N=[F];function W(t,e,i,o,s,c){return(0,r.wg)(),(0,r.iD)("div",E,N)}var q={name:"PaymentViews"};const K=(0,n.Z)(q,[["render",W]]);var M=K;const Y={class:"page__contact"},I=(0,r._)("div",{class:"contact__title"},"Нас дуже легко знайти:",-1),J=(0,r._)("ul",{class:"contact__list"},[(0,r._)("li",null,"Потягом до ужгорода"),(0,r._)("li",null,"Шукаєте бабу Галю(вона дорогу покаже)")],-1),R=(0,r._)("div",{class:"contact__txt"},"До зустрічі!",-1),X=[I,J,R];function Q(t,e,i,o,s,c){return(0,r.wg)(),(0,r.iD)("div",Y,X)}var tt={name:"ContactView"};const et=(0,n.Z)(tt,[["render",Q]]);var it=et;const ot=[{path:"/home",name:"home",component:k},{path:"/shop",name:"shop",component:D},{path:"/shop/:category",name:"category",component:Z},{path:"/policy",name:"policy",component:M},{path:"/contact",name:"contact",component:it}],rt=(0,d.p7)({history:(0,d.PO)("/"),routes:ot});var st=rt,ct=JSON.parse('[{"id":1,"categories":"Телевізори","img":"https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1680771348-718348-06.jpg&w=256&q=60","title":"\'realme 43\' 4K UHD Smart TV (RMV2203)","price":"13 999"},{"id":2,"categories":"Телевізори","img":"https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1688742891-724056-01.jpg","title":"\'Телевізор LG 43\' 4K Smart TV (43UR81006LJ)","price":"17 799"},{"id":3,"categories":"Ноутбукі","img":"https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1697028445-a315-35-nx.webp&w=256&q=60","title":"Ноутбук Acer Aspire 3 A315-35-C2L7 Pure Silver (NX.A6LEU.026)","price":"11 999"},{"id":4,"categories":"Ноутбукі","img":"https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1696347827-opt.webp","title":"Ноутбук Chuwi GemiBook X Pro 14 Intel N100 8/256Gb (Grey)","price":"14 999"},{"id":5,"categories":"Телефони","img":"https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/8/e/8e110ac9dd02bd4af41a9c7b4d58ad0b.jpg&w=256&q=60","title":"Samsung Galaxy S21 FE G990B 6/128GB Light Violet ","price":"19 199"},{"id":6,"categories":"Телефони","img":"https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1699438631-728956-1.webp","title":"Apple iPhone 15 128GB Black (MTP03)","price":"42 499"},{"id":7,"categories":"Монітори","img":"https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1683553703-2e-a2222b-02.jpg&w=256&q=60","title":"\'Монітор 21.5\' 2E A2222B (2E-A2222B-01.UA)","price":"3 299"},{"id":8,"categories":"Монітори","img":"https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1689333315-g2250hs-b110.jpg","title":"\'Ігровий монітор 21.5\' Iiyama G2250HS-B1","price":"3 499"}]'),at=(0,x.MT)({state:{productList:ct},getters:{getProductList:({productList:t})=>t,getFilteredProductList:t=>e=>t.productList.filter((t=>t.categories===e))},mutations:{},actions:{},modules:{}});(0,o.ri)(p).use(at).use(st).mount("#app")}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,o,r,s){if(!o){var c=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],s=t[u][2];for(var a=!0,n=0;n<o.length;n++)(!1&s||c>=s)&&Object.keys(i.O).every((function(t){return i.O[t](o[n])}))?o.splice(n--,1):(a=!1,s<c&&(c=s));if(a){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,r,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,c=o[0],a=o[1],n=o[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(n)var u=n(i)}for(e&&e(o);l<c.length;l++)s=c[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},o=self["webpackChunkrouting_test"]=self["webpackChunkrouting_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(2777)}));o=i.O(o)})();
//# sourceMappingURL=app.c65319e3.js.map