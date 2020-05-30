/*
 * @Author: WH
 * @Date: 2020-05-18 14:31:18
 * @LastEditors: WH
 * @LastEditTime: 2020-05-25 16:55:24
 * @Description: file content
 * @FilePath: \deao_platform\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import "@utils/flexible.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// es6 兼容es5
import 'babel-polyfill';
import promise from 'es6-promise';
promise.polyfill();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')