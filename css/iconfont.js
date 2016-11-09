;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 20C240.288 20 20.032 240.288 20.032 512S240.288 1003.968 512 1003.968c271.712 0 492-220.256 492-491.968S783.712 20 512 20zM368.288 476.416c31.712-43.072 74.816-68.032 102.016-74.816 0 0 42.464-20.384 73.376-22.656 30.912-2.272 67.168-6.816 67.168-6.816l-49.92-58.944L560.928 292.768l27.232-22.656 156.48 133.76 0 13.6-22.656 22.656-133.824 113.344c0 0-49.888-9.056-24.896-40.8 24.896-31.744 45.312-52.16 45.312-52.16s-70.24-13.6-111.072 2.24c-40.8 15.904-97.504 47.616-108.832 90.688-11.328 43.072-11.328 43.072-11.328 43.072l-15.872 20.448-18.144-11.328 0-22.656C343.328 583.008 336.544 519.488 368.288 476.416zM749.472 709.984l-411.52 0 0-44.256 365.568 0 0-91.808 45.952 0L749.472 709.984z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M895.778198 862.286921c0 18.531052-15.023158 33.55421-33.55421 33.55421L161.35441 895.841132c-18.531052 0-33.55421-15.023158-33.55421-33.55421l0 0c0-18.531052 15.023158-33.55421 33.55421-33.55421l700.869578 0C880.756063 828.732711 895.778198 843.75587 895.778198 862.286921L895.778198 862.286921z"  ></path>'+
      ''+
      '<path d="M511.715009 767.665891c-18.531052 0-33.55421-15.023158-33.55421-33.55421L478.160799 161.974022c0-18.532075 15.023158-33.55421 33.55421-33.55421l0 0c18.531052 0 33.55421 15.023158 33.55421 33.55421l0 572.137659C545.269219 752.642732 530.246061 767.665891 511.715009 767.665891L511.715009 767.665891z"  ></path>'+
      ''+
      '<path d="M535.441387 757.620094c-13.103436 13.103436-34.349319 13.103436-47.452755 0L236.159116 505.790578c-13.103436-13.103436-13.103436-34.349319 0-47.452755l0 0c13.103436-13.103436 34.349319-13.103436 47.452755 0l251.829516 251.829516C548.544823 723.270774 548.544823 744.515634 535.441387 757.620094L535.441387 757.620094z"  ></path>'+
      ''+
      '<path d="M487.988632 757.61907c-13.103436-13.103436-13.103436-34.349319 0-47.452755l251.829516-251.829516c13.103436-13.103436 34.349319-13.103436 47.452755 0l0 0c13.103436 13.103436 13.103436 34.349319 0 47.452755L535.441387 757.620094C522.336928 770.723529 501.092068 770.723529 487.988632 757.61907L487.988632 757.61907z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontxia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M541.379584 746.404864l406.918144-406.920192c16.900096-16.897024 16.900096-44.296192 0-61.195264-16.899072-16.900096-44.296192-16.900096-61.195264 0L510.780416 654.611456 137.549824 281.377792c-16.90112-16.898048-44.29824-16.899072-61.197312 0-16.898048 16.899072-16.900096 44.29824 0 61.197312l400.47616 400.47616c0.5632 0.5632 1.139712 1.103872 1.724416 1.629184 0.526336 0.585728 1.065984 1.163264 1.630208 1.72544C497.081344 763.303936 524.480512 763.303936 541.379584 746.404864z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zanting" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M186.181818 46.660034C186.181818 20.890409 206.841708 0 232.727273 0 258.433617 0 279.272727 20.454788 279.272727 46.660034L279.272727 977.339965C279.272727 1003.10959 258.612837 1024 232.727273 1024 207.020928 1024 186.181818 1003.545214 186.181818 977.339965L186.181818 46.660034ZM744.727273 46.660034C744.727273 20.890409 765.387162 0 791.272727 0 816.97907 0 837.818182 20.454788 837.818182 46.660034L837.818182 977.339965C837.818182 1003.10959 817.158293 1024 791.272727 1024 765.566385 1024 744.727273 1003.545214 744.727273 977.339965L744.727273 46.660034Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-asmkticon0242" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M819.2 547.2c51.2-44.8 81.92-112 76.16-186.24-8.32-110.72-99.2-199.68-209.92-206.08-67.84-3.84-129.92 26.24-173.44 70.4-43.52-44.16-105.6-74.88-173.44-70.4-110.72 6.4-201.6 95.36-209.92 206.08C122.88 435.2 153.6 503.04 204.8 547.2l263.04 295.68 0 0c10.24 13.44 26.24 25.6 44.16 25.6 17.92 0 34.56-12.8 44.16-26.24l0 0L819.2 547.2z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenxiang1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M783.206 602.401c-49.38 0-92.785 24.072-120.27 60.738l-218.001-102.555c4.326-15.478 6.799-31.724 6.799-48.585s-2.472-33.107-6.799-48.585l218.001-102.555c27.485 36.666 70.892 60.738 120.27 60.738 83.221 0 150.669-67.449 150.669-150.669s-67.449-150.669-150.669-150.669-150.669 67.449-150.669 150.669c0 12.272 1.883 24.013 4.62 35.431l-217.823 102.495c-32.664-46.908-86.9-77.66-148.403-77.66-99.877 0-180.804 80.926-180.804 180.804s80.926 180.804 180.804 180.804c61.503 0 115.739-30.751 148.403-77.66l217.823 102.495c-2.736 11.418-4.62 23.159-4.62 35.431 0 83.221 67.449 150.669 150.669 150.669s150.669-67.449 150.669-150.669-67.449-150.669-150.669-150.669zM783.206 180.526c49.851 0 90.401 40.551 90.401 90.401s-40.551 90.401-90.401 90.401-90.401-40.551-90.401-90.401 40.551-90.401 90.401-90.401zM270.929 632.536c-66.449 0-120.536-54.087-120.536-120.536s54.087-120.536 120.536-120.536 120.536 54.087 120.536 120.536-54.087 120.536-120.536 120.536zM783.206 843.474c-49.851 0-90.401-40.551-90.401-90.401s40.551-90.401 90.401-90.401 90.401 40.551 90.401 90.401-40.551 90.401-90.401 90.401z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ai10" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M860.340081 157.39268l-499.349889 352.461447 499.349889 352.416422L860.340081 157.39268zM272.949021 157.39268l-117.523647 0 0 704.877869 117.523647 0L272.949021 157.39268z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-kaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M771.413333 454.186667c25.386667 15.36 39.466667 39.893333 39.466667 68.906667s-14.08 53.546667-39.466667 68.906667L341.76 851.413333c-26.666667 16-57.813333 16.853333-85.333333 2.133333-27.52-14.72-43.306667-40.533333-43.306667-71.04L213.12 263.893333c0-30.293333 15.786667-56.32 43.306667-71.04 27.52-14.72 58.666667-13.866667 85.333333 2.133333L771.413333 454.186667z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-next" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M206.325 866.607l499.35-352.461-499.35-352.416v704.878zM793.718 866.607h117.524v-704.878h-117.524v704.878z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)