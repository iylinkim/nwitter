(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(1),s=a(2),r=a.n(s),i=a(30),o=a.n(i),u=a(5),l=a(15),j=a(7),d=a(4),m=a.n(d),b=a(9),p=a(19);a(40),a(64),a(65);p.a.initializeApp({apiKey:"AIzaSyDH-AVCvdBSt9_x-eQd3-7hKcBvvH05Rm4",authDomain:"nwitter-831e2.firebaseapp.com",projectId:"nwitter-831e2",storageBucket:"nwitter-831e2.appspot.com",messagingSenderId:"404369786985",appId:"1:404369786985:web:39de5a4ee33133842e7af8"});var f=p.a,O=p.a.auth(),h=p.a.firestore(),x=p.a.storage(),N=function(e){var t=e.darkMode,a=Object(s.useState)(""),n=Object(u.a)(a,2),r=n[0],i=n[1],o=Object(s.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],p=Object(s.useState)(!0),f=Object(u.a)(p,2),h=f[0],x=f[1],N=Object(s.useState)(),v=Object(u.a)(N,2),g=v[0],w=v[1],k=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?i(n):"password"===a&&d(n)},_=function(){var e=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(r,j);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(r,j);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),w(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:_,className:"container",children:[Object(c.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:r,onChange:k,className:t?"authInput dark":"authInput"}),Object(c.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:j,onChange:k,className:t?"authInput dark":"authInput"}),Object(c.jsx)("input",{className:"authInput authSubmit",type:"submit",value:h?"Create Account":"Sign In"}),g&&Object(c.jsx)("span",{className:"authError",children:g})]}),Object(c.jsx)("span",{onClick:function(){x((function(e){return!e}))},className:"authSwitch",children:h?"Sign In":"Create Account"})," "]})},v=(a(42),function(e){var t=e.darkMode,a=function(){var e=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new f.auth.GoogleAuthProvider:"github"===a&&(n=new f.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"authContainer",children:[Object(c.jsx)("i",{className:"fas fa-hippo hippo authLogo"}),Object(c.jsx)(N,{darkMode:t}),Object(c.jsxs)("div",{className:"authBtns",children:[Object(c.jsxs)("button",{onClick:a,name:"google",className:t?"authBtn dark":"authBtn",children:[Object(c.jsx)("i",{className:"fab fa-google"}),Object(c.jsx)("span",{className:"authBtn_text",children:"Sign In with Google"})]}),Object(c.jsxs)("button",{onClick:a,name:"github",className:t?"authBtn dark":"authBtn",children:[Object(c.jsx)("i",{className:"fab fa-github"}),Object(c.jsx)("span",{className:"authBtn_text",children:"Sign In with Github"})]})]})]})}),g=a(18),w=(a(43),function(e){var t=e.each_comment;return Object(c.jsxs)("li",{className:"each_comment",children:[Object(c.jsx)("p",{className:"comment_username",children:t.displayName}),t.comment]})}),k=(a(44),function(e){var t=e.nweetObj,a=e.userObj,n=Object(s.useState)(!1),r=Object(u.a)(n,2),i=r[0],o=r[1],l=Object(s.useRef)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"comment_icon",onClick:function(){o((function(e){return!e}))},children:Object(c.jsx)("i",{className:"far fa-comment-alt"})}),Object(c.jsx)("div",{className:"comments_box",children:i&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"add_comment",onSubmit:function(){h.doc("nweets/".concat(t.id)).update({comments:[].concat(Object(g.a)(t.comments),[{displayName:a.displayName,comment:l.current.value}])}),l.current.value=""},children:[Object(c.jsx)("input",{className:"comment_input",ref:l,type:"text",placeholder:"Write Comment"}),Object(c.jsx)("input",{className:"comment_submit",type:"submit",value:"Add"})]}),Object(c.jsx)("ul",{className:"comments_list",children:t.comments&&Object.keys(t.comments).map((function(e){return Object(c.jsx)(w,{each_comment:t.comments[e],userObj:a},e)}))})]})})]})}),_=(a(45),a(46),function(e){var t=e.nweetObj,a=Object(j.f)(),n=Object(s.useState)({}),r=Object(u.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)(""),d=Object(u.a)(l,2),m=d[0],b=d[1];return Object(s.useEffect)((function(){a.location.state&&o(a.location.state),"/account"===a.location.pathname&&b((function(){return"account"}))}),[]),Object(c.jsxs)("div",{className:"nweet_user ".concat(m),children:[Object(c.jsx)("p",{className:"user_photo",children:Object(c.jsx)("img",{src:t?t.photoURL:i.userPhoto,alt:t?t.username:i.userName})}),Object(c.jsx)("p",{className:"user_name",children:t?t.username:i.userName})]})}),y=function(e){var t=e.nweetObj,a=e.userObj,n=e.isOwner,r=e.darkMode,i=Object(s.useState)(!1),o=Object(u.a)(i,2),j=o[0],d=o[1],p=Object(s.useState)(t.text),f=Object(u.a)(p,2),O=f[0],N=f[1],v=function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return d((function(e){return!e}))},y=function(){var e=Object(b.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:O});case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("li",{className:r?"nweet dark":"nweet",children:j?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:y,className:"container nweetEdit",children:[Object(c.jsx)("input",{className:"formInput",onChange:function(e){var t=e.target.value;N(t)},type:"text",placeholder:"Edit your nweet",value:O,autoFocus:!0,required:!0}),Object(c.jsxs)("p",{className:"formBtn_icon",children:[Object(c.jsx)("input",{className:" formBtn_text formBtn_text_update",type:"submit",value:"Update Nweet"}),Object(c.jsx)("span",{className:"editing_icon update",children:Object(c.jsx)("i",{className:"fas fa-pen"})})]})]}),Object(c.jsxs)("p",{className:" cancelBtn formBtn_icon",onClick:w,children:[Object(c.jsx)("span",{className:"formBtn_text formBtn_text_cancel",children:"Cancel"}),Object(c.jsx)("span",{className:"editing_icon cancel",children:Object(c.jsx)("i",{className:"fas fa-window-close"})})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.b,{to:{pathname:"/account",state:{userId:t.creatorId,userName:t.username,userPhoto:t.photoURL}},children:Object(c.jsx)(_,{nweetObj:t})}),Object(c.jsx)("p",{className:"date",children:new Date(t.createdAt).toLocaleDateString()}),Object(c.jsx)("h4",{className:"nweet_content",children:t.text}),t.attachmentUrl&&Object(c.jsx)("img",{src:t.attachmentUrl,alt:"nweet"}),Object(c.jsxs)("div",{className:"like_and_comment",children:[Object(c.jsxs)("p",{className:"like",onClick:function(){t.liked_users.includes(a.uid)||h.doc("nweets/".concat(t.id)).update({like:t.like+=1,liked_users:[].concat(Object(g.a)(t.liked_users),[a.uid])})},children:[Object(c.jsx)("i",{className:"fas fa-heart"}),Object(c.jsx)("span",{className:"like_number",children:t.like})]}),Object(c.jsx)(k,{nweetObj:t,userObj:a})]}),n&&Object(c.jsxs)("div",{className:"nweet_actions",children:[Object(c.jsxs)("span",{className:"actions_icon delete",onClick:v,children:[Object(c.jsx)("i",{className:"far fa-trash-alt delete_icon"}),"delete"]}),Object(c.jsxs)("span",{className:"actions_icon edit",onClick:w,children:[Object(c.jsx)("i",{className:"far fa-edit edit_icon"}),"edit"]})]})]})})},I=a(67),S=(a(51),function(e){var t=e.userObj,a=Object(s.useState)(""),n=Object(u.a)(a,2),r=n[0],i=n[1],o=Object(s.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],p=Object(s.useRef)(),f=function(){var e=Object(b.a)(m.a.mark((function e(a){var n,c,s,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===j){e.next=12;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,c.putString(j,"data_url");case 8:return s=e.sent,e.next=11,s.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={username:t.displayName,photoURL:t.photoURL,text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n,like:0,liked_users:[],comments:[]},e.next=15,h.collection("nweets").add(o);case 15:i(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(c.jsxs)("div",{className:"factoryInput_container",children:[Object(c.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(c.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(c.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(c.jsx)("span",{children:"Add photos"}),Object(c.jsx)("i",{className:"fas fa-plus"})]}),Object(c.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},ref:p,style:{opacity:0}}),j&&Object(c.jsxs)("div",{className:"factoryForm__attachment",children:[Object(c.jsx)("img",{src:j,alt:"attachment",style:{backgroundImage:j}}),Object(c.jsxs)("div",{className:"factoryForm__clear",onClick:function(){d(""),p.current.value=""},children:[Object(c.jsx)("span",{children:"Remove"}),Object(c.jsx)("i",{className:"fas fa-times"})]})]})]})}),U=(a(52),function(e){var t=e.userObj,a=e.darkMode,r=Object(s.useState)([]),i=Object(u.a)(r,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(n.a)({id:e.id},e.data())}));l(t)}))}),[]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(S,{userObj:t,darkMode:a}),Object(c.jsx)("ul",{className:"nweets",children:o.map((function(e){return Object(c.jsx)(y,{isOwner:e.creatorId===t.uid,nweetObj:e,userObj:t,darkMode:a},e.id)}))})]})}),L=(a(53),function(e){var t=e.userObj;return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"navigation",children:[Object(c.jsx)("li",{className:"home",children:Object(c.jsxs)(l.b,{to:"/",children:[Object(c.jsx)("i",{className:"fas fa-hippo hippo"}),Object(c.jsx)("span",{className:"homeText",children:"Home"})]})}),Object(c.jsx)("li",{className:"profile",children:Object(c.jsxs)(l.b,{to:"/profile",children:[Object(c.jsx)("i",{className:"fas fa-user user"}),Object(c.jsx)("span",{className:"profileText",children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})}),C=(a(54),function(e){var t=e.ImageInput,a=e.userObj,r=(e.setUserObj,e.refreshUser),i=Object(j.f)(),o=Object(s.useState)({displayName:a.displayName,photoURL:a.photoURL}),l=Object(u.a)(o,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){f()}),[]);var x=function(){var e=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.displayName===d.displayName&&a.photoURL===d.photoURL){e.next=4;break}return e.next=4,a.updateProfile({displayName:d.displayName,photoURL:d.photoURL});case 4:r();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("form",{onSubmit:x,className:"profileForm",children:[Object(c.jsx)("p",{className:"profile_photo",children:Object(c.jsx)("img",{src:d.photoURL?d.photoURL:"https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png",alt:"".concat(a.displayName,"'s profile")})}),Object(c.jsx)(t,{setNewUserObj:p}),Object(c.jsx)("input",{className:"formInput",onChange:function(e){var t=e.target.value;p((function(e){return Object(n.a)(Object(n.a)({},e),{},{displayName:t})}))},type:"text",placeholder:"Display name",value:d.displayName,autoFocus:!0}),Object(c.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn"})]}),Object(c.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),i.push("/")},children:"Log Out"})]})}),R=(a(55),function(e){var t=e.post_item;return console.log(t),Object(c.jsxs)("li",{className:"post",children:[Object(c.jsx)("p",{className:"date",children:new Date(t.createdAt).toLocaleDateString()}),Object(c.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(c.jsx)("img",{className:"post_img",src:t.attachmentUrl,alt:"nweet"}),Object(c.jsx)("div",{className:"like_and_comment",children:Object(c.jsxs)("p",{className:"like",children:[Object(c.jsx)("i",{className:"fas fa-heart"}),Object(c.jsx)("span",{className:"like_number",children:t.like})]})})]})}),B=(a(56),function(){var e=Object(j.f)(),t=Object(s.useState)([]),a=Object(u.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){e.location.state||e.push("/")}),[e]),Object(s.useEffect)((function(){(function(){var t=Object(b.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.location.state){t.next=5;break}return t.next=3,h.collection("nweets").where("creatorId","==",e.location.state.userId).orderBy("createdAt").get();case 3:t.sent.docs.forEach((function(e){return r((function(t){return[].concat(Object(g.a)(t),[e.data()])}))}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.location.state]),Object(c.jsxs)("div",{className:"account_wrap",children:[Object(c.jsx)(_,{}),Object(c.jsx)("ul",{className:"user_posts",children:n.map((function(e){return Object(c.jsx)(R,{post_item:e},e.createdAt)}))})]})}),A=(a(57),function(e){var t=e.darkMode,a=e.setDarkMode,n="dark",r=function(e){e?localStorage.setItem(n,!0):localStorage.setItem(n,!1)};return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem(n));if(null!==e)a(e),r(e);else{console.log("localStorage \ube44\uc5b4\uc788\uc74c");var t=window.matchMedia("(prefers-color-scheme: Dark)").matches;a(t),r(t)}}),[]),Object(c.jsx)("button",{className:t?"mode dark":"mode",onClick:function(e){a((function(e){return r(!e),!e}))},children:t?"Light Mode":"Dark Mode"})}),D=function(e){var t=e.ImageInput,a=e.isLoggedIn,n=e.userObj,r=e.setUserObj,i=e.refreshUser,o=Object(s.useState)(!1),d=Object(u.a)(o,2),m=d[0],b=d[1],p=Object(s.useRef)();return Object(s.useEffect)((function(){var e=p.current.parentElement.parentElement;m?e.classList.add("dark"):e.classList.remove("dark")}),[m]),Object(c.jsxs)(l.a,{children:[a&&Object(c.jsx)(L,{userObj:n}),Object(c.jsx)(A,{darkMode:m,setDarkMode:b}),Object(c.jsx)(j.c,{children:Object(c.jsx)(c.Fragment,{children:a?Object(c.jsxs)("div",{className:"router_loggedIn",ref:p,children:[Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(U,{darkMode:m,userObj:n})}),Object(c.jsx)(j.a,{exact:!0,path:"/profile",children:Object(c.jsx)(C,{ImageInput:t,userObj:n,setUserObj:r,refreshUser:i})}),Object(c.jsx)(j.a,{exact:!0,path:"/account",children:Object(c.jsx)(B,{})})]}):Object(c.jsx)("div",{ref:p,children:Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{darkMode:m})})})})})]})};var E=function(e){var t=e.ImageInput,a=Object(s.useState)(!1),n=Object(u.a)(a,2),r=n[0],i=n[1],o=Object(s.useState)(null),l=Object(u.a)(o,2),j=l[0],d=l[1];return Object(s.useEffect)((function(){O.onAuthStateChanged((function(e){d(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)},photoURL:e.photoURL}:null),i(!0)}))}),[]),Object(c.jsx)(c.Fragment,{children:r?Object(c.jsx)(D,{ImageInput:t,refreshUser:function(){var e=O.currentUser;d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(j),userObj:j,setUserObj:d}):"Initializing..."})},P=(a(58),a(59),a(32)),F=a(33),M=function(){function e(){Object(P.a)(this,e)}return Object(F.a)(e,[{key:"upload",value:function(){var e=Object(b.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","bq51dxpm"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dlpqcuqbq/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),q=(a(62),function(e){var t=e.imageUploader,a=e.setNewUserObj,r=(e.darkTheme,Object(s.useRef)()),i=function(){var e=Object(b.a)(m.a.mark((function e(c){var s,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.currentTarget.files,e.next=3,t.upload(s[0]);case 3:r=e.sent,a((function(e){return Object(n.a)(Object(n.a)({},e),{},{photoURL:r.url})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"image_file",children:[Object(c.jsx)("input",{className:"file_input",ref:r,type:"file",accept:"image/*",onChange:i}),Object(c.jsxs)("button",{className:"file_button",onClick:function(e){e.preventDefault(),r.current.click()},children:["Edit",Object(c.jsx)("br",{})," Profile Image"]})]})}),T=new M;o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(E,{ImageInput:function(e){return Object(c.jsx)(q,Object(n.a)(Object(n.a)({},e),{},{imageUploader:T}))}})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5132e8e3.chunk.js.map