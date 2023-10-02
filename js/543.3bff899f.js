"use strict";(self["webpackChunkvue_cli_first_app"]=self["webpackChunkvue_cli_first_app"]||[]).push([[543],{9433:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-container"},[t._t("default")],2)},i=[],a={name:"AuthContainer"},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"2bf106a5",null),o=u.exports},6252:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"auth-section"},[t._t("default")],2)},i=[],a={name:"AuthSection"},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"0c5689c8",null),o=u.exports},5082:function(t,e,s){s.d(e,{Z:function(){return f}});var n=function(){var t=this,e=t._self._c;return e("button",t._g({class:{btn:!0,"btn--outlined":t.outlined},attrs:{type:t.type,disabled:t.loading}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"btn__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"btn__content",class:t.contentStyles},[t._t("default")],2)],1)},i=[],a=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon",style:t.style,attrs:{viewBox:"0 0 100 100",width:t.width,height:t.height}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},r=[],l={name:"CircleLoader",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#fff"}},computed:{style(){return`stroke: ${this.color};`}}},u=l,o=s(1001),c=(0,o.Z)(u,a,r,!1,null,"1da362b0",null),d=c.exports,p={name:"ButtonClick",components:{CircleLoader:d},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contentStyles(){return{"btn__content--hidden":this.loading}}}},h=p,m=(0,o.Z)(h,n,i,!1,null,"cd0db11c",null),f=m.exports},3069:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper-input"},[e("input",t._g(t._b({staticClass:"custom-input",class:!t.isValid&&"custom-input--error",domProps:{value:t.value},on:{blur:t.bluerHandler}},"input",t.$attrs,!1),t.listeners)),t.isValid?t._e():e("span",{staticClass:"custom-input__error"},[t._v(t._s(t.error))])])},i=[],a={name:"CustomInput",data(){return{isValid:!0,error:"",isFirstInput:!0}},inject:{form:{default:null}},inheritAttrs:!1,props:{value:{type:String,default:""},errorMessage:{type:String,default:""},rules:{type:Array,default:()=>[]}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}},watch:{value(){this.isFirstInput||this.validate()}},mounted(){this.form&&this.form.registerInput(this)},beforeDestroy(){this.form&&this.form.unRegisterInput(this)},methods:{validate(){return this.isValid=this.rules.every((t=>{const{hasPassed:e,message:s}=t(this.value);return e||(this.error=s||this.errorMessage),e})),this.isValid},bluerHandler(){this.isFirstInput&&this.validate(),this.isFirstInput=!1},reset(){this.isFirstInput=!0,this.isValid=!0,this.$emit("input","")}}},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"6a69cbdd",null),o=u.exports},235:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e(t.tagName,{tag:"component",staticClass:"main-title"},[t._t("default")],2)},i=[],a={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"ad19c796",null),o=u.exports},546:function(t,e,s){s.d(e,{Z:function(){return o}});var n=function(){var t=this,e=t._self._c;return e("form",t._g({staticClass:"form"},t.$listeners),[t._t("default")],2)},i=[],a=(s(7658),{name:"FormComponent",provide(){return{form:this}},data(){return{inputs:[]}},methods:{registerInput(t){this.inputs.push(t)},unRegisterInput(t){this.inputs.filter((e=>e!==t))},validate(){return this.inputs.reduce(((t,e)=>{const s=e.validate();return t&&s}),!0)},reset(){return this.inputs.forEach((t=>t.reset()))}}}),r=a,l=s(1001),u=(0,l.Z)(r,n,i,!1,null,"46c29e03",null),o=u.exports},3543:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var n=function(){var t=this,e=t._self._c;return e("main",{staticClass:"login"},[e("AuthSection",[e("LoginForm")],1)],1)},i=[],a=function(){var t=this,e=t._self._c;return e("AuthContainer",{staticClass:"login"},[e("MainTitle",{staticClass:"login__title"},[t._v("Login")]),e("Form",{ref:"form",staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("CustomInput",{staticClass:"login__input",attrs:{autocomplete:"email",placeholder:"Email",name:"email",rules:t.emailRules},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),e("CustomInput",{staticClass:"login__input",attrs:{autocomplete:"current-password",type:"password",placeholder:"Password",name:"password",rules:t.passwordRules},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),e("Button",{staticClass:"login__btn",attrs:{type:"submit",loading:t.loading}},[t._v("Login")])],1)],1)},r=[],l=(s(7658),s(546)),u=s(3069),o=s(5082),c=s(4034),d=s(9433),p=s(235),h=s(3822),m={name:"LoginComponent",components:{Form:l.Z,CustomInput:u.Z,Button:o.Z,AuthContainer:d.Z,MainTitle:p.Z},data(){return{loading:!1,formData:{email:"",password:""}}},computed:{rules(){return{emailValidation:c.D6,passwordValidation:c.aO,isRequired:c.q9}},emailRules(){return[this.rules.isRequired,this.rules.emailValidation]},passwordRules(){return[this.rules.isRequired]}},methods:{...(0,h.nv)("auth",["login"]),async handleSubmit(){const{form:t}=this.$refs,e=t.validate();if(e)try{this.loading=!0,await this.login(this.formData),this.$router.push({name:"homepage"}),t.reset()}catch(s){this.$notify({type:"error",title:"An error has occurred",text:s.message})}finally{this.loading=!1}}}},f=m,_=s(1001),g=(0,_.Z)(f,a,r,!1,null,"6f9116e0",null),v=g.exports,C=s(6252),b={name:"LoginPage",components:{LoginForm:v,AuthSection:C.Z}},y=b,Z=(0,_.Z)(y,n,i,!1,null,"5d9e25be",null),w=Z.exports},4034:function(t,e,s){s.d(e,{D6:function(){return a},F8:function(){return i},aO:function(){return r},q9:function(){return n}});const n=t=>({hasPassed:!!t,message:"Please fill in this field"}),i=t=>e=>({hasPassed:e.length<=t,message:"You have exceeded the limit"}),a=t=>({hasPassed:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(t),message:"Invalid email"}),r=t=>({hasPassed:/^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9][a-zA-Z0-9]{7,256}$/.test(t),message:"The password must contain one number and one symbol"})}}]);
//# sourceMappingURL=543.3bff899f.js.map