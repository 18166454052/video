<template>
    <div class="container">
  
        <mu-form ref="form" :model="form" class="mu-demo-form">
            <mu-form-item label="用户名" help-text="建议使用手机或qq号码" 
            prop="name" :rules="usernameRules">
                <mu-text-field v-model="form.name"   prop="name" @input="validate"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="pass" :rules="passwordRules"
            >
                <mu-text-field type="password" v-model="form.pass" prop="pass" @input="validate"></mu-text-field>
            </mu-form-item>
            <!-- <mu-form-item  class="storage">
                <mu-checkbox label="记住密码" v-model="form.store"></mu-checkbox>
            </mu-form-item> -->
            <mu-form-item class="submit">
                <mu-button color="primary" round  @click="submit" :disabled="btnDisable">注册</mu-button>
            </mu-form-item>
            <mu-form-item  class="storage login">
                <router-link to="/login">已经有用户名？直接登录</router-link>
            </mu-form-item>
        </mu-form>
            
       
    </div>
</template>
<script>
import { registe } from "@/api/user/index.js"
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
                pass: ''
            },
            btnDisable:true,
            loading:null
            
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
                    registe(this.form).then(res=>{
                        if(this.loading){
                            this.loading.close();
                        }
                        if(res.code==200){
                            this.$toast.message("注册成功 ，直接登录");
                            this.$router.replace("/login")
                        }
                    }).catch(err=>{
                        if(this.loading){
                            this.loading.close();
                        }
                    })
                }
            });
        }
    },
    
}
</script>
<style scoped>
.container{
    height:1334px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:30px;
    background:#fff;
}
 .mu-form{
    width:600px;
}
</style>


