import{u as c,r as d,j as e,F as u,a as s,H as p}from"./app.05f5ea55.js";import{B as f}from"./Button.df2fef76.js";import{G as w}from"./Guest.b9b1f771.js";import{I as h}from"./Input.61b64340.js";import{L as b}from"./Label.a02752fd.js";import{V as g}from"./ValidationErrors.1766fe2b.js";import"./clsx.m.256e9345.js";function x(){const{data:a,setData:t,post:o,processing:i,errors:m,reset:n}=c({password:""});d.exports.useEffect(()=>()=>{n("password")},[]);const l=r=>{t(r.target.name,r.target.value)};return e(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s(g,{errors:m}),e("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[e("div",{className:"mt-4",children:[s(b,{forInput:"password",value:"Password"}),s(h,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:l})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(f,{className:"ml-4",processing:i,children:"Confirm"})})]})]})}x.layout=a=>s(w,{children:a});export{x as default};
