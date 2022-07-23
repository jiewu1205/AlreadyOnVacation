"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[9379],{79097:function(e,t,n){n.d(t,{O:function(){return o}});var a=n(5080),i=n(49486),o=function(e){var t=e.substring(e.lastIndexOf("."),e.length),n="dark"==i.Z.getters.getThemeMode?"".concat(e.substring(0,e.lastIndexOf(".")),"-dark"):e.substring(0,e.lastIndexOf("."));return"media/illustrations/".concat(a.Gv.value,"/").concat(n).concat(t)}},68932:function(e,t,n){n.d(t,{M:function(){return o},V:function(){return r}});var a=n(49486),i=n(15758),o=function(e,t){a.Z.dispatch(i.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},r=function(e){a.Z.dispatch(i.e.SET_BREADCRUMB_ACTION,{title:e})}},5080:function(e,t,n){n.d(t,{$Q:function(){return d},BK:function(){return u},Df:function(){return x},F9:function(){return y},Fh:function(){return l},Gv:function(){return C},K1:function(){return v},Lj:function(){return c},NK:function(){return r},Yn:function(){return k},_T:function(){return p},az:function(){return h},jH:function(){return s},o$:function(){return m},o4:function(){return w},pD:function(){return b},vc:function(){return o},vj:function(){return _},xV:function(){return f},zK:function(){return g}});var a=n(66252),i=n(49486),o=(0,a.Fl)((function(){return i.Z.getters.layoutConfig()})),r=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("sidebar.display")})),s=(0,a.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("footer.width")})),l=(0,a.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("header.width")})),c=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("header.left")})),u=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("header.fixed.desktop")})),d=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("header.fixed.tabletAndMobile")})),m=(0,a.Fl)((function(){return!0===i.Z.getters.layoutConfig("aside.display")})),f=((0,a.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("toolbar.width")})),(0,a.Fl)((function(){return i.Z.getters.layoutConfig("toolbar.display")}))),g=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("loader.display")})),p=(0,a.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("content.width")})),b=(0,a.Fl)((function(){return""+i.Z.getters.layoutConfig("loader.logo")})),v=(0,a.Fl)((function(){return!!i.Z.getters.layoutConfig("aside.display")})),y=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("aside.theme")})),h=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("toolbar.display")})),w=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("aside.menuIcon")})),x=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("main.logo.light")})),_=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("main.logo.dark")})),k=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("header.menuIcon")})),C=(0,a.Fl)((function(){return i.Z.getters.layoutConfig("illustrations.set")}))},8168:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(66252),i=n(3577),o={class:"card"},r={class:"card-body p-0"},s={class:"card-px text-center py-20 my-10"},l={class:"fs-2x fw-bold mb-10"},c={class:"text-gray-400 fs-5 fw-semobold mb-13"},u=["innerHTML"],d=["data-bs-target"],m={class:"text-center px-5"},f=["src"];function g(e,t,n,g,p,b){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[(0,a._)("div",s,[(0,a._)("h2",l,(0,i.zw)(e.title),1),(0,a._)("p",c,[(0,a._)("span",{innerHTML:e.description},null,8,u)]),(0,a._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#".concat(e.modalId)},(0,i.zw)(e.buttonText),9,d)]),(0,a._)("div",m,[(0,a._)("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,f)])])])}var p=(0,a.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),b=n(83744);const v=(0,b.Z)(p,[["render",g]]);var y=v},19379:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(66252);function i(e,t,n,i,o,r){var s=(0,a.up)("KTModalCard"),l=(0,a.up)("KTViewUsersModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s,{title:"View Users Modal Example",description:"Click on the below buttons to launch <br/>user lists example.",image:e.getIllustrationsPath("10.png"),"button-text":"View Users","modal-id":"kt_modal_view_users"},null,8,["image"]),(0,a.Wm)(l)],64)}var o=n(8168),r=n(3577),s={class:"modal fade",id:"kt_modal_view_users",tabindex:"-1","aria-hidden":"true"},l={class:"modal-dialog mw-650px"},c={class:"modal-content"},u={class:"modal-header pb-0 border-0 justify-content-end"},d={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},m={class:"svg-icon svg-icon-1"},f={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},g=(0,a._)("div",{class:"text-center mb-13"},[(0,a._)("h1",{class:"mb-3"},"Browse Users"),(0,a._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,a.Uk)(" If you need more info, please check out our "),(0,a._)("a",{href:"#",class:"link-primary fw-bold"},"Users Directory"),(0,a.Uk)(". ")])],-1),p={class:"mb-15"},b={class:"mh-375px scroll-y me-n7 pe-7"},v={class:"d-flex align-items-center"},y={class:"symbol symbol-35px symbol-circle"},h=["src"],w={class:"ms-6"},x={href:"#",class:"d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"},_={class:"badge badge-light fs-8 fw-semobold ms-2"},k={class:"fw-semobold text-gray-400"},C={class:"d-flex"},Z={class:"text-end"},F={class:"fs-5 fw-bold text-dark"},M=(0,a._)("div",{class:"fs-7 text-muted"},"Sales",-1),D=(0,a.uE)('<div class="d-flex justify-content-between"><div class="fw-semobold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="" checked="checked"><span class="form-check-label fw-semobold text-gray-400"> Allowed </span></label></div>',1);function T(e,t,n,i,o,T){var U=(0,a.up)("inline-svg");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",l,[(0,a._)("div",c,[(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("span",m,[(0,a.Wm)(U,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,a._)("div",f,[g,(0,a._)("div",p,[(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users,(function(e,t){return(0,a.wg)(),(0,a.iD)("div",{key:t,class:"d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed"},[(0,a._)("div",v,[(0,a._)("div",y,[e.avatar?((0,a.wg)(),(0,a.iD)("img",{key:0,alt:"Pic",src:e.avatar},null,8,h)):((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,r.C_)(["bg-light-".concat(e.state," text-").concat(e.state),"symbol-label fw-semobold"])},(0,r.zw)(e.name.charAt(0)),3))]),(0,a._)("div",w,[(0,a._)("a",x,[(0,a.Uk)((0,r.zw)(e.name)+" ",1),(0,a._)("span",_,(0,r.zw)(e.position),1)]),(0,a._)("div",k,(0,r.zw)(e.email),1)])]),(0,a._)("div",C,[(0,a._)("div",Z,[(0,a._)("div",F," $"+(0,r.zw)(e.sales),1),M])])])})),128))])]),D])])])])}var U=(0,a.aZ)({name:"view-users-modal",components:{},setup:function(){var e=[{avatar:"media/avatars/300-6.jpg",name:"Emma Smith",email:"e.smith@kpmg.com.au",position:"Art Director",sales:"23,000"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",position:"Marketing Analytic",sales:"50,500"},{avatar:"media/avatars/300-1.jpg",name:"Max Smith",email:"max@kt.com",position:"Software Enginer",sales:"75,900"},{avatar:"media/avatars/300-1.jpg",name:"Sean Bean",email:"sean@dellito.com",position:"Web Developer",sales:"10,500"},{avatar:"media/avatars/300-25.jpg",name:"Brian Cox",email:"brian@exchange.com",position:"UI/UX Designer",sales:"20,000"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",position:"Head Of Marketing",sales:"9,300"},{avatar:"media/avatars/300-9.jpg",name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",position:"Software Arcitect",sales:"15,000"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",position:"System Admin",sales:"23,000"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",position:"Account Manager",sales:"45,000"},{avatar:"media/avatars/300-23.jpg",name:"Dan Wilson",email:"dam@consilting.com",position:"Web Desinger",sales:"90,500"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",position:"Corporate Finance",sales:"5,000"},{avatar:"media/avatars/300-12.jpg",name:"Ana Crown",email:"ana.cf@limtel.com",position:"Customer Relationship",sales:"70,000"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",position:"Marketing Executive",sales:"45,500"}];return{users:e}}}),A=n(83744);const I=(0,A.Z)(U,[["render",T]]);var S=I,j=n(68932),B=n(79097),E=(0,a.aZ)({name:"view-users",components:{KTModalCard:o.Z,KTViewUsersModal:S},setup:function(){return(0,a.bv)((function(){(0,j.M)("View Users",["Modals","General"])})),{getIllustrationsPath:B.O}}});const O=(0,A.Z)(E,[["render",i]]);var z=O}}]);