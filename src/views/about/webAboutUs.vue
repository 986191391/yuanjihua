<template>
  <div class="flex-col web-about-page">
    <div class="flex-col about-banner">
      <div class="flex-col items-center desc-label">
        <span class="bg-font">about us</span>
        <span class="label">关于我们</span>
      </div>
      <span class="slogin">一起建设中国制造的全球共识</span>
    </div>
    <div class="flex-col aboutus-content">
      <span>元计划由深圳行者艺术与四川萃雅教育联合发行</span>
      <span>
        行者数字艺术有限公司是一家专注动漫形象设计版权的公司，致力于打造原创动漫IP产业化，数字化。核心成员包括原上市公司研发中心副总裁、原香港知名地产公司运营部负责人、以及国际顶级设计师、网络知名小说家。旗下原创国潮科幻动漫IP《元计划》已和国内知名数藏平台唯一艺术达成战略合作，致力于发展动漫数字藏品与实体产业相互赋能，布局原创动漫全生态产业链。
      </span>
      <span>
        我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。
      </span>
      <span>
        四川萃雅教育科技有限公司是由新华文轩出版传媒股份有限公司、四川日报网络传媒发展有限公司、中国广电四川网络股份有限公司、四川任你学教育科技有限公司
        (四川省电教馆与四川省教科院合资)
        、四川奇迹云科技有限公司共同出资成立的专注于中华文化传承教育的国有控股企业，四川萃雅教育始终立足文化自信，紧追新时代下中华文化发展的节奏，助力校内教育和素质教育，驻守文化根脉，促进中华优秀文化传播传承。
      </span>
      <span>希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！</span>
    </div>
    <div class="flex-col items-center desc-label enterprise-culture-label">
      <span class="bg-font">about us</span>
      <span class="label">企业文化</span>
    </div>
    <div class="flex-col enterprise-culture-content">
      <span>
        我们致力于将元计划打造为全国首个以人物形象为基石，实现文娱产业全生态布局的IP巨作。我们始终坚信，通过优质的版权与传统实业的联动赋能，是国产数藏最正确的发展路线，所以我们在积极开发线上赋能以及元宇宙空间和游戏的同时，会更加注重元计划对于实体产业的赋能。不久的将来，我们会推出元计划同名小说以及动漫电影，努力成为国产科幻动漫的标杆；同时，元计划主题线下体验馆，元计划高端手办及周边衍生品，元计划冠名综艺及赛事，我们也在积极筹备中。
      </span>
      <span>希望我们共同努力，让元计划成为中国乃至全球的顶级IP产业，一起建设中国制造的全球共识！</span>
    </div>
    <div class="flex-col footer-address">
      <div class="flex-row contact_way">
        <div class="flex-col address_position">
        </div>
        <div class="flex-col items-start contactus">
          <div class="flex-row contactus_header">
            <div class="flex-col items-start contactus_label">
              <span class="contactus_label_bg">contact us</span>
              <span class="contactus_label_font">联系我们</span>
            </div>
            <img
              src="../../assets/about/yuanLabelIcon.png"
              class="brand_image"
            />
          </div>
          <div class="flex-col contactus_content">
            <div class="flex-row scan-wrapper">
              <div class="flex-col items-center">
                <img
                  src="../../assets/about/yuanAccount.png"
                  class="scan_image"
                />
                <span class="scan_desc">元计划公众号</span>
              </div>
              <div class="flex-col items-start we_chat">
                <img
                  src="../../assets/about/wechatScan.png"
                  class="scan_image"
                />
                <span class="scan_desc">客服微信</span>
              </div>
            </div>
            <div class="flex-col address_email">
              <div class="flex-row items-center yuan_email_label">
                <img
                  src="../../assets/about/emailIcon.png"
                  class="contact_icon"
                />
                <span>合作邮箱</span>
              </div>
              <span class="yuan_email">caijingya@xingzhe.team</span>
              <div class="flex-row items-center yuan_address_label">
                <img
                  src="../../assets/about/addressIcon.png"
                  class="contact_icon"
                />
                <span>公司地址</span>
              </div>
              <span class="yuan-address">中国广东省深圳市南山区粤海街道高新南七道南面国信投资大厦603-1</span>
            </div>
          </div>
        </div>
      </div>
      <YuanFooter />
    </div>
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'

export default {
  components: { YuanFooter },
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

  .desc-label {
    font-size: 2.18vw;
    padding-top: 1.26vw;
    position: relative;
    font-family: PingFang SC;
    font-weight: 600;
    .bg-font {
      color: #ffffff1a;
      line-height: 1.58vw;
      letter-spacing: 1.7vw;
      text-transform: uppercase;
    }
    .label {
      color: #ffffff;
      line-height: 1.98vw;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .about-banner {
    height: 56vw;
    background-image: url('../../assets/about/aboutbanner@2x.png');
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;

    .slogin {
      margin-top: 1vw;
      align-self: center;
      color: #ffffff;
      font-size: 1.03vw;
      font-family: PingFang SC;
      line-height: 0.95vw;
      letter-spacing: 0.82vw;
    }
  }

  .aboutus-content {
    margin-top: -19.8vw;
    align-self: center;
    width: 75%;
    position: relative;
    color: #ffffff;
    font-size: 1vw;
    line-height: 1.5vw;
    font-family: PingFang SC;

    & > span:not(:first-child) {
      margin-top: 1.5vw;
    }
  }

  .enterprise-culture-label {
    margin-top: 5.5vw;
  }

  .enterprise-culture-content {
    width: 75%;
    margin-top: 3.63vw;
    color: #ffffff;
    font-size: 1vw;
    font-family: PingFang SC;
    line-height: 1.5vw;
    align-self: center;

    & > span:last-child {
      margin-top: 1.5vw;
    }
  }

  .footer-address {
    margin-top: 13vw;
    background-image: url('../../assets/about/footerBg.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3.4vw 5.7vw;
    padding-bottom: 0;
    background-color: #00000040;

      .contact_way {
        height: 28.3vw;
        margin: 0 auto;
        justify-content: center;

        .address_position {
          width: 46.6vw;
          height: 100%;
          background-image: url('../../assets/about/address.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .contactus {
          padding: 2.3vw 3.44vw;
          width: 41.9vw;
          height: 100%;
          flex: 1 1 auto;
          background-color: #000000;
          background-image: url('../../assets/about/footeryuan.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right bottom;

          .contactus_header {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;

            .contactus_label {
              padding-top: 0.83vw;
              position: relative;
              font-family: PingFang SC;
              font-weight: 600;

              .contactus_label_bg {
                color: #ffffff1a;
                font-size: 0.94vw;
                line-height: 1.2vw;
                letter-spacing: 0.75vw;
                text-transform: uppercase;
              }

              .contactus_label_font {
                color: #ffffff;
                font-size: 1.4vw;
                line-height: 1vw;
                position: absolute;
                left: 0;
                top: 0;
              }
            }
            .brand_image {
              width: 4.8vw;
              height: 2vw;
            }
          }

          .contactus_content {
            margin-top: 0.9vw;
            width: 100%;

            .scan-wrapper {
              font-size: 1vw;
              color: #ffffff;
              font-family: PingFang SC;

              .we_chat {
                margin-left: 2.8vw;
                align-items: center;
              }

              .scan_desc {
                margin-top: 0.31vw;
              }

              .scan_image {
                width: 6vw;
                height: 6vw;
              }
            }

            .address_email {
              margin-top: 2.4vw;
              color: #ffffff;
              font-size: 1vw;
              font-family: PingFang SC;
              letter-spacing: 0.08rem;
                line-height: 1.5vw;

              .yuan_email_label {
                font-weight: 600;
              }

              .yuan_email {
                margin-top: 0.6vw;
                align-self: flex-start;
              }

              .yuan_address_label {
                margin-top: 1.9vw;
                font-weight: 600;
              }

              .yuan-address {
                margin-top: 0.6vw;
                text-align: left;
              }

              .contact_icon {
                width: 0.94vw;
                height: 0.94vw;
                margin-right: 0.5vw;
              }
            }

          }
        }
      }
  }
}

@media screen and (max-width: 1080px) {
  .web-about-page {
    min-width: 1080px;

    .desc-label {
      padding-top: 1.09rem;
      font-size: 2.13rem;
      .bg-font {
        line-height: 1.58rem;
        letter-spacing: 1.7rem;
      }
      .label {
        line-height: 1.98rem;
      }
    }

    .about-banner {
      height: 540px;

      .slogin {
        margin-top: 1rem;
        font-size: 1.03rem;
        line-height: 0.95rem;
        letter-spacing: 0.82rem;
      }
    }

    .aboutus-content {
      margin-top: -181.44px;
      font-size: 0.69rem;
      line-height: 1.5rem;

      & > span:not(:first-child) {
        margin-top: 1.5rem;
      }
    }

    .enterprise-culture-label {
      margin-top: 5.5rem;
    }

    .enterprise-culture-content {
      margin-top: 3.63rem;
      font-size: 0.69rem;
      line-height: 1.5rem;

      & > span:last-child {
        margin-top: 1.5rem;
      }
    }

    .footer-address {
      min-width: 1080px;
      margin-top: 10.19rem;
      padding: 2.06rem 0 0.83rem;

      .contact_way {
        height: 305.64px;

        .address_position {
          width: 503.28px;
        }

        .contactus {
          padding: 24.84px 37.152px;
          width: 452.52px;

          .contactus_header {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;
            .contactus_label {
              padding-top: 0.83rem;
              position: relative;

              .contactus_label_bg {
                font-size: 0.94rem;
                line-height: 0.7rem;
                letter-spacing: 0.75rem;
              }

              .contactus_label_font {
                font-size: 1.19rem;
                line-height: 1.13rem;
              }
            }
            .brand_image {
              width: 2.94rem;
              height: 1.25rem;
            }
          }

          .contactus_content {
            margin-top: 9.72px;
            width: 100%;

            .scan-wrapper {
              font-size: 0.63rem;
              .we_chat {
                margin-left: 2.8rem;
              }

              .scan_desc {
                margin-top: 0.31rem;
              }

              .scan_image {
                width: 64.8px;
                height: 64.8px;
              }
            }

            .address_email {
              margin-top: 25.92px;
              font-size: 0.64rem;
              letter-spacing: 0.08rem;
              line-height: 0.75rem;

              .yuan_email {
                margin-top: 6.48px;
              }

              .yuan_address_label {
                margin-top: 20.52px;
              }

              .yuan-address {
                margin-top: 6.48px;
              }

              .contact_icon {
                width: 0.94rem;
                height: 0.94rem;
                margin-right: 0.5rem;
              }
            }

          }
        }
      }
    }
  }
}
</style>
