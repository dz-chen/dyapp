import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/iconfont/iconfont.css'   //字体图标
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播插件

import 'swiper/swiper-bundle.css'
import 'video.js/dist/video-js.css'       //视频播放器样式
import 'vue-video-player/src/custom-theme.css'

import Toast from  './components/toast/toast.js' //自定弹窗
Vue.prototype.$toast=Toast



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)                 //注册插件
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
