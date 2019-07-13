<template>
    <div class="tv-list">
        <div class="item" :class="{current: url == list['tv_url']?true:false}">
            {{list["tv_num"]}}
        </div>
        <span class="mark" v-show="list['is_trail_notice'] == 1">
            <img class="mark_pic" src="//i.gtimg.cn/qqlive/images/mark/mark_12.png" alt="预告" srcset="//i.gtimg.cn/qqlive/images/mark/mark_12@2x.png 2x">
        </span>
    </div>
</template>
<script>
export default {
    props:['list','url'],
    data(){
        return {
         
        }
    },
}
</script>
<style scoped>
.tv-list{
    display: inline-block;
    position:relative;
    font-size: 28px;
    letter-spacing: normal;
    text-align: center;
    vertical-align: top;
    
}
.tv-list .item{
    display: block;
    width: 75px;
    height: 75px;
    margin: 0 16px 30px 14px;
    overflow: hidden;
    border-radius: 38px;
    background-color: #ebebeb;
    color: #222;
    line-height: 78px;
    text-overflow: ellipsis;
}
.tv-list .mark{
    position:absolute;
    top: 2px;
    right: 18px;
}
.mark_pic{
    display: inline-block;
    width: 32px;
    height: 28px;
    margin-left: 5px;
    background: 0 0;
    vertical-align: top;
}
.tv-list .current{
    background:#ff5c38;
    color:#fff
}
</style>


