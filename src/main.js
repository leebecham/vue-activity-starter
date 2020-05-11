import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('uppercase', function (str) {
  if (str && typeof str == "string") {
    return str.toUpperCase();
  }
  return '';
})

Vue.filter('prettyTime', function (timeStamp) {
  if (!timeStamp) {
    return '';
  }

  return moment(timeStamp).format('LLL');
})

new Vue({
  render: h => h(App),
}).$mount('#app')
