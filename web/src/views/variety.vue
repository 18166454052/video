<template>
    <div>
        综艺
        <v-tabs></v-tabs>
    </div>
</template>
<script>
import searchBtn from "../component/searchBtn.vue"
import movie_item from "../component/movieItem.vue"
import category from "../component/category.vue"
import Tabs from "../component/tab.vue"
export default {
    components:{
        // 'search-btn':searchBtn,
        // 'movie-item':movie_item,
        // 'v-category':category,
        'v-tabs':Tabs
    },
    data(){
        return {

        }
    },
    created:function(){
        this.state['active_tab'] = 2
    }
}
</script>

