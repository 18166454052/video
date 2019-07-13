<template>
    <div>
        <v-search @search="searchMovie"></v-search>
        <mu-load-more  :loading="loading" @load="loadMore">
            <div class="movie-list">
                <div class="item"  v-for="item in movielist" :key="item['movie_title']">
                <movie-item :movieinfo="item" v-tap="(e)=>toPLayer(item,e)"></movie-item>
                </div>
            </div>   
        </mu-load-more>

       
    </div>
</template>
<script>
import Search from "@/component/search.vue"
import {movieSearch} from "@/api/movie/index.js"
import movie_item from "../component/movieItem.vue"
export default {
    components:{
        'v-search':Search,
        'movie-item':movie_item,
    },
    data(){
        return {
            movielist:[],
            toastInstanse:null,
            search:{},
            loading:false,
            Loading:null
        }
    },
    methods:{
        loadMore:function() {
            this.loading = true;
            this.search['page'] += 1;
            movieSearch(this.search).then(res=>{
                this.loading = false;
                if(res.code==200){
                    this.movielist=[...this.movielist,...res.data];
                }
                else{
                    this.$toast.message(res.msg);
                }
            })
        },
        toPLayer:function(info,e){
            this.state.url = info["movie_url"];
            this.$router.push("/player")
        },
        searchMovie:function(info){
            this.search = info;
            this.Loading = this.$loading({
                overlayColor:'rgba(0,0,0,.2)', 
                        // 背景色
                size: 48,
                color: 'primary',                           // color
                className: '',
            
            });
            movieSearch(info).then(res=>{
                this.Loading.close();
                if(res.code == 200){
                    this.movielist=res.data;
                }
            })
        }
    }
}
</script>
<style scoped>

</style>


