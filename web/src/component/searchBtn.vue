<template>
    <div class="search-container">
       <div class="btn">
           
           <span>{{title}}</span>
       </div>
    </div>
</template>
<script>
export default {
    props:["title"],
    data(){
        return{

        }
    }
}

</script>
<style scoped>
.search-container {
   height:102px;
   box-sizing:border-box;
   padding:15px 28px;
   /* background: linear-gradient(90deg,#0af,#0085ff) */
   background:teal   /*#0af*/
}
.btn{
    height:72px;
    background:#fff;
    font-size:24px;
    line-height: 72px;
    color:#999;
}
</style>


