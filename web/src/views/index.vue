<template>
  <div>
    <div>
      <router-link to="/search">
        <search-btn title="搜索电影名称"></search-btn>
      </router-link>
    </div>
    <v-category ref="category" @getitem="getItem"></v-category>
    <mu-load-more  
    :loading="loading" 
    @load="loadMore" 
    :loaded-all="loadingAll"
    class="loadMore">
      <div class="movie-list">
        <div class="item"  v-for="item in movielist" :key="item['movie_title']">
          <movie-item :movieinfo="item" v-tap="(e)=>toPLayer(item,e)"></movie-item>
        </div>
      </div>   
    </mu-load-more>
    <v-tabs></v-tabs>
  </div>
</template>

<script>
import searchBtn from "../component/searchBtn.vue"
import movie_item from "../component/movieItem.vue"
import category from "../component/category.vue"
import Tabs from "../component/tab.vue"
import {movieCategory, movieItem} from "@/api/movie/index.js"
export default {
  name: 'HelloWorld',
  components:{
    'search-btn':searchBtn,
    'movie-item':movie_item,
    'v-category':category,
    'v-tabs':Tabs
  },
  data () {
    return {
      categoryList:{},
      movielist:[],
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
      movieItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        this.loading = false;
        if(res.code==200){
          this.movielist= [...this.movielist,...res.data];
          if(res.data && res.data.length < this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
        this.loading = false;
      })
      
      
    },
    getCategryList:function(){
       movieCategory({}).then(res=>{
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
      this.getMovieItem();

    },
    getMovieItem:function(){
      this.Loading = this.$loading({
        overlayColor:'rgba(0,0,0,.2)', 
                // 背景色
        size: 48,
        color: 'primary',                           // color
        className: '',
      
      });
      movieItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        if(this.Loading){
          this.Loading.close()
        }
        if(res.code==200){
          this.movielist = res.data;
          if(res.data && res.data.length<this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
        console.log(err)
        this.loading = false;
        if(this.Loading){
          this.Loading.close()
        }
        
      })
    },
    toPLayer:function(info,e){
      this.state.url = info["movie_url"];
      this.$router.push("/player")
    }
  },
  created:function(){
     this.state['active_tab'] = 0
     this.getCategryList();
     this.getMovieItem();
  }
}
</script>
<style scoped>

</style>

