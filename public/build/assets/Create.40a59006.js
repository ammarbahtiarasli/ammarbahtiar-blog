import{u as m,j as a,a as e,H as c,d as p}from"./app.05f5ea55.js";import{C as u,A as h}from"./App.68efa155.js";import{H as i}from"./Header.a5dc6bdd.js";import{B as f}from"./Button.df2fef76.js";import{A as g}from"./ArticleForm.d1c654cb.js";import"./clsx.m.256e9345.js";import"./Input.61b64340.js";import"./browser.b853d08f.js";import"./Label.a02752fd.js";function y({statuses:r,tags:s}){const{data:t,setData:o}=m({title:"",teaser:"",category_id:"",body:"",picture:"",tags:[s[0],s[1]],status:r[0]}),d=l=>{l.preventDefault(),p.Inertia.post(route("articles.store"),{...t,category_id:t.category_id.id,status:t.status.id,tags:t.tags.map(n=>n.id)})};return a("div",{children:[e(c,{title:"Create new article"}),a(i,{children:[e(i.Title,{children:t.title||"The title..."}),e(i.Subtitle,{children:t.teaser||"The teaser..."})]}),e(u,{children:a("form",{onSubmit:d,children:[e(g,{data:t,setData:o}),e(f,{children:"Create"})]})})]})}y.layout=r=>e(h,{children:r});export{y as default};
