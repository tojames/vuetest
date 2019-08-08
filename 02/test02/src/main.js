// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'


//#####################filter开始###################
// import App from './filter'
// //创建全局过滤器
// Vue.filter('myFilter', function(value) {
//     return '我是全局过滤器';
// });
//#####################filter 结束###################

// import App from './refs_dom'


//#####################mint_ui开始###################

// import App from './mint_ui'
// //引入mint-ui
// import MintUi from 'mint-ui';
// //引入样式
// import 'mint-ui/lib/style.css';
// Vue.use(MintUi);

//#####################mint_ui结束###################




//#####################vue router开始###################

// //引入一堆
// // import Vue from 'vue';
// import VueRouter from 'vue-router';

// //主体
// import App from './components/vue_router_start_app.vue';
// import Home from './components/vue_router_start_home.vue'

// //安装插件
// Vue.use(VueRouter); //挂载属性

// //关闭下面的 import router from './router'
// //创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [
//         //一个个对象
//         { path: '/home', component: Home }

//     ]
// });



//#####################vue router结束###################


//#####################SPA params开始###################

// import VueRouter from 'vue-router';

// //主体
// import App from './components/app.vue';
// //路由切换页面
// import List from './components/list.vue'
// import Detail from './components/detail.vue'

// //安装插件
// Vue.use(VueRouter); //挂载属性

// //关闭下面的 import router from './router'
// //创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [
//         //一个个对象
//         { name: 'list', path: '/list', component: List },
//         //以下规则匹配  /detail? xxx = xx & xxx = xxx 多少个查询字符串都不影响
//         //查询字符串path不用改
//         { name: 'detail', path: '/detail', component: Detail },
//         //
//         //  {name:'detail',params:{id:index}  } -> /detail/12
//         { name: 'detail', path: '/detail/:id', component: Detail }

//     ]
// });


//#####################SPA params结束###################



//#####################SPA base开始###################
// import VueRouter from 'vue-router';

// //主体
// import App from './components/SPA_base_app.vue';
// //路由切换页面
// import Music from './components/music.vue'
// import Movie from './components/movie.vue'

// //安装插件
// Vue.use(VueRouter); //挂载属性

// //创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [
//         //一个个对象
//         { name: 'music', path: '/music1', component: Music },
//         { path: '/movie', component: Movie }

//     ]
// });
//#####################SPA base结束###################


//#####################programming_nav开始###################

// import VueRouter from 'vue-router';

// //主体
// import App from './components/programming_nav_app.vue';
// //路由切换页面
// import Music from './components/programming_nav_music.vue'
// import Movie from './components/programming_nav_movie.vue'

// //安装插件
// Vue.use(VueRouter); //挂载属性

// //创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [
//         //一个个对象
//         { name: 'music', path: '/music', component: Music },
//         { name: 'movie', path: '/movie', component: Movie }

//     ]
// });
//#####################programming_nav结束###################


//#####################404_redirect开始###################

// import VueRouter from 'vue-router';

// //引入
// import App from './404_redirect_app.vue';

// //引入notFoundVue
// import NotFound from './notFound.vue';
// import Home from './home.vue';
// //引入home


// //安装插件
// Vue.use(VueRouter);

// //创建路由对象配置路由规则
// let router = new VueRouter();
// router.addRoutes([
//     //重定向
//     // { path: '/', redirect: '/home' },
//     // { path: '/home', component: Home }
//     { path: '/', redirect: { name: 'home' } },
//     { name: 'home', path: '/home', component: Home },
//     // 最终无法匹配 -> 404
//     { path: '*', component: NotFound }

// ]);

//#####################404_redirect结束###################




//#####################multi_views开始###################
// import VueRouter from 'vue-router';

// //主体
// import App from './components/multi_views_app.vue';
// //路由切换页面
// import header from './components/header.vue'
// import footer from './components/footer.vue'



// //注册全局头组件
// // Vue.component('headerVue', header);
// // Vue.component('footerVue', footer);
// //注册全局底部组件

// //安装插件
// Vue.use(VueRouter); //挂载属性

// //创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [{
//             path: '/',
//             components: {
//                 header: footer,
//                 default: header,
//                 footer: footer
//             }
//         }

//     ]
// });

//#####################multi_views结束###################




//#####################nest_router开始###################

// import VueRouter from 'vue-router';

// //主体
// import App from './components/nest_router_app.vue';
// //路由切换页面
// import header from './components/nest_router_header.vue'
// import footer from './components/nest_router_footer.vue'
// import Music from './components/nest_router_music.vue'
// import Oumei from './components/oumei.vue'
// import Guochan from './components/guochan.vue'

// //注册全局组件
// Vue.component('headerVue', header);
// Vue.component('footerVue', footer);



// //安装插件
// Vue.use(VueRouter); //挂载属性

// //创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [{
//             path: '/',
//             redirect: { name: 'music' },
//         },
//         {
//             name: 'music',
//             path: '/music',
//             component: Music,
//             children: [

//                 //-> 这里很灵活，如果你写上/xxx  就是绝对路径， /oumei
//                 //如果你不写/  ,那么就是相对路径 /music/oumei
//                 { name: 'music_oumei', path: 'oumei', component: Oumei },
//                 //标识一下，当前路由之间的关系，格式不是必须的
//                 { name: 'music_guochan', path: 'guochan', component: Guochan }
//             ]
//         }

//     ]
// });



//#####################nest_router结束###################





//#####################vue_resource开始###################
// //主体
// import App from './components/vue_resource_app.vue';

// //引入
// import VueResource from 'vue-resource';
// //安装插件
// Vue.use(VueResource); //插件都是挂载属性
// //未来通过this.$http
// //  Vue是 所有实例对象的构造函数
// //  Vue.protptype.$http ->   实例(this)就可以.$http

//#####################vue_resource结束###################



//#####################axios_test开始###################

//主体
import App from './components/axios_test_app.vue';

//引入
import Axios from 'axios';

Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';


//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;

import router from './router'


//#####################axios_test结束###################


// import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
