(function(e){function t(t){for(var a,r,i=t[0],l=t[1],u=t[2],c=0,h=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5239fffc"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"12c5d5b0"}[e]+".css",s=l.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===s))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){u=h[i],c=u.getAttribute("data-href");if(c===a||c===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var h=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}s[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var m=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"14c3c":function(e,t,n){"use strict";n("c8f0")},"4dd7":function(e,t,n){e.exports=n.p+"img/taystone.80925bd7.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"","clipped-right":"","clipped-left":""}},[a("v-btn",{staticClass:"px-0",attrs:{text:"",to:"/",ripple:!1}},[a("v-img",{staticClass:"mr-2",attrs:{src:n("4dd7"),"max-height":"40","max-width":"40",contain:""}}),e._v(" TayStone.TV ")],1),a("v-spacer"),!1===e.isAuthenticated?a("LoginButton"):e._e(),!1===e.isAuthenticated?a("SignupButton"):e._e(),!0===e.isAuthenticated?a("UserDialog"):e._e()],1),a("v-navigation-drawer",{attrs:{app:"",clipped:""}},[a("ChannelList")],1),a("v-main",[a("router-view")],1),a("v-navigation-drawer",{attrs:{app:"",clipped:"",right:"",width:"20rem"},model:{value:e.showChat,callback:function(t){e.showChat=t},expression:"showChat"}},[a("Chat")],1)],1)},s=[],o=n("5530"),i=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{dense:""}},e._l(e.channels,(function(t){return n("v-list-item",{key:t.username,attrs:{to:{name:"Channel",params:{username:t.username}},ripple:!1},on:{click:function(n){return e.setCurrentChannelInfo(t)}}},[n("v-list-item-avatar",{attrs:{color:"primary"}},[e._v(e._s(e.getChannelAbbreviation(t.username)))]),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.username))]),t.isLive?n("v-list-item-subtitle",[e._v("🔴 Live")]):n("v-list-item-subtitle",[e._v("Offline")])],1)],1)})),1)},u=[],c=(n("ac1f"),n("a1f0"),n("1276"),n("2909")),h={name:"ChannelList",methods:Object(o["a"])({getChannelAbbreviation:function(e){var t=/([A-Z])/g,n=Object(c["a"])(e.matchAll(t));if(e.split(" ").length>1){var a=e.split(" "),r=a[0][0]+a[a.length-1][0];return r}if(2===n.length)return n[0][0]+n[1][0];var s=e[0];return s}},Object(i["b"])(["setCurrentChannel","setCurrentChannelInfo"])),computed:{channels:function(){return this.$store.state.channels}}},m=h,d=n("2877"),p=n("6544"),f=n.n(p),v=n("8860"),g=n("da13"),C=n("8270"),b=n("5d23"),w=Object(d["a"])(m,l,u,!1,null,null,null),y=w.exports;f()(w,{VList:v["a"],VListItem:g["a"],VListItemAvatar:C["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mx-3",attrs:{color:"secondary",alt:""}},"v-btn",r,!1),a),[e._v(" Login ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.authenticate(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Login ")]),n("v-card-text",[n("v-text-field",{attrs:{label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{type:"submit",color:"primary",text:""}},[e._v(" Submit ")])],1)],1)],1)],1)},x=[],U=(n("d3b7"),n("bc3a")),k=n.n(U),A={data:function(){return{username:"",password:"",dialog:null}},methods:{authenticate:function(){var e=this,t={username:this.username,password:this.password};this.$http.post(this.$store.state.endpoints.obtainJWT,t).then((function(t){e.$store.commit("updateToken",t.data.token);var n={baseURL:e.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(e.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},a=k.a.create(n);a({url:"/channels/current/",method:"get",params:{}}).then((function(t){e.$store.commit("setAuthUser",{authUser:t.data,isAuthenticated:!0})}))})).catch((function(e){console.log(e),console.debug(e),console.dir(e)})).finally((function(){e.dialog=!1}))}}},j=A,V=n("8336"),$=n("b0af"),T=n("99d9"),L=n("169a"),O=n("4bd4"),D=n("2fa4"),I=n("8654"),S=Object(d["a"])(j,_,x,!1,null,null,null),M=S.exports;f()(S,{VBtn:V["a"],VCard:$["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VDialog:L["a"],VForm:O["a"],VSpacer:D["a"],VTextField:I["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"primary",alt:""}},"v-btn",r,!1),a),[e._v(" Sign Up ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Sign Up ")]),n("v-card-text",[n("v-text-field",{attrs:{label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{label:"Passowrd",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{label:"Confirm Password",type:"password"},model:{value:e.password_confirm,callback:function(t){e.password_confirm=t},expression:"password_confirm"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{type:"submit",color:"primary",text:""}},[e._v(" Submit ")])],1)],1)],1)],1)},P=[],F={data:function(){return{username:"",email:"",password:"",password_confirm:"",dialog:null}},methods:{signup:function(){var e=this,t={username:this.username,email:this.email,password:this.password};this.$http.post("/api/auth/register/",t).then((function(t){e.$store.commit("updateToken",t.data.token);var n={baseURL:e.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(e.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},a=k.a.create(n);a({url:"/channels/current/",method:"get",params:{}}).then((function(t){e.$store.commit("setAuthUser",{authUser:t.data,isAuthenticated:!0}),e.$router.push({name:"Home"})}))})).catch((function(e){console.log(e),console.debug(e),console.dir(e)}))}}},R=F,B=Object(d["a"])(R,E,P,!1,null,null,null),J=B.exports;f()(B,{VBtn:V["a"],VCard:$["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VDialog:L["a"],VForm:O["a"],VSpacer:D["a"],VTextField:I["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-avatar",e._g(e._b({attrs:{color:"primary"}},"v-avatar",r,!1),a),[e._v(" "+e._s(e.getChannelAbbreviation(e.authUser.username))+" ")])]}}])},[n("v-list",[n("v-list-item",{on:{click:e.logout}},[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)},N=[],H={data:function(){return{}},computed:{authUser:function(){return this.$store.state.authUser}},methods:{getChannelAbbreviation:function(e){var t=/([A-Z])/g,n=Object(c["a"])(e.matchAll(t));if(e.split(" ").length>1){var a=e.split(" "),r=a[0][0]+a[a.length-1][0];return r}if(2===n.length)return n[0][0]+n[1][0];var s=e[0];return s},logout:function(){this.$store.commit("setAuthUser",{authUser:null,isAuthenticated:!1}),this.$store.commit("removeToken")}}},q=H,z=n("8212"),K=n("e449"),Z=Object(d["a"])(q,W,N,!1,null,null,null),G=Z.exports;f()(Z,{VAvatar:z["a"],VList:v["a"],VListItem:g["a"],VListItemTitle:b["c"],VMenu:K["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-space-between":"",column:"","fill-height":""}},[n("v-card",{staticClass:"chatHeading"},[n("v-card-title",{staticClass:"justify-center"},[e._v("Stream Chat")])],1),n("v-layout",{attrs:{"justify-space-between":"",column:"","fill-height":""}},[n("v-dialog",{attrs:{"max-width":"400"},model:{value:e.usernameDialog,callback:function(t){e.usernameDialog=t},expression:"usernameDialog"}},[n("v-card",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.setUsername(t)}}},[n("v-card-title",{staticClass:"headline"},[e._v(" Username Required ")]),n("v-card-text",[e._v(" Please set a username to use the stream chat. "),n("v-text-field",{attrs:{required:"",placeholder:"Username","hide-details":""},model:{value:e.usernameDialogUsername,callback:function(t){e.usernameDialogUsername=t},expression:"usernameDialogUsername"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.usernameDialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"darken-1",submit:"",text:"",disabled:null==e.usernameDialogUsername||""==e.usernameDialogUsername},on:{click:e.setUsername}},[e._v(" OK ")])],1)],1)],1)],1),n("v-layout",{staticClass:"messageLayout",attrs:{"justify-space-between":"",column:"","fill-height":""}},[n("div"),n("v-container",{ref:"messageContainer",staticClass:"messageContainer pa-0",attrs:{"justify-end":""}},[n("div",{staticClass:"chatMessage px-2 py-1 alt"},[n("span",[e._v("Welcome to TayStone.TV say hi!")])]),e._l(e.messages,(function(t,a){return n("Message",{key:a,class:{alt:a%2===1},attrs:{message:t,usernameColor:e.usernameColor}})}))],2)],1),n("v-container",{staticClass:"sendContainer elevation-10",attrs:{"justify-end":""}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[n("v-text-field",{attrs:{solo:"",exact:"",icon:"",placeholder:"Send a message","hide-details":"",disabled:!e.isAuthenticated},on:{click:e.checkUsername},model:{value:e.chatMessage,callback:function(t){e.chatMessage=t},expression:"chatMessage"}})],1)])],1)],1)},X=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chatMessage px-2 py-1"},[n("span",{staticClass:"username",style:{color:e.usernameColor}},[e._v(e._s(e.message.username)+": ")]),n("span",{staticClass:"message"},[e._v(e._s(e.message.message))])])},ee=[],te={data:function(){return{}},props:["message","usernameColor"]},ne=te,ae=(n("f87e"),Object(d["a"])(ne,Y,ee,!1,null,null,null)),re=ae.exports,se={name:"Chat",components:{Message:re},data:function(){return{usernameDialog:null,usernameDialogUsername:null,chatMessage:null,messages:[],currentChatChannel:null,usernameColor:"hsla(".concat(~~(360*Math.random()),",70%,70%,0.8)")}},computed:{isAuthenticated:function(){return this.$store.state.isAuthenticated},currentChannel:function(){return this.$store.state.currentChannelInfo},myUsername:function(){return this.$store.state.authUser.username}},methods:{reloadChat:function(){this.currentChatChannel!=this.currentChannel.username&&(null!=this.currentChatChannel&&this.$socket.emit("leave",{room:this.currentChatChannel}),this.messages=[],this.currentChatChannel=this.currentChannel.username,this.$socket.emit("join",{room:this.currentChatChannel}))},setUsername:function(){null!=this.usernameDialogUsername&&""!=this.usernameDialogUsername&&(this.myUsername=this.usernameDialogUsername,null!=this.chatMessage&&""!=this.chatMessage&&(this.$socket.emit("chatMessage",{username:this.$store.state.myUsername,message:this.chatMessage,room:this.currentChatChannel}),this.chatMessage=null),this.usernameDialog=!1)},checkUsername:function(){null==this.myUsername|""==this.myUsername&&(this.usernameDialog=!0)},sendMessage:function(){null!=this.chatMessage&&""!=this.chatMessage&&(null!=this.myUsername&&""!=this.myUsername?(this.$socket.emit("chatMessage",{username:this.myUsername,message:this.chatMessage,room:this.currentChatChannel}),this.chatMessage=null):this.usernameDialog=!0)}},mounted:function(){this.reloadChat()},watch:{currentChannel:function(){this.reloadChat()}},sockets:{connect:function(){},newChatMessage:function(e){e.room===this.currentChatChannel&&this.messages.push(e),this.$nextTick((function(){this.$refs.messageContainer.scrollTop=this.$refs.messageContainer.scrollHeight}))}}},oe=se,ie=(n("14c3c"),n("a523")),le=n("a722"),ue=Object(d["a"])(oe,Q,X,!1,null,null,null),ce=ue.exports;f()(ue,{VBtn:V["a"],VCard:$["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VContainer:ie["a"],VDialog:L["a"],VForm:O["a"],VLayout:le["a"],VSpacer:D["a"],VTextField:I["a"]});var he={name:"App",components:{SignupButton:J,LoginButton:M,UserDialog:G,ChannelList:y,Chat:ce},computed:{currentChannel:function(){return this.$store.state.currentChannel},authUser:function(){return this.$store.state.authUser},isAuthenticated:function(){return this.$store.state.isAuthenticated}},methods:Object(o["a"])({},Object(i["b"])(["getChannelsAndUpdate","getUserInfo"])),created:function(){this.getChannelsAndUpdate(),this.getUserInfo(),this.timer=setInterval(this.getChannelsAndUpdate,3e3)},beforeDestroy:function(){clearInterval(this.timer)},watch:{currentChannel:function(){this.currentChannel?this.showChat=!0:this.showChat=!1}},data:function(){return{timer:"",showChat:!1}}},me=he,de=(n("034f"),n("7496")),pe=n("40dc"),fe=n("adda"),ve=n("f6c4"),ge=n("f774"),Ce=Object(d["a"])(me,r,s,!1,null,null,null),be=Ce.exports;f()(Ce,{VApp:de["a"],VAppBar:pe["a"],VBtn:V["a"],VImg:fe["a"],VMain:ve["a"],VNavigationDrawer:ge["a"],VSpacer:D["a"]});var we=n("8c4f"),ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"home",attrs:{"fill-height":""}})},_e=[],xe={name:"Home",mounted:function(){this.$store.commit("setCurrentChannel",null)}},Ue=xe,ke=(n("cccb"),Object(d["a"])(Ue,ye,_e,!1,null,null,null)),Ae=ke.exports;f()(ke,{VContainer:ie["a"]});var je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("LoginForm")},Ve=[],$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"login form"},[n("div",{staticClass:"field"},[n("label",{attrs:{for:"id_username"}},[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",autofocus:"autofocus",maxlength:"150",id:"id_username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"id_password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",id:"id_password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"button primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.authenticate(t)}}},[e._v(" Log In ")])])},Te=[],Le={data:function(){return{username:"",password:""}},methods:{authenticate:function(){var e=this,t={username:this.username,password:this.password};this.$http.post(this.$store.state.endpoints.obtainJWT,t).then((function(t){e.$store.commit("updateToken",t.data.token);var n={baseURL:e.$store.state.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(e.$store.state.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},a=k.a.create(n);a({url:"/channels/current/",method:"get",params:{}}).then((function(t){e.$store.commit("setAuthUser",{authUser:t.data,isAuthenticated:!0}),e.$router.push({name:"Home"})}))})).catch((function(e){console.log(e),console.debug(e),console.dir(e)}))}}},Oe=Le,De=Object(d["a"])(Oe,$e,Te,!1,null,null,null),Ie=De.exports,Se={components:{LoginForm:Ie}},Me=Se,Ee=Object(d["a"])(Me,je,Ve,!1,null,null,null),Pe=Ee.exports;a["a"].use(we["a"]);var Fe=[{path:"/",name:"Home",component:Ae},{path:"/login",name:"Login",component:Pe},{path:"/:username",name:"Channel",props:!0,component:function(){return n.e("about").then(n.bind(null,"92d6"))}}],Re=new we["a"]({routes:Fe,mode:"history",linkActiveClass:null,linkExactActiveClass:null}),Be=Re,Je=n("f309");a["a"].use(Je["a"]);var We=new Je["a"]({theme:{dark:!0}}),Ne=(n("96cf"),n("1da1"));a["a"].use(i["a"]);var He=new i["a"].Store({state:{authUser:null,isAuthenticated:null,jwt:localStorage.getItem("token"),myUsername:null,channels:[],currentChannel:null,currentChannelInfo:{username:null,stream_title:null},endpoints:{obtainJWT:"/api/auth/obtain-token/",refreshJWT:"/api/auth/refresh-token/",baseUrl:"/api/"}},mutations:{setAuthUser:function(e,t){var n=t.authUser,r=t.isAuthenticated;a["a"].set(e,"authUser",n),a["a"].set(e,"isAuthenticated",r)},updateToken:function(e,t){localStorage.setItem("token",t),e.jwt=t},removeToken:function(e){localStorage.removeItem("token"),e.jwt=null},updateChannels:function(e,t){e.channels=t.channels.results},updateCurrentChannelInfo:function(e,t){e.currentChannelInfo=t.channelInfo},setUsername:function(e,t){e.myUsername=t},setCurrentChannel:function(e,t){e.currentChannel=t}},actions:{getUserInfo:function(e){return Object(Ne["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=e.state,r=a.jwt,r?(s={baseURL:a.endpoints.baseUrl,headers:{Authorization:"JWT ".concat(a.jwt),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}},o=k.a.create(s),o({url:"/channels/current/",method:"get",params:{}}).then((function(e){n("setAuthUser",{authUser:e.data,isAuthenticated:!0})})).catch((function(){n("setAuthUser",{authUser:null,isAuthenticated:!1}),n("removeToken")}))):n("setAuthUser",{authUser:null,isAuthenticated:!1});case 3:case"end":return t.stop()}}),t)})))()},getChannelsAndUpdate:function(e){return Object(Ne["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("/api/channels/");case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n("updateChannels",{channels:r});case 8:case"end":return t.stop()}}),t)})))()},setCurrentChannelInfo:function(e,t){return Object(Ne["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=e.commit,a("updateCurrentChannelInfo",{channelInfo:t}),a("setCurrentChannel",t.username);case 3:case"end":return n.stop()}}),n)})))()},getCurrentChannelInfo:function(e,t){return Object(Ne["a"])(regeneratorRuntime.mark((function n(){var a,r,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.toLowerCase(),n.next=4,fetch("/api/channels/"+r+"/");case 4:return s=n.sent,n.next=7,s.json();case 7:o=n.sent,a("updateCurrentChannelInfo",{channelInfo:o}),a("setCurrentChannel",t);case 10:case"end":return n.stop()}}),n)})))()}},modules:{}}),qe=n("5132"),ze=n.n(qe),Ke=n("8055"),Ze=n.n(Ke),Ge=n("666c");n("373e");a["a"].prototype.$http=k.a,a["a"].config.productionTip=!1,a["a"].use(Ge["a"],{plyr:{}}),a["a"].use(new ze.a({connection:Ze()("/",{transports:["websocket"]})})),new a["a"]({router:Be,vuetify:We,store:He,render:function(e){return e(be)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},afbc:function(e,t,n){},c8f0:function(e,t,n){},cccb:function(e,t,n){"use strict";n("5ced")},f87e:function(e,t,n){"use strict";n("afbc")}});
//# sourceMappingURL=app.d77d7182.js.map