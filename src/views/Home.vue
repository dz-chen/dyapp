<template>
    <div class='home'>
       <router-view />
       <tab-bar></tab-bar>
    </div>

</template>

<script>
import TabBar from "../components/home/TabBar"
export default {
    name:'Home',
    data(){
        return {

        }
    },
    components:{
        TabBar
    }
}
</script>

<style scoped>
.home{
    height:100%;
    width:100%;
}
</style>