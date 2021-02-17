(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{206:function(e,t,n){},207:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(15),a=n.n(i),s=(n(206),n(207),n(89)),o=n(19),l=n(26),u=n.n(l),d=n(38),j=n(352),b=n(44),O=n(45),f=n(24),m=n(35),h=n(40),p=n(13),x=function e(){Object(p.a)(this,e)};x.API="",x.login=function(e,t){return new Promise((function(n,r){setTimeout((function(){"admin@email.com"===e&&"qwerty"===t?(sessionStorage.setItem("token","jwt_token"),n(!0)):r()}),400)}))},x.loggedIn=function(){return null!==sessionStorage.getItem("token")};var v=n(7),g=function(){var e=Object(o.g)(),t=h.b().shape({email:h.c().email("Email no es v\xe1lido").required("Ingrese su email"),password:h.c().required("Ingrese su contrase\xf1a")});return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"d-flex align-items-center justify-content-center vh-100",children:Object(v.jsxs)(j.c,{elevation:b.a.THREE,children:[Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)(j.j,{icon:f.a.LOCK,iconSize:80})}),Object(v.jsx)(m.c,{initialValues:{email:"",password:""},validationSchema:t,onSubmit:function(){var t=Object(d.a)(u.a.mark((function t(n,r){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.setSubmitting,t.prev=1,t.next=4,x.login(n.email,n.password);case 4:t.sent&&e.push("/"),c(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),c(!1),_.show({message:"Wrong credentials",intent:O.a.DANGER,icon:f.a.DELETE});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,n=e.errors,r=e.touched;return Object(v.jsxs)(m.b,{children:[Object(v.jsx)(j.f,{labelFor:"email",label:"Email",helperText:r.email&&n.email,intent:n.email&&r.email?O.a.DANGER:O.a.NONE,disabled:t,children:Object(v.jsx)(m.a,{name:"email",id:"email",placeholder:"Enter your email",intent:n.email&&r.email?O.a.DANGER:O.a.NONE,leftIcon:f.a.USER,disabled:t,as:j.k})}),Object(v.jsx)(j.f,{labelFor:"password",label:"Password",disabled:t,helperText:r.password&&n.password,intent:n.password&&r.password?O.a.DANGER:O.a.NONE,children:Object(v.jsx)(m.a,{id:"password",name:"password",type:"password",placeholder:"Enter your password",intent:n.password&&r.password?O.a.DANGER:O.a.NONE,leftIcon:f.a.LOCK,disabled:t,as:j.k})}),Object(v.jsx)(j.b,{type:"submit",intent:O.a.PRIMARY,fill:!0,loading:t,children:"Sign in"})]})}})]})})})},w=n(21),E=n(23),y=n(14),I=n(154),S=n.n(I).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),N=function(e){return new Promise((function(t,n){e.then((function(e){200===e.status&&t(e.data)})).catch((function(e){n(e)}))}))},C=function(){function e(){Object(p.a)(this,e)}return Object(y.a)(e,null,[{key:"getAll",value:function(){var e=this;return new Promise((function(t,n){S.get(e.API).then((function(e){200===e.status&&t(e.data)})).catch((function(e){return n(e)}))}))}},{key:"mergeWithUsers",value:function(e,t){return e.map((function(e){return e.user=t.find((function(t){return t.id===e.userId})),e}))}},{key:"delete",value:function(e){var t=this;return new Promise((function(n,r){S.delete("".concat(t.API,"/").concat(e)).then((function(e){200===e.status&&n()})).catch((function(e){return r(e)}))}))}},{key:"getComments",value:function(e){return N(S.get("".concat(this.API,"/").concat(e,"/comments")))}},{key:"update",value:function(e){var t=this;return new Promise((function(n,r){S.patch("".concat(t.API,"/").concat(e.id),e).then((function(e){200===e.status&&n()})).catch((function(e){return r(e)}))}))}}]),e}();C.API="/posts";var k=function(){function e(){Object(p.a)(this,e)}return Object(y.a)(e,null,[{key:"getAll",value:function(){return N(S.get("/users"))}}]),e}(),A=n(357),R=n(32),T=n(5),P=n(155),D=n(64),F=n(1),q=function(e){var t=e.post,n=e.onClose,c=Object(r.useState)(null),i=Object(E.a)(c,2),a=i[0],s=i[1],o=function(){var e=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getComments(t.id);case 3:n=e.sent,s(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){o()}),[]);var l=function(e){var t=e.post;return Object(v.jsx)(j.q,{tagName:"p",children:t.body})},b=function(e){var t,n,r=e.post;return Object(v.jsxs)("p",{children:[Object(v.jsx)(j.q,{tagName:"strong",children:null===(t=r.user)||void 0===t?void 0:t.name})," (",Object(v.jsx)(j.q,{tagName:"em",children:null===(n=r.user)||void 0===n?void 0:n.email}),")",Object(v.jsxs)("dl",{children:[Object(v.jsx)("dt",{children:"qweqe"}),Object(v.jsx)("dd",{children:"wqeqw"})]})]})},O=function(e){var t=e.comments;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(v.jsx)("li",{children:e.body},e.id)}))})})};return Object(v.jsx)(j.e,{canOutsideClickClose:!1,icon:f.a.EYE_ON,title:t.title,isOpen:!!t,onClose:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return n()})),children:Object(v.jsx)("div",{className:F.a.DIALOG_BODY,children:Object(v.jsxs)(j.p,{id:"tabs",defaultSelectedTabId:"post",children:[Object(v.jsx)(j.o,{id:"post",title:"Post",panel:Object(v.jsx)(l,{post:t})}),Object(v.jsx)(j.o,{id:"author",title:"Author",panel:Object(v.jsx)(b,{post:t})}),Object(v.jsx)(j.o,{id:"comments",title:"Comments",panel:Object(v.jsx)(O,{comments:a})})]})})})},L=n(95),G=n(358),B=function(e){var t=e.post,n=e.users,c=e.onClose,i=h.b().shape({title:h.c().required(),body:h.c().required(),userId:h.a().required()}),a=G.a.ofType(),s=Object(r.useState)(n.find((function(e){return e.id===t.userId}))),o=Object(E.a)(s,2),l=o[0],b=o[1];return Object(v.jsx)(j.e,{canOutsideClickClose:!1,icon:f.a.EDIT,title:"Edit post",onClose:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return c()})),isOpen:!!t,children:Object(v.jsx)(m.c,{initialValues:{title:t.title,body:t.body,userId:t.userId},validationSchema:i,onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(n,r){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.setSubmitting,e.prev=1,e.next=4,C.update(Object(L.a)(Object(L.a)({},n),{},{id:t.id}));case 4:_.show({message:"Post successfully updated",intent:O.a.SUCCESS}),i(!1),c(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),i(!1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting,r=e.touched,c=e.errors,i=(e.values,e.setFieldValue);return Object(v.jsxs)(m.b,{children:[Object(v.jsxs)("div",{className:F.a.DIALOG_BODY,children:[Object(v.jsx)(j.f,{labelFor:"title",label:"Title",helperText:r.title&&c.title,children:Object(v.jsx)(m.a,{id:"title",name:"title",as:j.k})}),Object(v.jsx)(j.f,{labelFor:"userId",label:"User",helperText:r.userId&&c.userId,children:Object(v.jsx)(m.a,{id:"userId",name:"userId",as:a,items:n,activeItem:l,onItemSelect:function(){},itemRenderer:function(e){return Object(v.jsx)(j.m,{text:e.name,onClick:function(){b(e),i("userId",e.id)}},e.id)},children:Object(v.jsx)(j.b,{text:l.name,fill:!0,rightIcon:"double-caret-vertical"})})}),Object(v.jsx)(j.f,{labelFor:"body",label:"Body",helperText:r.body&&c.body,children:Object(v.jsx)(m.a,{id:"body",name:"body",fill:!0,growVertically:!0,as:j.r})})]}),Object(v.jsx)("div",{className:F.a.DIALOG_FOOTER,children:Object(v.jsx)("div",{className:F.a.DIALOG_FOOTER_ACTIONS,children:Object(v.jsx)(j.b,{loading:t,type:"submit",intent:O.a.PRIMARY,children:"Save changes"})})})]})}})})},U=function(){var e=Object(r.useState)(),t=Object(E.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(),a=Object(E.a)(i,2),s=a[0],o=a[1],l=Object(r.useState)(),b=Object(E.a)(l,2),m=b[0],h=b[1],p=Object(r.useState)(),x=Object(E.a)(p,2),g=x[0],w=x[1],y=Object(r.useState)(),I=Object(E.a)(y,2),S=I[0],N=I[1],F=Object(r.useState)(!1),L=Object(E.a)(F,2),G=L[0],U=L[1],Y=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([C.getAll(),k.getAll()]);case 3:t=e.sent,o(t[1]),c(C.mergeWithUsers(t[0],t[1])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){Y()}),[]);var M=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==g){e.next=15;break}return e.prev=1,U(!0),e.next=5,C.delete(g.id);case 5:c((function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e.id!==g.id}))})),U(!1),w(null),_.show({message:"Post successfully deleted",intent:O.a.SUCCESS}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),_.show({message:e.t0,intent:O.a.DANGER});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("div",{children:"Home"}),m&&Object(v.jsx)(q,{post:m,onClose:function(){return h(null)}}),S&&Object(v.jsx)(B,{post:S,users:s||[],onClose:function(){return N(null)}}),g&&Object(v.jsx)(j.a,{icon:f.a.TRASH,intent:O.a.DANGER,isOpen:!!g,onConfirm:function(){return M()},cancelButtonText:"Cancel",loading:G,onCancel:function(){return w(null)},confirmButtonText:"Delete",children:Object(v.jsx)("p",{children:"Are you sure to delete this post?"})}),Object(v.jsxs)(A.a,{numRows:n?n.length:100,enableRowResizing:!1,defaultRowHeight:30,renderMode:R.a.BATCH,selectionModes:T.d.NONE,loadingOptions:[T.e.CELLS],columnWidths:[250,200,350,240],children:[Object(v.jsx)(P.a,{name:"Title",cellRenderer:function(e){return Object(v.jsx)(D.a,{loading:!n,tooltip:n&&n[e].title,wrapText:!1,children:n&&n[e].title})}}),Object(v.jsx)(P.a,{name:"Body",cellRenderer:function(e){return Object(v.jsx)(D.a,{loading:!n,tooltip:n&&n[e].body,truncated:!0,children:n&&n[e].body})}}),Object(v.jsx)(P.a,{name:"User",cellRenderer:function(e){var t,r,c=n&&(null===(t=n[e].user)||void 0===t?void 0:t.name),i=n&&(null===(r=n[e].user)||void 0===r?void 0:r.email);return Object(v.jsxs)(D.a,{loading:!n,tooltip:c,truncated:!0,children:[Object(v.jsx)(j.q,{tagName:"span",children:c})," ",Object(v.jsxs)(j.q,{tagName:"small",className:"bp3-text-muted",children:["(",i,")"]})]})}}),Object(v.jsx)(P.a,{name:"Actions",cellRenderer:function(e){var t=n?n[e]:null;return Object(v.jsxs)(D.a,{loading:!n,className:"d-flex align-items-center justify-content-between",children:[Object(v.jsx)(j.b,{text:"View",minimal:!0,icon:f.a.EYE_OPEN,small:!0,onClick:function(){return function(e){h(e)}(t)}}),Object(v.jsx)(j.b,{text:"Edit",minimal:!0,icon:f.a.EDIT,small:!0,intent:O.a.PRIMARY,onClick:function(){return N(t)}}),Object(v.jsx)(j.b,{text:"Delete",minimal:!0,icon:f.a.DELETE,small:!0,intent:O.a.DANGER,onClick:function(){return w(t)}})]})}})]})]})})},_=j.s.create({position:w.a.TOP,autoFocus:!0});var Y=function(){var e=x.loggedIn();return Object(v.jsxs)(s.a,{children:[!e&&Object(v.jsx)(o.a,{to:"/login"}),Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{exact:!0,path:"/",children:Object(v.jsx)(U,{})}),Object(v.jsx)(o.b,{exact:!0,path:"/login",children:Object(v.jsx)(g,{})})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,359)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(Y,{})}),document.getElementById("root")),M()}},[[351,1,2]]]);
//# sourceMappingURL=main.793de8a0.chunk.js.map