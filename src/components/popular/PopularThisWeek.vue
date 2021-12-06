<template>
<div class="flex flex-col justify-center items-center text-center my-8">
    <CatsTab @catType = 'catType' />
    <PopularTabView :popularStats='popularStats' />
</div>
</template>

<script>
import CatsTab from '../global/CatsTab'
import PopularTabView from './PopularTabView'

export default {
    name:'PopularThisWeek',
    data(){
        return{
            currentTab: 0,
            catType : 'Resturant',
            popularStats:[{
                id:1,
                title: 'Ahmet Chef',
                type: 'Steak House, Turkish',
                starCount: 3,
                logo: 'https://res.cloudinary.com/farouk/image/upload/t_small/d2WMMCdpg',
                imgs: ['https://res.cloudinary.com/farouk/image/upload/t_large/EkjIDWPxF'],
                address: 'casablanca el maarif'
            },
            {
                id:2,
                title: 'Amoud',
                type: 'Pastery & Bakery',
                starCount: 3,
                logo: 'https://res.cloudinary.com/farouk/image/upload/t_small/eC1EIFEIC',
                imgs: ['https://res.cloudinary.com/farouk/image/upload/t_large/ML3Q4YM0Y'],
                address: 'casablanca el maarif'
            },
            {
                id:3,
                title: 'Bondi Coffe Kitchen',
                type: 'Vegetarian, International',
                starCount: 3,
                logo: 'https://res.cloudinary.com/farouk/image/upload/t_small/6AG4BlYF1',
                imgs: ['https://res.cloudinary.com/farouk/image/upload/t_large/9wlWiDRhZ'],
                address: 'casablanca el maarif'
            },
            ]
        }
    },
    components:{
        PopularTabView,
        CatsTab
    },
    emits:["catType"],
    methods:{
      
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