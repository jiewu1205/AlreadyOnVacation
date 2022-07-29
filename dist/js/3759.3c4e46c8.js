"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[3759,2848],{68932:function(e,t,a){a.d(t,{M:function(){return o},V:function(){return i}});var l=a(49486),n=a(15758),o=function(e,t){l.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},i=function(e){l.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e})}},5080:function(e,t,a){a.d(t,{$Q:function(){return u},BK:function(){return c},Df:function(){return k},F9:function(){return v},Fh:function(){return s},Gv:function(){return D},K1:function(){return _},Lj:function(){return d},NK:function(){return i},Yn:function(){return w},_T:function(){return b},az:function(){return h},jH:function(){return r},o$:function(){return f},o4:function(){return y},pD:function(){return g},vc:function(){return o},vj:function(){return x},xV:function(){return m},zK:function(){return p}});var l=a(66252),n=a(49486),o=(0,l.Fl)((function(){return n.Z.getters.layoutConfig()})),i=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("sidebar.display")})),r=(0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("footer.width")})),s=(0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("header.width")})),d=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.left")})),c=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.fixed.desktop")})),u=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.fixed.tabletAndMobile")})),f=(0,l.Fl)((function(){return!0===n.Z.getters.layoutConfig("aside.display")})),m=((0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("toolbar.width")})),(0,l.Fl)((function(){return n.Z.getters.layoutConfig("toolbar.display")}))),p=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("loader.display")})),b=(0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("content.width")})),g=(0,l.Fl)((function(){return""+n.Z.getters.layoutConfig("loader.logo")})),_=(0,l.Fl)((function(){return!!n.Z.getters.layoutConfig("aside.display")})),v=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("aside.theme")})),h=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("toolbar.display")})),y=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("aside.menuIcon")})),k=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("main.logo.light")})),x=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("main.logo.dark")})),w=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.menuIcon")})),D=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("illustrations.set")}))},38561:function(e,t,a){a.d(t,{P:function(){return o},V:function(){return n}});var l=a(91205),n=function(e){if(e){var t=l.u_.getInstance(e);t.hide()}},o=function(){document.querySelectorAll(".modal-backdrop.fade.show").length&&document.querySelectorAll(".modal-backdrop.fade.show").forEach((function(e){e.remove()}))}},65962:function(e,t,a){var l=a(31528),n=a.n(l),o=a(15758),i=a(49486),r=a(5080),s=function(){function e(){}return e.init=function(){e.initLayout(),e.initHeader(),e.initToolbar(),e.initAside(),e.initSidebar(),e.initFooter()},e.initLayout=function(){i.Z.dispatch(o.e.ADD_BODY_ATTRIBUTE,{qulifiedName:"id",value:"kt_body"}),n().get(r.vc.value,"loader.display")&&(i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"page-loading-enabled"),i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"page-loading"))},e.initHeader=function(){n().get(r.vc.value,"header.fixed.desktop")&&i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"header-fixed"),n().get(r.vc.value,"header.fixed.tabletAndMobile")&&i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"header-tablet-and-mobile-fixed")},e.initToolbar=function(){n().get(r.vc.value,"toolbar.display")&&(i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"toolbar-enabled"),n().get(r.vc.value,"toolbar.fixed")&&i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"toolbar-fixed"),i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"toolbar-tablet-and-mobile-fixed"))},e.initAside=function(){n().get(r.vc.value,"aside.display")&&i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"aside-enabled")},e.initSidebar=function(){n().get(r.vc.value,"sidebar.display")&&i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"sidebar-enabled")},e.initFooter=function(){"fixed"===n().get(r.vc.value,"footer.width")&&i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"footer-fixed")},e.enableSidebar=function(){r.vc.value.sidebar.display=!0,i.Z.dispatch(o.e.ADD_BODY_CLASSNAME,"sidebar-enabled")},e.disableSidebar=function(){r.vc.value.sidebar.display=!1,i.Z.dispatch(o.e.REMOVE_BODY_CLASSNAME,"sidebar-enabled")},e}();t["Z"]=s},13759:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(66252);function n(e,t,a,n,o,i){var r=(0,l.up)("Documents");return(0,l.wg)(),(0,l.j4)(r)}var o=a(65962),i=a(42848),r=a(68932),s=(0,l.aZ)({name:"main-dashboard",components:{Documents:i["default"]},setup:function(){(0,l.bv)((function(){(0,r.V)("我的文件"),localStorage.getItem("config")||o.Z.enableSidebar()})),(0,l.Ah)((function(){localStorage.getItem("config")||o.Z.disableSidebar()}))}}),d=a(83744);const c=(0,d.Z)(s,[["render",n]]);var u=c},42848:function(e,t,a){a.r(t),a.d(t,{default:function(){return Xe}});var l=a(66252),n={class:"d-flex flex-wrap flex-stack mb-6"},o=(0,l._)("h3",{class:"fw-semobold my-2 text-gray-400"}," 共100个文件 ",-1),i={class:"d-flex my-2"},r={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},s=(0,l._)("div",{class:"col d-none d-xl-block"},null,-1),d=(0,l._)("div",{class:"col d-none d-xl-block"},null,-1),c={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},u={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},f=(0,l._)("div",{class:"col d-none d-xl-block"},null,-1),m=(0,l._)("div",{class:"col d-none d-xl-block"},null,-1),p=(0,l._)("div",{class:"col d-none d-xl-block"},null,-1);function b(e,t,a,b,g,_){var v=(0,l.up)("KTFolder"),h=(0,l.up)("KTFile");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",n,[o,(0,l._)("div",i,[(0,l._)("input",{type:"file",id:"btn_file",style:{display:"none"},ref:"hiddenInput",onChange:t[0]||(t[0]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.uploadFile&&e.uploadFile.apply(e,t)})},null,544),(0,l._)("a",{href:"#",class:"btn btn-primary btn-sm","data-bs-toggle":"tooltip",title:"Coming soon",onClick:t[1]||(t[1]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.selectFile&&e.selectFile.apply(e,t)})}," 上传文件 ")])]),(0,l._)("div",r,[(0,l.Wm)(v,{"folder-name":"Finance",files:"7"}),(0,l.Wm)(v,{"folder-name":"Customers",files:"3"}),(0,l.Wm)(v,{"folder-name":"CRM Project",files:"25"}),s,d]),(0,l._)("div",c,[(0,l.Wm)(h,{"file-title":"Project Reqs..","file-type":"pdf","created-at":"3 days ago"}),(0,l.Wm)(h,{"file-title":"CRM App Docs..","file-type":"doc","created-at":"3 days ago"}),(0,l.Wm)(h,{"file-title":"User CRUD Styles","file-type":"css","created-at":"4 days ago"}),(0,l.Wm)(h,{"file-title":"Metronic Logo","file-type":"ai","created-at":"5 days ago"}),(0,l.Wm)(h,{"file-title":"Orders backup","file-type":"sql","created-at":"1 week ago"})]),(0,l._)("div",u,[(0,l.Wm)(h,{"file-title":"UTAIR CRM API Co..","file-type":"xml","created-at":"2 weeks ago"}),(0,l.Wm)(h,{"file-title":"Tower Hill App..","file-type":"tif","created-at":"3 weeks ago"}),f,m,p])],64)}var g=a(70655),_=a(2262),v={class:"col-12 col-sm-12 col-xl"},h=(0,l.uE)('<div class="card h-100"><div class="card-body d-flex justify-content-center text-center flex-column p-8"><a href="#" class="text-gray-800 text-hover-primary d-flex flex-column"><div class="symbol symbol-75px mb-6"><img src="media/svg/files/folder-document.svg" alt=""></div><div class="fs-5 fw-bold mb-2">Finance</div></a><div class="fs-7 fw-semobold text-gray-400 mt-auto">7 files</div></div></div>',1),y=[h];function k(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("div",v,y)}var x=(0,l.aZ)({name:"folder-card",props:{folderName:String,files:String},components:{}}),w=a(83744);const D=(0,w.Z)(x,[["render",k]]);var A=D,C=a(3577),S={class:"col-12 col-sm-12 col-xl"},Z={class:"card h-100"},F={class:"card-body d-flex justify-content-center text-center flex-column p-8","data-kt-menu-trigger":"click","data-kt-menu-overflow":"true","data-kt-menu-placement":"{default:'bottom', 'lg': 'right-start'}"},M={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},B={class:"symbol symbol-60px mb-6"},E=["src"],L={class:"fs-5 fw-bold mb-2"},T={class:"fs-7 fw-semobold text-gray-400 mt-auto"};function W(e,t,a,n,o,i){var r=(0,l.up)("FileMenu");return(0,l.wg)(),(0,l.iD)("div",S,[(0,l._)("div",Z,[(0,l._)("div",F,[(0,l._)("a",M,[(0,l._)("div",B,[(0,l._)("img",{src:"media/svg/files/".concat(e.fileType,".svg"),alt:""},null,8,E)]),(0,l._)("div",L,(0,C.zw)(e.fileTitle),1)]),(0,l._)("div",T,(0,C.zw)(e.createdAt),1)]),(0,l.Wm)(r)])])}var R=(0,l.uE)('<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold py-4 fs-6 w-100px" data-kt-menu="true"><div class="menu-item px-5"><a class="menu-link px-5"> 下载 </a></div><div class="menu-item px-5" data-bs-toggle="modal" data-bs-target="#kt_modal_share_file"><a class="menu-link px-5"> 分享 </a></div><div class="menu-item px-5"><a class="menu-link px-5"> 删除 </a></div><div class="menu-item px-5"><a class="menu-link px-5"> 属性 </a></div></div>',1);function V(e,t,a,n,o,i){var r=(0,l.up)("ShareFileModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[R,(0,l.Wm)(r)],64)}var U=a(85845),O=a(33907),N=a(22201),I=a(49963),Y={class:"modal fade",id:"kt_modal_share_file",ref:"addCustomerModalRef",tabindex:"-1","aria-hidden":"true"},H={class:"modal-dialog modal-dialog-centered mw-650px"},j={class:"modal-content"},P={class:"modal-header",id:"kt_modal_add_customer_header"},K=(0,l._)("h2",{class:"fw-bold"},"分享文件",-1),q={id:"kt_modal_add_customer_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},z={class:"svg-icon svg-icon-1"},G={class:"modal-body py-10 px-lg-17"},Q={class:"scroll-y me-n7 pe-7",id:"kt_modal_add_customer_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_customer_header","data-kt-scroll-wrappers":"#kt_modal_add_customer_scroll","data-kt-scroll-offset":"300px"},$={class:"fv-row mb-7"},J=(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"分享文件名",-1),X={class:"fv-row mb-7"},ee=(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},[(0,l._)("span",null,"分享者")],-1),te={class:"fv-row mb-15"},ae=(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"分享信息",-1),le={class:"fw-bold fs-3 rotate collapsible mb-7","data-bs-toggle":"collapse",href:"#kt_modal_add_customer_billing_info",role:"button","aria-expanded":"false","aria-controls":"kt_customer_view_details"},ne=(0,l.Uk)(" 分享权限设定 "),oe={class:"ms-2 rotate-180"},ie={class:"svg-icon svg-icon-3"},re={id:"kt_modal_add_customer_billing_info",class:"collapse show"},se={class:"row g-9 mb-7"},de={class:"col-md-6 fv-row"},ce=(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"过期时间",-1),ue={class:"col-md-6 fv-row"},fe=(0,l._)("label",{class:"fs-6 fw-semobold mb-2"},"可下载次数",-1),me=(0,l._)("div",{class:"fv-row mb-7"},[(0,l._)("div",{class:"d-flex flex-stack"},[(0,l._)("div",{class:"me-5"},[(0,l._)("label",{class:"fs-6 fw-semobold"},"允许签名校验？"),(0,l._)("div",{class:"fs-7 fw-semobold text-muted"}," 将共享您的RSA公钥，以便访问者进行签名校验 ")]),(0,l._)("label",{class:"form-check form-switch form-check-custom form-check-solid"},[(0,l._)("input",{class:"form-check-input",name:"billing",type:"checkbox",value:"1",id:"kt_modal_add_customer_billing",checked:"checked"}),(0,l._)("span",{class:"form-check-label fw-semobold text-muted",for:"kt_modal_add_customer_billing"}," 是 ")])])],-1),pe=(0,l._)("div",{class:"fv-row mb-7"},[(0,l._)("div",{class:"d-flex flex-stack"},[(0,l._)("div",{class:"me-5"},[(0,l._)("label",{class:"fs-6 fw-semobold"},"允许用户下载解密后文件？"),(0,l._)("div",{class:"fs-7 fw-semobold text-muted"}," 若允许，该文件的加密密钥将会公开，但不会公开您的账户密钥。 ")]),(0,l._)("label",{class:"form-check form-switch form-check-custom form-check-solid"},[(0,l._)("input",{class:"form-check-input",name:"billing",type:"checkbox",value:"1",id:"kt_modal_add_customer_billing",checked:"checked"}),(0,l._)("span",{class:"form-check-label fw-semobold text-muted",for:"kt_modal_add_customer_billing"}," 是 ")])])],-1),be={class:"modal-footer flex-center"},ge=(0,l._)("button",{type:"reset",id:"kt_modal_add_customer_cancel",class:"btn btn-light me-3"}," 取消 ",-1),_e=["data-kt-indicator"],ve={key:0,class:"indicator-label"},he=(0,l.Uk)(" 提交 "),ye={class:"svg-icon svg-icon-3 ms-2 me-0"},ke={key:1,class:"indicator-progress"},xe=(0,l.Uk)(" 分享中... "),we=(0,l._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1),De=[xe,we],Ae={class:"modal-body scroll-y pt-0 pb-15"},Ce={class:"mw-lg-600px mx-auto"},Se=(0,l._)("div",{class:"mb-13 text-center"},[(0,l._)("h1",{class:"mb-3"},"Share & Earn"),(0,l._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,l.Uk)(" If you need more info, please check "),(0,l._)("a",{href:"#",class:"link-primary fw-bold"},"Author Commision"),(0,l.Uk)(". ")])],-1),Ze={class:"mb-10"},Fe=(0,l._)("h4",{class:"fs-5 fw-semobold text-gray-800"}," Share my referral link with friends ",-1),Me={class:"d-flex"},Be={ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:"https://keenthemes.com/?ref=skitechnology"},Ee={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bold flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},Le=(0,l.uE)('<div class="d-flex"><a href="#" class="btn btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-15px me-3"> Import Contacts </a><a href="#" class="btn btn-icon btn-facebook w-100 mx-6"><img alt="Logo" src="media/svg/brand-logos/facebook-2.svg" class="h-20px me-3"> Facebook </a><a href="#" class="btn btn-icon btn-twitter w-100"><img alt="Logo" src="media/svg/brand-logos/twitter.svg" class="h-20px me-3"> Twitter </a></div><div class="d-flex align-items-center mt-10"><div class="flex-grow-1"><span class="fs-6 fw-semobold text-gray-800 d-block">Adding Users by Team Members</span><span class="fs-7 fw-semobold text-gray-400">If you need more info, please check budget planning</span></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked="checked"><span class="form-check-label"> Allowed </span></label></div>',2);function Te(e,t,a,n,o,i){var r=(0,l.up)("inline-svg"),s=(0,l.up)("el-input"),d=(0,l.up)("el-form-item"),c=(0,l.up)("el-date-picker"),u=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("div",H,[(0,l._)("div",j,[(0,l._)("div",P,[K,(0,l._)("div",q,[(0,l._)("span",z,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,l.Wm)(u,{onSubmit:t[5]||(t[5]=(0,I.iM)((function(t){return e.submit()}),["prevent"])),model:e.formData,ref:"formRef"},{default:(0,l.w5)((function(){return[(0,l._)("div",G,[(0,l._)("div",Q,[(0,l._)("div",$,[J,(0,l.Wm)(d,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(s,{modelValue:e.formData.share_filename,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData.share_filename=t}),type:"text",placeholder:"",disabled:""},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",X,[ee,(0,l.Wm)(d,{prop:"email"},{default:(0,l.w5)((function(){return[(0,l.Wm)(s,{modelValue:e.formData.email,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formData.email=t}),disabled:""},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",te,[ae,(0,l.Wm)(d,{prop:"description"},{default:(0,l.w5)((function(){return[(0,l.Wm)(s,{modelValue:e.formData.description,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.formData.description=t}),type:"textarea",placeholder:"该信息将显示与分享页面"},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",le,[ne,(0,l._)("span",oe,[(0,l._)("span",ie,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr072.svg"})])])]),(0,l._)("div",re,[(0,l._)("div",se,[(0,l._)("div",de,[ce,(0,l.Wm)(d,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(c,{modelValue:e.formData.addressLine,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.formData.addressLine=t}),placeholder:"请选择",name:"dueDate"},null,8,["modelValue"])]})),_:1})]),(0,l._)("div",ue,[fe,(0,l.Wm)(d,{prop:"postCode"},{default:(0,l.w5)((function(){return[(0,l.Wm)(s,{modelValue:e.formData.postCode,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.formData.postCode=t}),type:"number",min:"1"},null,8,["modelValue"])]})),_:1})])]),me,pe])])]),(0,l._)("div",be,[ge,(0,l._)("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",ve,[he,(0,l._)("span",ye,[(0,l.Wm)(r,{src:"media/icons/duotune/arrows/arr064.svg"})])])),e.loading?((0,l.wg)(),(0,l.iD)("span",ke,De)):(0,l.kq)("",!0)],8,_e)])]})),_:1},8,["model"]),(0,l._)("div",Ae,[(0,l._)("div",Ce,[Se,(0,l._)("div",Ze,[Fe,(0,l._)("div",Me,[(0,l._)("input",Be,null,512),(0,l._)("button",Ee," Copy Link ",512)])]),Le])])])])],512)}var We=a(38561),Re=a(78764),Ve=a.n(Re),Ue=(0,l.aZ)({name:"share-file-modal",components:{},setup:function(){var e=(0,_.iH)(null),t=(0,_.iH)(null),a=(0,_.iH)(!1),l=(0,_.iH)({share_filename:"Sean Bean",email:"sean@dellito.com",description:"",addressLine:"101, Collins Street",addressLine2:"",town:"Melbourne",state:"Victoria",postCode:"3000",country:"US"}),n=function(){e.value&&e.value.validate((function(e){if(!e)return Ve().fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}),!1;a.value=!0,setTimeout((function(){a.value=!1,Ve().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){(0,We.V)(t.value)}))}),2e3)}))};return{formData:l,submit:n,formRef:e,loading:a,addCustomerModalRef:t}}});const Oe=(0,w.Z)(Ue,[["render",Te]]);var Ne=Oe,Ie=(0,l.aZ)({name:"file-menu",components:{ShareFileModal:Ne},setup:function(){(0,N.tv)(),(0,U.QT)(),(0,O.oR)();return{}}});const Ye=(0,w.Z)(Ie,[["render",V]]);var He=Ye,je=(0,l.aZ)({name:"file-card",props:{fileTitle:String,createdAt:String,fileType:String},components:{FileMenu:He}});const Pe=(0,w.Z)(je,[["render",W]]);var Ke=Pe,qe=a(68932),ze=a(81354),Ge=a.n(ze),Qe=a(15758),$e=(0,l.aZ)({name:"profile-documents",components:{KTFolder:A,KTFile:Ke},setup:function(){(0,l.bv)((function(){(0,qe.M)("Documents",["Pages","Profile"])}));var e=(0,_.iH)(null),t=(0,O.oR)();return{hiddenInput:e,selectFile:function(){e.value&&e.value.click()},uploadFile:function(e){if(null!=e.target){var a=e.target["files"][0],l=new FileReader;l.readAsDataURL(a),l.onload=function(){return(0,g.mG)(this,void 0,void 0,(function(){var e,l,n;return(0,g.Jh)(this,(function(o){switch(o.label){case 0:return e=Array.from(crypto.getRandomValues(new Uint8Array(16))).map((function(e){return e.toString(16)})).join(""),e=Ge().MD5(e).toString(),"string"!==typeof this.result?[3,2]:(l=Ge().enc.Utf8.parse(this.result),n=Ge().AES.encrypt(l,e,{mode:Ge().mode.ECB,padding:Ge().pad.Pkcs7}).toString(),[4,t.dispatch(Qe.e.UPLOAD_FILE,{name:a.name,type:a.type,encrypted:n,file_enc_key:e})]);case 1:o.sent(),o.label=2;case 2:return[2]}}))}))}}}}}});const Je=(0,w.Z)($e,[["render",b]]);var Xe=Je}}]);