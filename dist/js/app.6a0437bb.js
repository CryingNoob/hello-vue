(function(e){function t(t){for(var i,r,c=t[0],o=t[1],l=t[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,c=1;c<s.length;c++){var o=s[c];0!==a[o]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},a={app:0},n=[];function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/hello-vue/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var i=s("85ec"),a=s.n(i);a.a},"05b8":function(e,t,s){},"0b74":function(e,t,s){},2539:function(e,t,s){"use strict";var i=s("0b74"),a=s.n(i);a.a},"3fd7":function(e,t,s){"use strict";var i=s("772c"),a=s.n(i);a.a},"457c":function(e,t,s){"use strict";var i=s("5a0a"),a=s.n(i);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={name:"App",components:{}},c=r,o=(s("034f"),s("2877")),l=Object(o["a"])(c,a,n,!1,null,null,null),u=l.exports,d=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"main"}},[s("header",[s("TopMenu")],1),s("div",{staticClass:"menu-card"},[s("router-view")],1),e.hassignin?s("div",{staticClass:"login",on:{click:e.cancelsignin}},[s("form",{staticClass:"loginform",on:{submit:function(t){return t.preventDefault(),e.signIn(t)},click:e.loginform}},[s("h2",[e._v("登录表单")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"username"}},[e._v("username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"password"}},[e._v("password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("button",[e._v("signin")]),s("p",[e._v("【username：“root”，password：“password”】")]),s("p",[e._v("【username：“one”，password：“one”】")]),s("p",[e._v("【username：“two”，password：“two”】")])])]):e._e(),e.hassignup?s("div",{staticClass:"login",on:{click:e.cancelsignup}},[s("form",{staticClass:"loginform",on:{submit:function(t){return t.preventDefault(),e.signUp(t)},click:e.loginform}},[s("h2",[e._v("注册表单(现不可用，未做数据持久化）")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"username"}},[e._v("username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"password"}},[e._v("password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("button",[e._v("signup")])])]):e._e(),s("Footer")],1)},v=[],_=s("bc3a"),h=s.n(_),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topmenu"},[s("router-link",{attrs:{to:{name:"index"}}},[s("div",{staticClass:"logo"},[s("i",[e._v("Async技术社区")])])]),s("ul",{staticClass:"ul"},[s("router-link",{attrs:{to:{name:"index"}}},[s("li",{staticClass:"list"},[e._v(" 首页 ")])]),s("router-link",{attrs:{to:{name:"column"}}},[s("li",{staticClass:"list"},[e._v(" 专栏 ")])]),s("router-link",{attrs:{to:{name:"question"}}},[s("li",{staticClass:"list"},[e._v(" 问答 ")])]),s("router-link",{attrs:{to:{name:"download"}}},[s("li",{staticClass:"list"},[e._v(" 资源下载 ")])])],1),s("div",{staticClass:"search"},[s("SearchBox")],1),e.haslogin?s("div",{staticClass:"user"},[s("div",{staticClass:"usericon",on:{click:e.showMyprofile}},[e._v(" "+e._s(this.$store.state.user.username)+" ")]),e.showprofile?s("div",{staticClass:"profile"},[s("ul",[s("router-link",{attrs:{to:{name:"myarticle"}}},[s("li",[e._v("我的文章")])]),s("router-link",{attrs:{to:{name:"mylike"}}},[s("li",[e._v("我的点赞")])]),s("router-link",{attrs:{to:{name:"mycollect"}}},[s("li",[e._v("我的收藏")])])],1)]):e._e()]):s("div",{staticClass:"user"},[s("ul",[s("li",{staticClass:"list",on:{click:e.showsignup}},[e._v("免费注册")]),s("li",{staticClass:"list",on:{click:e.showsignin}},[e._v("立即登录")])])])],1)},f=[],g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchbox"},[s("div",{staticClass:"formbox"},[s("form",{staticClass:"myform",on:{submit:function(t){return t.preventDefault(),e.alertKeyWord(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入搜索关键字"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),s("button",[e._v("Search")])])])])},k=[],C={name:"SearchBox",data:function(){return{keyword:""}},methods:{alertKeyWord:function(){""!==this.keyword?alert(this.keyword):alert("请输入搜索关键字！")}}},y=C,b=(s("82a5"),Object(o["a"])(y,g,k,!1,null,"a161c94a",null)),w=b.exports,x={name:"TopMenu",components:{SearchBox:w},data:function(){return{showprofile:!1}},computed:{haslogin:function(){return this.$store.state.user.haslogin}},methods:{showsignin:function(){this.$store.commit("editsignin")},showsignup:function(){this.$store.commit("editsignup")},showMyprofile:function(){this.showprofile=!this.showprofile}}},T=x,A=(s("2539"),Object(o["a"])(T,p,f,!1,null,"94f38006",null)),$=A.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"footerItem"},[s("div",{staticClass:"title"},[e._v("Tldzal pfen qebmghvgn citghyi")]),s("div",{staticClass:"content"},[s("ul",[s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")]),s("div",{staticClass:"divide"}),s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")]),s("div",{staticClass:"divide"})])])]),s("div",{staticClass:"footerItem"},[s("div",{staticClass:"title"},[e._v("Tldzal pfen qebmghvgn citghyi")]),s("div",{staticClass:"content"},[s("ul",[s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")]),s("div",{staticClass:"divide"}),s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")])])])]),s("div",{staticClass:"footerItem"},[s("div",{staticClass:"title"},[e._v("Tldzal pfen qebmghvgn citghyi")]),s("div",{staticClass:"content"},[s("ul",[s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")]),s("div",{staticClass:"divide"}),s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")])])])]),s("div",{staticClass:"footerItem"},[s("div",{staticClass:"title"},[e._v("Tldzal pfen qebmghvgn citghyi")]),s("div",{staticClass:"content"},[s("ul",[s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")]),s("div",{staticClass:"divide"}),s("li",[e._v("Jenin")]),s("div",{staticClass:"divide"}),s("li",[e._v("Hsbuu")]),s("div",{staticClass:"divide"}),s("li",[e._v("Tesie")]),s("div",{staticClass:"divide"}),s("li",[e._v("Iqsys")])])])]),s("div",{staticClass:"bottom"},[e._v(" bottom ")])])}],I={name:"Footer"},j=I,P=(s("b98e"),Object(o["a"])(j,q,O,!1,null,"21766597",null)),E=P.exports,N={name:"Main",components:{TopMenu:$,Footer:E},data:function(){return{username:"",password:""}},created:function(){var e=this;h.a.get("/article/articles").then((function(t){e.$store.commit("initialArticles",t.data)})).catch((function(e){console.log(e)})),h.a.get("/question/questions").then((function(t){console.log(t.data),e.$store.commit("initialQuestions",t.data)})).catch((function(e){console.log(e)}))},computed:{hassignin:function(){return this.$store.state.user.hassignin},hassignup:function(){return this.$store.state.user.hassignup}},methods:{loginform:function(e){e.stopPropagation()},cancelsignin:function(){this.$store.commit("editsignin"),this.username="",this.password=""},cancelsignup:function(){this.$store.commit("editsignup"),this.username="",this.password=""},signIn:function(){var e=this;h.a.post("/user/signin",{username:e.username,password:e.password}).then((function(t){if(console.log(t.data),t.data){var s={userid:t.data.userid,username:t.data.username,password:t.data.password};e.$store.commit("editlogin",s)}else alert("用户名或密码错误！");e.cancelsignin()})).catch((function(t){console.log(t),alert("登录失败！"),e.cancelsignin()}))}}},M=N,J=(s("7865"),Object(o["a"])(M,m,v,!1,null,"d07445c0",null)),S=J.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index"},[s("h1",[e._v("首页")])])}],H={name:"Index"},L=H,B=Object(o["a"])(L,D,Q,!1,null,"ceb2106c",null),z=B.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column"},[s("h1",[e._v("Column Component")]),e.haslogin?s("div",{staticClass:"addArticle"},[s("router-link",{attrs:{to:{name:"addarticle"}}},[e._v(" AddArticle ")])],1):e._e(),e._l(e.articles,(function(t,i){return s("div",{key:i,staticClass:"articleItem"},[s("div",{staticClass:"articleTitle",on:{click:function(t){return e.goColumnItem(i)}}},[e._v(" "+e._s(t.article_title)+" ")]),s("div",{staticClass:"articleAuthor"},[e._v(" author:"+e._s(t.article_author)+" ")]),s("div",{staticClass:"articleContent"},[e._v(" "+e._s(t.article_content)+" ")]),s("div",{class:{like:!0,liked:e.haslogin&&-1!=e.myliked.indexOf(t.article_id)},on:{click:function(s){return e.likeArticle(t.article_id)}}},[e._v(" "+e._s(t.like_number)+" ")])])}))],2)},R=[],U=(s("c975"),{name:"Column",data:function(){return{}},computed:{haslogin:function(){return this.$store.state.user.haslogin},myliked:function(){var e=this.$store.state.user.userid;return this.$store.getters.myLikedArticles(e)},articles:function(){return this.$store.state.article.articles}},methods:{goColumnItem:function(e){this.$router.push({name:"columnitem",params:{columnid:e}})},likeArticle:function(e){var t=e-1;if(this.$store.state.user.haslogin){var s=!1;-1!=this.myliked.indexOf(e)&&(s=!0);var i={user:{userid:0,username:"root",password:"password"},index:t,article_id:e,isliked:s};this.$store.commit("likeArticle",i),console.log(this.$store.getters.myLikedArticles(0))}else alert("请先登录")}}}),K=U,W=(s("3fd7"),Object(o["a"])(K,F,R,!1,null,"2ddc39e2",null)),Y=W.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columnitem"},[s("div",{staticClass:"sidebar"},[e._v(" sidebar ")]),s("div",{staticClass:"articlebody"},[s("div",{staticClass:"author"},[s("div",{staticClass:"avatar"}),e._v(" AUTHOR:"+e._s(e.article.article_author)+" ")]),s("div",{staticClass:"title"},[s("h2",[e._v(e._s(e.article.article_title))])]),s("div",{staticClass:"annotation"},[s("div",{staticClass:"tags"},e._l(e.article.article_tag,(function(t,i){return s("div",{key:i,staticClass:"tagitem"},[e._v(" "+e._s(t.tag_name)+" ")])})),0),s("div",{staticClass:"date"},[e._v(" 发布于"+e._s(e.article.article_date.split("-")[1])+"月"+e._s(e.article.article_date.split("-")[2])+"日 ")])]),s("div",{staticClass:"content"},[s("p",[e._v(e._s(e.article.article_content))])]),s("div",{staticClass:"bottom"},[s("div",{class:{item:!0,liked:e.haslogin&&-1!=e.myliked.indexOf(e.article.article_id)},on:{click:function(t){return e.likeArticle(e.article.article_id)}}},[e._v("赞"+e._s(e.article.like_number))]),s("div",{class:{item:!0,liked:e.haslogin&&-1!=e.mycollected.indexOf(e.article.article_id)},on:{click:function(t){return e.collectArticle(e.article.article_id)}}},[e._v("收藏"+e._s(e.article.collect_number))])])]),s("div",{staticClass:"comment"},[e._v(" 共有"+e._s(e.article.comment_number)+"条评论 "),e._l(e.article.comment_content,(function(t,i){return s("div",{key:i,staticClass:"commentitem"},[s("div",{staticClass:"username"},[e._v(e._s(t.username))]),s("div",{staticClass:"date"},[e._v("发布于"+e._s(t.comment_date))]),s("div",{staticClass:"content"},[e._v(" "+e._s(t.comment_content)+" ")])])}))],2)])},V=[],X={name:"ColumnItem",computed:{haslogin:function(){return this.$store.state.user.haslogin},myliked:function(){var e=this.$store.state.user.userid;return console.log(this.$store.getters.myLikedArticles(e)),this.$store.getters.myLikedArticles(e)},mycollected:function(){var e=this.$store.state.user.userid;return console.log(this.$store.getters.myCollectedArticles(e)),this.$store.getters.myCollectedArticles(e)},article:function(){var e=this.$route.params.columnid;return this.$store.getters.getArticleByIndex(e)}},methods:{likeArticle:function(e){var t=e-1;if(this.$store.state.user.haslogin){var s=!1;-1!=this.myliked.indexOf(e)&&(s=!0);var i={user:{userid:0,username:"root",password:"password"},index:t,article_id:e,isliked:s};this.$store.commit("likeArticle",i),console.log(this.$store.getters.myLikedArticles(0))}else alert("请先登录")},collectArticle:function(e){var t=e-1;if(this.$store.state.user.haslogin){var s=!1;-1!=this.mycollected.indexOf(e)&&(s=!0);var i={user:{userid:0,username:"root",password:"password"},index:t,article_id:e,iscollected:s};this.$store.commit("collectArticle",i)}else alert("请先登录")}}},Z=X,ee=(s("457c"),Object(o["a"])(Z,G,V,!1,null,"65297646",null)),te=ee.exports,se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"addArticle"},[s("h1",[e._v("addArticle")]),s("form",{staticClass:"addform",on:{submit:function(t){return t.preventDefault(),e.addArticle(t)}}},[s("h2",[e._v("添加文章表单")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"title"}},[e._v("title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",id:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("p",[e._v("选择标签")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"前端",value:"0"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"0")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n="0",r=e._i(s,n);i.checked?r<0&&(e.checkedTags=s.concat([n])):r>-1&&(e.checkedTags=s.slice(0,r).concat(s.slice(r+1)))}else e.checkedTags=a}}}),s("label",{attrs:{for:"前端"}},[e._v("前端")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"html5",value:"1"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"1")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n="1",r=e._i(s,n);i.checked?r<0&&(e.checkedTags=s.concat([n])):r>-1&&(e.checkedTags=s.slice(0,r).concat(s.slice(r+1)))}else e.checkedTags=a}}}),s("label",{attrs:{for:"html5"}},[e._v("html5")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"css3",value:"2"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"2")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n="2",r=e._i(s,n);i.checked?r<0&&(e.checkedTags=s.concat([n])):r>-1&&(e.checkedTags=s.slice(0,r).concat(s.slice(r+1)))}else e.checkedTags=a}}}),s("label",{attrs:{for:"css3"}},[e._v("css3")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"vue",value:"3"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"3")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n="3",r=e._i(s,n);i.checked?r<0&&(e.checkedTags=s.concat([n])):r>-1&&(e.checkedTags=s.slice(0,r).concat(s.slice(r+1)))}else e.checkedTags=a}}}),s("label",{attrs:{for:"vue"}},[e._v("vue")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"react",value:"4"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"4")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,i=t.target,a=!!i.checked;if(Array.isArray(s)){var n="4",r=e._i(s,n);i.checked?r<0&&(e.checkedTags=s.concat([n])):r>-1&&(e.checkedTags=s.slice(0,r).concat(s.slice(r+1)))}else e.checkedTags=a}}}),s("label",{attrs:{for:"react"}},[e._v("react")])]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"content"}},[e._v("Content")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text",id:"content",placeholder:"Add Article Content"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})]),s("button",[e._v("提交")])]),e._v(" "+e._s(e.title)+" "+e._s(e.checkedTags)+" "+e._s(e.content)+" ")])},ie=[],ae=[];ae.push({tag_id:0,tag_name:"前端"}),ae.push({tag_id:1,tag_name:"html5"}),ae.push({tag_id:2,tag_name:"css3"}),ae.push({tag_id:3,tag_name:"vue"}),ae.push({tag_id:4,tag_name:"react"});var ne=ae,re={name:"AddArticle",data:function(){return{title:"",checkedTags:[],content:""}},methods:{addArticle:function(){for(var e=this.$store.getters.getArticleNum+1,t=this.$store.state.user.username,s=[],i=0;i<this.checkedTags.length;i++){var a=parseInt(this.checkedTags[i]);s.push(ne[a])}var n={article_id:e,article_title:this.title,article_author:t,article_tag:s,article_date:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),article_content:this.content,like_number:0,like_users:[],comment_number:0,comment_content:[],collect_number:0,collect_users:[]};this.$store.commit("addArticle",n),this.$store.getters.getArticleNum==e?alert("文章提交成功！"):alert("文章提交失败！"),this.$router.push({name:"column"})}}},ce=re,oe=Object(o["a"])(ce,se,ie,!1,null,"5f617a80",null),le=oe.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question"},[s("h1",[e._v("Question")]),e._l(e.questions,(function(t,i){return s("div",{key:i,staticClass:"questionItem"},[s("div",{staticClass:"top"},[s("div",{staticClass:"author"},[s("i",[e._v(e._s(t.question_author))])]),s("div",{staticClass:"date"},[e._v("发布于"+e._s(t.question_date))])]),s("div",{staticClass:"answerNum"},[e._v(e._s(t.answer_number)+"回答")]),s("div",{staticClass:"content",on:{click:function(t){return e.goQuestionItem(i)}}},[e._v(e._s(t.question_content))])])}))],2)},de=[],me={name:"Question",computed:{questions:function(){return this.$store.state.question.questions}},methods:{goQuestionItem:function(e){this.$router.push({name:"questionitem",params:{questionid:e}})}}},ve=me,_e=(s("851c"),Object(o["a"])(ve,ue,de,!1,null,"36d53f60",null)),he=_e.exports,pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"questionItem"},[s("h1",[e._v("QuestionItem")]),s("div",{staticClass:"header"},[s("div",{staticClass:"author"},[e._v(e._s(e.question.question_author))]),s("div",{staticClass:"date"},[e._v(e._s(e.question.question_date))])]),s("div",{staticClass:"content"},[e._v(" "+e._s(e.question.question_content)+" ")]),s("div",{staticClass:"answer"},[s("div",{staticClass:"num"},[e._v(" 共有"+e._s(e.question.answer_number)+"个回答 ")]),e._l(e.question.answer_content,(function(t,i){return s("div",{key:i,staticClass:"answerItem"},[s("div",{staticClass:"top"},[s("div",{staticClass:"answer_user"},[e._v(" "+e._s(t.username)+" ")]),s("div",{staticClass:"answer_date"},[e._v(" "+e._s(t.answer_date)+" ")])]),s("div",{staticClass:"answercontent"},[e._v(" "+e._s(t.answer_content)+" ")])])}))],2)])},fe=[],ge={name:"QuestionItem",computed:{question:function(){var e=this.$route.params.questionid;return this.$store.getters.getQuestionByIndex(e)}}},ke=ge,Ce=(s("a421"),Object(o["a"])(ke,pe,fe,!1,null,"205aca30",null)),ye=Ce.exports,be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},we=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"download"},[s("h1",[e._v("Download")])])}],xe={name:"Download"},Te=xe,Ae=Object(o["a"])(Te,be,we,!1,null,"7e70d71e",null),$e=Ae.exports,qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile"},[s("router-link",{attrs:{to:{name:"index"}}},[s("div",{staticClass:"logo"},[s("i",[e._v("Async技术社区")])])]),s("h1",[e._v("Profile")]),s("div",[s("ul",[s("router-link",{attrs:{to:{name:"myarticle"}}},[s("li",[e._v("我的文章")])]),s("router-link",{attrs:{to:{name:"mylike"}}},[s("li",[e._v("我的点赞")])]),s("router-link",{attrs:{to:{name:"mycollect"}}},[s("li",[e._v("我的收藏")])])],1)]),s("hr"),s("div",[s("router-view")],1)],1)},Oe=[],Ie={name:"Profile"},je=Ie,Pe=(s("8faf"),Object(o["a"])(je,qe,Oe,!1,null,"cce366ba",null)),Ee=Pe.exports,Ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"myarticle"},[e._v(" myarticle ")])},Me=[],Je={name:"MyArticle"},Se=Je,De=Object(o["a"])(Se,Ne,Me,!1,null,null,null),Qe=De.exports,He=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mylike"},[e._v(" mylike ")])},Le=[],Be={name:"MyLike"},ze=Be,Fe=Object(o["a"])(ze,He,Le,!1,null,null,null),Re=Fe.exports,Ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mycollect"},[e._v(" mycollect ")])},Ke=[],We={name:"MyCollect"},Ye=We,Ge=Object(o["a"])(Ye,Ue,Ke,!1,null,null,null),Ve=Ge.exports;i["a"].use(d["a"]);var Xe=new d["a"]({routes:[{path:"/",redirect:"/main/index"},{path:"/main",component:S,children:[{path:"index",name:"index",component:z},{path:"column",name:"column",component:Y},{path:"column/columnid=:columnid",name:"columnitem",component:te},{path:"column/addarticle",name:"addarticle",component:le},{path:"question",name:"question",component:he},{path:"question/questionid=:questionid",name:"questionitem",component:ye},{path:"download",name:"download",component:$e}]},{path:"/profile",name:"profile",component:Ee,children:[{path:"myarticle",name:"myarticle",component:Qe},{path:"mylike",name:"mylike",component:Re},{path:"mycollect",name:"mycollect",component:Ve}]}]}),Ze=s("96eb"),et=s.n(Ze),tt=[];tt.push({userid:0,username:"root",password:"password"}),tt.push({userid:1,username:"one",password:"one"}),tt.push({userid:2,username:"two",password:"two"});for(var st=tt,it=et.a.Random,at=[],nt=1;nt<=10;nt++){var rt={article_id:nt,article_title:"第"+nt+"篇专栏文章",article_author:st[0].username,article_tag:[ne[0],ne[2]],article_date:it.date(),article_content:it.csentence(200,500),like_number:3,like_users:[st[0],st[1],st[2]],comment_number:2,comment_content:[{comment_id:1,comment_content:it.csentence(10,20),userid:st[0].userid,username:st[0].username,comment_date:it.date()},{comment_id:2,comment_content:it.csentence(20,30),userid:st[1].userid,username:st[1].username,comment_date:it.date()}],collect_number:2,collect_users:[st[0],st[1]]};at.push(rt)}for(var ct=11;ct<=20;ct++){var ot={article_id:ct,article_title:"第"+ct+"篇专栏文章",article_author:st[1].username,article_tag:[ne[ct%2],ne[ct%3]],article_date:it.date(),article_content:it.csentence(200,500),like_number:1,like_users:[st[2]],comment_number:1,comment_content:[{comment_id:1,comment_content:it.csentence(10,20),userid:st[2].userid,username:st[2].username,comment_date:it.date()}],collect_number:1,collect_users:[st[2]]};at.push(ot)}for(var lt=at,ut=et.a.Random,dt=[],mt=1;mt<=5;mt++){var vt={question_id:mt,question_author:st[1].username,question_content:ut.csentence(20,50),question_date:ut.date(),answer_number:2,answer_content:[{answer_id:1,answer_content:ut.csentence(20,30),userid:st[0].userid,username:st[0].username,answer_date:ut.date()},{answer_id:2,answer_content:ut.csentence(30,50),userid:st[2].userid,username:st[2].username,answer_date:ut.date()}]};dt.push(vt)}for(var _t=6;_t<=10;_t++){var ht={question_id:_t,question_author:st[0].username,question_content:ut.csentence(30,40),question_date:ut.date(),answer_number:1,answer_content:[{answer_id:1,answer_content:ut.csentence(20,30),userid:st[0].userid,username:st[0].username,answer_date:ut.date()}]};dt.push(ht)}var pt=dt,ft="http://mockjs.com/api";et.a.mock("".concat(ft,"/user/signin"),"post",(function(e){for(var t=JSON.parse(e.body).username,s=JSON.parse(e.body).password,i={},a=0;a<st.length;a++){var n=st[a];n.username==t&&n.password==s&&(i=st[a])}return i})),et.a.mock("".concat(ft,"/article/articles"),"get",lt),et.a.mock("".concat(ft,"/question/questions"),"get",pt);s("ed2c");var gt=s("2f62"),kt=(s("99af"),s("a434"),s("2909")),Ct={state:{articles:[]},getters:{myLikedArticles:function(e){return function(t){for(var s=[],i=0;i<e.articles.length;i++)for(var a=0;a<e.articles[i].like_users.length;a++)if(e.articles[i].like_users[a].userid==t){s.push(e.articles[i].article_id);break}return s}},myCollectedArticles:function(e){return function(t){for(var s=[],i=0;i<e.articles.length;i++)for(var a=0;a<e.articles[i].collect_users.length;a++)if(e.articles[i].collect_users[a].userid==t){s.push(e.articles[i].article_id);break}return s}},getArticleByIndex:function(e){return function(t){return console.log(e.articles[t]),e.articles[t]}},getArticleNum:function(e){return e.articles.length}},mutations:{initialArticles:function(e,t){e.articles=Object(kt["a"])(t)},likeArticle:function(e,t){if(console.log(t),t.isliked){e.articles[t.index].like_number--;for(var s=0;s<e.articles[t.index].like_users.length;s++)if(e.articles[t.index].like_users[s].userid==t.user.userid){e.articles[t.index].like_users.splice(s,1);break}}else e.articles[t.index].like_number++,e.articles[t.index].like_users.push(t.user)},collectArticle:function(e,t){if(console.log(t),t.iscollected){e.articles[t.index].collect_number--;for(var s=0;s<e.articles[t.index].collect_users.length;s++)if(e.articles[t.index].collect_users[s].userid==t.user.userid){e.articles[t.index].collect_users.splice(s,1);break}}else e.articles[t.index].collect_number++,e.articles[t.index].collect_users.push(t.user)},addArticle:function(e,t){e.articles=[].concat(Object(kt["a"])(e.articles),[t])}}},yt=Ct,bt={state:{questions:[]},getters:{getQuestionByIndex:function(e){return function(t){return e.questions[t]}}},mutations:{initialQuestions:function(e,t){e.questions=Object(kt["a"])(t)}}},wt=bt,xt={state:{haslogin:!1,hassignin:!1,hassignup:!1,avatar:"",userid:0,username:"",password:""},mutations:{editlogin:function(e,t){e.haslogin=!0,e.userid=t.userid,e.username=t.username,e.password=t.password},editsignin:function(e){e.hassignin=!e.hassignin},editsignup:function(e){e.hassignup=!e.hassignup}}},Tt=xt;i["a"].use(gt["a"]);var At=new gt["a"].Store({modules:{article:yt,question:wt,user:Tt}}),$t=At;h.a.defaults.baseURL="http://mockjs.com/api",i["a"].config.productionTip=!1,new i["a"]({router:Xe,store:$t,render:function(e){return e(u)}}).$mount("#app")},"5a0a":function(e,t,s){},"5eee":function(e,t,s){},"772c":function(e,t,s){},7865:function(e,t,s){"use strict";var i=s("ecfb"),a=s.n(i);a.a},"82a5":function(e,t,s){"use strict";var i=s("fc79"),a=s.n(i);a.a},"851c":function(e,t,s){"use strict";var i=s("05b8"),a=s.n(i);a.a},"85ec":function(e,t,s){},"8faf":function(e,t,s){"use strict";var i=s("a5de"),a=s.n(i);a.a},a421:function(e,t,s){"use strict";var i=s("e16e"),a=s.n(i);a.a},a5de:function(e,t,s){},b98e:function(e,t,s){"use strict";var i=s("5eee"),a=s.n(i);a.a},e16e:function(e,t,s){},ecfb:function(e,t,s){},ed2c:function(e,t,s){},fc79:function(e,t,s){}});
//# sourceMappingURL=app.6a0437bb.js.map