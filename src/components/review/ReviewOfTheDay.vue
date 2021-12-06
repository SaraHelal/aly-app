<template>
<div class="flex flex-col justify-center items-center text-center my-8">
    <CatsTab @catType = 'catType' />
   <ReviewBoxes :reviewStats='reviewStats' />
</div>
</template>

<script>
import CatsTab from '../global/CatsTab'
import ReviewBoxes from './ReviewBoxes'



export default {
    name:'ReviewOfTheDay',
    data(){
        return{
            reviewStats:[{
                id:1,
                title: 'ashokai sushi',
                type: 'Asian, Sushi',
                logo: 'https://res.cloudinary.com/farouk/image/upload/t_small/Y6GHaZMo-',
                user:'Adil',
                starCount: 4,
                clapsCount: 10,
                rating:'$average',
                reviewMessage:'Cozy vibe, great interior decoration.Food is very good. Excellent value for money.',
                reviewDay:'Sat Nov 13 2021',
                imgs: ['https://res.cloudinary.com/farouk/image/upload/t_large/DJRoJJ2q7'],
                address: 'casablanca Sidi Belyout'
            },
            {
                id:2,
                title: 'Nkoa',
                type: 'Asian, Latino',
                logo: 'https://res.cloudinary.com/farouk/image/upload/t_small/7fPoVg4ZdC',
                user:'Yaqout',
                starCount: 3,
                clapsCount: 10,
                rating:'$average',
                reviewMessage:'We had an excelent evening , Tasty food,  warm decor, and cosy atmosphere.  friendly staff and good music. Nice mix of f',
                reviewDay:'Fri Nov 19 2021',
                imgs: ['https://res.cloudinary.com/farouk/image/upload/t_meduim/LOtBhvkOs'],
                address: 'casablanca Sidi Belyout'
            },
            {
                id:3,
                title: 'yawatcha thai experience',
                type: 'Vegetarian, International',
                logo: 'https://res.cloudinary.com/farouk/image/upload/t_small/6AG4BlYF1',
                user:'Snow Man',
                starCount: 3,
                clapsCount: 10,
                rating:'$average',
                reviewMessage:'I love Thai food and Yawatcha was a good experience . Service was friendly and relaxed . ',
                reviewDay:'Mon Nov 22 2021',
                imgs: ['https://res.cloudinary.com/farouk/image/upload/t_meduim/Z1rXhZFcY'],
                address: 'casablanca Sidi Belyout'
            },]
        }
    },
    components:{
        CatsTab,
        ReviewBoxes
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