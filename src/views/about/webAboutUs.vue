<template>
  <div class="flex-col web-about-page">
    <div class="flex-col section_1">
      <YuanNav />
    </div>
    <div class="flex-col view">
      <div class="flex-col">
        <div class="flex-col items-center group_3">
          <span class="text_4 text_28">about us</span>
          <span class="text_6 text_29">关于我们</span>
        </div>
        <span class="text_8">一起建设中国制造的全球共识</span>
      </div>
    </div>
    <div class="flex-col group_17">
      <span class="text_9">元计划由深圳行者艺术与四川萃雅教育联合发行</span>
      <span class="text_10">
        行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。
      </span>
      <span class="text_11">
        我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。
      </span>
      <span class="text_12">
        四川萃雅教育科技有限公司是由新华文轩出版传媒股份有限公司、四川日报网络传媒发展有限公司、中国广电四川网络股份有限公司、四川任你学教育科技有限公司
        (四川省电教馆与四川省教科院合资)
        、四川奇迹云科技有限公司共同出资成立的专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，助力校内教育和素质教育，驻守文化根脉，促进中华优秀文化传播传承。
      </span>
      <span class="text_13">希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！</span>
    </div>
    <div class="flex-col items-center group_4">
      <span class="text_4 text_14">about us</span>
      <span class="text_6 text_15">企业文化</span>
    </div>
    <div class="flex-col enterprise-culture-content">
      <span class="main">
        我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。
      </span>
      <span class="main_1">希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！</span>
    </div>
    <div class="flex-col section_6">
      <!-- <div class="flex-col section_7"> -->
        <div class="flex-row contact_way">
          <div class="flex-col section_9">
          </div>
          <div class="flex-col items-start contactus">
            <div class="flex-row contactus_title">
              <div class="flex-col items-start group_8">
                <span class="text_4 text_18">contact us</span>
                <span class="text_19">联系我们</span>
              </div>
              <img
                src="../../assets/about/yuanLabelIcon.png"
                class="image_7"
              />
            </div>
            <div class="flex-col contactus_content">
              <div class="flex-row">
                <div class="flex-col items-center">
                  <img
                    src="../../assets/about/yuanAccount.png"
                    class="image_2"
                  />
                  <span class="text_20">元计划公众号</span>
                </div>
                <div class="flex-col items-start group_13">
                  <img
                    src="../../assets/about/wechatScan.png"
                    class="image_2"
                  />
                  <span class="text_21">客服微信</span>
                </div>
              </div>
              <div class="flex-col group_12">
                <div class="flex-row">
                  <img
                    src="../../assets/about/emailIcon.png"
                    class="image_4"
                  />
                  <span class="text_22">合作邮箱</span>
                </div>
                <span class="text_23">caijingya@xingzhe.team</span>
                <div class="flex-row group_14">
                  <img
                    src="../../assets/about/addressIcon.png"
                    class="image_4"
                  />
                  <span class="text_24">公司地址</span>
                </div>
                <span class="text_25">中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1</span>
              </div>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
    <YuanFooter />
  </div>
</template>

<script>
import YuanNav from '../../components/YuanNav.vue'
import YuanFooter from '../../components/YuanFooter.vue'

export default {
  components: { YuanNav, YuanFooter },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.web-about-page {
  background-color: #000000;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .section_1 {
    background-image: url('../../assets/about/aboutbanner@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-bottom: 30.31rem;

      .section_3 {
        padding: 0 5rem;
        background-image: linear-gradient(180deg, #00000080 25.5%, #00000000 100%);

        .image {
          align-self: center;
          width: 6.28rem;
          height: 2.19rem;
        }

        .text_1 {
          align-self: center;
          color: #ffffff;
          font-size: 0.88rem;
          font-family: PingFang SC;
          font-weight: 200;
          line-height: 0.8rem;
        }
        .group_1 {
          margin-left: 2.77rem;
          padding: 1.31rem 0;
          flex-shrink: 0;
          position: relative;

          .image_1 {
            width: 2.09rem;
            height: 1.03rem;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }

          .text_31 {
            color: #ffffff;
            font-size: 0.88rem;
            font-family: PingFang SC;
            line-height: 0.81rem;
            position: relative;
          }
        }

        .text_2 {
          margin-left: 2.69rem;
          align-self: center;
          color: #ffffff;
          font-size: 0.88rem;
          font-family: PingFang SC;
          font-weight: 200;
          line-height: 0.8rem;
        }

        .text_3 {
          margin-left: 2.81rem;
          align-self: center;
          color: #ffffff;
          font-size: 0.88rem;
          font-family: PingFang SC;
          font-weight: 200;
          line-height: 0.8rem;
        }
      }
  }

  .view {
    margin-top: -18.58rem;
    padding-bottom: 29.42rem;
    position: relative;
    .group_3 {
      padding-top: 1.09rem;
      height: 2.67rem;
      position: relative;
      .text_28 {
        color: #ffffff1a;
        font-size: 2.13rem;
        font-family: PingFang SC;
        font-weight: 600;
        line-height: 1.58rem;
        letter-spacing: 1.7rem;
      }
      .text_29 {
        color: #ffffff;
        font-size: 2.13rem;
        font-family: PingFang SC;
        font-weight: 600;
        line-height: 1.98rem;
      }
    }
    .text_8 {
      margin-top: 1rem;
      align-self: center;
      color: #ffffff;
      font-size: 1.03rem;
      font-family: PingFang SC;
      line-height: 0.95rem;
      letter-spacing: 0.82rem;
    }
  }
  .group_17 {
    margin-top: -21rem;
    align-self: center;
    width: 75%;
    position: relative;
    .text_9 {
      align-self: center;
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
    .text_10 {
      margin: 1.5rem 0.16rem 0 0.17rem;
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
    .text_11 {
      margin: 1.5rem 0.11rem 0;
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
    .text_12 {
      margin-top: 1.5rem;
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
    .text_13 {
      margin-top: 1.5rem;
      align-self: center;
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
  }
  .group_4 {
    margin-top: 8.05rem;
    padding-top: 0.97rem;
    position: relative;
    .text_14 {
      color: #ffffff1a;
      font-size: 2.13rem;
      font-family: PingFang SC;
      font-weight: 600;
      line-height: 1.58rem;
      letter-spacing: 1.7rem;
    }
    .text_15 {
      color: #ffffff;
      font-size: 2.13rem;
      font-family: PingFang SC;
      font-weight: 600;
      line-height: 2rem;
    }
  }

  .enterprise-culture-content {
    margin-top: 3.63rem;
    padding-left: 7.36rem;
    padding-right: 7.33rem;
    .main {
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
    .main_1 {
      margin-top: 1.5rem;
      align-self: center;
      color: #ffffff;
      font-size: 0.69rem;
      font-family: PingFang SC;
      line-height: 1.5rem;
    }
  }

  .section_6 {
    margin-top: 10.19rem;
    background-image: url('../../assets/about/footerBg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 2.06rem 0 0.83rem;
    padding-bottom: 0;
    background-color: #00000040;

      .contact_way {
        width: 80%;
        margin: 0 auto;
        background-color: #000000;
        background-image: url('../../assets/about/footeryuan.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        justify-content: center;

        .section_9 {
          width: 26.93rem;
          background-image: url('../../assets/about/address.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 17rem;

          .section_10 {
            padding: 7.04rem 0;
            background-color: #0000004d;
            height: 100%;

            .section_11 {
              padding: 0.5rem 0.8rem 1rem 0.8rem;
              filter: drop-shadow(0px 0.19rem 0.094rem #00215240);
              background-image: url('../../assets/about/dialog.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
              width: 14.91rem;

              .text_16 {
                color: #3478f6;
                font-size: 0.63rem;
                font-family: PingFang SC;
                font-weight: 600;
                text-align: left;
              }
            }
          }
        }

        .contactus {
          padding: 1.27rem 0 1.17rem;
          flex: 1 1 auto;
          height: 17rem;

          .contactus_content {
            padding: 0 2.03rem;
            width: 100%;

            .group_12 {
              margin-top: 1.53rem;

              .text_23 {
                margin-top: 0.48rem;
                align-self: flex-start;
                color: #ffffff;
                font-size: 0.63rem;
                font-family: PingFang SC;
                line-height: 0.58rem;
                letter-spacing: 0.063rem;
              }

              .group_14 {
                margin-top: 1.16rem;

                .text_24 {
                  color: #ffffff;
                  font-size: 0.64rem;
                  font-family: PingFang SC;
                  font-weight: 600;
                  letter-spacing: 0.08rem;
                }
              }

              .text_25 {
                margin-top: 0.39rem;
                color: #ffffff;
                font-size: 0.63rem;
                font-family: PingFang SC;
                line-height: 0.75rem;
                letter-spacing: 0.063rem;
                text-align: left;
              }

              .text_22 {
                color: #ffffff;
                font-size: 0.64rem;
                font-family: PingFang SC;
                font-weight: 600;
                letter-spacing: 0.08rem;
              }

              .image_4 {
                width: 0.94rem;
                height: 0.94rem;
                margin-right: 0.5rem;
              }
            }

            .group_13 {
              margin-left: 2.8rem;
              align-items: center;

              .text_21 {
                margin-top: 0.3rem;
                color: #ffffff;
                font-size: 0.64rem;
                font-family: PingFang SC;
              }
            }

            .text_20 {
              margin-top: 0.31rem;
              color: #ffffff;
              font-size: 0.63rem;
              font-family: PingFang SC;
            }

            .image_2 {
              width: 3.86rem;
              height: 3.83rem;
            }
          }

          .contactus_title {
            width: 100%;
            padding: 0 2.03rem;
            position: relative;
            display: flex;
            justify-content: space-between;

            .group_8 {
              padding-top: 0.83rem;
              width: 15.19rem;
              position: relative;

              .text_18 {
                margin-left: 0.19rem;
                color: #ffffff1a;
                font-size: 0.94rem;
                font-family: PingFang SC;
                font-weight: 600;
                line-height: 0.7rem;
                letter-spacing: 0.75rem;
              }

              .text_19 {
                color: #ffffff;
                font-size: 1.19rem;
                font-family: PingFang SC;
                font-weight: 600;
                line-height: 1.13rem;
                position: absolute;
                left: 0.2rem;
                top: 0;
              }
            }
            .image_7 {
              margin: 0.078rem 0 0.2rem 2.91rem;
              width: 2.94rem;
              height: 1.25rem;
            }
          }
        }
      }
      .text_26 {
        margin-top: 0.83rem;
        align-self: center;
        color: #ffffff;
        font-size: 0.44rem;
        font-family: PingFang SC;
        line-height: 0.41rem;
        letter-spacing: 0.044rem;
      }
  }

  .text_6 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .text_4 {
    text-transform: uppercase;
  }
}
</style>
