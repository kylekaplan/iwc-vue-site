<template>
  <v-container fullscreen grid-list-xl text-xs-center justify-end class="ourWork noise">
    <div style="margin-top: -15px;">
      <h1>USF Student Toolbox</h1>
      <v-layout row wrap align-center class="caption-style-4">
        <v-flex v-for="item in items" :key="item.key" xs12 sm6 lg4 xl3 px-4 v-scroll="onScroll">
          <div data-aos="zoom-in"
               data-aos-easing="linear"
               data-aos-offset="50">
            <a :href="item.link" target="_blank">
              <li :style="{background: item.logoColor}">
                <img :src="item.logo" :alt="item.name" />
              </li>
            </a>
            <div class="caption-text">
              <p>{{item.description}}</p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: "u-s-f-portfolio",
    data () {
      return {
        isActive: false,
        fadeUp: 'fade-up',
        offsetTop: 0,
        items: [
          {
            key: 1,
            name: 'Availa-Bull',
            logo: '/static/img/USFPortfolio/availa-bull.jpg',
            logoColor: '#f5f5f5',
            description: 'Receive an email notification when a class you want opens up with availability.',
            link: 'http://availa-bull.com/',
          },
          {
            key: 2,
            name: 'quip',
            logo: '/static/img/USFPortfolio/quip.JPG',
            logoColor: '#775645',
            description: 'Find and get directions to any building, completely free.',
            link: 'http://quipapp.us/',
          },
          {
            key: 3,
            name: 'EdiBull',
            logo: '/static/img/USFPortfolio/edibull.png',
            logoColor: '#00684b',
            description: 'An App that finds events offering free food on the USF Campus',
            link: 'https://w8ghw.app.goo.gl/VunL',
          },
          {
            key: 4,
            name: 'USF PAMSA',
            logo: '/static/img/USFPortfolio/pamsa.jpg',
            logoColor: '#f5f5f5',
            description: 'The official app for USF PAMSA',
            link: 'https://itunes.apple.com/us/app/usf-pamsa/id1350090439',
          },
          {
            key: 5,
            name: 'Feed-A-Bull',
            logo: '/static/img/USFPortfolio/feedabull.jpg',
            logoColor: '#FFF',
            description: 'Feed-A-Bull strives to alleviate food hardship and hunger among USF students.',
            link: 'http://www.usf.edu/student-affairs/student-health-services/services/feed-a-bull-food-pantry.aspx',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  h1 {
    color: #9ccb3b;
    color: #72a50a;
    font-size: 80px;
    font-family: sans-serif;
    margin-top: 40px;
    margin-bottom: 60px;
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
    /*width: 90%;*/
    /*height: 355px;*/
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
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 75%;
    /*max-width: 100%;*/
  }
  .caption-style-4 li:hover img {
    transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -moz-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
  }

  .caption-style-4 .caption-text {
    position: relative;
    margin: auto;
    margin-top: 8px;
    height: 111px;
    z-index: 10;
    color: #000000;
    width: 81%;
    text-align: center;
    font-size: 18px;
  }
</style>
