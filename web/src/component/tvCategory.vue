<template>
    
 <div>
        <mu-expansion-panel>
            <div slot="header" class="category-all">
                <div class="title">查看所有分类</div>
            </div>
            <div class="category-box">
                <div class="category-list" v-for="(val,key) in categoryList" :key="key">
                    <div class="label">
                        <div>{{val[0]["label"]}}</div>
                    </div>
                    <div class="wrapper"  ref="wrapper">
                        <ul class="list" ref="list">
                            <div class="itembox" v-for="item in val" :key="item['key_val']" >
                                <div :class="{'current':item['key_val'] == select[item['key']]}"
                                    v-tap="(e)=>categoryTouch(item,e)" 
                                >
                                    {{item["name"]}}
                                
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                
            </div>
        </mu-expansion-panel>
     </div>
</template>
<script>

import BScroll from "better-scroll";
export default {
    data(){
        return {
            picScroll:false,
            categoryList:{},
            select:{
               feature:-1,
               iarea:-1,
               year:-1,
               pay:-1
            }
        }
    },
     mounted() {
    //等到內容將div撑开之后，在对better-scroll的实例初始化
        //初始化的时机很重要
        this.$on('category',res=>{
               
                this.categoryList=res;
                
                this.$nextTick(() => {
                    this._initPics(); //商家实景的横向滚动
                });
        })
       
    },
    watch: {
        categoryList() {
        this.$nextTick(() => {
            this._initPics();
        });
        }
    },
    methods: {
        _initPics() {
         let wrapper = this.$refs.wrapper;
         this.$nextTick(() => {
            if (!this.picScroll) {
                for(let i=0;i<wrapper.length;i++ ){
                    this['picScroll'+i]= new BScroll(wrapper[i], {
                    scrollX: true,
                    eventPassthrough: "vertical" //忽略竖直方向的滚动
                    });
                }
                
            } else {
                 for(let i=0;i<wrapper.length;i++ ){
                     this['picScroll'+i].refresh();
                }
               
            }
            });
       
        },
        categoryTouch:function(info){
           this.select[info['key']] = info['key_val']
           this.$emit("getitem",this.select)
        }
    }
}
</script>
<style scoped>
.category-list{
    display:flex;
    align-items: center;
}
.label{
   flex:0 0 130px;
   display: flex;
   justify-content: left;
   font-size:28px;

}
.label>div{
   flex:0 0 100px;
   border-radius: 16px 0 16px 16px;
   background-color: #7f7f8b;
   color: #fff;
}  
.wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap; /*当子元素超过父元素宽度的时候，不会折行*/
}
.list {
      
    flex:1 1 600px;
    background-color: #fff;
    padding-left:0px;
    margin:12px 0px;
}
.itembox {
        display:inline-block;
        padding: 0 16px;
        line-height: 30px;
        font-family:PingFangSC-Regular;
        font-size: 28px;
        color:#333 !important;
 }
.current{
    color: #ff5c38;
    font-weight: 700;
}
.title{
    font-size:24px;
    margin:15px 0;
}
  
</style>


