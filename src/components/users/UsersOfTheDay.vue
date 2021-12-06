<template>
<div class="md:grid gap-10  md:grid-cols-3 py-3">
   <UsersBox :userStats='userStats' />
</div>
</template>

<script>
import UsersBox from './UsersBox'



export default {
    name:'UsersOfTheDay',
    data(){
        return{
            userStats:[{
                id:1,
                name:'Salma',
                img:'https://img.icons8.com/ios-filled/60/000000/guest-male--v1.png',
                friendsCount:7,
                starsCount: 4,
                uploadedImgsCount: 5,
                address: 'casablanca el maarif'
            },
            {
                id:2,
                name:'Arwa',
                img:'https://res.cloudinary.com/farouk/image/upload/t_small/bKuvK7naM',
                friendsCount:11,

                starsCount: 5,
                uploadedImgsCount: 11,
                address: 'casablanca el maarif'
            },
            {
                id:3,
                name:'Sara',
                img:'https://img.icons8.com/ios-filled/50/000000/guest-female--v1.png',
                friendsCount:2,
                starsCount: 5,
                uploadedImgsCount: 12,
                address: 'casablanca el maarif'
            }]
        }
    },
    components:{
        UsersBox
    },
  
    
}
</script>
<style scoped>
.active{
    background-color: rgba(229, 231, 235);
    border-radius: 2rem 2rem 0 0;
    /*border-bottom: 3px solid blue;*/
}
</style>