<template>
    <div class="movie-item" >
        <div class="image-info">
            <img class="image" v-lazy="movieinfo['movie_image']"  />
            <div class="score">{{movieinfo["movie_score"]}}</div>
        </div>
        <div class="title">{{movieinfo["movie_title"]}}</div>
        <div class="remark">{{movieinfo["movie_desc"]}}</div>
    </div>
</template>
<script>
export default {
    props:["movieinfo"],
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>

</style>


