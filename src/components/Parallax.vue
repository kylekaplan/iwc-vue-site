<template>
  <!--<v-parallax src="/static/img/background1.jpg" jumbotron class="parallax-window">-->
    <!--<v-layout column align-center justify-center>-->
      <!--<h1 class="myTitle">Ideas Worth Coding</h1>-->
      <!--<h4 class="mySubTitle">Turn your idea into a reality!</h4>-->
    <!--</v-layout>-->
  <!--</v-parallax>-->

  <!--from: https://tympanus.net/Development/ArticleIntroEffects/index2.html-->
  <!--style="-->
  <!--min-height: 101vh;-->
  <!--background: transparent;-->
  <!--height: 600px;-->
  <!--"-->
  <div class="screen-height-wrapper">
    <header class="header">
      <div class="bg-img"><img src="http://localhost:8080/static/img/background1.jpg" alt="Background Image"></div>
      <div class="title">
        <nav class="codrops-demos" style="
      display: none;
  ">
          <a href="index.html">Push</a>
          <a class="current-demo" href="index2.html">Fade Out</a>
          <a href="index3.html">Sliced</a>
          <a href="index4.html">Side</a>
          <a href="index5.html">Fixed Side</a>
          <a href="index6.html">Grid</a>
          <a href="index7.html">Jam 3</a>
        </nav>
        <h1 class="myHeader">Ideas Worth Coding</h1>
        <p>Building Dreams</p>
        <p class="subline" style="
       display: none;
  ">Our Work</p>
      </div>
    </header>
  </div>
</template>


<script>
  import Parallax from 'vue-parallaxy'
  export default {
    data: () => ({
      // ......data of your component
    }),
    mounted() {
      // probably should have imported this
      (function (window) {

        'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
          return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
          hasClass = function (elem, c) {
            return elem.classList.contains(c);
          };
          addClass = function (elem, c) {
            elem.classList.add(c);
          };
          removeClass = function (elem, c) {
            elem.classList.remove(c);
          };
        }
        else {
          hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
          };
          addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
              elem.className = elem.className + ' ' + c;
            }
          };
          removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
          };
        }

        function toggleClass(elem, c) {
          var fn = hasClass(elem, c) ? removeClass : addClass;
          fn(elem, c);
        }

        var classie = {
          // full names
          hasClass: hasClass,
          addClass: addClass,
          removeClass: removeClass,
          toggleClass: toggleClass,
          // short names
          has: hasClass,
          add: addClass,
          remove: removeClass,
          toggle: toggleClass
        };

// transport
        if (typeof define === 'function' && define.amd) {
          // AMD
          define(classie);
        } else if (typeof exports === 'object') {
          // CommonJS
          module.exports = classie;
        } else {
          // browser global
          window.classie = classie;
        }

      })(window);
      // end probably should import
      (function () {

          // detect if IE : from http://stackoverflow.com/a/16657946
          var ie = (function () {
          var undef, rv = -1; // Return value assumes failure.
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf('MSIE ');
          var trident = ua.indexOf('Trident/');

          if (msie > 0) {
            // IE 10 or older => return version number
            rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
          } else if (trident > 0) {
            // IE 11 (or newer) => return version number
            var rvNum = ua.indexOf('rv:');
            rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
          }

          return ((rv > -1) ? rv : undef);
        }());


        // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = [32, 37, 38, 39, 40], wheelIter = 0;

        // I don't want to disable the keyboard down
        // function preventDefault(e) {
        //   e = e || window.event;
        //   if (e.preventDefault)
        //     e.preventDefault();
        //   e.returnValue = false;
        // }
        //
        // function keydown(e) {
        //   for (var i = keys.length; i--;) {
        //     if (e.keyCode === keys[i]) {
        //       preventDefault(e);
        //       return;
        //     }
        //   }
        // }
        //
        // function touchmove(e) {
        //   preventDefault(e);
        // }
        //
        // function wheel(e) {
        //   // for IE
        //   if( ie ) {
        //   preventDefault(e);
        //   }
        // }
        //
        // function disable_scroll() {
        //   window.onmousewheel = document.onmousewheel = wheel;
        //   document.onkeydown = keydown;
        //   document.body.ontouchmove = touchmove;
        // }
        //
        // function enable_scroll() {
        //   window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
        // }

        var docElem = window.document.documentElement,
          scrollVal,
          isRevealed,
          // noscroll,
          isAnimating,
          container = document.getElementById('container');

        // trigger = container.querySelector( 'button.trigger' );

        function scrollY() {
          return window.pageYOffset || docElem.scrollTop;
        }

        function scrollPage() {
          scrollVal = scrollY();

          // if (noscroll && !ie) {
          //   if (scrollVal < 0) return false;
          //   // keep it that way
          //   window.scrollTo(0, 0);
          // }

          if (classie.has(container, 'notrans')) {
            classie.remove(container, 'notrans');
            return false;
          }

          if (isAnimating) {
            return false;
          }

          if (scrollVal <= 0 && isRevealed) {
            toggle(0);
          }
          else if (scrollVal > 0 && !isRevealed) {
            toggle(1);
          }
        }

        function toggle(reveal) {
          isAnimating = true;

          if (reveal) {
            classie.add(container, 'modify');
          }
          else {
            // noscroll = true;
            // disable_scroll();
            classie.remove(container, 'modify');
          }

          // simulating the end of the transition:
          setTimeout(function () {
            isRevealed = !isRevealed;
            isAnimating = false;
            // if (reveal) {
            //   // noscroll = false;
            //   // enable_scroll();
            // }
          }, 600);
        }

        // refreshing the page...
        var pageScroll = scrollY();
        // noscroll = pageScroll === 0;

        // disable_scroll();

        if (pageScroll) {
          isRevealed = true;
          classie.add(container, 'notrans');
          classie.add(container, 'modify');
        }

        window.addEventListener('scroll', scrollPage);
        // trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );
      })();
    }
  }

</script>

<!--was scoped-->
<style>
  /*.parallax-window {*/
    /*min-height: 101vh;*/
    /*background: transparent;*/
  /*}*/
  /*.myTitle {*/
    /*font-size: 46px;*/
  /*}*/
  /*.mySubTitle {*/
    /*font-size: 17px;*/
  /*}*/
  .myHeader {
    color: white;
    font-size: 67px;
  }
  .subline {
    position: relative;
    bottom: -183px;
    font-size: 32px;
  }
  .bg-img img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    min-width: 100%;
    min-height: 100%;
    height: 101vh;
  }

  /*for the cool effect*/
  .bg-img {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .intro-effect-fadeout .bg-img::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 101%;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }
  .title {
    z-index: 1000;
    margin: 0 auto;
    padding: 0 1.25em;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-40%);
    transform: translateX(-50%) translateY(-40%);
  }

  /*.header {*/
    /*position: relative;*/
    /*margin: 0 auto;*/
    /*min-height: 560px;*/
    /*width: 100%;*/
  /*}*/
  .screen-height-wrapper {
    min-height: 280px;
    height: 60vh;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 101vh;
    margin: 0 auto;
    min-height: 560px;
    width: 100%;
  }

  /*.container, .header {*/
    /*height: 100%;*/
  /*}*/


  .intro-effect-fadeout:not(.notrans) .bg-img {
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
  }

  .intro-effect-fadeout:not(.notrans) .bg-img::after {
    -webkit-transition-property: opacity;
    transition-property: opacity;
  }

  .intro-effect-fadeout:not(.notrans) .header h1 {
    -webkit-transition-property: color;
    transition-property: color;
  }

  .intro-effect-fadeout:not(.notrans) .header p {
    -webkit-transition-property: -webkit-transform, opacity;
    transition-property: transform, opacity;
  }

  .intro-effect-fadeout:not(.notrans) .bg-img,
  .intro-effect-fadeout:not(.notrans) .bg-img::after,
  .intro-effect-fadeout:not(.notrans) .header h1,
  .intro-effect-fadeout:not(.notrans) .header p,
  .intro-effect-fadeout:not(.notrans) .title {
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }

  .intro-effect-fadeout.modify .title {
    -webkit-transform: translateX(-50%) translateY(-125%);
    transform: translateX(-50%) translateY(-125%);
  }

  .intro-effect-fadeout .header {
    overflow: hidden;
  }

  .intro-effect-fadeout.modify .bg-img {
    -webkit-transform: translateY(-25%);
    transform: translateY(-25%);
  }

  .intro-effect-fadeout .bg-img::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 101%;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    /*background: -webkit-linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 33%, rgba(255,255,255,0.1) 34%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,1) 100%);*/
    /*background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 33%, rgba(255,255,255,0.1) 34%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,1) 100%);*/
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }

  .intro-effect-fadeout.modify .bg-img::after {
    opacity: 1;
  }

  .intro-effect-fadeout .title {
    text-align: left;
    max-width: 900px;
  }

  .intro-effect-fadeout.modify .header h1,
  .intro-effect-fadeout .header p {
    color: #514753;
  }

  .intro-effect-fadeout .header p:nth-child(3) {
    opacity: 1;
    /*color: white;*/
    color: #514753;
  }
  .intro-effect-fadeout.modify .header p:nth-child(3) {
    color: #514753;
  }

  .intro-effect-fadeout .header p:nth-child(3) {
    opacity: 0;
    -webkit-transform: translateX(-150px);
    transform: translateX(-150px);
    font-size: 26px;
    /*margin-top: 60px;*/
    /*margin-bottom: 70px;*/
    /*text-align: center;*/
    will-change: transform;
  }

  .intro-effect-fadeout.modify .header p:nth-child(3) {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
</style>
