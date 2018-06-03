<template>
  <div class="us" id="us">
    <h2>WHAT WE BELIEVE</h2>
    <p class="subline">
      At Ideas Worth Coding, we don't just make apps and websites. Our core values are rooted in creativity, adventure, and innovation. We wake up everyday excited to transform
      big ideas into beautiful, simple designs. We honor those who think outside the box and believe that new frontiers are waiting to be discovered, with our team at the helm of it.
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
  @media only screen and (max-width: 740px) {
    .subline {
      font-size: 20px;
      line-height: 30px;
    }
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
