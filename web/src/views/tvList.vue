<template>
<div>
    <div class="tv-lists" v-show="list.length>0">
        
        <v-tv-list 
           v-for="list in list" :key="list['tv_num']"
           :list="list"
           :url="url"
            v-tap="(e)=>goPlayer(list,e)"
        ></v-tv-list>
        
    </div>
    <div class="empty" v-show="list.length==0">
        没有查询到具体的列表，请切换其他电视剧!
    </div>
</div>
    
</template>
<script>
import {tvList} from "@/api/tv/index.js"
import TvList from "@/component/tvList"
export default {
    components:{
        "v-tv-list":TvList
    },
    data(){
        return {
           list:[],
           Loading:null,
           url:''

        }
    },
    methods:{
        getList:function(){
            this.Loading = this.$loading({
                overlayColor:'rgba(0,0,0,.2)', 
                        // 背景色
                size: 48,
                color: 'primary',                           // color
                className: '',
            
            });
            tvList({id:this.state["item_id"]}).then(res=>{
                 if(this.Loading){
                    this.Loading.close()
                }
                if(res.code==200){
                    console.log(res.data)
                     this.list = res.data
                }
                
            }).catch(err=>{
                if(this.Loading){
                    this.Loading.close()
                }
            })

        },
        goPlayer:function(info){
            this.url = info["tv_url"]
            this.state.tv_list_url = info["tv_url"]
            this.state.url = info["tv_url"]
            this.$router.push("/player")
        }
    },
    created:function(){
        this.url =  this.state.tv_list_url 
        this.getList()
    }
    
}
</script>
<style scoped>
.tv-lists{
    margin-top:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
   
}
.empty{
   text-align:center;
  
   background:rgb(146, 145, 145);
   color:#fff;
   padding:20px;
   display:inline-block;
   margin:0 auto; 
   margin-top:40px;
   border-radius: 8px;
}
</style>


