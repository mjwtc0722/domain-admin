import{ax as u,ay as c,a5 as a,o as s,Q as r,R as i,c as d,a8 as m,F as g,O as _,am as O}from"./vendor-vue.e07d7f7e.js";import{H as f,_ as G}from"./index.b7697840.js";const h=u({id:"group-store",state:()=>({groupOptions:[]}),getters:{getGroupOptions:e=>e.groupOptions},actions:{setGroupOptions(e){this.groupOptions=e.map(t=>({...t,value:t.id,label:t.name}))},async updateGroupOptions(){const e=await f.getGroupList();e.code==0&&this.setGroupOptions(e.data.list)}}}),v={name:"SelectGroup",props:{},components:{},data(){return{}},computed:{...c(h,{groupOptions:"getGroupOptions"}),options(){return[...this.groupOptions,{value:0,label:"\u672A\u5206\u7EC4"}]}},methods:{async getData(){}},created(){this.getData()}};function S(e,t,b,$,k,n){const p=a("el-option"),l=a("el-select");return s(),r(l,_(e.$attrs,O(e.$events),{placeholder:"\u5206\u7EC4"}),{default:i(()=>[(s(!0),d(g,null,m(n.options,o=>(s(),r(p,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},16)}const B=G(v,[["render",S]]);export{B as S,h as u};
