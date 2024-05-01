import{L as v}from"./Layout.b29e1363.js";import{T as k}from"./TextInput.343a9a28.js";import{d as D}from"./DeleteMixin.392a83d9.js";import{L}from"./LoadingButton.15007f3d.js";import{T as B}from"./TrashedMessage.ce3e22bb.js";import{D as N}from"./DeleteRestoreComponent.c4736847.js";import{_ as R,r as n,o as w,c as T,a as s,b as l,e as i,h as p,t as m,f as U,d as I,w as M}from"./app.f724e820.js";import"./Dropdown.0e5c1d9e.js";import"./FlashMessages.3a43925d.js";import"./InputError.2d165fae.js";import"./Dialog.87359ca6.js";import"./Modal.0ef8196b.js";const E={layout:v,remember:"form",props:{contact:Object},mixins:[D("contact")],components:{LoadingButton:L,TextInput:k,TrashedMessage:B,DeleteRestoreComponent:N},metaInfo(){return{title:this.$t("edit_x",{x:this.form.name})}},data(){return{restore:!1,sending:!1,form:{name:this.contact.name,email:this.contact.email,phone:this.contact.phone,address:this.contact.address,description:this.contact.description}}},methods:{submit(){this.sending=!0,this.$inertia.put(this.route("contacts.update",this.contact.id),this.form,{onFinish:()=>this.sending=!1})}}},S={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},$=s("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),j={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},A={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},F={class:"px-8 pb-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},O={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"};function P(e,t,d,q,o,u){var f,c,b,g,h;const V=n("Icons"),x=n("Link"),y=n("trashed-message"),a=n("text-input"),_=n("DeleteRestoreComponent"),C=n("loading-button");return w(),T("div",null,[s("h1",S,[l(x,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("contacts")},{default:i(()=>[l(V,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),p(" "+m(e.$tc("Contact",2)),1)]),_:1},8,["href"]),$,p(" "+m(o.form.name),1)]),d.contact.deleted_at?(w(),U(y,{key:0,class:"mb-6",onRestore:t[0]||(t[0]=()=>o.restore=!0)},{default:i(()=>[s("span",null,m(e.$t("already_deleted_x",{x:e.$tc("Contact")})),1)]),_:1})):I("",!0),s("div",j,[s("form",{onSubmit:t[7]||(t[7]=M((...r)=>u.submit&&u.submit(...r),["prevent"])),autocomplete:"off"},[s("div",A,[l(a,{modelValue:o.form.name,"onUpdate:modelValue":t[1]||(t[1]=r=>o.form.name=r),errors:(f=e.$page.props.errors)==null?void 0:f.name,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Name")},null,8,["modelValue","errors","label"]),l(a,{label:e.$t("Phone"),modelValue:o.form.phone,"onUpdate:modelValue":t[2]||(t[2]=r=>o.form.phone=r),errors:(c=e.$page.props.errors)==null?void 0:c.phone,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),l(a,{label:e.$t("Email"),modelValue:o.form.email,"onUpdate:modelValue":t[3]||(t[3]=r=>o.form.email=r),errors:(b=e.$page.props.errors)==null?void 0:b.email,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),l(a,{label:e.$t("Address"),modelValue:o.form.address,"onUpdate:modelValue":t[4]||(t[4]=r=>o.form.address=r),errors:(g=e.$page.props.errors)==null?void 0:g.address,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"])]),s("div",F,[l(a,{label:e.$t("Description"),modelValue:o.form.description,"onUpdate:modelValue":t[5]||(t[5]=r=>o.form.description=r),errors:(h=e.$page.props.errors)==null?void 0:h.description,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","errors"])]),s("div",O,[l(_,{restore:o.restore,data:d.contact,model:"Contact",routeM:"contacts",onCloseRestore:t[6]||(t[6]=()=>o.restore=!1)},null,8,["restore","data"]),l(C,{loading:o.sending,class:"btn-gray ltr:ml-auto rtl:mr-auto",type:"submit"},{default:i(()=>[p(m(e.$t("update_x",{x:e.$tc("Contact")})),1)]),_:1},8,["loading"])])],32)])])}const oe=R(E,[["render",P]]);export{oe as default};
