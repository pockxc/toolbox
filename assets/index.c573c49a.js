import{d as n,c as t,o as e,r as o,a as s,u as a,b as r,t as u,F as c,w as i,e as m,f as l,g as d,h as p,i as v,j as b}from"./vendor.e761431c.js";var f=n({name:"App"});f.render=function(n,s,a,r,u,c){const i=o("router-view");return e(),t(i)};var h=n({setup(){const n=a();return{count:s((()=>n.state.count)),double:s((()=>n.getters.double)),increment:()=>n.dispatch("increment")}}});const g=r("div",null,"Home",-1),y=m("increment");h.render=function(n,s,a,m,l,d){const p=o("a-button");return e(),t(c,null,[g,r("div",null,"count: "+u(n.count),1),r("div",null,"double: "+u(n.double),1),r(p,{onClick:n.increment,type:"primary"},{default:i((()=>[y])),_:1},8,["onClick"])],64)};const j=[{path:"/",name:"Home",component:h}],k=l({history:d(),routes:j}),w={count:0};var C=p({state:()=>w,mutations:{increment(n){n.count+=1}},actions:{increment(n){n.commit("increment")}},getters:{double:n=>2*n.count}});v(f).use(k).use(C).use(b).mount("#app");