"use strict";(self["webpackChunkslot"]=self["webpackChunkslot"]||[]).push([[330],{9330:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var d=n(3396),r=n(9242);const o={class:"edit-product"},u={class:"edit-product__name"},c=(0,d._)("label",{for:"newName"},"введіть назву товару",-1),i={class:"edit-product__img"},l=(0,d._)("label",{for:"newImg"},"введіть адресу фото",-1),a={class:"edit-product__price"},w=(0,d._)("label",{for:"newPrice"},"введіть ціну товару",-1),s={class:"edit-product__button"};function p(e,t,n,p,_,P){return(0,d.wg)(),(0,d.iD)("div",o,[(0,d._)("div",u,[c,(0,d.wy)((0,d._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>_.newProductObj.name=e),type:"text",id:"newName"},null,512),[[r.nr,_.newProductObj.name]])]),(0,d._)("div",i,[l,(0,d.wy)((0,d._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>_.newProductObj.img=e),type:"text",id:"newImg"},null,512),[[r.nr,_.newProductObj.img]])]),(0,d._)("div",a,[w,(0,d.wy)((0,d._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>_.newProductObj.price=e),type:"text",id:"newPrice"},null,512),[[r.nr,_.newProductObj.price]])]),(0,d._)("div",s,[(0,d._)("button",{onClick:t[3]||(t[3]=(...e)=>P.onClickNewProduct&&P.onClickNewProduct(...e))},"додати")])])}n(560);var _=n(65),P={name:"EditProduct",data(){return{newProductObj:{}}},methods:{...(0,_.nv)("product",["addNewProduct"]),onClickNewProduct(){this.addNewProduct(this.newProductObj),this.$router.push({name:"product"}),this.newProductObj={}}}},b=n(89);const m=(0,b.Z)(P,[["render",p]]);var f=m}}]);
//# sourceMappingURL=330.869de346.js.map