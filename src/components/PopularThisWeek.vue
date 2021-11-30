<template>
<div class="flex flex-col justify-center items-center text-center my-8">
    <div class="grid grid-cols-4 gap-6 relative text-xl font-semibold text-black">
           <a href="#" v-for="(tab, index) in tabs" :key="index" @click="activeTab(index, $event)"  :class="`p-4 ${currentTab === index ? 'active' : ''}`" >
               <i :class="`fas ${tab.icon} fa-xl mr-2`"></i>
               {{tab.name}}
               </a>  
           
    </div>
    <PopularTabView :catStats='catStats' />
</div>
</template>

<script>
import PopularTabView from '../components/PopularTabView'
export default {
    name:'PopularThisWeek',
    data(){
        return{
            currentTab: 0,
            catStats : 'Resturant',
            tabs:[
                {
                    'name': 'Restuarant',
                    'icon': 'fa-utensils'
                },
                {
                    'name': 'Doctor',
                    'icon': 'fa-user-md'
                },
                {
                    'name': 'Shopping',
                    'icon': 'fa-cart-plus'
                },
                {
                    'name': 'Beauty & Wellness',
                    'icon': 'fa-spa'
                },

            ]
        }
    },
    components:{
        PopularTabView
    },
    methods:{
        activeTab(index, e){
            e.preventDefault();
            this.currentTab = index;
            this.catStats = this.tabs[index].name
        }
    }
    
}
</script>
<style scoped>
.active{
    background-color: rgba(229, 231, 235);
    border-radius: 2rem 2rem 0 0;
    /*border-bottom: 3px solid blue;*/
}
</style>