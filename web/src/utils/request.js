import axios from 'axios'
import Vue from "vue"
import Cookies from 'js-cookie'
import router from '../router'
import Toast from 'muse-ui-toast';
Vue.use(Toast,{
  position: 'top',               // position
  time: 2000,                       // show time length
  close: false,          
})
// create an axios instance
const service = axios.create({
  baseURL: "http://127.0.0.1:7001/", // api的base_url
  timeout: 3600000, // request timeout
  widthCredentials: false  // 设置 withCredentials 使请求带上 `cookies`
 
})

// request interceptor
service.interceptors.request.use(config => {
  const token = Cookies.get("vplayer");
  const name = Cookies.get("name");
  const url = config.url;
   console.log(url)
  if(url == 'login' || url == 'registe'){
     return config
  }
  else{
    if(!name || !token || !name.trim() ||  !token.trim()){
      Toast.message("登录信息已经失效");
      router.replace("/registe") // movie
      return 
    }else{
      config.headers['token'] = token
      config.headers['name'] =  name
      return config
    }
  }
  
 
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
   
    let RES = response.data;
   
    if(RES.code == 403) {
      Toast.message("登录信息已经失效");
      router.push('/login')
      // location.reload()
      return Promise.reject(RES)
    } else if(RES.code !== 200) {
      console.log("----错误----")
       Toast.message(RES.msg);
       return Promise.reject(RES)
    }
    else{
      return RES
    }

  },
  error => {
    Toast.message("服务器发生未知错误");
    return Promise.reject({
      code:400,
      msg:error.message
    })
  })

export default service
