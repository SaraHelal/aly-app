<template>
    <div class="grid grid-cols-4 gap-6 relative lg:text-xl md:text-base font-semibold text-black text-xs">
           <a href="#" v-for="(tab, index) in tabs" :key="index" @click="activeTab(index, $event)"  :class="`p-4 ${currentTab === index ? 'active' : ''}`" >
               <i :class="`fas ${tab.icon} fa-xl mr-2`"></i>
               {{tab.name}}
               </a>  
           
    </div>
</template>

<script>
export default {
    name:'CatsTab',
    data(){
        return{
            currentTab: 0,
            catType : 'Resturant',
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

            ],
          
        }
    },
    components:{
        
    },
    methods:{
        activeTab(index, e){
            e.preventDefault();
            this.currentTab = index;
            this.catType = this.tabs[index].name;
            this.$emit('catType' , this.catType);

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