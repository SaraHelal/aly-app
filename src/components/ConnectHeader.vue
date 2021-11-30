<template>
    <div class="my-4 p-4 mx-auto border border-gray-300">
        <div class=" p-2 md:flex justify-between items-center">
            <div class="flex-1 md:w-3/4  text-black break-words text-center md:text-left"> 
                <h1 class="text-3xl font-semibold font-Poppins tracking-wider">Connect With People And Reach Great Businesses</h1>
                <p class="text-base font-Poppins font-extralight md:w-2/3 my-3 ">Browse different business places and choose the best</p>
                <div class="flex flex-col lg:w-3/5 justify-center items-center ">
                    <Button type = "add-review"/>
                    <Button type = "add-business"/>
                    <Button type = "login"/>

                </div>
            </div>
            <div class="flex-1 flex-shrink-0 ">
                <Slider :images='images' />
                
            </div>
        </div>
    </div>
</template>
<script>
import Slider from '../components/Slider'
import Button from './global/Button'

export default {
   name: 'ConnectHeader',
   data(){
       return{
            images: [
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/HbIBvcdFD',
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/xmB9OQ_rUH',
           'https://res.cloudinary.com/farouk/image/upload/t_large/7JDK_AKUNe'
            ]
       }
      
   },
   components:{
       Slider,
       Button
   },
   methods:{
       
       //{'type':'add','color':'red','bg':'blue'}
   }
   
}
</script>