(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{560:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{email:"",password:"",registered:!1}},methods:{submit:function(){var e=this;this.$nhost.auth.register({email:this.email,password:this.password}).then((function(){e.registered=!0}))}}},o=r(17),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.registered?r("div",[e._v("\n  registered!!\n")]):r("div",[e._v("\n  Register "),r("br"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("br"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("br"),r("br"),e._v(" "),r("input",{attrs:{type:"button",value:"Register"},on:{click:e.submit}})])}),[],!1,null,null,null);t.default=component.exports}}]);