"use strict";(self["webpackChunkdemo3"]=self["webpackChunkdemo3"]||[]).push([[997],{79097:function(e,t,a){a.d(t,{O:function(){return r}});var l=a(5080),n=a(48246),r=function(e){var t=e.substring(e.lastIndexOf("."),e.length),a="dark"==n.Z.getters.getThemeMode?"".concat(e.substring(0,e.lastIndexOf(".")),"-dark"):e.substring(0,e.lastIndexOf("."));return"media/illustrations/".concat(l.Gv.value,"/").concat(a).concat(t)}},68932:function(e,t,a){a.d(t,{M:function(){return r},V:function(){return s}});var l=a(48246),n=a(15758),r=function(e,t){l.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},s=function(e){l.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e})}},5080:function(e,t,a){a.d(t,{$Q:function(){return u},BK:function(){return c},Df:function(){return h},F9:function(){return b},Fh:function(){return i},Gv:function(){return S},K1:function(){return g},Lj:function(){return d},NK:function(){return s},Yn:function(){return w},_T:function(){return v},az:function(){return y},jH:function(){return o},o$:function(){return m},o4:function(){return k},pD:function(){return _},vc:function(){return r},vj:function(){return x},xV:function(){return p},zK:function(){return f}});var l=a(66252),n=a(48246),r=(0,l.Fl)((function(){return n.Z.getters.layoutConfig()})),s=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("sidebar.display")})),o=(0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("footer.width")})),i=(0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("header.width")})),d=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.left")})),c=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.fixed.desktop")})),u=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.fixed.tabletAndMobile")})),m=(0,l.Fl)((function(){return!0===n.Z.getters.layoutConfig("aside.display")})),p=((0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("toolbar.width")})),(0,l.Fl)((function(){return n.Z.getters.layoutConfig("toolbar.display")}))),f=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("loader.display")})),v=(0,l.Fl)((function(){return"fluid"===n.Z.getters.layoutConfig("content.width")})),_=(0,l.Fl)((function(){return""+n.Z.getters.layoutConfig("loader.logo")})),g=(0,l.Fl)((function(){return!!n.Z.getters.layoutConfig("aside.display")})),b=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("aside.theme")})),y=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("toolbar.display")})),k=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("aside.menuIcon")})),h=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("main.logo.light")})),x=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("main.logo.dark")})),w=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("header.menuIcon")})),S=(0,l.Fl)((function(){return n.Z.getters.layoutConfig("illustrations.set")}))},80997:function(e,t,a){a.r(t),a.d(t,{default:function(){return At}});var l=a(66252),n=function(e){return(0,l.dD)("data-v-56946e72"),e=e(),(0,l.Cn)(),e},r={class:"d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column",ref:"wizardRef",id:"kt_create_account_stepper"},s={class:"d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm"},o={class:"d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y"},i={class:"d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20"},d=n((function(){return(0,l._)("img",{alt:"Logo",src:"media/logos/default.svg",class:"h-40px"},null,-1)})),c=(0,l.uE)('<div class="stepper-nav" data-v-56946e72><div class="stepper-item current" data-kt-stepper-element="nav" data-v-56946e72><div class="stepper-line w-40px" data-v-56946e72></div><div class="stepper-icon w-40px h-40px" data-v-56946e72><i class="stepper-check fas fa-check" data-v-56946e72></i><span class="stepper-number" data-v-56946e72>1</span></div><div class="stepper-label" data-v-56946e72><h3 class="stepper-title" data-v-56946e72>账户信息设置</h3><div class="stepper-desc fw-semobold" data-v-56946e72>设置邮箱、密码</div></div></div><div class="stepper-item" data-kt-stepper-element="nav" data-v-56946e72><div class="stepper-line w-40px" data-v-56946e72></div><div class="stepper-icon w-40px h-40px" data-v-56946e72><i class="stepper-check fas fa-check" data-v-56946e72></i><span class="stepper-number" data-v-56946e72>2</span></div><div class="stepper-label" data-v-56946e72><h3 class="stepper-title" data-v-56946e72>Salt生成</h3><div class="stepper-desc fw-semobold" data-v-56946e72> 根据Email与客户端随机数生成Salt </div></div></div><div class="stepper-item" data-kt-stepper-element="nav" data-v-56946e72><div class="stepper-line w-40px" data-v-56946e72></div><div class="stepper-icon w-40px h-40px" data-v-56946e72><i class="stepper-check fas fa-check" data-v-56946e72></i><span class="stepper-number" data-v-56946e72>3</span></div><div class="stepper-label" data-v-56946e72><h3 class="stepper-title" data-v-56946e72>衍生密钥生成</h3><div class="stepper-desc fw-semobold" data-v-56946e72> 根据密码、Salt生成衍生密钥 </div></div></div><div class="stepper-item" data-kt-stepper-element="nav" data-v-56946e72><div class="stepper-line w-40px" data-v-56946e72></div><div class="stepper-icon w-40px h-40px" data-v-56946e72><i class="stepper-check fas fa-check" data-v-56946e72></i><span class="stepper-number" data-v-56946e72>4</span></div><div class="stepper-label" data-v-56946e72><h3 class="stepper-title" data-v-56946e72>主密钥生成</h3></div></div><div class="stepper-item" data-kt-stepper-element="nav" data-v-56946e72><div class="stepper-line w-40px" data-v-56946e72></div><div class="stepper-icon w-40px h-40px" data-v-56946e72><i class="stepper-check fas fa-check" data-v-56946e72></i><span class="stepper-number" data-v-56946e72>5</span></div><div class="stepper-label" data-v-56946e72><h3 class="stepper-title" data-v-56946e72>完成</h3><div class="stepper-desc fw-semobold" data-v-56946e72>提交注册</div></div></div></div>',1),u={class:"d-flex flex-column flex-lg-row-fluid py-10"},m={class:"d-flex flex-center flex-column flex-column-fluid"},p={class:"w-lg-700px p-10 p-lg-15 mx-auto"},f={class:"current","data-kt-stepper-element":"content"},v={class:"","data-kt-stepper-element":"content"},_={class:"","data-kt-stepper-element":"content"},g={class:"","data-kt-stepper-element":"content"},b={class:"","data-kt-stepper-element":"content"},y={class:"d-flex flex-stack pt-15"},k={class:"mr-2"},h={class:"svg-icon svg-icon-4 me-1"},x=(0,l.Uk)(" 上一步 "),w={class:"indicator-label"},S=(0,l.Uk)(" 注册 "),F={class:"svg-icon svg-icon-3 ms-2 me-0"},E=n((function(){return(0,l._)("span",{class:"indicator-progress"},[(0,l.Uk)(" 提交中... "),(0,l._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1)})),C={key:1,type:"submit",class:"btn btn-lg btn-primary"},A=(0,l.Uk)(" 下一步 "),V={class:"svg-icon svg-icon-4 ms-1 me-0"},W=(0,l.uE)('<div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0" data-v-56946e72><div class="d-flex flex-center fw-semobold fs-6" data-v-56946e72><a href="#" class="text-muted text-hover-primary px-2" target="_blank" data-v-56946e72>About</a><a href="#" class="text-muted text-hover-primary px-2" target="_blank" data-v-56946e72>Support</a><a href="#" class="text-muted text-hover-primary px-2" target="_blank" data-v-56946e72>Purchase</a></div></div>',1);function Z(e,t,a,n,Z,M){var R=(0,l.up)("router-link"),U=(0,l.up)("Step1"),B=(0,l.up)("Step2"),D=(0,l.up)("Step3"),z=(0,l.up)("Step4"),P=(0,l.up)("Step5"),I=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",s,[(0,l._)("div",o,[(0,l._)("div",i,[(0,l.Wm)(R,{to:"/dashboard",class:"mb-10 mb-lg-20"},{default:(0,l.w5)((function(){return[d]})),_:1}),c])])]),(0,l._)("div",u,[(0,l._)("div",m,[(0,l._)("div",p,[(0,l._)("form",{class:"my-auto pb-5",novalidate:"novalidate",id:"kt_create_account_form",onSubmit:t[2]||(t[2]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.handleStep&&e.handleStep.apply(e,t)})},[(0,l._)("div",f,[(0,l.Wm)(U)]),(0,l._)("div",v,[(0,l.Wm)(B)]),(0,l._)("div",_,[(0,l.Wm)(D)]),(0,l._)("div",g,[(0,l.Wm)(z)]),(0,l._)("div",b,[(0,l.Wm)(P)]),(0,l._)("div",y,[(0,l._)("div",k,[(0,l._)("button",{type:"button",class:"btn btn-lg btn-light-primary me-3","data-kt-stepper-action":"previous",onClick:t[0]||(t[0]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.previousStep&&e.previousStep.apply(e,t)})},[(0,l._)("span",h,[(0,l.Wm)(I,{src:"media/icons/duotune/arrows/arr063.svg"})]),x])]),(0,l._)("div",null,[e.currentStepIndex===e.totalSteps-1?((0,l.wg)(),(0,l.iD)("button",{key:0,type:"button",ref:"submitButton",class:"btn btn-lg btn-primary me-3","data-kt-stepper-action":"submit",onClick:t[1]||(t[1]=function(t){return e.formSubmit()})},[(0,l._)("span",w,[S,(0,l._)("span",F,[(0,l.Wm)(I,{src:"media/icons/duotune/arrows/arr064.svg"})])]),E],512)):((0,l.wg)(),(0,l.iD)("button",C,[A,(0,l._)("span",V,[(0,l.Wm)(I,{src:"media/icons/duotune/arrows/arr064.svg"})])]))])])],32)])]),W])],512)}var M=a(70655),R=a(2262),U=a(79097),B={class:"w-100"},D=(0,l._)("div",{class:"pb-10 pb-lg-15"},[(0,l._)("h2",{class:"fw-bold text-dark"},"账户信息设置"),(0,l._)("div",{class:"text-gray-400 fw-semobold fs-6"},[(0,l.Uk)(" 请输入您的邮箱和密码，邮箱将被明文存储，密码不会以任何形式（明文、密文）传输和存储，可参阅我们的 "),(0,l._)("a",{href:"#",class:"link-primary fw-bold"},"实验报告"),(0,l.Uk)(". ")])],-1),z={class:"mb-10 fv-row"},P=(0,l._)("label",{class:"form-label mb-3"},"邮箱",-1),I={class:"mb-10 fv-row"},N=(0,l._)("label",{class:"form-label mb-3"},"密码",-1),O={class:"mb-10 fv-row"},T=(0,l._)("label",{class:"form-label mb-3"},"确认密码",-1);function G(e,t,a,n,r,s){var o=(0,l.up)("Field"),i=(0,l.up)("ErrorMessage");return(0,l.wg)(),(0,l.iD)("div",B,[D,(0,l._)("div",z,[P,(0,l.Wm)(o,{type:"email",class:"form-control form-control-lg form-control-solid",name:"accountEmail"}),(0,l.Wm)(i,{name:"accountEmail",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",I,[N,(0,l.Wm)(o,{type:"password",class:"form-control form-control-lg form-control-solid",name:"accountPassword"}),(0,l.Wm)(i,{name:"accountPassword",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",O,[T,(0,l.Wm)(o,{type:"password",class:"form-control form-control-lg form-control-solid",name:"accountConfirmPassword"}),(0,l.Wm)(i,{name:"accountConfirmPassword",class:"fv-plugins-message-container invalid-feedback"})])])}var H=a(12954),K=(0,l.aZ)({name:"step-1",components:{Field:H.gN,ErrorMessage:H.Bc}}),L=a(83744);const Y=(0,L.Z)(K,[["render",G]]);var j=Y,q=a(3577),$={class:"w-100"},J=(0,l._)("div",{class:"pb-10 pb-lg-15"},[(0,l._)("h2",{class:"fw-bold text-dark"},"Salt生成"),(0,l._)("div",{class:"text-gray-400 fw-semobold fs-6"},[(0,l.Uk)(" 已经生成客户端随机数、填充字符串、Salt值。详细信息请参阅我们的 "),(0,l._)("a",{href:"#",class:"link-primary fw-bold"},"实验报告"),(0,l.Uk)(". ")])],-1),Q={class:"mb-10 fv-row"},X={class:"form-label mb-3"},ee=(0,l._)("div",{class:"form-text"}," 客户端随机数是在本地使用crypto.getRandomValues()生成的随机数，用于计算salt，同时会明文存储于数据库中。 ",-1),te={class:"mb-10 fv-row"},ae={class:"form-label mb-3"},le=(0,l._)("div",{class:"form-text"}," 将邮箱和客户端随机字符串组合后，使用字符w填充至长度为64的字符串。保证每次计算规模一致，防止时间攻击。 ",-1),ne={class:"mb-10 fv-row"},re={class:"form-label mb-3"},se=(0,l._)("div",{class:"form-text"}," SHA-256(填充字符串)，用于后续密码加密。Salt不会被发送至服务端，服务端只存储客户端随机数，每次重新计算Salt，防止枚举攻击。 ",-1);function oe(e,t,a,n,r,s){var o=(0,l.up)("Field"),i=(0,l.up)("ErrorMessage");return(0,l.wg)(),(0,l.iD)("div",$,[J,(0,l._)("div",Q,[(0,l._)("label",X,"客户端随机数（"+(0,q.zw)(e.client_random.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"ClientRandom",readonly:"",modelValue:e.client_random,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.client_random=t})},null,8,["modelValue"]),ee,(0,l.Wm)(i,{name:"ClientRandom",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",te,[(0,l._)("label",ae,"填充字符串（"+(0,q.zw)(e.padded_client_random.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"padded_client_random",readonly:"",modelValue:e.padded_client_random,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.padded_client_random=t})},null,8,["modelValue"]),le,(0,l.Wm)(i,{name:"padded_client_random",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",ne,[(0,l._)("label",re,"Salt（"+(0,q.zw)(e.enc_salt.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"enc_salt",readonly:"",modelValue:e.enc_salt,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.enc_salt=t})},null,8,["modelValue"]),se,(0,l.Wm)(i,{name:"enc_salt",class:"fv-plugins-message-container invalid-feedback"})])])}var ie=a(33907),de=(0,l.aZ)({name:"step-2",components:{Field:H.gN,ErrorMessage:H.Bc},setup:function(){var e=(0,ie.oR)();return{client_random:(0,l.Fl)((function(){return e.state.AuthModule.client_random})),padded_client_random:(0,l.Fl)((function(){return e.state.AuthModule.padded_client_random})),enc_salt:(0,l.Fl)((function(){return e.state.AuthModule.enc_salt}))}}});const ce=(0,L.Z)(de,[["render",oe]]);var ue=ce,me={class:"w-100"},pe=(0,l._)("div",{class:"pb-10 pb-lg-15"},[(0,l._)("h2",{class:"fw-bold text-dark"},"账户密钥生成"),(0,l._)("div",{class:"text-gray-400 fw-semobold fs-6"},[(0,l.Uk)(" 生成各类安全密钥，详见 "),(0,l._)("a",{href:"#",class:"link-primary fw-bold"},"实验报告"),(0,l.Uk)(". ")])],-1),fe={class:"mb-10 fv-row"},ve={class:"form-label mb-3"},_e=(0,l._)("div",{class:"form-text"}," 根据您设定的密码及上一步生成的Salt生成的衍生密钥。 ",-1),ge={class:"mb-10 fv-row"},be={class:"form-label mb-3"},ye=(0,l._)("div",{class:"form-text"},"衍生密钥的前半部分，用于加密账户主密钥。",-1),ke={class:"mb-10 fv-row"},he={class:"form-label mb-3"},xe=(0,l._)("div",{class:"form-text"}," 衍生密钥的后半部分，用于登录过程中的身份验证。 ",-1),we={class:"mb-10 fv-row"},Se={class:"form-label mb-3"},Fe=(0,l._)("div",{class:"form-text"}," 衍生认证密钥的哈希值，将发送并存储于服务器，用于登录时比对。使用MD5算法。 ",-1);function Ee(e,t,a,n,r,s){var o=(0,l.up)("Field"),i=(0,l.up)("ErrorMessage");return(0,l.wg)(),(0,l.iD)("div",me,[pe,(0,l._)("div",fe,[(0,l._)("label",ve,"衍生密钥（"+(0,q.zw)(e.derived_key.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"derived_key",readonly:"",modelValue:e.derived_key,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.derived_key=t})},null,8,["modelValue"]),_e,(0,l.Wm)(i,{name:"derived_key",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",ge,[(0,l._)("label",be,"衍生加密密钥（"+(0,q.zw)(e.derived_encryption_key.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"derived_encryption_key",readonly:"",modelValue:e.derived_encryption_key,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.derived_encryption_key=t})},null,8,["modelValue"]),ye,(0,l.Wm)(i,{name:"derived_encryption_key",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",ke,[(0,l._)("label",he,"衍生认证密钥（"+(0,q.zw)(e.derived_auth_key.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"derived_auth_key",readonly:"",modelValue:e.derived_auth_key,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.derived_auth_key=t})},null,8,["modelValue"]),xe,(0,l.Wm)(i,{name:"derived_auth_key",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",we,[(0,l._)("label",Se,"衍生认证密钥哈希值（"+(0,q.zw)(e.derived_auth_key_hashed.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"derived_auth_key_hashed",readonly:"",modelValue:e.derived_auth_key_hashed,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.derived_auth_key_hashed=t})},null,8,["modelValue"]),Fe,(0,l.Wm)(i,{name:"derived_auth_key_hashed",class:"fv-plugins-message-container invalid-feedback"})])])}var Ce=(0,l.aZ)({name:"step-3",components:{Field:H.gN,ErrorMessage:H.Bc},setup:function(){var e=(0,ie.oR)();return{derived_key:(0,l.Fl)((function(){return e.state.AuthModule.derived_key})),derived_encryption_key:(0,l.Fl)((function(){return e.state.AuthModule.derived_encryption_key})),derived_auth_key:(0,l.Fl)((function(){return e.state.AuthModule.derived_auth_key})),derived_auth_key_hashed:(0,l.Fl)((function(){return e.state.AuthModule.derived_auth_key_hashed}))}}});const Ae=(0,L.Z)(Ce,[["render",Ee]]);var Ve=Ae,We={class:"w-100"},Ze=(0,l._)("div",{class:"pb-10 pb-lg-15"},[(0,l._)("h2",{class:"fw-bold text-dark"},"账户主密钥生成"),(0,l._)("div",{class:"text-gray-400 fw-semobold fs-6"},[(0,l.Uk)(" 生成账户主密钥，详见 "),(0,l._)("a",{href:"#",class:"link-primary fw-bold"},"实验报告"),(0,l.Uk)(". ")])],-1),Me={class:"mb-10 fv-row"},Re={class:"form-label mb-3"},Ue=(0,l._)("div",{class:"form-text"}," 账户主密钥，CSPRNG随机数，Crypto.getRandomValues()生成。用于文件加解密等操作。建议您自行保存主密钥，可用于找回账户， ",-1),Be={class:"mb-10 fv-row"},De={class:"form-label mb-3"},ze=(0,l._)("div",{class:"form-text"}," 使用上一步生成的衍生加密密钥进行加密后的主密钥，使用AES-ECB算法。 ",-1),Pe={class:"mb-10 fv-row"},Ie={class:"form-label mb-3"},Ne=(0,l._)("div",{class:"form-text"}," 随机生成的RSA公钥，将明文发送和存储至服务器，用于他人验证签名。 ",-1),Oe={class:"mb-10 fv-row"},Te={class:"form-label mb-3"},Ge=(0,l._)("div",{class:"form-text"},"随机生成的RSA私钥，用于文件签名。",-1),He={class:"mb-10 fv-row"},Ke={class:"form-label mb-3"},Le=(0,l._)("div",{class:"form-text"}," 使用主密钥加密后的RSA私钥，AES-ECB算法，将发送和存储至服务器。 ",-1);function Ye(e,t,a,n,r,s){var o=(0,l.up)("Field"),i=(0,l.up)("ErrorMessage");return(0,l.wg)(),(0,l.iD)("div",We,[Ze,(0,l._)("div",Me,[(0,l._)("label",Re,"主密钥（"+(0,q.zw)(e.master_key.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"master_key",readonly:"",modelValue:e.master_key,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.master_key=t})},null,8,["modelValue"]),Ue,(0,l.Wm)(i,{name:"master_key",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",Be,[(0,l._)("label",De,"加密后主密钥（"+(0,q.zw)(e.master_key_enc.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"master_key_enc",readonly:"",modelValue:e.master_key_enc,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.master_key_enc=t})},null,8,["modelValue"]),ze,(0,l.Wm)(i,{name:"master_key_enc",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",Pe,[(0,l._)("label",Ie,"RSA公钥（"+(0,q.zw)(e.rsa_public_key.length)+"字符）",1),(0,l.Wm)(o,{type:"text",as:"textarea",class:"form-control form-control-lg form-control-solid",name:"rsa_public_key",rows:15,readonly:"",modelValue:e.rsa_public_key,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.rsa_public_key=t}),style:{"overflow-y":"hidden"}},null,8,["modelValue"]),Ne,(0,l.Wm)(i,{name:"rsa_public_key",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",Oe,[(0,l._)("label",Te,"RSA私钥（"+(0,q.zw)(e.rsa_private_key.length)+"字符）",1),(0,l.Wm)(o,{type:"text",as:"textarea",rows:"20",class:"form-control form-control-lg form-control-solid",name:"rsa_private_key",readonly:"",modelValue:e.rsa_private_key,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.rsa_private_key=t}),style:{"overflow-y":"hidden"}},null,8,["modelValue"]),Ge,(0,l.Wm)(i,{name:"rsa_private_key",class:"fv-plugins-message-container invalid-feedback"})]),(0,l._)("div",He,[(0,l._)("label",Ke,"加密后RSA私钥（"+(0,q.zw)(e.rsa_private_key_enc.length)+"字符）",1),(0,l.Wm)(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"rsa_private_key_enc",readonly:"",modelValue:e.rsa_private_key_enc,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.rsa_private_key_enc=t})},null,8,["modelValue"]),Le,(0,l.Wm)(i,{name:"rsa_private_key_enc",class:"fv-plugins-message-container invalid-feedback"})])])}var je=(0,l.aZ)({name:"step-4",components:{Field:H.gN,ErrorMessage:H.Bc},setup:function(){var e=(0,ie.oR)();return{master_key:(0,l.Fl)((function(){return e.state.AuthModule.master_key})),master_key_enc:(0,l.Fl)((function(){return e.state.AuthModule.master_key_enc})),rsa_public_key:(0,l.Fl)((function(){return e.state.AuthModule.rsa_public_key})),rsa_private_key:(0,l.Fl)((function(){return e.state.AuthModule.rsa_private_key})),rsa_private_key_enc:(0,l.Fl)((function(){return e.state.AuthModule.rsa_private_key_enc}))}}});const qe=(0,L.Z)(je,[["render",Ye]]);var $e=qe,Je={class:"w-100"},Qe={class:"pb-8 pb-lg-10"},Xe=(0,l._)("h2",{class:"fw-bold text-dark"},"设置完成",-1),et={class:"text-gray-400 fw-semobold fs-6"},tt=(0,l.Uk)(" 如对过程有疑问，详见我们的 "),at=(0,l.Uk)("实验报告"),lt=(0,l.Uk)(". "),nt={class:"mb-0"},rt=(0,l.uE)('<div class="fs-6 text-gray-600 mb-5"> 以下信息将被发送至服务器且保存：<br><ul><li class="text-primary">Email</li><li class="text-primary">客户端随机数</li><li class="text-primary">加密后主密钥</li><li class="text-primary">衍生认证密钥哈希值</li><li class="text-primary">RSA公钥</li><li class="text-primary">加密后RSA私钥</li></ul></div>',1),st={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"},ot={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},it={class:"d-flex flex-stack flex-grow-1"},dt={class:"fw-semobold"},ct=(0,l._)("h4",{class:"text-gray-800 fw-bold"},"注意",-1),ut={class:"fs-6 text-gray-600"},mt=(0,l.Uk)(" 建议您自行保存生成的主密钥，作为找回账户的唯一凭证。您的主密钥是："),pt=(0,l._)("br",null,null,-1),ft={class:"text-primary"};function vt(e,t,a,n,r,s){var o=(0,l.up)("router-link"),i=(0,l.up)("inline-svg");return(0,l.wg)(),(0,l.iD)("div",Je,[(0,l._)("div",Qe,[Xe,(0,l._)("div",et,[tt,(0,l.Wm)(o,{to:"/sign-in",class:"link-primary fw-bold"},{default:(0,l.w5)((function(){return[at]})),_:1}),lt])]),(0,l._)("div",nt,[rt,(0,l._)("div",st,[(0,l._)("span",ot,[(0,l.Wm)(i,{src:"media/icons/duotune/general/gen044.svg"})]),(0,l._)("div",it,[(0,l._)("div",dt,[ct,(0,l._)("div",ut,[mt,pt,(0,l._)("span",ft,(0,q.zw)(e.master_key),1)])])])])])])}var _t=(0,l.aZ)({name:"step-5",components:{},setup:function(){var e=(0,ie.oR)();return{master_key:(0,l.Fl)((function(){return e.state.AuthModule.master_key}))}}});const gt=(0,L.Z)(_t,[["render",vt]]);var bt=gt,yt=a(35351),kt=a(68932),ht=a(74231),xt=a(48542),wt=a.n(xt),St=a(15758),Ft=a(22201),Et=(0,l.aZ)({name:"multi-step-sign-up",components:{Step1:j,Step2:ue,Step3:Ve,Step4:$e,Step5:bt},setup:function(){var e=this,t=(0,ie.oR)(),a=(0,Ft.tv)(),n=(0,R.iH)(null),r=(0,R.iH)(null),s=(0,R.iH)(null),o=(0,R.iH)(0),i=(0,R.iH)({accountEmail:"",accountPassword:"",accountConfirmPassword:""});(0,l.bv)((function(){n.value=yt.vO.createInsance(r.value),t.dispatch(St.e.ADD_BODY_CLASSNAME,"bg-body"),(0,kt.M)("Horizontal",["Pages","Wizards"])})),(0,l.Ah)((function(){t.dispatch(St.e.REMOVE_BODY_CLASSNAME,"bg-body")}));var d=[ht.Ry({accountEmail:ht.Z_().email("Email无效").required("Email必填"),accountPassword:ht.Z_().min(8,"密码长度至少为8位").required("Password is required"),accountConfirmPassword:ht.Z_().oneOf([ht.iH("accountPassword"),null],"密码不一致").required("确认密码必填")})],c=(0,l.Fl)((function(){return d[o.value]})),u=(0,H.cI)({validationSchema:c}),m=u.resetForm,p=u.handleSubmit,f=(0,l.Fl)((function(){if(n.value)return n.value.totatStepsNumber}));m({values:(0,M.pi)({},i.value)});var v=p((function(e){i.value=(0,M.pi)((0,M.pi)({},i.value),e),0==o.value?t.dispatch(St.e.GEN_SALT,{email:i.value.accountEmail}):1==o.value?setTimeout((function(){t.dispatch(St.e.GEN_DERIVED_KEY,{password:i.value.accountPassword}),t.dispatch(St.e.GEN_MASTER_KEY)}),1e3):2==o.value&&t.dispatch(St.e.GEN_RSA_PAIR),o.value++,n.value&&n.value.goNext()})),_=function(){n.value&&(o.value--,n.value.goPrev())},g=function(){return(0,M.mG)(e,void 0,void 0,(function(){var e,l,n;return(0,M.Jh)(this,(function(r){switch(r.label){case 0:return t.dispatch(St.e.LOGOUT),s.value&&(s.value.disabled=!0,s.value.setAttribute("data-kt-indicator","on")),[4,t.dispatch(St.e.REGISTER)];case 1:return r.sent(),e=Object.keys(t.getters.getErrors)[0],l=t.getters.getErrors[e],null===(n=s.value)||void 0===n||n.removeAttribute("data-kt-indicator"),s.value.disabled=!1,l?wt().fire({text:l[0],icon:"error",buttonsStyling:!1,confirmButtonText:"好",customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}):wt().fire({text:"注册成功",icon:"success",buttonsStyling:!1,confirmButtonText:"前往登录",customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}).then((function(){a.push({name:"sign-in"})})),[2]}}))}))};return{wizardRef:r,previousStep:_,handleStep:v,formSubmit:g,totalSteps:f,currentStepIndex:o,getIllustrationsPath:U.O,submitButton:s}}});const Ct=(0,L.Z)(Et,[["render",Z],["__scopeId","data-v-56946e72"]]);var At=Ct}}]);