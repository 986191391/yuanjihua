<template>
<div class="flex-col pc-about-page">
    <!-- <YuanNav navTitle="关于我们" /> -->
    <div class="aboutus-content">
    <div class="bg-wrapper">
        <div class="flex-col aboutus-slogin">
        <div class="flex-col items-start group_1">
            <span class="text">about us</span>
            <span class="text_2">关于我们</span>
        </div>
        <span class="text_4">一起建设中国制造的全球共识</span>
        </div>
        <span class="text_6">元计划由深圳行者艺术与四川萃雅教育联合发行</span>
        <span class="text_7">
        行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。
        </span>
        <span class="text_8">
        四川萃雅教育科技有限公司是由新华文轩出版传媒股份有限公司、四川日报网络传媒发展有限公司、中国广电四川网络股份有限公司、四川任你学教育科技有限公司
        (四川省电教馆与四川省教科院合资)
        、四川奇迹云科技有限公司共同出资成立的专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，助力校内教育和素质教育，驻守文化根脉，促进中华优秀文化传播传承。
        </span>
    </div>
    <div class="other-wrapper">
        <div class="flex-col view_1">
        <div class="flex-col items-start group_3">
            <span class="text">about us</span>
            <span class="text_2">关于我们</span>
        </div>
        <span class="text_10">一起建设中国制造的全球共识</span>
        </div>
        <span class="text_12">
        我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。
        </span>
        <span class="text_13">希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！</span>
        <div class="flex-col items-start group_3 view_3">
        <span class="text">contact us</span>
        <span class="text_2">联系我们</span>
        </div>
        <div class="justify-between group_5">
        <div class="flex-col items-center">
            <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709827727967799.png"
            class="image"
            />
            <span class="text_16">元计划公众号</span>
        </div>
        <div class="flex-col items-center">
            <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580709876124359559.png"
            class="image"
            />
            <span class="text_17">客服微信</span>
        </div>
        </div>
        <div class="flex-col group_9">
        <div class="flex-col items-center">
            <div class="justify-center group_11">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605694300981.png"
                class="image_2"
            />
            <span class="text_18">合作邮箱</span>
            </div>
            <span class="text_19">caijingya@xingzhe.team</span>
        </div>
        <div class="flex-col group_12">
            <div class="justify-center">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16580704605682736546.png"
                class="image_2"
            />
            <span class="text_20">公司地址</span>
            </div>
            <span class="text_21">中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1</span>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
// import YuanNav from '../../components/YuanNav.vue'

export default {
  // components: { YuanNav },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.pc-about-page {
padding: 0 0 3rem;
background-color: #000000;
width: 100%;
overflow-y: auto;
overflow-x: hidden;
height: 100%;

.aboutus-content {
    display: flex;
    flex-direction: column;

    .bg-wrapper {
    padding: 4rem 1rem 0 1rem;
    background-image: url('../../assets/pc/aboutus/aboutusbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;

    .aboutus-slogin {
        text-align: center;

        .group_1 {
            padding-top: 1rem;
            height: 2.31rem;
            position: relative;
        }
        .text_4 {
            margin-top: 0.66rem;
            color: #ffffff;
            font-size: 1rem;
            font-family: PingFang SC;
            line-height: 0.94rem;
            letter-spacing: 0.3rem;
        }
    }
    .text_6 {
        margin-top: 3.19rem;
        align-self: center;
        color: #ffffff;
        font-size: 0.63rem;
        font-family: PingFang SC;
        line-height: 1.25rem;
    }

    .text_7 {
        margin-top: 1.25rem;
        color: #ffffff;
        font-size: 0.63rem;
        font-family: PingFang SC;
        line-height: 1.25rem;
    }
    .text_8 {
        margin-top: 2.5rem;
        color: #ffffff;
        font-size: 0.63rem;
        font-family: PingFang SC;
        line-height: 1.25rem;
    }
    }

    .other-wrapper {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;

    .view_1 {
        margin-top: 4.91rem;
        text-align: center;

        .text_10 {
        margin-top: 0.66rem;
        color: #ffffff;
        font-size: 1rem;
        font-family: PingFang SC;
        line-height: 0.94rem;
        letter-spacing: 0.3rem;
        }
    }
    .text_12 {
        margin-top: 3.19rem;
        color: #ffffff;
        font-size: 0.63rem;
        font-family: PingFang SC;
        line-height: 1.25rem;
    }
    .text_13 {
        margin-top: 1.25rem;
        color: #ffffff;
        font-size: 0.63rem;
        font-family: PingFang SC;
        line-height: 1.25rem;
    }
    .view_3 {
        margin-top: 4.91rem;
        text-align: center;
    }
    .group_5 {
        margin-top: 2.22rem;
        padding-left: 5.56rem;
        padding-right: 5.53rem;
        .image {
        width: 4.53rem;
        height: 4.47rem;
        }
        .text_16 {
        margin-top: 0.41rem;
        color: #ffffff;
        font-size: 0.75rem;
        font-family: PingFang SC;
        line-height: 0.69rem;
        }
        .text_17 {
        margin-top: 0.41rem;
        color: #ffffff;
        font-size: 0.75rem;
        font-family: PingFang SC;
        line-height: 0.69rem;
        }
    }
    .group_9 {
        margin-top: 1.88rem;
        .group_12 {
        margin-top: 1.59rem;
        align-self: center;
        width: 18.75rem;
        .text_21 {
            margin-top: 0.81rem;
            color: #ffffff;
            font-size: 0.75rem;
            font-family: PingFang SC;
            line-height: 0.88rem;
            letter-spacing: 0.075rem;
            text-align: center;
        }
        .text_20 {
            margin: 0.19rem 0 0.16rem 0.5rem;
            color: #ffffff;
            font-size: 1rem;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 0.94rem;
            letter-spacing: 0.1rem;
        }
        }
        .group_11 {
        padding: 0 1.78rem;
        .text_18 {
            margin: 0.16rem 0.59rem 0.16rem 0.47rem;
            color: #ffffff;
            font-size: 1rem;
            font-family: PingFang SC;
            font-weight: 600;
            line-height: 0.94rem;
            letter-spacing: 0.1rem;
        }
        }
        .text_19 {
        margin-top: 0.5rem;
        color: #ffffff;
        font-size: 0.75rem;
        font-family: PingFang SC;
        line-height: 0.72rem;
        letter-spacing: 0.075rem;
        }
        .image_2 {
        width: 1.25rem;
        height: 1.25rem;
        }
    }
    .group_3 {
        padding-top: 1rem;
        position: relative;
    }
    }

    .text {
    color: #ffffff1a;
    font-size: 1.65rem;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 1.31rem;
    letter-spacing: 1.05rem;
    text-transform: uppercase;
    width: 100%;
    }

    .text_2 {
    color: #ffffff;
    font-size: 2rem;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 1.88rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    }
}

}
</style>
