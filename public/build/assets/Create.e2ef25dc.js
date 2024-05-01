import{L as x}from"./Layout.b29e1363.js";import{T as y}from"./TextInput.343a9a28.js";import{L as v}from"./LoadingButton.15007f3d.js";import{_,r as a,o as $,c as C,a as s,b as t,e as g,h as m,t as i,w as k}from"./app.f724e820.js";import"./Dropdown.0e5c1d9e.js";import"./FlashMessages.3a43925d.js";import"./InputError.2d165fae.js";const L={layout:x,remember:"form",components:{LoadingButton:v,TextInput:y},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Contact")})}},data(){return{sending:!1,form:{name:null,email:null,phone:null,address:null,description:null}}},methods:{submit(){this.sending=!0,this.$inertia.post(this.route("contacts.store"),this.form,{onFinish:()=>this.sending=!1})}}},U={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},B=s("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),I={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},N={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},T={class:"px-8 pb-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},D={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"};function E(e,r,S,j,l,p){var d,u,f,b,c;const h=a("Icons"),w=a("Link"),n=a("text-input"),V=a("loading-button");return $(),C("div",null,[s("h1",U,[t(w,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("contacts")},{default:g(()=>[t(h,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+i(e.$tc("Contact",2)),1)]),_:1},8,["href"]),B,m(" "+i(e.$t("Create")),1)]),s("div",I,[s("form",{onSubmit:r[5]||(r[5]=k((...o)=>p.submit&&p.submit(...o),["prevent"])),autocomplete:"off"},[s("div",N,[t(n,{modelValue:l.form.name,"onUpdate:modelValue":r[0]||(r[0]=o=>l.form.name=o),errors:(d=e.$page.props.errors)==null?void 0:d.name,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Name")},null,8,["modelValue","errors","label"]),t(n,{label:e.$t("Phone"),modelValue:l.form.phone,"onUpdate:modelValue":r[1]||(r[1]=o=>l.form.phone=o),errors:(u=e.$page.props.errors)==null?void 0:u.phone,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),t(n,{label:e.$t("Email"),modelValue:l.form.email,"onUpdate:modelValue":r[2]||(r[2]=o=>l.form.email=o),errors:(f=e.$page.props.errors)==null?void 0:f.email,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),t(n,{label:e.$t("Address"),modelValue:l.form.address,"onUpdate:modelValue":r[3]||(r[3]=o=>l.form.address=o),errors:(b=e.$page.props.errors)==null?void 0:b.address,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"])]),s("div",T,[t(n,{label:e.$t("Description"),modelValue:l.form.description,"onUpdate:modelValue":r[4]||(r[4]=o=>l.form.description=o),errors:(c=e.$page.props.errors)==null?void 0:c.description,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","errors"])]),s("div",D,[t(V,{loading:l.sending,class:"btn-gray",type:"submit"},{default:g(()=>[m(i(e.$t("create_x",{x:e.$tc("Contact")})),1)]),_:1},8,["loading"])])],32)])])}const H=_(L,[["render",E]]);export{H as default};
