<template>
    <div class="my-4 p-4 mx-auto border border-gray-300 border-dashed">
        <div class=" p-2 lg:flex justify-between items-center">
            <div class="flex-1 lg:w-2/4  text-black break-words font-Poppins tracking-wider text-center lg:text-left"> 
                <h1 class="text-xl lg:text-3xl w-9/12 mt-4 ml-16 font-semibold  ">Connect With People And Reach Great Businesses</h1>
                <p class="text-base md:ml-16 text-center  font-extralight md:w-9/12 my-6">Browse different business places and choose the best</p>
                <div class="flex flex-col lg:w-3/5 justify-start items-center ">
                    <Button type = "add-review"/>
                    <Button type = "add-business"/>

                </div>
            </div>
            <div class="flex-1 flex-shrink-0 mt-8 ">
                <Slider :images='images' />
                <ImagesTab />
            </div>
        </div>
    </div>
</template>


<script>
import Slider from '../components/Slider'
import Button from './global/Button'
import ImagesTab from './ImagesTab'

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
       Button,
      ImagesTab
   },
   methods:{
       
       //{'type':'add','color':'red','bg':'blue'}
   }
   
}
</script>