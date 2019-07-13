<template>
    <div class="movie-item" >
        <div class="image-info">
            <img class="image" v-lazy="tvinfo['tv_image']"  />
            <div class="caption">{{tvinfo["tv_caption"]}}</div> 
        </div>
        <div class="title">{{tvinfo["tv_title"]}}</div>
        <div class="remark">{{tvinfo["tv_desc"]}}</div>
    </div>
</template>
<script>
export default {
    props:["tvinfo"],
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>

</style>


