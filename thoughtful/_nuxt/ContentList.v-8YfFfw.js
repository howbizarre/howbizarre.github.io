import d from"./ContentQuery.0T3cHAio.js";import{f as c,q as l,v as f}from"./entry.Va6Mng3_.js";import"./query.Pp6sflSd.js";import"./preview.2xLJmUr_.js";const r=(u,t)=>f("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:p,query:o}=u,n={...o||{},path:p||(o==null?void 0:o.path)||"/"};return f(d,n,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>r("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}}),y=h,v=y;export{v as default};