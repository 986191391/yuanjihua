(function(t){function s(s){for(var e,n,o=s[0],l=s[1],r=s[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&d.push(c[n][0]),c[n]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);v&&v(s);while(d.length)d.shift()();return i.push.apply(i,r||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,o=1;o<a.length;o++){var l=a[o];0!==c[l]&&(e=!1)}e&&(i.splice(s--,1),t=n(n.s=a[0]))}return t}var e={},c={app:0},i=[];function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(a,e,function(s){return t[s]}.bind(null,e));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/yuanjihua/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var r=0;r<o.length;r++)s(o[r]);var v=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0581":function(t,s,a){"use strict";a("42f3")},"06eb":function(t,s,a){},"31a1":function(t,s){t.exports="data:image/png;base64,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"},3629:function(t,s,a){"use strict";a("06eb")},"42f3":function(t,s,a){},5509:function(t,s,a){t.exports=a.p+"img/yuanLabelIcon.322c5b37.png"},"56d7":function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),c=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(a("94a1"),a("2877")),o={},l=Object(n["a"])(o,c,i,!1,null,null,null),r=l.exports,v=a("8c4f"),u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col indexPage"},[s("div",{staticClass:"web-container"},[s("div",{staticClass:"flex-col banner"},[s("YuanNav"),t._m(0)],1),s("div",{staticClass:"flex-col story_list"},[s("div",{staticClass:"flex-row"},[s("div",{class:"flex-col equal-division-item "+(1===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,1)}},[t._m(1),s("div",{class:"cloes_active_icon "+(1===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"text_6 "+(1===t.sectionActive&&"section_hidden")},[t._v(" 在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了 ，1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式...... ")]),s("div",{class:"justify-between story_detail "+(1===t.sectionActive&&"story_detail_active")},[t._m(2),t._m(3)]),s("div",{class:"section-more-icon  "+(1===t.sectionActive&&"section_hidden")})]),s("div",{class:"flex-col equal-division-item_1 "+(2===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,2)}},[t._m(4),s("div",{class:"cloes_active_icon "+(2===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"text_8 "+(2===t.sectionActive&&"section_hidden")},[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大...... ")]),s("div",{class:"justify-between story_detail "+(2===t.sectionActive&&"story_detail_active")},[t._m(5),t._m(6)]),s("div",{class:"section-more-icon  "+(2===t.sectionActive&&"section_hidden")})])]),s("div",{class:"flex-col section_9 "+(3===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,3)}},[t._m(7),s("div",{class:"cloes_active_icon "+(3===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"text_10  "+(3===t.sectionActive&&"section_hidden")},[t._v(" 元计划正式启动后，由博士领导各领域顶尖科学家团队，以及护卫军队随行。为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界，这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开...... ")]),s("div",{class:"justify-between story_detail "+(3===t.sectionActive&&"story_detail_active")},[t._m(8),t._m(9)]),s("div",{class:"section-more-icon  "+(3===t.sectionActive&&"section_hidden")})])])]),s("div",{staticClass:"pc-container"},[s("YuanNav"),s("div",{staticClass:"flex-col pc-banner"},[t._m(10),s("el-carousel",{attrs:{autoplay:!1,type:"card",height:"420px"}},t._l(4,(function(a){return s("el-carousel-item",{key:a},[s("h3",{staticClass:"medium"},[t._v(t._s(a))])])})),1)],1)],1),s("YuanFooter")],1)},d=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center group_3"},[s("img",{staticClass:"image_2",attrs:{src:a("cf05")}}),s("span",{staticClass:"text_4"},[t._v("一起建设中国制造的全球共识")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center text-wrapper"},[s("span",{staticClass:"text_5"},[t._v("第一章· 前序")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算 ")]),s("span",[t._v(" 但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白...... ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center text-wrapper_1"},[s("span",{staticClass:"text_7"},[t._v("第二章 · 起缘")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算 ")]),s("span",[t._v(" 但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白...... ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center text-wrapper_2"},[s("span",{staticClass:"text_9"},[t._v("第三章· 碰撞")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算 ")]),s("span",[t._v(" 但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白...... ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col"},[s("img",{staticClass:"image_5",attrs:{src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16578082901556610546.png"}}),s("div",{staticClass:"flex-col items-center slogin"},[s("span",{staticClass:"slogin_1"},[t._v("一起建设")]),s("span",{staticClass:"slogin_2"},[t._v("中国制造的全球共识")])])])}],p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"yuanjihua-nav"},[s("div",{staticClass:"web-nav justify-between nav_container"},[s("img",{staticClass:"nav_active_image",attrs:{src:a("cf05")}}),s("div",{staticClass:"flex-row nav"},t._l(t.routeInfo,(function(a,e){return s("router-link",{key:e,class:"nav-item "+(t.active===a.active&&"nav-active"),attrs:{to:a.path}},[s("span",{staticClass:"text"},[t._v(t._s(a.title))])])})),1)]),s("div",{staticClass:"pc-nav"},[s("i",{staticClass:"nav-icon el-icon-back"}),s("span",{staticClass:"nav-title"},[t._v(t._s(t.navTitle))]),s("i",{staticClass:"nav-icon el-icon-s-unfold",on:{click:()=>{this.isNavModalShow=!0}}}),t.isNavModalShow?s("div",{staticClass:"nav-list-modal",on:{click:t.onPcNavClick}},[s("router-link",{staticClass:"nav-list-item",attrs:{to:"/"}},[t._v("首页")]),s("router-link",{staticClass:"nav-list-item",attrs:{to:"/about"}},[t._v("关于我们")]),s("router-link",{staticClass:"nav-list-item",attrs:{to:"/plan"}},[t._v("规划图")])],1):t._e()])])},_=[],f={name:"HelloWorld",props:{navTitle:{default:"元计划"}},data(){return{active:0,routeInfo:[{title:"首页",path:"/",active:0},{title:"关于我们",path:"/about",active:1},{title:"规划图",path:"/plan",active:2},{title:"图例展示",path:"/",active:3}],navRelate:{shouye:0,about:1,plan:2},isNavModalShow:!1}},methods:{onPcNavClick(){this.isNavModalShow=!1}},watch:{$route:{handler:function(t,s){this.active=this.navRelate[t.name]},deep:!0,immediate:!0}}},C=f,A=(a("3629"),Object(n["a"])(C,p,_,!1,null,"b8215da0",null)),m=A.exports,g=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"yuanjihua-footer"},[s("div",{staticClass:"web-footer"},[t._v(" @2022 深圳行者数学艺术有限公司官网 版权所有. 粤ICP备2022071585号-1 ")]),s("div",{staticClass:"pc-footer"},[s("div",[t._v("@2022 深圳行者数字艺术有限公司官网 版权所有")]),s("div",[t._v("粤ICP备2022071585号-1")])])])}],h={name:"HelloWorld",props:{msg:String}},b=h,y=(a("0581"),Object(n["a"])(b,g,x,!1,null,"c0b035e2",null)),w=y.exports,j={components:{YuanNav:m,YuanFooter:w},data(){return{sectionActive:!1}},methods:{setSectionActive(t,s){this.sectionActive||(this.sectionActive=s)},setSectionHidden(t){t.stopPropagation(),this.sectionActive=!1}}},B=j,P=(a("a730"),Object(n["a"])(B,u,d,!1,null,"928106c6",null)),O=P.exports,R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aboutus-page"},[s("WebAboutUs"),s("PcAboutUs")],1)},S=[],J=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col web-about-page"},[s("div",{staticClass:"flex-col section_1"},[s("YuanNav")],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("YuanFooter")],1)},Q=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col view"},[s("div",{staticClass:"flex-col"},[s("div",{staticClass:"flex-col items-center group_3"},[s("span",{staticClass:"text_4 text_28"},[t._v("about us")]),s("span",{staticClass:"text_6 text_29"},[t._v("关于我们")])]),s("span",{staticClass:"text_8"},[t._v("一起建设中国制造的全球共识")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col group_17"},[s("span",{staticClass:"text_9"},[t._v("元计划由深圳行者艺术与四川萃雅教育联合发行")]),s("span",{staticClass:"text_10"},[t._v(" 行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。 ")]),s("span",{staticClass:"text_11"},[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",{staticClass:"text_12"},[t._v(" 四川萃雅教育科技有限公司是由新华文轩出版传媒股份有限公司、四川日报网络传媒发展有限公司、中国广电四川网络股份有限公司、四川任你学教育科技有限公司 (四川省电教馆与四川省教科院合资) 、四川奇迹云科技有限公司共同出资成立的专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，助力校内教育和素质教育，驻守文化根脉，促进中华优秀文化传播传承。 ")]),s("span",{staticClass:"text_13"},[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center group_4"},[s("span",{staticClass:"text_4 text_14"},[t._v("about us")]),s("span",{staticClass:"text_6 text_15"},[t._v("企业文化")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col enterprise-culture-content"},[s("span",{staticClass:"main"},[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",{staticClass:"main_1"},[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col section_6"},[s("div",{staticClass:"flex-row contact_way"},[s("div",{staticClass:"flex-col section_9"}),s("div",{staticClass:"flex-col items-start contactus"},[s("div",{staticClass:"flex-row contactus_title"},[s("div",{staticClass:"flex-col items-start group_8"},[s("span",{staticClass:"text_4 text_18"},[t._v("contact us")]),s("span",{staticClass:"text_19"},[t._v("联系我们")])]),s("img",{staticClass:"image_7",attrs:{src:a("5509")}})]),s("div",{staticClass:"flex-col contactus_content"},[s("div",{staticClass:"flex-row"},[s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"image_2",attrs:{src:a("ad30")}}),s("span",{staticClass:"text_20"},[t._v("元计划公众号")])]),s("div",{staticClass:"flex-col items-start group_13"},[s("img",{staticClass:"image_2",attrs:{src:a("d3e1")}}),s("span",{staticClass:"text_21"},[t._v("客服微信")])])]),s("div",{staticClass:"flex-col group_12"},[s("div",{staticClass:"flex-row"},[s("img",{staticClass:"image_4",attrs:{src:a("931d")}}),s("span",{staticClass:"text_22"},[t._v("合作邮箱")])]),s("span",{staticClass:"text_23"},[t._v("caijingya@xingzhe.team")]),s("div",{staticClass:"flex-row group_14"},[s("img",{staticClass:"image_4",attrs:{src:a("31a1")}}),s("span",{staticClass:"text_24"},[t._v("公司地址")])]),s("span",{staticClass:"text_25"},[t._v("中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1")])])])])])])}],U={components:{YuanNav:m,YuanFooter:w},data(){return{}}},I=U,M=(a("9c8d"),Object(n["a"])(I,J,Q,!1,null,"0ad9c8eb",null)),Y=M.exports,K=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col pc-about-page"},[s("YuanNav"),t._m(0)],1)},F=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"aboutus-content"},[s("div",{staticClass:"bg-wrapper"},[s("div",{staticClass:"flex-col aboutus-slogin"},[s("div",{staticClass:"flex-col items-start group_1"},[s("span",{staticClass:"text"},[t._v("about us")]),s("span",{staticClass:"text_2"},[t._v("关于我们")])]),s("span",{staticClass:"text_4"},[t._v("一起建设中国制造的全球共识")])]),s("span",{staticClass:"text_6"},[t._v("元计划由深圳行者艺术与四川萃雅教育联合发行")]),s("span",{staticClass:"text_7"},[t._v(" 行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。 ")]),s("span",{staticClass:"text_8"},[t._v(" 四川萃雅教育科技有限公司是由新华文轩出版传媒股份有限公司、四川日报网络传媒发展有限公司、中国广电四川网络股份有限公司、四川任你学教育科技有限公司 (四川省电教馆与四川省教科院合资) 、四川奇迹云科技有限公司共同出资成立的专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，助力校内教育和素质教育，驻守文化根脉，促进中华优秀文化传播传承。 ")])]),s("div",{staticClass:"other-wrapper"},[s("div",{staticClass:"flex-col view_1"},[s("div",{staticClass:"flex-col items-start group_3"},[s("span",{staticClass:"text"},[t._v("about us")]),s("span",{staticClass:"text_2"},[t._v("关于我们")])]),s("span",{staticClass:"text_10"},[t._v("一起建设中国制造的全球共识")])]),s("span",{staticClass:"text_12"},[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",{staticClass:"text_13"},[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")]),s("div",{staticClass:"flex-col items-start group_3 view_3"},[s("span",{staticClass:"text"},[t._v("contact us")]),s("span",{staticClass:"text_2"},[t._v("联系我们")])]),s("div",{staticClass:"justify-between group_5"},[s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709827727967799.png"}}),s("span",{staticClass:"text_16"},[t._v("元计划公众号")])]),s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709876124359559.png"}}),s("span",{staticClass:"text_17"},[t._v("客服微信")])])]),s("div",{staticClass:"flex-col group_9"},[s("div",{staticClass:"flex-col items-center"},[s("div",{staticClass:"justify-center group_11"},[s("img",{staticClass:"image_2",attrs:{src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605694300981.png"}}),s("span",{staticClass:"text_18"},[t._v("合作邮箱")])]),s("span",{staticClass:"text_19"},[t._v("caijingya@xingzhe.team")])]),s("div",{staticClass:"flex-col group_12"},[s("div",{staticClass:"justify-center"},[s("img",{staticClass:"image_2",attrs:{src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605682736546.png"}}),s("span",{staticClass:"text_20"},[t._v("公司地址")])]),s("span",{staticClass:"text_21"},[t._v("中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1")])])])])])}],H={components:{YuanNav:m},data(){return{}}},V=H,k=(a("7081"),Object(n["a"])(V,K,F,!1,null,"b7401d68",null)),D=k.exports,N={components:{WebAboutUs:Y,PcAboutUs:D},data(){return{}}},Z=N,E=(a("572c"),Object(n["a"])(Z,R,S,!1,null,"3f5ebd74",null)),z=E.exports;e["default"].use(v["a"]);const q=[{path:"/",name:"shouye",component:O},{path:"/about",name:"about",component:z}],G=new v["a"]({routes:q});var W=G,T=a("2f62");e["default"].use(T["a"]);var L=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=a("5c96"),$=a.n(X);a("0fae");e["default"].use($.a),e["default"].config.productionTip=!1,new e["default"]({router:W,store:L,render:t=>t(r)}).$mount("#app")},"572c":function(t,s,a){"use strict";a("b01f")},7081:function(t,s,a){"use strict";a("ffce")},"931d":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQYSURBVHgB7ZlJaBRBFIbfGOO+gQuK60FBRXAHweUiuOCGevCkQUERXNEoikrAoJggxIWIirm4HowQvZhTcvPgQYnBqyRoApJo9qCJyfN/VEd73vRMOjM9SSfUDx8zVNf2d1V116smsrKysrKysrKysrKysrKiiFciM0v6fLAAjKbBpVZQGYlEan3lhtkx4Bpo5cGrenAWZPoxfJmHhrrBMe0vosxOx88nMNXjXrRTeCU+vJZeFViB6d3QkzBcZZB162WWQTEoAB0UPh0A2SBDpc8F00CDZymM8MZepslpCplk2oKGBH1emqjwRrUGXoJOVUEOhUDoxzCQBbpU/74la1gq2sDmadftSm910obTAArtHwF/lDkZoEOpGF7npF9VpuX/cRogoe1s0KSMlYKJYHcQhmX6nOfo6SOmL1I/SmYVOMrRN1/0XPro5EndsHMtA1xQjTWDE9xP0xvtnPQw+wRMcOUJxrArT55qVPIdoTQLbVwBLcpMCRiv8gVuWKbVJY5d09mUBqHezDgjW8Rmz6/zB2vYySemc1QnGtk8OTMoQLFZRloPwdg4+YM37MpfoEzLa+IQBSQ2QUybMvACjElQJq2GZbpdVQ1IuROUglB+FDjHsbrro2z6DDtlMp2RcEu2erIBGEZJyOMmim7LjfBRNr2GXWXvqYZkS9qnzQmb930h+KXqKvJj1qmj3wyPALc4Vq/AbB/lV4Fyj/L51Af1ZjjoDcM4j7Q9YC0aLsGvUAHqyIScs8BysAvsBeNV2S5JQ9lJiGkbKWglO8LINxK85th3pZbUKeu7GlSxOYrxo8fShs++JBzhpB4qqgEJssvATvp/giIj+ADUqOzS3iQwh0xwPtmjSin7lKKD9v2gHG3NoCDFfX8tLQEf1B39AdY71+eBG6CSY0M5rTrwCCxyyu5w6nLrPVjYS5/S89DCtcWgRlX+BSzzyCtTfjU4Du6DN+AtmygnB2xjjwcb0laCWtVGbc9N6TfDSN8O2lXFFWA+BSw2s+Szaus72Bonf+DBw0GOPUN6B6ZSmoS6Z4Iy1eZPkOWRN7B4OMIm+NYjW8zmeDetkjbYLAO35K1wmF1REwd04iFr8KaqSK7Ldq/30/2A5PTjjupHp9O3ERSEYTYb+Wcc/Y7tALmc5F45FbE5ecnj6NNU6VuR09eUDMvDqVRVIJXLsU6EBkhsltcZjg0dZfOTlaxhMabfg/Kg2EwhEZt3tT43b0rWsJZsBzdRyIQ+bQFfE/Q7YfAQ74NZC7gOZMRXUrgkW9FcUEixfiRAaXMn6K+HU/DzkUwUMxQkXtYg0vr3ATDqKYsL9fjJA79p8Ksb5LvNxhVG+hT7D93CKAlE9rHHB4JIAtMSf8rUHkeDR7Jmm0E1RpbJysrKysrKKlT6CygKvPz2t6L0AAAAAElFTkSuQmCC"},"94a1":function(t,s,a){"use strict";a("9d0d")},"9c8d":function(t,s,a){"use strict";a("a8a0")},"9d0d":function(t,s,a){},a730:function(t,s,a){"use strict";a("dad3")},a8a0:function(t,s,a){},ad30:function(t,s,a){t.exports=a.p+"img/yuanAccount.2ec8b6aa.png"},b01f:function(t,s,a){},cf05:function(t,s,a){t.exports=a.p+"img/logo.5d36a5de.png"},d3e1:function(t,s,a){t.exports=a.p+"img/wechatScan.c6800100.png"},dad3:function(t,s,a){},ffce:function(t,s,a){}});
//# sourceMappingURL=app.e18c3c9c.js.map