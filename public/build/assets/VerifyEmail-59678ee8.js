import{T as m,c as f,a,g,e as s,d as i,u as e,Z as p,b as _,i as h,f as o,h as n,n as y,s as v,j as b}from"./app-a72bd68e.js";import{_ as x}from"./GuestLayout-4e8d4e0b.js";import{P as k}from"./PrimaryButton-07649fb6.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:{type:String}},setup(r){const c=r,t=m({}),d=()=>{t.post(route("verification.send"))},u=f(()=>c.status==="verification-link-sent");return(l,N)=>(a(),g(x,null,{default:s(()=>[i(e(p),{title:"Email Verification"}),w,u.value?(a(),_("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:b(d,["prevent"])},[o("div",E,[i(k,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i(e(v),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{L as default};