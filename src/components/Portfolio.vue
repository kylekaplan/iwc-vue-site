<template child-flex>
  <!--:class="{ yello: isActive }"-->
  <div
    data-aos="fade-up"
    data-aos-easing="ease-in-sin"
    data-aos-offset="200px"
    data-aos-duration="275"
  >
  <v-container fullscreen grid-list-xl text-xs-center justify-end class="ourWork noise">
    <div style="margin-top: -15px;">
      <h1>Our Work</h1>
    <v-layout row wrap align-center class="caption-style-4">
      <v-flex v-for="item in items" :key="item.key" xs12 sm6 lg6 xl3 v-scroll="onScroll">
        <div data-aos="zoom-in"
             data-aos-easing="linear"
             data-aos-offset="50">
          <a :href="item.link" target="_blank">
            <li :style="{background: item.logoColor}">
              <img :src="item.logo" :alt="item.name" />
              <div class="caption">
                <div class="blur"></div>
                <div class="caption-text">
                  <h1 style="display: none">{{item.name}}</h1>
                  <p>{{item.description}}</p>
                </div>
              </div>
            </li>
          </a>
        </div>
        <!--<v-card-->
          <!--width="100%"-->
          <!--style="max-width: 425px; margin: 0 auto;"-->
        <!--&gt;-->
          <!--<v-card-media-->
            <!--:src=item.logo-->
            <!--height="256px"-->
            <!--contain="true"-->
            <!--:style="{ background: item.logoColor}"-->
          <!--&gt;-->
          <!--</v-card-media>-->
          <!--<v-card-title primary-title>-->
            <!--<div>-->
              <!--<div class="headline">{{item.name}}</div>-->
              <!--<span class="grey&#45;&#45;text">1,000 miles of wonder</span>-->
            <!--</div>-->
          <!--</v-card-title>-->
          <!--<v-card-actions>-->
            <!--<v-btn flat>Share</v-btn>-->
            <!--<v-btn flat color="purple">Explore</v-btn>-->
          <!--</v-card-actions>-->
        <!--</v-card>-->
      </v-flex>
    </v-layout>
    <svg id="svg-filter">
      <filter id="svg-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>
        <!--<feColorMatrix type="matrix"-->
                       <!--values="0.39 0.769 0.189 0  0-->
          <!--0.349 0.686 0.168 0  0-->
          <!--0.272 0.534 0.131 0  0-->
            <!--0  0 0 1  0" />-->
      </filter>
    </svg>
    </div>
  </v-container>
  </div>
</template>

<script>
  export default {
    name: "portfolio",
    data () {
      return {
        isActive: false,
        fadeUp: 'fade-up',
        offsetTop: 0,
        items: [
          {
            key: 1,
            name: 'EdiBull',
            logo: '/static/img/portfolio/edibull1.png',
            logoColor: '#006649',
            description: 'An App that finds events offering free food on the USF Campus',
            link: 'https://w8ghw.app.goo.gl/VunL',
          },
          {
            key: 2,
            name: 'Availa-Bull',
            logo: '/static/img/portfolio/availa-bull.jpg',
            logoColor: '#f5f5f5',
            description: 'A Website that will send you an email as soon as a seat opens up in the class you want',
            link: 'http://availa-bull.com/',
          },
          {
            key: 3,
            name: 'USF PAMSA',
            logo: '/static/img/portfolio/pamsa1.jpg',
            logoColor: '#f5f5f5',
            description: 'The official app of USF PAMSA',
            link: 'https://itunes.apple.com/us/app/usf-pamsa/id1350090439',
          },
          {
            key: 4,
            name: 'Pie Guy',
            logo: '/static/img/portfolio/nope.jpg',
            logoColor: '#f5f5f5',
            description: 'Coming Soon',
            // link: 'https://w8ghw.app.goo.gl/VunL',
          },
        ],
      }
    },
    methods: {
      onScroll (e) {
        // this.offsetTop = document.getElementById("scroll-target").scrollTop;
        this.isActive = true;
        // this.isActive = true;
        // if(this.offsetTop > 1) {
        //   this.isActive = !this.isActive;
        // }
      }
    }
  }
</script>

<!--some hover effects: https://tympanus.net/Development/HoverEffectIdeas/-->
<!--more effects: https://tympanus.net/Development/PageLoadingEffects/index.html-->
<style scoped>
  .noise {
    background-color: #F5F5F5;
    /*background-image: url("https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");*/
    background-image: url(data:image/png;base64,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);
    /*background-image: url(data:image/png;base64,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), linear-gradient(#ffffff, #c7c7c7); !* W3C *!*/
    /*background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url(data:image/png;base64,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) no-repeat;*/
    background-repeat: round;
    /*background-color: #1e212c;*/
  }
  .ourWork {
    position: relative;
    z-index: 1000;
  }
  .ourWork:before, .ourWork:after {
    content: "";
    background-color: #F5F5F5;
    background-image: url(data:image/png;base64,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); /* W3C */
    background-repeat: round;
    height: 100px;
    transform: skewY(3deg);
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .ourWork:before{
    top: -60px;
    box-shadow: 0 -5px 6px #00000047;
    transform: skewY(-3deg);
  }
  .ourWork:after {
    bottom: -60px;
    box-shadow: 0px 5px 6px #00000047;
    transform: skewY(2deg);
  }

  .intro-effect-fadeout:not(.notrans) .ourWork > div {
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-property: -webkit-transform, opacity;
    transition-property: transform, opacity;
  }
  .intro-effect-fadeout .ourWork > div {
    opacity: 0;
    -webkit-transform: translateY(350px);
    transform: translateY(350px);
  }

  .intro-effect-fadeout.modify .ourWork > div {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }


  .background-blur {
    /*!* All the background image supports *!*/
    transform: translate(0px, 0px, 0px);
    background-image: -webkit-linear-gradient(bottom left, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
    background-image: -moz-linear-gradient(bottom left, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
    background-image: -o-linear-gradient(bottom left, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
    background-image: linear-gradient(to top right, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%);
    position: absolute;
    width: 100%;
    height: 100%;

    /* blur filters */
    -webkit-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(20px);
  }

  .background-blur:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;

    /* Setting the gradient. Adds depth, and glass like effect. */
    background-image: -webkit-linear-gradient(289deg, rgba(43,40,50,0.8) 0%, rgba(43,40,50,0.4) 46%, rgba(0,0,0,0.05) 50%);
    background-image: -moz-linear-gradient(289deg, rgba(43,40,50,0.8) 0%, rgba(43,40,50,0.4) 46%, rgba(0,0,0,0.05) 50%);
    background-image: -o-linear-gradient(289deg, rgba(43,40,50,0.8) 0%, rgba(43,40,50,0.4) 46%, rgba(0,0,0,0.05) 50%);
    background-image: linear-gradient(-19deg, rgba(43,40,50,0.8) 0%, rgba(43,40,50,0.4) 46%, rgba(0,0,0,0.05) 50%);

    /* Blur to add depth. High to create smooth transition */
    -webkit-filter: blur(70px);
    -o-filter: blur(70px);
    filter: blur(70px);
  }

  .caption-style-4 {
    margin: auto 20px !important;
  }
  .caption-style-4 li {
    padding: 0;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
    width: 90%;
    height: 355px;
    background: black;
    list-style-type: none;
    /*box-shadow: -60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000;*/
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    /* Enable GPU Rendering */
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: filter 0.25s ease-in-out;
    -moz-transition: filter 0.25s ease-in-out;
    -o-transition: filter 0.25s ease-in-out;
    -ms-transition: filter 0.25s ease-in-out;
    transition: filter 0.25s ease-in-out;
  }
  .caption-style-4 li:hover {
    /*filter: sepia(0.5);*/
  }
  .caption-style-4 img {
    -webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    -ms-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }
  .caption-style-4 img {
    padding: 0px;
    z-index: 4;
    position: absolute;
    top: -33%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    /*will-change: filter;*/
    -webkit-transform: translateY(29%);
    transform: translateY(29%);
  }
  .caption-style-4 li:hover img {
    transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -moz-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
    /*filter: grayscale(1);*/
    /*filter: url(#svg-blur);*/
    /*-webkit-filter: url(#svg-blur);*/
    /*opacity: 0.8;*/
  }

  #svg-filter { display: none; }

  .caption-style-4 .caption {
    cursor: pointer;
    position: absolute;
    z-index: 10;
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    will-change: opacity;
  }
  .caption-style-4 li:hover .caption {
    opacity: 1;
  }
  .caption-style-4 .blur {
    /*background-color: rgba(0,0,0,0.55);*/
    background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.20) 35%, rgba(0, 1, 10, 0.55) 100%);
    background: -webkit-linear-gradient(top, hsla(0, 0%, 0%, 0.20) 35%, rgba(0, 1, 10, 0.55) 100%);
    height: 100%;
    width: 100%;
    z-index: 5;
    position: absolute;
  }
  .caption-style-4 .caption-text {
    z-index: 10;
    color: #fff;
    position: absolute;
    width: 81%;
    height: 100%;
    text-align: center;
    top: 57%;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 18px;
  }
  .caption-style-4 .caption-text h1 {
    font-size: 28px;
    color: white;
    text-align: center;
  }
  .caption-style-4 .caption-text p {
    margin: 1em 0 0;
    padding: 1em;
    border: 1px solid #fff;
    opacity: 0;
    letter-spacing: 1px;
    -webkit-transition: opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    -webkit-transform: translate3d(0,20px,0) scale(1.1);
    transform: translate3d(0,20px,0) scale(1.1);
  }
  .caption-style-4 li:hover .caption-text p {
     opacity: 1;
     -webkit-transform: translate3d(0,0,0) scale(1);
      transform: translate3d(0,0,0) scale(1);
   }
  .caption-style-4 li:hover .caption-text {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
  .caption-style-4 .caption-text {
    /*margin-top: 20%;*/
    /* -webkit-transition: -webkit-transform 0.35s; */
    transition: transform 0.35s;
    /* -webkit-transform: translate3d(0,20px,0); */
    transform: translate3d(0,20px,0);
  }


  /*figure.effect-zoe:hover::before {*/
    /*opacity: 1;*/
    /*!*-webkit-transform: translate3d(0,0,0);*!*/
    /*!*transform: translate3d(0,0,0);*!*/
  /*}*/
  /*figure.effect-zoe::before {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background: -webkit-linear-gradient(top, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);*/
    /*background: linear-gradient(to bottom, rgba(72,76,97,0) 0%, rgba(72,76,97,0.8) 75%);*/
    /*content: '';*/
    /*opacity: 0;*/
    /*!*-webkit-transform: translate3d(0,50%,0);*!*/
    /*!*transform: translate3d(0,50%,0);*!*/
    /*-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;*/
    /*transition: opacity 0.35s, transform 0.35s;*/
    /*!*-webkit-transform: translateX(-150px);*!*/
    /*!*transform: translateX(-150px);*!*/
  /*}*/
</style>
