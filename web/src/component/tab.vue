<template>
<div class="tabs">

     <mu-tabs :value.sync="state['active_tab']" full-width 
     color="teal"
     >
        <mu-tab to="/">
            电影
        </mu-tab>
        <mu-tab to="/tv">
            电视剧
        </mu-tab>
        <mu-tab to="/variety">
            综艺
        </mu-tab>
        <mu-tab to="/cartoon">
            动漫
        </mu-tab>
  </mu-tabs>
</div>
   
</template>
<script>
export default {
    data(){
        return {
            active3:0
        }
    }
}
</script>
<style scoped>



</style>


