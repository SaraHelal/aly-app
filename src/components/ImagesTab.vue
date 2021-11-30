<template>
<div class="flex justify-end items-center">
    <div class="bg-blue-800 text-white p-8 my-12 ">
       <div class="grid grid-cols-4 gap-12 relative">
           <div v-for="image in images" :key="image" class="-mt-14">
               <img :src="image" alt="" width="110" height="110">
           </div>
       </div>


    </div>
</div>
    
</template>

<script>
export default {
    name: 'ImagesTab',
    data(){
        return{
             images: [
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/HbIBvcdFD',
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/xmB9OQ_rUH',
           'https://res.cloudinary.com/farouk/image/upload/t_large/7JDK_AKUNe',
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/xmB9OQ_rUH',
            ]
        }
    }
    
    
}
</script>