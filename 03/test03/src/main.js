// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

/////////////////////////////axios_test开始////////////////////////
// //主体
// import App from './components/axios_test_app.vue';
// //引入
// import Axios from 'axios';
// Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
// //给Vue原型挂载一个属性
// Vue.prototype.$axios = Axios;
/////////////////////////////axios_test结束////////////////////////


/////////////////////////////axios_interceptors开始////////////////////////
// //主体
// import App from './components/axios_interceptors_app.vue';

// //引入
// import Axios from 'axios';

// Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

// //默认设置
// Axios.defaults.headers = {
//     accept: 'defaults'
// }

// //拦截器
// Axios.interceptors.request.use(function(config) {
//     //console.log(config);
//     //return false; //返回没有修改的设置,不return config 就是一个拦截
//     //个性化的修改
//     // config.headers.accept = 'interceptors';
//     config.headers = {
//         accept: 'interceptors'
//     }

//     return config;
// })

/////////////////////////////axios_interceptors结束////////////////////////



/////////////////////////////axios_loadding_app开始////////////////////////
// //主体
// import App from './components/axios_loadding_app.vue';

// //引入
// import Axios from 'axios';

// //引入mint-ui
// import Mint from 'mint-ui'; //  export default 整个对象
// // import { Indicator } from 'mint-ui'; //export 整个对象.Indicator -> {Indicator}
// //引入css
// import 'mint-ui/lib/style.css';
// //安装插件，注册一堆全局组件
// Vue.use(Mint);




// Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

// //默认设置
// Axios.defaults.headers = {
//     accept: 'defaults'
// }

// //拦截器
// Axios.interceptors.request.use(function(config) {
//     Mint.Indicator.open();
//     //请求发起之前  显示loadding
//     return config;
// })

// Axios.interceptors.response.use(function(config) {
//     //在响应回来之后，隐藏loadding
//     Mint.Indicator.close();
//     // console.log(config);
//     return config;
// })



// //给Vue原型挂载一个属性
// Vue.prototype.$axios = Axios;



/////////////////////////////axios_loadding_app结束////////////////////////



/////////////////////////////watch_app开始////////////////////////

// import App from './components/watch_app.vue';

/////////////////////////////watch_app结束////////////////////////


/////////////////////////////computed_app开始////////////////////////

import App from './components/computed_app.vue';

/////////////////////////////computed_app结束////////////////////////




import router from './router'
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
