<script setup lang="ts">
const refNvBar = ref(null);
const headInfo = {
  title: 'Shuxin Zheng',
  url: 'https://sxzheng77.github.io/',
};
function onWindowScroll (event: any) {
  const scrollPosition = 7; // 指定的滚动位置
  if (window.scrollY >= scrollPosition) {
    if (refNvBar) {
      refNvBar.value.classList.add('at-scroll-position57');
    }
  } else {
    if (refNvBar) {
      refNvBar.value.classList.remove('at-scroll-position57');
    }
  }
}
onMounted(() => {
// 滚动条向下移动10px， image向上移动1px
//   function transformBgImage (scrollY, element) {
//     // const element = document.querySelector('.top-bg');
//     const rate = -1 * scrollY / 5;
//     //     transform: translate3d(0px, 67.5px, 0px);
//     element.style.transform = `translate3d(0px, ${rate}px, 0px)`; // 应用平移y方向效果
//
//   }
  window.addEventListener('scroll', onWindowScroll);
});

onUnmounted(() => {
  // 移除事件监听器
  // const scrollContainer = document.querySelector('.scroll-container');
  // scrollContainer.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', onWindowScroll);
});
</script>

<template>
  <Head>
    <Title>{{ headInfo.title }}</Title>
    <Meta name="description" :content="headInfo.title"/>


    <Meta property="og:title" :content="headInfo.title"/>
    <Meta property="og:url" :content="headInfo.url"/>
    <Meta property="og:description" :content="headInfo.title"/>


    <!--    <Style type="text/css" children="body { background-color: green; }" ></Style>-->
  </Head>

  <div class="page-wrapper">



    <div class="nav-bar-wrap" ref="refNvBar">
      <div class="navigate-bar">
        <div class="bar-content">
          <div class="nav-link">
            <a href="/" class="person-name ">Shuxin Zheng</a>
          </div>
        </div>
      </div>
    </div>

    <div class="top-bg-wrap">
      <div class="top-bg"></div>
    </div>


    <div class="scroll-wrap">
      <div class="main-content-wrapper">
        <div class="top-section ">
          <!--<div class="bg-above-layer"></div>-->
          <div class="name-line-wrap">
            <div class="bold-name-center">Shuxin Zheng</div>
            <div class="bold-name-line"></div>
            <!--<div class="bold-name-description">Ph.D. candidate at Washington University in St. Louis</div>-->
            <div style="margin-top: 20px;">
              <div class="bold-name-description">Ph.D. In Finance at Southwestern University of Finance and Economics</div>
              <div class="bold-name-description desc2">Visiting Ph.D. Student at Washington University in St. Louis</div>
              <div class="bold-name-description  desc3">National Scholarship for Ph.D Candidate by Ministry of Education of the People’s Republic of China</div>
            </div>
          </div>
          <div class="bold-name-slogan">Do the right thing</div>
        </div>

        <div class="self-intro-section ">
          <div class="self-intro-wrap">
            <div class="flex-item left">
              <img src="assets/images/person.jpg" class="self-img"/>
            </div>
            <div class="flex-item right">

              <div class="self-intro-content">
                <div class="self-intro-name ">Shuxin Zheng</div>
                <div class="intro-line">Hi, welcome to my personal website!</div>
                <div class="intro-line">
                  I am a Ph.D. in Finance at Southwestern University of Finance and Economics.
                  <br><br>I graduate in June 2024 and had been a visiting Ph.D. student at Washington University in St. Louis for one year.
                  <br><br>My research mainly focus on asset pricing, and I am also interested in asset management, investment strategies, and machine learning.
                </div>

                <div class="intro-line">My research tries to understand the rule of securities price movements:</div>


                <ul class="self-intro-ul">

                  <li  class="self-li-item " >
                    <p>What are the factors that affecting securities prices?</p>
                  </li>
                  <li  class="self-li-item " >
                    <p>Can we derive predictability of stock and bond returns through historical observations?</p>
                  </li>
                  <li  class="self-li-item " >
                    <p>How expected returns vary over business cycles and across different asset classes?</p>
                  </li>

                </ul>
              </div>
              <div class="self-education-content">
                <div class="self-intro-name " style="color: #6f7498; font-size: .875rem; margin-top: 40px;">Education</div>
                <ul class="self-intro-ul">

                  <li  class="self-li-item " >
                    <p>Southwestern University of Finance and Economics, Ph.D. in Finance, 2024</p>
                  </li>
                  <li  class="self-li-item " >
                    <p>Southwestern University of Finance and Economics, M.S. in Finance, 2020</p>
                  </li>
                  <li  class="self-li-item " >
                    <p>Southwestern University of Finance and Economics, B.A. in International Business, 2017</p>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>

        <div class="contact-section ">
          <div class="contact-wrapper">
            <div class="contact-research">Research</div>
            <div class="contact-research-desc">
              Interest Rate Risk and the Cross-Section of Expected Corporate Bond Returns (In progress, with Yongfu Feng and Hong Liu)
            </div>
            <div class="contact-research-desc">
              Firm Product Similarity and Stock Price Comovement: Evidence from China (with Yugang Yin and Yahui Liu), Emerging Markets Finance and Trade 60 (4), 808-824, 2023. DOI: https://doi.org/10.1080/1540496X.2023.2253978
            </div>
            <div class="contact-research-desc">
              Political Uncertainty and Stock Return: Evidence from Turnovers of Chinese Local Government Leaders (with Changing Liu, Yugang Yin, and Yong Wang), Journal of Asia Pacific Economy 27 (2), 2022. DOI: https://doi.org/10.1080/13547860.2020.1833422.
            </div>
            <div class="contact-research-desc">
              Index Construction and Application of Digital Transformation in the Insurance Industry: Evidence from China (with Mengqi Liu and Han Yang), Plos One, 2024. DOI: https://doi.org/10.1371/journal.pone.0296899
            </div>


            <div class="contact-research-desc">
              <a class="email-link" href="mailto: sxzheng77@gmail.com" target="_blank" >
                sxzheng77@gmail.com
              </a>
            </div>

            <div class="contact-research-desc">
              <a
                  href=""
                  target="_blank" class="round-box"
                  style="width: 32px; height: 32px; margin: 6px; background-color: rgb(95, 99, 104); background-image: linear-gradient(rgb(95, 99, 104), rgb(95, 99, 104));">
                <img
                    src="assets/images/ss-linkedin.png"
                    alt="领英" class="lEB4Hf" style="width: 28px; height: 28px;"
                    width="28" height="28"></a>
              <a
                  href=""
                  target="_blank" class="round-box"
                  style="width: 32px; height: 32px; margin: 6px;">
                <img src="assets/images/ss-x.png"
                     alt="Twitter" class="xbGufb" style="width: 32px; height: 32px;"
                     width="32" height="32"></a>
              <a
                  href=""
                  target="_blank" class="round-box"
                  style="width: 32px; height: 32px; margin: 6px;">
                <img   src="assets/images/ss-google.png"
                       alt="链接" class="xbGufb" style="width: 32px; height: 32px;"
                       width="32" height="32"></a>
              <a
                  href=""
                  target="_blank" class="round-box"
                  style="width: 32px; height: 32px; margin: 6px;">
                <img src="assets/images/ss-wustl.png"
                     alt="链接" class="xbGufb" style="width: 32px; height: 32px;"
                     width="32" height="32"></a>
            </div>
          </div>


        </div>


      </div>
    </div>



  </div>
</template>

<style scoped lang="sass">
 //pnpm add -D sass-embedded
@import "assets/css/styles.scss"

</style>