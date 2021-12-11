<template>
    <div class="my-4 p-4 mx-auto border border-gray-300 border-dashed">
        <div class=" p-2 lg:flex justify-between items-start">
            <div class="flex-1 lg:w-2/4  text-black break-words font-NunitoSans tracking-wider text-center lg:text-left lg:py-20"> 
                <h1 class="text-2xl lg:text-3xl w-9/12 lg:w-8/12 xl:text-4xl xl:w-8/12 text-center lg:text-left  mt-4 xl:ml-16 mx-auto font-extrabold  ">Connect With People And Reach Great Businesses</h1>
                <p class="text-base xl:ml-16 text-center text-xl lg:text-left font-extralight md:w-8/12 my-6 mx-auto">Browse different business places and choose the best</p>
                <div class="flex flex-col justify-start items-center lg:items-start  md:ml-16">
                    <Button type = "add-review"/>
                    <Button type = "add-business"/>

                </div>
            </div>
            <div class="flex-1 flex-shrink-0 mt-8 ">
                <Slider  />
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
           /* images: [
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/HbIBvcdFD',
           'https://res.cloudinary.com/farouk/image/upload/t_meduim/xmB9OQ_rUH',
           'https://res.cloudinary.com/farouk/image/upload/t_large/7JDK_AKUNe'
            ]*/
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