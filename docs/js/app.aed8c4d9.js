(function(t){function s(s){for(var a,c,o=s[0],l=s[1],r=s[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=c(c.s=e[0]))}return t}var a={},i={app:0},n=[];function c(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)c.d(e,a,function(s){return t[s]}.bind(null,a));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var r=0;r<o.length;r++)s(o[r]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0ca8":function(t,s,e){},"141f":function(t,s,e){t.exports=e.p+"img/first.4004da8b.png"},"1b66":function(t,s,e){"use strict";e("6831")},"1be3":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABpJREFUGNNjIBv8///hP3aKWuA/EGCjBrMNACVnL5X3zgehAAAAAElFTkSuQmCC"},"2c05":function(t,s,e){"use strict";e("b926")},"396e":function(t,s,e){"use strict";e("759b")},"43c3":function(t,s,e){},4784:function(t,s,e){"use strict";e("7550")},4896:function(t,s,e){},"50db":function(t,s,e){"use strict";e("91ab")},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("YuanNav"),t.isRouterAlive?s("router-view"):t._e()],1)},n=[],c=function(){var t=this,s=t._self._c;return s("div",{staticClass:"yuanjihua-nav"},[s("div",{class:"web-nav justify-between "+(t.isScroll&&"web-nav-scrollbg")},[s("img",{staticClass:"nav_active_image",attrs:{src:e("cf05")}}),s("div",{staticClass:"flex-row nav-list"},[s("img",{staticClass:"active-light",style:{transform:`translateX(${t.translateX[t.active]}rem)`},attrs:{src:e("83a1"),alt:""}}),t._l(t.routeInfo,(function(e,a){return s("router-link",{key:a,class:"nav-item "+(t.active===e.active&&"nav-active"),attrs:{to:e.path}},[s("span",{staticClass:"text"},[t._v(t._s(e.title))])])}))],2)]),s("div",{staticClass:"mobile-nav"},[s("i",{staticClass:"nav-icon el-icon-back",on:{click:()=>{this.$router.go(-1)}}}),s("span",{staticClass:"nav-title"},[t._v(t._s(t.pcNavTitle[t.active]))]),s("div",{staticClass:"nav-icon-img",on:{click:()=>{this.isNavModalShow=!this.isNavModalShow}}},[s("img",{attrs:{src:e("1be3")}})]),t.isNavModalShow?s("div",{staticClass:"nav-list-modal",on:{click:t.onPcNavClick}},[s("router-link",{staticClass:"nav-list-item",attrs:{to:"/"}},[t._v("首页")]),s("router-link",{staticClass:"nav-list-item",attrs:{to:"/about"}},[t._v("关于我们")]),s("router-link",{staticClass:"nav-list-item",attrs:{to:"/plan"}},[t._v("规划图")]),s("a",{staticClass:"nav-list-item",on:{click:t.navClick}},[t._v("图例展示")]),s("a",{staticClass:"nav-list-item",on:{click:t.navClick}},[t._v("登录")])],1):t._e()])])},o=[],l={name:"HelloWorld",props:{navTitle:{default:"元计划"}},data(){return{isScroll:!1,active:0,routeInfo:[{title:"首页",path:"/",active:0},{title:"关于我们",path:"/about",active:1},{title:"规划图",path:"/plan",active:2}],translateX:[3.3,8.8,14.5,20.2],pcNavTitle:["元计划","关于我们","规划图"],navRelate:{homeIndex:0,about:1,plan:2},isNavModalShow:!1,scrollThrottle:this.debounce(this.handleScroll,10)}},mounted(){screen.width>600&&window.addEventListener("scroll",this.scrollThrottle)},destroyed(){screen.width>600&&window.removeEventListener("scroll",this.scrollThrottle)},methods:{navClick(){this.isNavModalShow=!1,this.$message({message:"即将开放!",duration:1e3,customClass:"mobile-message"})},handleScroll(){const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isScroll=t>0},debounce(t,s){var e;return function(){var a=this,i=arguments;e&&clearTimeout(e),e=setTimeout((function(){t.apply(a,i)}),s)}},onPcNavClick(){}},watch:{$route:{handler:function(t,s){this.active=this.navRelate[t.name],this.isNavModalShow=!1},deep:!0,immediate:!0}}},r=l,u=(e("396e"),e("2877")),d=Object(u["a"])(r,c,o,!1,null,"5591bd3e",null),p=d.exports,v={components:{YuanNav:p},setup(){const t=Object(a["ref"])(!0),s=()=>{t.value=!1,Object(a["nextTick"])(()=>{t.value=!0})};return Object(a["provide"])("reload",s),{isRouterAlive:t}}},f=v,h=(e("d2ef"),Object(u["a"])(f,i,n,!1,null,null,null)),_=h.exports,m=e("8c4f"),g=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col indexPage"},[s("WebHomePage"),s("PcHomePage")],1)},b=[],x=function(){var t=this,s=t._self._c;return s("div",{staticClass:"web-container"},[t.isAndroid?s("img",{staticClass:"items-center justify-center banner",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_pc.webp"}}):s("video",{ref:"video",staticClass:"items-center justify-center banner",attrs:{loop:"loop",autoplay:"autoplay",src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_pc.mp4",poster:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_pc.mp4?x-oss-process=video/snapshot,t_100,f_jpg,w_1920,h_1080,m_fast",id:"video-home","data-object-fit":"",playsinline:"",muted:"","x5-playsinline":"","webkit-playsinline":"true","x5-video-player-type":"h5",preload:"auto"},domProps:{muted:!0}}),s("div",{staticClass:"flex-col story_list"},[s("div",{staticClass:"flex-row"},[s("div",{class:"flex-col story left-story "+(1===t.sectionActive&&"left-active"),on:{click:s=>t.setSectionActive(s,1)}},[t._m(0),s("div",{class:"cloes_active_icon "+(1===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"story_desc "+(1===t.sectionActive&&"section_hidden")},[t._v(" 在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了 ，1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式...... ")]),s("div",{class:"justify-between story_detail "+(1===t.sectionActive&&"story_detail_active")},[t._m(1),t._m(2)]),s("img",{class:"section-more-icon  "+(1===t.sectionActive&&"section_hidden"),attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/rightImg.png"}})]),s("div",{class:"flex-col story right-story "+(2===t.sectionActive&&"right-active"),on:{click:s=>t.setSectionActive(s,2)}},[t._m(3),s("div",{class:"cloes_active_icon "+(2===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"story_desc "+(2===t.sectionActive&&"section_hidden")},[t._v(" 三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大...... ")]),s("div",{class:"justify-between story_detail "+(2===t.sectionActive&&"story_detail_active")},[t._m(4),t._m(5)]),s("img",{class:"section-more-icon  "+(2===t.sectionActive&&"section_hidden"),attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/rightImg.png"}})])]),s("div",{class:"flex-col story_3 "+(3===t.sectionActive&&"active"),on:{click:s=>t.setSectionActive(s,3)}},[t._m(6),s("div",{class:"cloes_active_icon "+(3===t.sectionActive&&"icon_active"),on:{click:t.setSectionHidden}},[t._v("x")]),s("span",{class:"story3_desc  "+(3===t.sectionActive&&"section_hidden")},[t._v(" 元计划正式启动后，由博士领导各领域顶尖科学家团队，以及护卫军队随行。为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界，这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开...... ")]),s("div",{class:"justify-between story_detail "+(3===t.sectionActive&&"story_detail_active")},[t._m(7),t._m(8)]),s("img",{class:"section-more-icon  "+(3===t.sectionActive&&"section_hidden"),attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/rightImg.png"}})])]),s("YuanFooter")],1)},C=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center story_label"},[s("span",{staticClass:"text_5"},[t._v("第一章· 前序")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式，但部分地区却掌握着远超人类文明的科技水准。身体机械化、灵魂移植术，这些人类看来非常科幻的技术，在这个世界已经常态化。 ")]),s("span",[t._v(" 虽然部分地区的文明程度极为发达，但由于星球体积过于庞大，约为地球的900万倍，导致星球上不同地域的族群。进化方向出现了较大的差异，星球北部的地质环境较为温和，居民文明程度高，对智慧与科技有着高度向往，而星球南部由于地质环境极其恶劣，并且重力远超北部星球100多倍，导致在长期的自然筛选下南部居民的身体进化得极为坚硬，且拥有着超乎想象的力量。 ")]),s("span",[t._v(" 星球北部的科学家对于南部有着非常迫切的探索欲望，在过去的数百万年里始终在尝试着越过赤道进入南半球进行探索，但似乎南半球从始至终，被一股从星球内核散发出神秘的磁场笼罩，无论通过任何方式都无法穿越屏障进入南半球，导致南北半球虽然同处一个星球，但从星球诞生以来从未有过任何形式的交流。 ")]),s("span",[t._v(" 终于，北半球各个国家联合组建了科考军团，对未知领域南半球发起了历史上，规模最大且参与国家及人数最多的一次探索，该行动被命名为「元计划」。 ")]),s("span",[t._v(" 南半球的文明程度远不及北半球，但似乎因为某种神秘物质的存在，导致了南半球的引力巨大，但同时因为这种神秘物质存在，所散发的磁场似乎赐予了南部族群，除坚硬与力量之外的另一种能力「通灵」，极少数的南部元类拥有着通灵的能力，他们从诞生以来就知道北部星球文明的存在，并且非常强烈的感知到这次北部的物种可能突破磁场进入南半球，他们不知道这意味着什么，也无法预料北半球族群的“入侵”，会给南半球带来什么样的后果。于是，南部通灵者开始召集南部族群，筹划针对北部“入侵”的保卫战。 ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/scan.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center story_label"},[s("span",{staticClass:"text_5"},[t._v("第二章 · 起缘")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 三个月前博士通过观测发现一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大。不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。 ")]),s("span",[t._v(" 非常巧合的是这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征出奇的相似。此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。 ")]),s("span",[t._v(" 如果数据分析得无误，这颗不明行星将会在218.5天后与元星球相撞，博士连续3天无休止地重复推演计算，但得到的结果与时间都是一样。于是博士连夜会见了国家首脑并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日。至此元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索充满着未知的风险。但他们别无选择因为博士深刻地明白也许只有南部存在的神秘物质，才是应对元末日唯一的办法。 ")]),s("span",[t._v(" 因为元星球是一颗恒星并且由于自身南北质量的极度不平衡，导致这颗恒星从未有过任何的星体运动，南部族群包括通灵者在内似乎对星球的危机并无感知，他们还在过着一如既往的“平静”生活，几个南部的勇士正在进行他们日常的狩猎行为，但今天的猎物似乎比往常大了一些。 ")]),s("span",[t._v(" 一月一次的南部祭祀这次似乎有了一些不同，通灵者的呼吸没有了以往的平静，他们感知到了北部的行动不知道这意味着什么，也不知道为何北部会如此大规模地进军南部，通灵者隐约地感知到这次北部进军不仅仅是探索，面对这目的不详的大规模“入侵”。通灵者感受到了一丝不安，因为通灵者世代相传着，一个关于南部族群存亡并且必须世代守护的秘密。 ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/scan.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center story_label"},[s("span",{staticClass:"text_5"},[t._v("第三章· 碰撞")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col desc"},[s("span",[t._v(" 元计划正式启动后由博士领导各领域顶尖科学家团队，以及护卫军队随行，为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界。这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透。果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开。 ")]),s("span",[t._v(" 北部族对南半球认知非常有限，他们并不清楚通道的另一边是否有危险生物。军队上校提出清除障碍行动，博士表示反对第一次接触印象尤为重要，军队的行动容易被视为敌意行为。博士认为，科研队派出先锋小队作为外交使者。经过一番争论，上校妥协。但声明遇到威胁安全情况，军队命令与行动享优先权。 ")]),s("span",[t._v(" 与此同时，通灵者大会召集各族长以及各族优秀战士汇聚一堂，告知族人们，北部元类即将打开通道进入他们的领地。一直生存在肉弱强食南部世界，处于食物链顶端的各族长与战士表示：宣示主权，驱逐外来者！ ")]),s("span",[t._v(" 通灵者之首，巫祭认为事情没有那么简单，他们通过灵视看到过北部族科技力量，能轻易之间毁灭一个小部落，如今他们的武器装备远不及北部元类。尚不清楚对方来意不可轻举妄动。经讨论南部元类暂时遵巫祭所言，一边派出战士监督北部元类动作，一边集合战士守卫家园。 ")]),s("span",[t._v(" 另外一边，博士团队派出的无人机探测取样分析后，数据表示北部元类若在没有防护措施下进入南半球区域，有毒的空气将会在一分钟内使元类休克，五分钟后死亡。100倍的重力之下，进入南半球的元类都需穿戴特制的外附铠甲，以消除重力差异影响。博士团队与护卫军进入南半球部族，亲眼了解到这里的荒凉，飞沙走石不见绿。 ")]),s("span",[t._v(" 此行目的是寻找散发可见电磁波的高密度超重物质，这种物质被博士们团队命为“以太”，随着他们继续前进，以太信号探测器显示信号越清晰。追寻信号的第一天，他们见到了各类体型巨大的陆地生物。 ")]),s("span",[t._v(" 当天傍晚，博士团队突然遭受星犀牛群的攻击，博士判断是他们误闯了星犀牛领地，面对发怒的星犀牛群，士兵们本能反应拿起手中的激光枪反击防卫。意外地是小功率激光枪对星犀牛并没有作用，大功率激光枪，也并不能一击必杀星犀牛。一时之间，团队被冲散，不少士兵更是被星犀牛撞破防护面罩，中毒而亡。 ")]),s("span",[t._v(" 上校的侦察兵发现，这星犀牛群背后，隐藏着元皮肤外露于空气而行动敏捷，明显不是北部族同伴。绝对是南部蛮夷元类，设置如此卑鄙的陷阱！因被偷袭护卫军损失了几十名手下，上校怒不可遏。不顾博士的阻拦，上校发誓要报仇，为死去的战友讨回公道。上校取得最高指挥权，召集后援重火力部队，大批空中战斗侦察机从通道涌入。 ")]),s("span",[t._v("未完待续 更多内容关注公众号获取")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center scan_code_wrapper"},[s("img",{staticClass:"scan_image",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/scan.png"}}),s("span",{staticClass:"scan_code_title"},[t._v("元计划公众号")])])}],y=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"yuanjihua-footer"},[s("div",{staticClass:"web-footer"},[t._v(" @2022 深圳行者数学艺术有限公司官网 版权所有. 粤ICP备2022071585号-1 ")]),s("div",{staticClass:"pc-footer"},[s("div",[t._v("@2022 深圳行者数字艺术有限公司官网 版权所有")]),s("div",[t._v("粤ICP备2022071585号-1")])])])}],w={name:"HelloWorld",props:{msg:String}},j=w,S=(e("a882"),Object(u["a"])(j,y,A,!1,null,"0ba4d4b4",null)),I=S.exports,W={components:{YuanFooter:I},data(){return{sectionActive:!1,currentIndex:0,timer:null,isAndroid:navigator.userAgent.toLowerCase().indexOf("android")>-1}},mounted(){const t=this;document.addEventListener("touchstart",()=>{t.$refs.video.play()},!1),document.addEventListener("WeixinJSBridgeReady",(function(){t.$refs.video.play()}),!1)},methods:{setSectionActive(t,s){this.sectionActive||(this.sectionActive=s)},setSectionHidden(t){t.stopPropagation(),this.sectionActive=!1}}},z=W,k=(e("fa3c"),Object(u["a"])(z,x,C,!1,null,"050c5892",null)),X=k.exports,O=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pc-container"},[s("div",{staticClass:"flex-col pc-homeindex"},[t.isAndroid?s("div",{staticClass:"flex-col pc-banner bg-video"}):s("video",{ref:"video",staticClass:"flex-col pc-banner",attrs:{muted:"",poster:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_mobile.mp4?x-oss-process=video/snapshot,t_100,f_jpg,w_750,h_1000,m_fast",loop:"loop",autoplay:"autoplay",src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/T-shirt_mobile.mp4",id:"video-home",playsinline:"","webkit-playsinline":"true","x5-video-player-type":"h5","data-object-fit":"",preload:"auto"},domProps:{muted:!0}}),s("Swiper",{staticClass:"custom-swiper"})],1),s("YuanFooter")],1)},P=[],Y=function(){var t=this,s=t._self._c;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"swiper",on:{touchend:t.end,touchstart:t.start,touchmove:t.move}},t._l(t.imgs,(function(e,a){return s("div",{key:e.id,style:{...t.config5[a],width:"270px",height:"420px",opacity:1,transition:".4s"},on:{click:function(s){return t.chooseItem(e)}}},[s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.cover}})])})),0)])},V=[],L=e("141f"),T=e.n(L),F=e("a8be"),E=e.n(F),M=e("6928"),q=e.n(M),U=e("7ad1"),D=e.n(U),H=e("cefb"),J=e.n(H),B={name:"swiper",data(){return{loading:!0,currentIndex:0,centerInfo:"",startX:"",endX:"",defaultImgs:[T.a,E.a,q.a,D.a],imgs:[{id:0,index:0,cover:T.a,showDetail:!1},{id:1,index:1,cover:E.a,showDetail:!1},{id:2,index:2,cover:q.a,showDetail:!1},{id:3,index:3,cover:D.a,showDetail:!1}],config5:[{position:"absolute",top:"0px",left:(screen.width-270)/2+"px",zIndex:4},{position:"absolute",top:"0px",left:screen.width-45+"px",zIndex:3},{position:"absolute",top:"0px",left:"-300px",zIndex:1},{position:"absolute",top:"0px",left:"-225px",zIndex:2}]}},methods:{prev(){this.config5.push(this.config5.shift()),this.centerIndex("prev")},next(){this.config5.unshift(this.config5.pop()),this.centerIndex("next")},start(t){this.startX=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY},move(t){},end(t){this.endY=t.changedTouches[0].clientY,this.endX=t.changedTouches[0].clientX,this.stopDefault(t),this.interval=this.endX-this.startX,this.interval>40&&(this.startX=this.endX,this.prev()),this.interval<-40&&(this.startX=this.endX,this.next())},stopDefault(t){const s=this.endY-this.startY,e=this.endX-this.startX;Math.abs(e)>Math.abs(s)&&t.preventDefault()},centerIndex(t){if("prev"===t)for(const s of this.imgs)s.index===this.imgs.length-1?s.index=0:s.index=s.index+1;else for(const s of this.imgs)0===s.index?s.index=this.imgs.length-1:s.index=s.index-1},chooseItem(t){if(t.index===this.currentIndex)return this.imgs[t.id].cover=t.showDetail?this.defaultImgs[t.id]:J.a,void(this.imgs[t.id].showDetail=!t.showDetail);1===t.index&&this.next(),3===t.index&&this.prev()}}},N=B,R=(e("2c05"),Object(u["a"])(N,Y,V,!1,null,"254bacb1",null)),G=R.exports,K={components:{YuanFooter:I,Swiper:G},data(){return{isAndroid:navigator.userAgent.toLowerCase().indexOf("android")>-1}},mounted(){const t=this;document.addEventListener("touchstart",()=>{t.$refs.video.play()},!1),document.addEventListener("WeixinJSBridgeReady",(function(){t.$refs.video.play()}),!1)}},Q=K,Z=(e("50db"),Object(u["a"])(Q,O,P,!1,null,"e3e8c288",null)),$=Z.exports,tt={components:{WebHomePage:X,PcHomePage:$},setup(){const t=Object(a["inject"])("reload");return{ceshi:t}}},st=tt,et=(e("8da8"),Object(u["a"])(st,g,b,!1,null,"eea74e5c",null)),at=et.exports,it=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aboutus-page"},[s("WebAboutUs"),s("PcAboutUs")],1)},nt=[],ct=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col web-about-page"},[t._m(0),t._m(1),t._m(2),t._m(3),s("div",{staticClass:"flex-col footer-address"},[t._m(4),s("YuanFooter")],1)])},ot=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col about-banner"},[s("div",{staticClass:"flex-col items-center desc-label"},[s("span",{staticClass:"bg-font"},[t._v("about us")]),s("span",{staticClass:"label"},[t._v("关于我们")])]),s("span",{staticClass:"slogin"},[t._v("一起建设中国制造的全球共识")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col aboutus-content"},[s("span",[t._v("元计划由深圳行者艺术与四川萃雅教育联合发行")]),s("span",[t._v(" 行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。 ")]),s("span",[t._v(" 四川萃雅教育科技有限公司是专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，驻守文化根脉， 促进中华优秀文化传播传承。公司参与设立数字研究院为数字藏品提供专业的创意、设计和制作包装服务。 ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col items-center desc-label enterprise-culture-label"},[s("span",{staticClass:"bg-font"},[t._v("about us")]),s("span",{staticClass:"label"},[t._v("企业文化")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col enterprise-culture-content"},[s("span",[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-row contact_way"},[s("div",{staticClass:"flex-col address_position"}),s("div",{staticClass:"flex-col items-start contactus"},[s("div",{staticClass:"flex-row contactus_header"},[s("div",{staticClass:"flex-col items-start contactus_label"},[s("span",{staticClass:"contactus_label_bg"},[t._v("contact us")]),s("span",{staticClass:"contactus_label_font"},[t._v("联系我们")])]),s("img",{staticClass:"brand_image",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/about/yuanLabelIcon.png"}})]),s("div",{staticClass:"flex-col contactus_content"},[s("div",{staticClass:"flex-row scan-wrapper"},[s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"scan_image",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/about/yuanAccount.png"}}),s("span",{staticClass:"scan_desc"},[t._v("元计划公众号")])]),s("div",{staticClass:"flex-col items-start we_chat"},[s("img",{staticClass:"scan_image",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/about/wechatScan.png"}}),s("span",{staticClass:"scan_desc"},[t._v("客服微信")])])]),s("div",{staticClass:"flex-col address_email"},[s("div",{staticClass:"flex-row items-center yuan_email_label"},[s("img",{staticClass:"contact_icon",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/about/emailIcon.png"}}),s("span",[t._v("合作邮箱")])]),s("span",{staticClass:"yuan_email"},[t._v("caijingya@xingzhe.team")]),s("div",{staticClass:"flex-row items-center yuan_address_label"},[s("img",{staticClass:"contact_icon",attrs:{src:"https://yuanjihua-oss.oss-cn-hangzhou.aliyuncs.com/assets/about/addressIcon.png"}}),s("span",[t._v("公司地址")])]),s("span",{staticClass:"yuan-address"},[t._v("中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1")])])])])])}],lt={components:{YuanFooter:I},data(){return{}}},rt=lt,ut=(e("95f5"),Object(u["a"])(rt,ct,ot,!1,null,"7abb5475",null)),dt=ut.exports,pt=function(){var t=this;t._self._c;return t._m(0)},vt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col pc-about-page"},[s("div",{staticClass:"aboutus-content"},[s("div",{staticClass:"bg-wrapper"},[s("div",{staticClass:"flex-col aboutus-slogin"},[s("div",{staticClass:"flex-col items-start group_1"},[s("span",{staticClass:"text"},[t._v("about us")]),s("span",{staticClass:"text_2"},[t._v("关于我们")])]),s("span",{staticClass:"text_4"},[t._v("一起建设中国制造的全球共识")])]),s("span",{staticClass:"text_6"},[t._v("元计划由深圳行者艺术与四川萃雅教育联合发行")]),s("span",{staticClass:"text_7"},[t._v(" 行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。 ")]),s("span",{staticClass:"text_8"},[t._v(" 四川萃雅教育科技有限公司是专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，驻守文化根脉， 促进中华优秀文化传播传承。公司参与设立数字研究院为数字藏品提供专业的创意、设计和制作包装服务。 ")])]),s("div",{staticClass:"other-wrapper"},[s("div",{staticClass:"flex-col view_1"},[s("div",{staticClass:"flex-col items-start group_3"},[s("span",{staticClass:"text"},[t._v("about us")]),s("span",{staticClass:"text_2"},[t._v("企业文化")])]),s("span",{staticClass:"text_10"},[t._v("一起建设中国制造的全球共识")])]),s("span",{staticClass:"text_12"},[t._v(" 我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。 ")]),s("span",{staticClass:"text_13"},[t._v("希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！")]),s("div",{staticClass:"flex-col items-start group_3 view_3"},[s("span",{staticClass:"text"},[t._v("contact us")]),s("span",{staticClass:"text_2"},[t._v("联系我们")])]),s("div",{staticClass:"justify-between group_5"},[s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709827727967799.png"}}),s("span",{staticClass:"text_16"},[t._v("元计划公众号")])]),s("div",{staticClass:"flex-col items-center"},[s("img",{staticClass:"image",attrs:{src:"https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709876124359559.png"}}),s("span",{staticClass:"text_17"},[t._v("客服微信")])])]),s("div",{staticClass:"flex-col group_9"},[s("div",{staticClass:"flex-col items-center"},[s("div",{staticClass:"justify-center group_11"},[s("img",{staticClass:"image_2",attrs:{src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605694300981.png"}}),s("span",{staticClass:"text_18"},[t._v("合作邮箱")])]),s("span",{staticClass:"text_19"},[t._v("caijingya@xingzhe.team")])]),s("div",{staticClass:"flex-col group_12"},[s("div",{staticClass:"justify-center"},[s("img",{staticClass:"image_2",attrs:{src:"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605682736546.png"}}),s("span",{staticClass:"text_20"},[t._v("公司地址")])]),s("span",{staticClass:"text_21"},[t._v("中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1")])])])])])])}],ft={data(){return{}}},ht=ft,_t=(e("67a5"),Object(u["a"])(ht,pt,vt,!1,null,"779dc920",null)),mt=_t.exports,gt={components:{WebAboutUs:dt,PcAboutUs:mt},data(){return{}}},bt=gt,xt=(e("e558"),Object(u["a"])(bt,it,nt,!1,null,"6dd6e12c",null)),Ct=xt.exports,yt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col plan-page"},[s("WebPlan"),s("PcPlan")],1)},At=[],wt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col web-plan-page"},[t._m(0),s("div",{staticClass:"process-list"},[s("div",{staticClass:"connect-line"}),t._l(t.processList,(function(e,a){return s("div",{key:a,staticClass:"process-line"},[a%2===0?[s("div",{staticClass:"line-left"},[s("span",{staticClass:"left-label"},[t._v(t._s(e))]),s("HalfCircle",{attrs:{direction:"left"}})],1),s("div")]:a%2===1&&"object"!==typeof e?[s("div"),s("div",{staticClass:"line-right"},[s("HalfCircle",{attrs:{direction:"right"}}),s("span",{staticClass:"right-label"},[t._v(t._s(e))])],1)]:[s("div"),s("div",{staticClass:"line-right"},[s("HalfCircle",{attrs:{direction:"right"}}),s("div",{staticClass:"line-item-arr"},t._l(e,(function(e,a){return s("span",{key:"ceil"+a,staticClass:"right-label"},[t._v(t._s(e))])})),0)],1)]],2)}))],2),s("div",{staticClass:"footer-bg"},[s("YuanFooter")],1)])},jt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col plan-banner"},[s("div",{staticClass:"flex-col items-center plan_label"},[s("span",{staticClass:"plan_label_bg"},[t._v("roadmap")]),s("span",{staticClass:"plan_label_title"},[t._v("规划蓝图")])]),s("span",{staticClass:"plan-slogin"},[t._v("一起建设中国制造的全球共识")])])}],St=function(){var t=this,s=t._self._c;return s("div",{staticClass:"half-circle"},[s("div",{class:"left "+("left"===t.direction&&"circle-active")}),s("div",{class:"right "+("right"===t.direction&&"circle-active")})])},It=[],Wt={data(){return{}},props:{direction:{default:"left"}}},zt=Wt,kt=(e("f004"),Object(u["a"])(zt,St,It,!1,null,"ce4604ac",null)),Xt=kt.exports,Ot={components:{YuanFooter:I,HalfCircle:Xt},data(){return{processList:["元计划故事背景介绍发布","元计划动漫宣传片发布","元计划人物形象版权品发售","连载漫画故事线持续发布","元计划南北冲突第战役打响","启动元计划空投计划","开启元计划形象周期性选拔参与实体赋能",["上线天猫，抖音等线上品牌店","推出首款元计划手办并持续发布线下自研周边产品"],"宣布项目经济模型重要信息","邀请签约娱乐文化体育等产业高端流量明星加入元计划","与一线国产服装品牌合作联名发布元计划潮牌服饰","元计划IP同名小说进入发布倒计时","元计划同名动漫电影筹备开拍","元计划冠名流量综艺或赛事","元计划空间碎片空投开始","元计划同款游戏进入内测倒计时","元计划元宇宙世界进入内测倒计时","链游元宇宙发布，元计划元宇宙世界发布......"]}}},Pt=Ot,Yt=(e("4784"),Object(u["a"])(Pt,wt,jt,!1,null,"7f0fd009",null)),Vt=Yt.exports,Lt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col pc-plan-page"},[s("div",{staticClass:"flex-col plan-content"},[s("div",{staticClass:"flex-col plan-banner"},[t._m(0),s("div",{staticClass:"plan-list"},t._l(t.planList,(function(e,a){return s("div",{key:"listItem"+a,staticClass:"plan-list-item"},["string"===typeof e?[s("div",{staticClass:"text_6"},[t._v(t._s(e))])]:t._l(e,(function(e,a){return s("div",{key:"listItemArrItem"+a,staticClass:"text_6"},[t._v(t._s(e))])})),a+1!==t.planList.length?s("div",{staticStyle:{"border-left":"1px dashed #FFF",height:"1rem","line-height":"1rem",margin:"0 auto"}}):t._e()],2)})),0)]),s("YuanFooter")],1)])},Tt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex-col slogin"},[s("div",{staticClass:"flex-col items-start plan-label"},[s("span",{staticClass:"text"},[t._v("roadmap")]),s("span",{staticClass:"text_2"},[t._v("规划蓝图")])]),s("span",{staticClass:"plan-slogin"},[t._v("一起建设中国制造的全球共识")])])}],Ft={components:{YuanFooter:I},data(){return{planList:["元计划故事背景介绍发布","元计划动漫宣传片发布","元计划人物形象版权品发售","连载漫画故事线持续发布","元计划南北冲突第战役打响","启动元计划空投计划","开启元计划形象周期性选拔参与实体赋能",["上线天猫，抖音等线上品牌店","推出首款元计划手办并持续发布线下自研周边产品"],"宣布项目经济模型重要信息","邀请签约娱乐文化体育等产业高端流量明星加入元计划","与一线国产服装品牌合作联名发布元计划潮牌服饰","元计划IP同名小说进入发布倒计时","元计划同名动漫电影筹划开拍","元计划冠名流量综艺或赛事","元计划空间碎片空投开始","元计划同款游戏进入内测倒计时","元计划元宇宙世界进入内测倒计时","链游元宇宙发布，元计划元宇宙世界发布......"]}}},Et=Ft,Mt=(e("1b66"),Object(u["a"])(Et,Lt,Tt,!1,null,"49cfd2a0",null)),qt=Mt.exports,Ut={components:{WebPlan:Vt,PcPlan:qt},data(){return{}}},Dt=Ut,Ht=(e("bd75"),Object(u["a"])(Dt,yt,At,!1,null,"5a5e8b39",null)),Jt=Ht.exports;a["default"].use(m["a"]);const Bt=[{path:"/",name:"homeIndex",component:at},{path:"/about",name:"about",component:Ct},{path:"/plan",name:"plan",component:Jt}],Nt=new m["a"]({routes:Bt});var Rt=Nt,Gt=e("2f62");a["default"].use(Gt["a"]);var Kt=new Gt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Qt=e("5c96"),Zt=e.n(Qt);e("0fae");a["default"].use(Zt.a),a["default"].config.productionTip=!1,new a["default"]({router:Rt,store:Kt,render:t=>t(_)}).$mount("#app")},"67a5":function(t,s,e){"use strict";e("8752")},"67fe":function(t,s,e){},6831:function(t,s,e){},6928:function(t,s,e){t.exports=e.p+"img/third.2f2c0612.png"},7550:function(t,s,e){},"759b":function(t,s,e){},"7ad1":function(t,s,e){t.exports=e.p+"img/fourth.0114ae19.png"},"83a1":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABKCAMAAABuI12EAAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAKnRSTlMAAwkHDUMTKSUcGS0iEDQ7FjFaR1FfVR84Y04/S2lnbW72zLac3nrtj74d0m5/AAAFRElEQVRo3u2X2ZbaMBBER6wGDNjsYAMT1pn8/wemumVTx3HwDslDSpZktQRzT3VjmI+iMu3W2Bu4ff/ys4Iuft8d9MattjEfjYhUnd7Q7U+m3VN5qlN3Oum7w14HXI1SmXZnbKnC2bUs1XUWCtd62LBdRlO4dvxpd7eaLc/lqM6z2WLXnfrOwGvWLmOQwoEz2nRDUG0Pl3txqB+Xw3Y5W4XdzcgdjjvAatis/sRS7ffH27ko1Pm23x8O29liHiCNnqSxYbP86XxhqT4/P2/f90JQx8/jcb/fLlc7sWvQ6zRXXWLW0B2JWcjg/ggs0eX0I5Pp9KXHhOsVdtkUWrMUi/r6vv4Z6fr9dXucQhrVrunIgV0tYxqqLHlkSb1brKSOX5fz6Xq9/1Cc+/10Ol9uySOKRbuaSWNU7zALD4ft9kAu2JArsWp/ECypLtrVRL3TLGBV0Xa7XK6sXcNGqsskzFqCS3SIBnYMeiWlG6olshjGdtXnAlX0JJ0viJWtNJxiSdHTrobMkhwCS8Gk67TEoCMGXhiituQpYDVnF81CDoFVQ4rFb+z6vxzwtSNm1cKaCdZuHli76nGZ2KxJMN8Bq55WapcvdnXqYbXlSaqVJVirBrCCyYg/cOrUu5qFHAILXCttlC7ligcewsxJNmwWxS5+Y9f4Teqj4AWrrhbAQtHH1VXbLMnhDlxJsoXtjCc3cekmQ8AKxS4H1UWuSvWuZgVSWr8LNGUFLLXLtdVlapsV7qDHmy8qaidY8oxYe5XtolnAAlcjUiz5p5E/cEpTydcOzNoEghVxhXITokEyaRzdTlbxKoQY1SWwJIusrqqVJTkUrEY0nwuW2DXsVfvGxpNUKwsFD6xqCjmqFAtZpF01zAIWueqqCyxkMbbLlKZSs/q+YD00jy901WPNETNveIoKJIvOgB/G0mZJwU8DctUTsaxdgmUqmOX2FasgV5AXC3QIBIt2lX2S4qcDcggscDUqxULRl7aLZikWwGRQPp01EOgQcFvE/egQY1wpVt+lXSVyKGYplnJRZKC4U0jAQnHRrpJmOSPFAhe6HTGho9mZG5y0bbRHCz0bS28Vi3aVMkty6E/A1bRAZbNIu4p/DNeOYpXWpsgh39csil3GmGJUatbAJVY1mE36nlS+zSLtKmSWFnwftSWaSEejJmzJYELc4E58NxIsFP2YXHlUMMsbKJblwlBco0LbI8GKsthuF8Qae5pDcL1QcMsWfRG7bGV5wzWwXsmF93Ykix6zmGsWcihYr5VisejzP4bIoWA5rwVzFAtFzyxmfgyRQ4tF9bVjZCRqDMiVrdQJiwW7srmMYkkOgUWuvD9VUa4rWB6LPotKH1qCFctBeyKH85Md3vOOsli26E0OFswSrDXAXqz1+oEFrryCB5ZwvUGDQYRFuzJyqFhW62hWzHhJSYgzd/kiHaVzN14o1dDDk4tZfG6WYgHsDQIV3MrJopqlWOB6lzzByvosmgdWzwOYoulgZ40x8jjCUWI87HELDUsek23eAYtZzMZ6n3qggltPs2hsaQELXH+Ux9u8vfxNRsfEMs+wLBfJiDhGw6XtKTpfpGdTMS7IZLFamW4p13vV6SjVk+ICVYRFjeVK9ITSIf0rVOJ1WS9Wt6A0VewWwIiWpVZqWVJkeuqWIVZBgb45gSrLLaj1ZhErk4tqJW+4qqZWZphQaSxFA9w7ZWIo5coEsyKn4YJz+lx58TV8mKaw/rI+BCwLrQbhx9MFo/EoFGTKlHqp55Ow6BozyT0jLT7BIC5uWA57hu9m+IbS/jn9g0j/9V/v1i/+uIpILooLgwAAAABJRU5ErkJggg=="},8752:function(t,s,e){},"8da8":function(t,s,e){"use strict";e("9e5a")},"91ab":function(t,s,e){},"95f5":function(t,s,e){"use strict";e("4896")},"9e5a":function(t,s,e){},a882:function(t,s,e){"use strict";e("ec31")},a8be:function(t,s,e){t.exports=e.p+"img/second.b8d82dd9.png"},b926:function(t,s,e){},bd75:function(t,s,e){"use strict";e("0ca8")},c3d2:function(t,s,e){},cefb:function(t,s,e){t.exports=e.p+"img/detail.d24a80e4.png"},cf05:function(t,s,e){t.exports=e.p+"img/logo.fb631084.png"},d057:function(t,s,e){},d2ef:function(t,s,e){"use strict";e("67fe")},e558:function(t,s,e){"use strict";e("d057")},ec31:function(t,s,e){},f004:function(t,s,e){"use strict";e("43c3")},fa3c:function(t,s,e){"use strict";e("c3d2")}});
//# sourceMappingURL=app.aed8c4d9.js.map