(function(t){function s(s){for(var a,n,o=s[0],r=s[1],l=s[2],u=0,v=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&v.push(c[n][0]),c[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);A&&A(s);while(v.length)v.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,o=1;o<e.length;o++){var r=e[o];0!==c[r]&&(a=!1)}a&&(i.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},c={app:0},i=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/yuanjihua/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var A=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0e1b":function(t,s,e){"use strict";e("41ca")},1071:function(t,s,e){"use strict";e("b94a")},1575:function(t,s,e){},"1b9a":function(t,s,e){"use strict";e("fa04")},"31a1":function(t,s){t.exports="data:image/png;base64,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"},"3c90":function(t,s,e){},"41ca":function(t,s,e){},5e3:function(t,s,e){"use strict";e("3c90")},5509:function(t,s,e){t.exports=e.p+"img/yuanLabelIcon.322c5b37.png"},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),c=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(e("5000"),e("2877")),o={},r=Object(n["a"])(o,c,i,!1,null,null,null),l=r.exports,A=e("8c4f"),u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col page"},[s("div",{staticClass:"flex-col banner"},[s("WebNav"),t._m(0)],1),s("div",{staticClass:"flex-col story_list"},[s("div",{staticClass:"flex-row"},[s("div",{class:"flex-col equal-division-item "+(1===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,1)}},[t._m(1),s("div",{class:"cloes_active_icon "+(1===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"text_6 "+(1===t.sectionActive&&"section_hidden")},[t._v(" 在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了 ，1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式...... ")]),s("div",{class:"justify-between story_detail "+(1===t.sectionActive&&"story_detail_active")},[t._m(2),t._m(3)]),s("div",{class:"section-more-icon  "+(1===t.sectionActive&&"section_hidden")})]),s("div",{class:"flex-col equal-division-item_1 "+(2===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,2)}},[t._m(4),s("div",{class:"cloes_active_icon "+(2===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"text_8 "+(2===t.sectionActive&&"section_hidden")},[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大...... ")]),s("div",{class:"justify-between story_detail "+(2===t.sectionActive&&"story_detail_active")},[t._m(5),t._m(6)]),s("div",{class:"section-more-icon  "+(2===t.sectionActive&&"section_hidden")})])]),s("div",{class:"flex-col section_9 "+(3===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,3)}},[t._m(7),s("div",{class:"cloes_active_icon "+(3===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"text_10  "+(3===t.sectionActive&&"section_hidden")},[t._v(" 元计划正式启动后，由博士领导各领域顶尖科学家团队，以及护卫军队随行。为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界，这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开...... ")]),s("div",{class:"justify-between story_detail "+(3===t.sectionActive&&"story_detail_active")},[t._m(8),t._m(9)]),s("div",{class:"section-more-icon  "+(3===t.sectionActive&&"section_hidden")})])]),s("WebFooter")],1)},v=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center group_3"},[s("img",{staticClass:"image_2",attrs:{src:e("cf05")}}),s("span",{staticClass:"text_4"},[t._v("一起建设中国制造的全球共识")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center text-wrapper"},[s("span",{staticClass:"text_5"},[t._v("第一章· 前序")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算 ")]),s("span",[t._v(" 但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白...... ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center text-wrapper_1"},[s("span",{staticClass:"text_7"},[t._v("第二章 · 起缘")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算 ")]),s("span",[t._v(" 但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白...... ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center text-wrapper_2"},[s("span",{staticClass:"text_9"},[t._v("第三章· 碰撞")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算 ")]),s("span",[t._v(" 但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白...... ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])}],p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"web-nav justify-between section_3"},[s("img",{staticClass:"image",attrs:{src:e("cf05")}}),s("div",{staticClass:"flex-row group"},t._l(t.routeInfo,(function(a,c){return s("router-link",{key:c,class:"nav-item "+(t.active!==a.active&&"justify-center"),attrs:{to:a.path}},[t.active===a.active?s("img",{staticClass:"high-light-img",attrs:{src:e("83a1")}}):t._e(),s("span",{staticClass:"text"},[t._v(t._s(a.title))])])})),1)])},d=[],f={name:"HelloWorld",data(){return{active:0,routeInfo:[{title:"首页",path:"/",active:0},{title:"关于我们",path:"/about",active:1},{title:"规划图",path:"/plan",active:2},{title:"图例展示",path:"/",active:3}],navRelate:{shouye:0,about:1,plan:2}}},methods:{},watch:{$route:{handler:function(t,s){this.active=this.navRelate[t.name]},deep:!0,immediate:!0}}},g=f,x=(e("1b9a"),Object(n["a"])(g,p,d,!1,null,"dc4a4c56",null)),m=x.exports,C=function(){var t=this,s=t._self._c;return s("div",{staticClass:"web-footer"},[t._v(" @2022 深圳行者数学艺术有限公司官网 版权所有. 粤ICP备2022071585号-1 ")])},h=[],_={name:"HelloWorld",props:{msg:String}},b=_,y=(e("ec31"),Object(n["a"])(b,C,h,!1,null,"786e3dba",null)),B=y.exports,w={components:{WebNav:m,WebFooter:B},data(){return{sectionActive:!1}},methods:{setSectionActive(t,s){this.sectionActive||(this.sectionActive=s)},setSectionHidden(t){t.stopPropagation(),this.sectionActive=!1}}},V=w,O=(e("0e1b"),Object(n["a"])(V,u,v,!1,null,"5dcc5389",null)),W=O.exports,M=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col page"},[s("div",{staticClass:"flex-col section_1"},[s("WebNav")],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("WebFooter")],1)},Z=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col view"},[s("div",{staticClass:"flex-col"},[s("div",{staticClass:"flex-col items-center group_3"},[s("span",{staticClass:"text_4 text_28"},[t._v("about us")]),s("span",{staticClass:"text_6 text_29"},[t._v("关于我们")])]),s("span",{staticClass:"text_8"},[t._v("一起建设中国制造的全球共识")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col group_17"},[s("span",{staticClass:"text_9"},[t._v("元计划由深圳行者艺术与四川萃雅教育联合发行")]),s("span",{staticClass:"text_10"},[t._v(" 行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。 ")]),s("span",{staticClass:"text_11"},[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",{staticClass:"text_12"},[t._v(" 四川萃雅教育科技有限公司是由新华文轩出版传媒股份有限公司、四川日报网络传媒发展有限公司、中国广电四川网络股份有限公司、四川任你学教育科技有限公司 (四川省电教馆与四川省教科院合资) 、四川奇迹云科技有限公司共同出资成立的专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，助力校内教育和素质教育，驻守文化根脉，促进中华优秀文化传播传承。 ")]),s("span",{staticClass:"text_13"},[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center group_4"},[s("span",{staticClass:"text_4 text_14"},[t._v("about us")]),s("span",{staticClass:"text_6 text_15"},[t._v("企业文化")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col enterprise-culture-content"},[s("span",{staticClass:"main"},[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",{staticClass:"main_1"},[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col section_6"},[s("div",{staticClass:"flex-row contact_way"},[s("div",{staticClass:"flex-col section_9"}),s("div",{staticClass:"flex-col items-start contactus"},[s("div",{staticClass:"flex-row contactus_title"},[s("div",{staticClass:"flex-col items-start group_8"},[s("span",{staticClass:"text_4 text_18"},[t._v("contact us")]),s("span",{staticClass:"text_19"},[t._v("联系我们")])]),s("img",{staticClass:"image_7",attrs:{src:e("5509")}})]),s("div",{staticClass:"flex-col contactus_content"},[s("div",{staticClass:"flex-row"},[s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"image_2",attrs:{src:e("ad30")}}),s("span",{staticClass:"text_20"},[t._v("元计划公众号")])]),s("div",{staticClass:"flex-col items-start group_13"},[s("img",{staticClass:"image_2",attrs:{src:e("d3e1")}}),s("span",{staticClass:"text_21"},[t._v("客服微信")])])]),s("div",{staticClass:"flex-col group_12"},[s("div",{staticClass:"flex-row"},[s("img",{staticClass:"image_4",attrs:{src:e("931d")}}),s("span",{staticClass:"text_22"},[t._v("合作邮箱")])]),s("span",{staticClass:"text_23"},[t._v("caijingya@xingzhe.team")]),s("div",{staticClass:"flex-row group_14"},[s("img",{staticClass:"image_4",attrs:{src:e("31a1")}}),s("span",{staticClass:"text_24"},[t._v("公司地址")])]),s("span",{staticClass:"text_25"},[t._v("中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1")])])])])])])}],j={components:{WebNav:m,WebFooter:B},data(){return{}}},K=j,P=(e("1071"),Object(n["a"])(K,M,Z,!1,null,"981d20a6",null)),R=P.exports;a["a"].use(A["a"]);const H=[{path:"/",name:"shouye",component:W},{path:"/about",name:"about",component:R}],D=new A["a"]({routes:H});var F=D,N=e("2f62");a["a"].use(N["a"]);var U=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:F,store:U,render:t=>t(l)}).$mount("#app")},"83a1":function(t,s){t.exports="data:image/png;base64,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"},"931d":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQYSURBVHgB7ZlJaBRBFIbfGOO+gQuK60FBRXAHweUiuOCGevCkQUERXNEoikrAoJggxIWIirm4HowQvZhTcvPgQYnBqyRoApJo9qCJyfN/VEd73vRMOjM9SSfUDx8zVNf2d1V116smsrKysrKysrKysrKysrKiiFciM0v6fLAAjKbBpVZQGYlEan3lhtkx4Bpo5cGrenAWZPoxfJmHhrrBMe0vosxOx88nMNXjXrRTeCU+vJZeFViB6d3QkzBcZZB162WWQTEoAB0UPh0A2SBDpc8F00CDZymM8MZepslpCplk2oKGBH1emqjwRrUGXoJOVUEOhUDoxzCQBbpU/74la1gq2sDmadftSm910obTAArtHwF/lDkZoEOpGF7npF9VpuX/cRogoe1s0KSMlYKJYHcQhmX6nOfo6SOmL1I/SmYVOMrRN1/0XPro5EndsHMtA1xQjTWDE9xP0xvtnPQw+wRMcOUJxrArT55qVPIdoTQLbVwBLcpMCRiv8gVuWKbVJY5d09mUBqHezDgjW8Rmz6/zB2vYySemc1QnGtk8OTMoQLFZRloPwdg4+YM37MpfoEzLa+IQBSQ2QUybMvACjElQJq2GZbpdVQ1IuROUglB+FDjHsbrro2z6DDtlMp2RcEu2erIBGEZJyOMmim7LjfBRNr2GXWXvqYZkS9qnzQmb930h+KXqKvJj1qmj3wyPALc4Vq/AbB/lV4Fyj/L51Af1ZjjoDcM4j7Q9YC0aLsGvUAHqyIScs8BysAvsBeNV2S5JQ9lJiGkbKWglO8LINxK85th3pZbUKeu7GlSxOYrxo8fShs++JBzhpB4qqgEJssvATvp/giIj+ADUqOzS3iQwh0xwPtmjSin7lKKD9v2gHG3NoCDFfX8tLQEf1B39AdY71+eBG6CSY0M5rTrwCCxyyu5w6nLrPVjYS5/S89DCtcWgRlX+BSzzyCtTfjU4Du6DN+AtmygnB2xjjwcb0laCWtVGbc9N6TfDSN8O2lXFFWA+BSw2s+Szaus72Bonf+DBw0GOPUN6B6ZSmoS6Z4Iy1eZPkOWRN7B4OMIm+NYjW8zmeDetkjbYLAO35K1wmF1REwd04iFr8KaqSK7Ldq/30/2A5PTjjupHp9O3ERSEYTYb+Wcc/Y7tALmc5F45FbE5ecnj6NNU6VuR09eUDMvDqVRVIJXLsU6EBkhsltcZjg0dZfOTlaxhMabfg/Kg2EwhEZt3tT43b0rWsJZsBzdRyIQ+bQFfE/Q7YfAQ74NZC7gOZMRXUrgkW9FcUEixfiRAaXMn6K+HU/DzkUwUMxQkXtYg0vr3ATDqKYsL9fjJA79p8Ksb5LvNxhVG+hT7D93CKAlE9rHHB4JIAtMSf8rUHkeDR7Jmm0E1RpbJysrKysrKKlT6CygKvPz2t6L0AAAAAElFTkSuQmCC"},ad30:function(t,s,e){t.exports=e.p+"img/yuanAccount.2ec8b6aa.png"},b94a:function(t,s,e){},cf05:function(t,s,e){t.exports=e.p+"img/logo.5d36a5de.png"},d3e1:function(t,s,e){t.exports=e.p+"img/wechatScan.c6800100.png"},ec31:function(t,s,e){"use strict";e("1575")},fa04:function(t,s,e){}});
//# sourceMappingURL=app.c794241b.js.map