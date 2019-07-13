<template>
    <div class="container">
  
        <mu-form ref="form" :model="form" class="mu-demo-form">
            <mu-form-item label="用户名"
            prop="name" :rules="usernameRules">
                <mu-text-field v-model="form.name"   prop="name" @input="validate"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="pass" :rules="passwordRules">
                <mu-text-field type="password" v-model="form.pass" prop="pass" @input="validate"></mu-text-field>
            </mu-form-item>
            <mu-form-item  class="storage">
                <mu-checkbox label="记住密码" v-model="form.store"></mu-checkbox>
            </mu-form-item>
            <mu-form-item class="submit">
                <mu-button color="primary" round  @click="submit" :disabled="btnDisable">登录</mu-button>
            </mu-form-item>
        </mu-form>
            
       
    </div>
</template>
<script>
import { login } from "@/api/user/index.js"
import Cookies from 'js-cookie'
export default {
    data(){
        return {
            usernameRules: [
                { validate: (val) => !!val, message: '必须填写用户名'},
                { validate: (val) => val.length >= 6, message: '用户名最小长度为6'}
            ],
            passwordRules: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 6 , message: '密码最小长度为6'}
            ],
            form: {
                name: '',
                pass: '',
                store: true
            },
            btnDisable:true,
            loading:false
            
        }
    },
    methods: {
        validate (val) {
            this.$refs.form.validate().then(res=>{
                if(res){
                    this.btnDisable = false
                }
                else{
                    this.btnDisable = true
                }
            })
        },
        submit () {
             this.$refs.form.validate().then(res => {
                if(res){
                     this.loading = this.$loading({
                        overlayColor:'rgba(0,0,0,.2)', 
                               // 背景色
                        size: 48,
                        color: 'primary',                           // color
                        className: '',
                      
                     });
                    login(this.form).then(res=>{
                        if(this.loading){
                            this.loading.close();
                        }
                        
                        if(res.code==200){
                            // 存储 cookie
                          
                            Cookies.set('name', res.data.name, {
                               expires: 365  // tian 
                            })
                            Cookies.set('vplayer' , res.data.token, {
                               expires: 365  // tian 
                            })
                           
                            //
                            this.$toast.message("登录成功");
                            this.$router.replace("/") // movie

                        }
                        
                    }).catch(err=>{
                        if(this.loading){
                            this.loading.close();
                        }
                    })
                }
            });
        }
  }
}
</script>
<style scoped>


</style>


