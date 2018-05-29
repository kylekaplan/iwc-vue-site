<template>
  <div class="us" id="us">
    <h2>What We Believe</h2>
    <p class="subline">
      At Ideas Worth Coding we turn dreams into reality. We love what we do and we think you should feel the same way too. Have a light-bulb moment you think is a great idea?
      We'll bring it to life. Our team consists of bright individuals who think different which we think is key to success. Creativity and innovation are at the center of what we do,
      and clients can be sure that their best interests will always be placed first.
    </p>
    <!--<img src="/static/img/cliff1.png"/>-->
  </div>
</template>

<script>
  export default {
    name: "about-us"
  }
</script>

<style scoped>
  .us {
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    transition-delay: 0.1s;
  }
  .us {
    /*color: #514753;*/
    color: whitesmoke;
    opacity: 0;
    -webkit-transform: translateY(150px);
    transform: translateY(150px);
    font-size: 30px;
    line-height: 41px;
    position: relative;
    padding-bottom: 100px;
    /*top: 53vh;*/
    /*bottom: -183px;*/
    margin-top: -120px;
    /*margin-bottom: 70px;*/
    /*text-align: center;*/
    will-change: transform;
  }

  .us.modify {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .us p {
    /*float: left;*/
    width: 80%;
    margin-left: 10%;
  }
  .us h2 {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 43px;
    text-align: center;
  }
  /*.us img {*/
    /*float: right;*/
    /*position: absolute;*/
    /*width: 27%;*/
    /*padding: 0;*/
    /*top: -25%;*/
    /*right: 0;*/
    /*!* bottom: 0; *!*/
  /*}*/
</style>
