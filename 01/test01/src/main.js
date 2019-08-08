// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import App from './vue_devserver'
// import App from './common_directives'
// import App from './methods_on'

// import App from './for'
// import App from './pretty_list'
// import App from './SPA_component'


//////////////////////////全局组件测试////////////////////////////////////////////////
// import App from './global_component'
// //引入子组件对象
// import headerVue from './components/header_g.vue';
// import bodyVue from './components/body_g.vue';
// import footerVue from './components/footer_g.vue';
// //声明全局组件
// Vue.component('headerVue', headerVue); //注册一个组件，第一个参数是名称，在template中使用,第二个参数是实际的对象，显示成什么内容，具备什么功能
// Vue.component('bodyVue', bodyVue);
// Vue.component('footerVue', footerVue);

//////////////////////////全局组件测试完////////////////////////////////////////////////


//////////////////////////vue_connect测试////////////////////////////////////////////////

import App from './vue_connect'
import sub from './components/sub.vue';
Vue.component('subVue', sub);
//////////////////////////vue_connect测试完////////////////////////////////////////////////




import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
