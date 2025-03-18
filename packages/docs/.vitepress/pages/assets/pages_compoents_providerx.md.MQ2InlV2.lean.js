import{a as u,d as m}from"./chunks/theme.DuRLZATH.js";import{x as C,ag as t,y as o,G as b,H as k,P as e,u as g,z as B,aQ as y,A as i,L as s}from"./chunks/framework.CdoyD7j2.js";const x=C({__name:"providerx.md.demo.82bee126",setup(F){const E=m(({columns:n})=>n.map(l=>(l.renderType==="enum"&&(l.formatter=(r,p,c)=>{var d;return(d=l.enumData)==null?void 0:d[c]}),l))),a=[{name:"张三",sex:0,enable:!0},{name:"李四",sex:1,enable:!1},{name:"王五",sex:1,enable:!0}],h=u([{prop:"name",label:"姓名"},{prop:"sex",label:"性别",renderType:"enum",enumData:{0:"男",1:"女"}},{label:"启用",slots:{default:({row:n})=>e(t("el-switch"),{modelValue:n.enable,"onUpdate:modelValue":l=>n.enable=l},null)}}],{align:"center"});return(n,l)=>{const r=t("el-tablex"),p=t("el-providerx");return o(),b(p,{tableProps:{border:!0,stripe:!0,size:"small"},tablePlugins:[g(E)]},{default:k(()=>[e(r,{data:a,columns:g(h)},null,8,["columns"])]),_:1},8,["tablePlugins"])}}}),v=JSON.parse('{"title":"配置组件 Providerx","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"pages/compoents/providerx.md","filePath":"pages/compoents/providerx.md","lastUpdated":null}'),A={name:"pages/compoents/providerx.md"},P=Object.assign(A,{setup(F){return(E,a)=>{const h=t("demo");return o(),B("div",null,[a[1]||(a[1]=y('<h1 id="配置组件-providerx" tabindex="-1">配置组件 Providerx <a class="header-anchor" href="#配置组件-providerx" aria-label="Permalink to &quot;配置组件 Providerx&quot;">​</a></h1><p>组件<code>el-providerx</code>用于对提供对<code>el-tablex</code>以及<code>el-formx</code>的全局化配置。</p><h4 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h4><p>以<code>el-tablex</code>为例。 配置示例：</p>',4)),e(h,{customClass:"",sourceCode:`<template>
  <el-providerx :tableProps="{ border: true, stripe: true, size: 'small' }" :tablePlugins="[tableEnumPlugin]">
    <el-tablex :data="data" :columns="columns" />
  </el-providerx>
</template>

<script setup lang="tsx">
import { useColumns, defineColumnsPlugin } from 'element-plus-jsx'

type IItem = {
  name: string
  sex: number
  enable: boolean
}

const tableEnumPlugin = defineColumnsPlugin(({ columns }) => {
  return columns.map(item => {
    if (item.renderType === 'enum') {
      item.formatter = (_, __, cellValue) => {
        return item.enumData?.[cellValue]
      }
    }
    return item
  })
})

const data: IItem[] = [
  {
    name: '张三',
    sex: 0,
    enable: true
  },
  {
    name: '李四',
    sex: 1,
    enable: false
  },
  {
    name: '王五',
    sex: 1,
    enable: true
  }
]

const columns = useColumns<IItem>(
  [
    {
      prop: 'name',
      label: '姓名'
    },

    {
      prop: 'sex',
      label: '性别',
      renderType: 'enum',
      enumData: { 0: '男', 1: '女' }
    },
    {
      label: '启用',
      slots: {
        default: ({ row }) => {
          return <el-switch v-model={row.enable} />
        }
      }
    }
  ],
  { align: 'center' }
)
<\/script>
`,options:"{}"},{highlight:k(()=>a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-providerx"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :tableProps"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`"{ border: true, stripe: true, size: 'small' }"`),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :tablePlugins"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"[tableEnumPlugin]"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-tablex"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :data"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"data"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," :columns"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"columns"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-providerx"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"tsx"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { useColumns, defineColumnsPlugin } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus-jsx'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," IItem"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  name"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  sex"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  enable"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," boolean")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," tableEnumPlugin"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineColumnsPlugin"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(({ "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"columns"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," columns."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"map"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"item"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (item.renderType "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'enum'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      item."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"formatter"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"__"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"cellValue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," item.enumData?.[cellValue]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," item")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," data"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," IItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'张三'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    enable: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'李四'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    enable: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'王五'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    sex: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    enable: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," columns"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," useColumns"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"IItem"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'sex'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'性别'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      renderType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'enum'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      enumData: { "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'男'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'女'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'启用'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      slots: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        default"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ({ "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"row"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"          return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," <"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"el-switch"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{row.enable} />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  { align: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'center'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:k(()=>[e(x)]),_:1}),a[2]||(a[2]=y('<h4 id="provider-props" tabindex="-1">Provider Props <a class="header-anchor" href="#provider-props" aria-label="Permalink to &quot;Provider Props&quot;">​</a></h4><div class="vp-table"><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>tableProps</td><td><code>TableProps&lt;any&gt;</code></td><td>{}</td><td>表格属性</td></tr><tr><td>tableplugins</td><td><code>Fn&lt;TableColumn&lt;any&gt;[]&gt;[]</code></td><td>[]</td><td>表格插件（优先级：level 2）</td></tr><tr><td>formProps</td><td><code>FormProps&lt;any&gt;</code></td><td>{}</td><td>表单属性</td></tr><tr><td>formPlugins</td><td><code>Fn&lt;FormItemProps&lt;any&gt;[]&gt;[]</code></td><td>[]</td><td>表单插件（优先级：level 2）</td></tr></tbody></table></div>',2))])}}});export{v as __pageData,P as default};
