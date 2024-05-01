import{L as x}from"./Layout.b29e1363.js";import{T as y}from"./TextInput.343a9a28.js";import{F as _}from"./FileInput.27145414.js";import{L as v}from"./LoadingButton.15007f3d.js";import{_ as U,r as n,o as b,c as g,a as t,d as k,t as c,w as N,b as s,e as B,h as F}from"./app.f724e820.js";import"./Dropdown.0e5c1d9e.js";import"./FlashMessages.3a43925d.js";import"./InputError.2d165fae.js";const L={layout:x,remember:"form",props:{profile:Object},components:{LoadingButton:v,TextInput:y,FileInput:_},metaInfo(){return{title:this.$t("my_profile_x",{x:this.form.name})}},data(){return{sending:!1,form:{name:this.profile.name,phone:this.profile.phone,email:this.profile.email,username:this.profile.username,photo:null}}},methods:{submit(){this.sending=!0;var e=new FormData;e.append("name",this.form.name||""),e.append("phone",this.form.phone||""),e.append("username",this.form.username||""),e.append("email",this.form.email||""),e.append("photo",this.form.photo||""),e.append("_method","put"),this.$inertia.post(this.route("profile.update",this.profile.id),e,{onSuccess:()=>{this.sending=!1,Object.keys(this.$page.props.errors).length===0&&(this.form.photo=null)},onFinish:()=>this.sending=!1})}}},j={class:"mt-4 mb-6 flex items-center justify-start max-w-3xl"},C=["src"],E={class:"font-bold text-lg md:text-2xl"},I={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},S={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},T={class:"px-8 pb-6 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 flex flex-wrap"},D={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"};function O(e,o,p,P,r,a){var i,u,f,d,h;const m=n("text-input"),w=n("file-input"),V=n("loading-button");return b(),g("div",null,[t("div",j,[p.profile.photo?(b(),g("img",{key:0,class:"block w-8 h-8 rounded-full ltr:mr-4 rtl:ml-4",src:"/"+p.profile.photo},null,8,C)):k("",!0),t("h1",E,c(r.form.name),1)]),t("div",I,[t("form",{onSubmit:o[5]||(o[5]=N((...l)=>a.submit&&a.submit(...l),["prevent"])),autocomplete:"off"},[t("div",S,[s(m,{modelValue:r.form.name,"onUpdate:modelValue":o[0]||(o[0]=l=>r.form.name=l),errors:(i=e.$page.props.errors)==null?void 0:i.name,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Name")},null,8,["modelValue","errors","label"]),s(m,{label:e.$t("Phone"),modelValue:r.form.phone,"onUpdate:modelValue":o[1]||(o[1]=l=>r.form.phone=l),errors:(u=e.$page.props.errors)==null?void 0:u.phone,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),s(m,{label:e.$t("Username"),modelValue:r.form.username,"onUpdate:modelValue":o[2]||(o[2]=l=>r.form.username=l),errors:(f=e.$page.props.errors)==null?void 0:f.username,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),s(m,{label:e.$t("Email"),modelValue:r.form.email,"onUpdate:modelValue":o[3]||(o[3]=l=>r.form.email=l),errors:(d=e.$page.props.errors)==null?void 0:d.email,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"])]),t("div",T,[s(w,{type:"file",accept:"image/*",label:e.$t("Photo"),modelValue:r.form.photo,"onUpdate:modelValue":o[4]||(o[4]=l=>r.form.photo=l),errors:(h=e.$page.props.errors)==null?void 0:h.photo,class:"ltr:pr-6 rtl:pl-6 w-full"},null,8,["label","modelValue","errors"])]),t("div",D,[s(V,{loading:r.sending,class:"btn-gray ltr:ml-auto rtl:mr-auto",type:"submit"},{default:B(()=>[F(c(e.$t("Update")),1)]),_:1},8,["loading"])])],32)])])}const K=U(L,[["render",O]]);export{K as default};
