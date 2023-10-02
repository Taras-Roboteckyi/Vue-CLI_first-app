"use strict";(self["webpackChunkvue_cli_first_app"]=self["webpackChunkvue_cli_first_app"]||[]).push([[105],{9433:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-container"},[t._t("default")],2)},r=[],n={name:"AuthContainer"},i=n,o=s(1001),l=(0,o.Z)(i,a,r,!1,null,"2bf106a5",null),u=l.exports},6252:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"auth-section"},[t._t("default")],2)},r=[],n={name:"AuthSection"},i=n,o=s(1001),l=(0,o.Z)(i,a,r,!1,null,"0c5689c8",null),u=l.exports},5082:function(t,e,s){s.d(e,{Z:function(){return h}});var a=function(){var t=this,e=t._self._c;return e("button",t._g({class:{btn:!0,"btn--outlined":t.outlined},attrs:{type:t.type,disabled:t.loading}},t.$listeners),[t.loading?e("CircleLoader",{staticClass:"btn__loader",attrs:{width:"38",height:"38"}}):t._e(),e("span",{staticClass:"btn__content",class:t.contentStyles},[t._t("default")],2)],1)},r=[],n=function(){var t=this,e=t._self._c;return e("span",{staticClass:"circle-loader"},[e("svg",{staticClass:"preloader-icon",style:t.style,attrs:{viewBox:"0 0 100 100",width:t.width,height:t.height}},[e("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"5",fill:"none"}})])])},i=[],o={name:"CircleLoader",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},color:{type:String,default:"#fff"}},computed:{style(){return`stroke: ${this.color};`}}},l=o,u=s(1001),c=(0,u.Z)(l,n,i,!1,null,"1da362b0",null),d=c.exports,m={name:"ButtonClick",components:{CircleLoader:d},props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{contentStyles(){return{"btn__content--hidden":this.loading}}}},p=m,f=(0,u.Z)(p,a,r,!1,null,"cd0db11c",null),h=f.exports},3069:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper-input"},[e("input",t._g(t._b({staticClass:"custom-input",class:!t.isValid&&"custom-input--error",domProps:{value:t.value},on:{blur:t.bluerHandler}},"input",t.$attrs,!1),t.listeners)),t.isValid?t._e():e("span",{staticClass:"custom-input__error"},[t._v(t._s(t.error))])])},r=[],n={name:"CustomInput",data(){return{isValid:!0,error:"",isFirstInput:!0}},inject:{form:{default:null}},inheritAttrs:!1,props:{value:{type:String,default:""},errorMessage:{type:String,default:""},rules:{type:Array,default:()=>[]}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}}},watch:{value(){this.isFirstInput||this.validate()}},mounted(){this.form&&this.form.registerInput(this)},beforeDestroy(){this.form&&this.form.unRegisterInput(this)},methods:{validate(){return this.isValid=this.rules.every((t=>{const{hasPassed:e,message:s}=t(this.value);return e||(this.error=s||this.errorMessage),e})),this.isValid},bluerHandler(){this.isFirstInput&&this.validate(),this.isFirstInput=!1},reset(){this.isFirstInput=!0,this.isValid=!0,this.$emit("input","")}}},i=n,o=s(1001),l=(0,o.Z)(i,a,r,!1,null,"6a69cbdd",null),u=l.exports},235:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e(t.tagName,{tag:"component",staticClass:"main-title"},[t._t("default")],2)},r=[],n={name:"MainTitle",props:{level:{type:Number,default:1}},computed:{tagName(){return`h${this.level}`}}},i=n,o=s(1001),l=(0,o.Z)(i,a,r,!1,null,"ad19c796",null),u=l.exports},546:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("form",t._g({staticClass:"form"},t.$listeners),[t._t("default")],2)},r=[],n=(s(7658),{name:"FormComponent",provide(){return{form:this}},data(){return{inputs:[]}},methods:{registerInput(t){this.inputs.push(t)},unRegisterInput(t){this.inputs.filter((e=>e!==t))},validate(){return this.inputs.reduce(((t,e)=>{const s=e.validate();return t&&s}),!0)},reset(){return this.inputs.forEach((t=>t.reset()))}}}),i=n,o=s(1001),l=(0,o.Z)(i,a,r,!1,null,"46c29e03",null),u=l.exports},5105:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var a=function(){var t=this,e=t._self._c;return e("main",{staticClass:"registration"},[e("AuthSection",[e("RegistrationForm")],1)],1)},r=[],n=s(6252),i=function(){var t=this,e=t._self._c;return e("AuthContainer",{staticClass:"registration"},[e("MainTitle",{staticClass:"registration__title"},[t._v("Registration")]),e("Form",{ref:"form",staticClass:"registration__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("CustomInput",{staticClass:"registration__input",attrs:{autocomplete:"username",placeholder:"Name",name:"name",rules:t.nameRules},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),e("CustomInput",{staticClass:"registration__input",attrs:{autocomplete:"email",placeholder:"Email",name:"email",rules:t.emailRules},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),e("CustomInput",{staticClass:"registration__input",attrs:{autocomplete:"current-password",type:"password",placeholder:"Password",name:"password",rules:t.passwordRules},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),e("CustomInput",{staticClass:"registration__input",attrs:{autocomplete:"current-password",type:"password",placeholder:"Confirm password",name:"password",rules:t.confirmPassword},model:{value:t.formData.confirmPassword,callback:function(e){t.$set(t.formData,"confirmPassword",e)},expression:"formData.confirmPassword"}}),e("Button",{staticClass:"registration__btn",attrs:{type:"submit",loading:t.loading}},[t._v("Registration")])],1)],1)},o=[],l=(s(7658),s(546)),u=s(3069),c=s(5082),d=s(4034),m=s(9433),p=s(235),f=s(3822),h={name:"RegistrationForm",components:{Form:l.Z,CustomInput:u.Z,Button:c.Z,AuthContainer:m.Z,MainTitle:p.Z},data(){return{loading:!1,formData:{name:"",email:"",password:"",confirmPassword:""}}},computed:{rules(){return{emailValidation:d.D6,passwordValidation:d.aO,isRequired:d.q9}},nameRules(){return[this.rules.isRequired]},emailRules(){return[this.rules.isRequired,this.rules.emailValidation]},passwordRules(){return[this.rules.isRequired,this.rules.passwordValidation]},confirmPassword(){return[t=>({hasPassed:t===this.formData.password,message:"Password mismatch"})]}},methods:{...(0,f.nv)("auth",["registerUser"]),async handleSubmit(){const{form:t}=this.$refs,e=t.validate(),{name:s,email:a,password:r}=this.formData;if(e)try{this.loading=!0,await this.registerUser({name:s,email:a,password:r}),this.$router.push({name:"homepage"}),console.log("state",this.$store.state),t.reset()}catch(n){this.$notify({type:"error",title:"An error has occurred",text:n.message})}finally{this.loading=!1}}}},_=h,g=s(1001),v=(0,g.Z)(_,i,o,!1,null,"59a865c8",null),w=v.exports,C={name:"RegistrationPage",components:{AuthSection:n.Z,RegistrationForm:w}},b=C,y=(0,g.Z)(b,a,r,!1,null,"7d1c8235",null),Z=y.exports},4034:function(t,e,s){s.d(e,{D6:function(){return n},F8:function(){return r},aO:function(){return i},q9:function(){return a}});const a=t=>({hasPassed:!!t,message:"Please fill in this field"}),r=t=>e=>({hasPassed:e.length<=t,message:"You have exceeded the limit"}),n=t=>({hasPassed:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(t),message:"Invalid email"}),i=t=>({hasPassed:/^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9][a-zA-Z0-9]{7,256}$/.test(t),message:"The password must contain one number and one symbol"})}}]);
//# sourceMappingURL=105.8456a0fe.js.map