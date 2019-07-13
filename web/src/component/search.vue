<template>
    <div class="search-container">
       <div class="search">
        <form class="form" >
            <input v-model="value" v-focus="true" class="input"  placeholder="输入电影名称" />
        </form>   
           
       </div>
       <div class="btn" v-tap="(e)=>search(e)">
            搜索
       </div>
    </div>
</template>
<script>
export default {
    directives: {	    
        focus: {	       
            inserted:function (el, {value}) {	 
                if (value) {	               
                    el.focus();	           
                }	       
            }	   
        }	
    },
    data(){
        return{
            value:"",
            page:1,
            size:30
        }
    },
    methods:{
        search:function(e){
            if(!this.value.trim()){
                console.log("111111")
                this.$toast.message('搜索内容不能为空');
            }
            else{
                this.page = 1;// 搜索内容不一致  重新从第一页开始
                // 调接口搜索
                let data={
                    search:this.value,
                    page:this.page,
                    size:this.size
                };
                this.$emit("search",data)
            }
           
           
        }
    }
}

</script>
<style scoped>
.search-container {
   height:102px;
   box-sizing:border-box;
   padding:15px 28px;
   background:#fff;
   display:flex;
   justify-content: flex-start;
}

.search{
    height:72px;
    background:#fff;
    font-size:24px;
    line-height: 72px;
    color:#999;
    flex:1 1 600px;
}
.search .form{
    height:100%;
}
.search .form .input{
    box-sizing: border-box;
    width:100%;
    height:100%;
    outline-width: 0;
    border:none;
    padding:0 10px;
    color:#666;
    background-color: #f8f8f8;
}
.btn{
    flex:0 0 112px;
    line-height:72px;
    color:#fff;
    font-weight:600;
    font-size:28px;
    display:flex;
    justify-content: center;
    background:teal /*#0af*/
}

</style>


