<template>
  <div>
    <div>
      <router-link to="/search">
        <search-btn title="搜索电视剧名称"></search-btn>
      </router-link>
    </div>
    <tv-category ref="category" @getitem="getItem"></tv-category>
    <mu-load-more  
    :loading="loading" 
    @load="loadMore" 
    :loaded-all="loadingAll"
    class="loadMore">
      <div class="movie-list">
        <div class="item"  v-for="item in tvList" :key="item['tv_title']">
          <tv-item :tvinfo="item" v-tap="(e)=>toPLayer(item,e)"></tv-item>
        </div>
      </div>   
    </mu-load-more>
    <v-tabs></v-tabs>
  </div>
</template>

<script>
import searchBtn from "../component/searchBtn.vue"
import tv_item from "../component/tvItem.vue"
import category from "../component/tvCategory.vue"
import Tabs from "../component/tab.vue"
import {tvCategory, tvItem} from "@/api/tv/index.js"
export default {
  name: 'tv',
  components:{
    'search-btn':searchBtn,
    'tv-item':tv_item,
    'tv-category':category,
    'v-tabs':Tabs
  },
  data () {
    return {
      categoryList:{},
      tvList:[],
      loading:false,
      page:1,
      size:30,
      category:{},
      Loading:null,
      loadingAll:false
    }
  },
  methods:{
    loadMore() {
      this.loading = true;
      this.page+=1;
      tvItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        this.loading = false;
        if(res.code==200){
          this.tvList= [...this.tvList,...res.data];
          if(res.data && res.data.length < this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
          this.loading = false;
      })
      
      
    },
    getCategryList:function(){
       tvCategory({}).then(res=>{
         if(res.code==200){
            this.categoryList = res.data;
            this.$refs.category.$emit("category", res.data)
         }
      }).catch(err=>{
        this.loading = false;
      })
    },
    getItem:function(info){
      console.log(info)
      // 点击了查询的分类
      this.category=info;
      this.page = 1;
      this.getTvItem();

    },
    getTvItem:function(){
      this.Loading = this.$loading({
        overlayColor:'rgba(0,0,0,.2)', 
                // 背景色
        size: 48,
        color: 'primary',                           // color
        className: '',
      
      });
      tvItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        if(this.Loading){
          this.Loading.close()
        }
        if(res.code==200){
          this.tvList = res.data;
          if(res.data && res.data.length<this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
        this.loading = false;
         if(this.Loading){
          this.Loading.close()
        }
      })
    },
    toPLayer:function(info,e){
      //this.state.url = info["movie_url"];
      console.log(info)
      this.state["item_id"] = info.id
      this.$router.push("/tvlist")
    }
  },
  created:function(){
     this.state['active_tab'] = 1
     this.getCategryList();
     this.getTvItem();
  }
}
</script>
<style scoped>

</style>

