import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
    render: h => h(App),
}).$mount('#app')