import Vue from 'vue';
import App from './App.vue'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

const app = new Vue(App);
app.$mount('#app');