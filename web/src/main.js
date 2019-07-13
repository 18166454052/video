// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import vueTouch from 'kim-vue-touch'
import {state} from "@/store/state.js"
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import { LoadMore, ExpansionPanel,Button, Form, TextField, Icon, 
  Snackbar, Checkbox, Progress, Tabs} from 'muse-ui';
import Helpers from 'muse-ui/lib/Helpers';
import VueLazyLoad from 'vue-lazyload'
import 'muse-ui-message/dist/muse-ui-message.css';
import Toast from 'muse-ui-toast';
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';
Vue.use(Loading);
Vue.use(Helpers);
Vue.use(Toast,{
  position: 'top',               // position
  time: 2000,                       // show time length
  //closeIcon: 'close',               // close icon
  close: false,                      // show close button
  //successIcon: 'check_circle',      // success icon
  //infoIcon: 'info',                 // info icon
  //warningIcon: 'priority_high',     // warning icon
  //errorIcon: 'warning' 
})
Vue.use(VueLazyLoad,{
    //error:'./static/error.png',
    //loading:'./static/loading.png'
})
Vue.use(vueTouch)
Vue.use(LoadMore)
Vue.use(Button)
Vue.use(ExpansionPanel)
Vue.use(Form)
Vue.use(TextField)
Vue.use(Icon)
Vue.use(Snackbar)
Vue.use(Checkbox)
Vue.use(Progress)
Vue.use(Tabs)
Vue.prototype.state = state
Vue.config.productionTip = false
import "@/assets/css/index.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
