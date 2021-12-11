<template>
   <!-- <div class="bg-white flex justify-between items-center space-x-6 max-h-80 overflow-hidden">
        <div class="flex flex-col justify-between items-center w-1/3 space-y-6">
            <img :src="images[0]" class=" w-full ">
            <img :src="images[1]" class="w-full">
        </div>
        <div class="flex flex-col justify-between items-center w-2/3 ">
            <img :src="images[2]" class=" w-full h-auto">
        </div>

    </div> -->

    <div class="bg-white flex justify-between items-start space-x-6 max-h-100 overflow-hidden">
        <div class="flex flex-col justify-between items-start w-1/3 space-y-6 max-h-80">
            <img :src="this.visibleSlide >= this.slidesLength-1  ? slides[0] : slides[this.visibleSlide+1]" class=" w-full ">
            <img v-if="this.visibleSlide <= this.slidesLength " :src="this.visibleSlide+1 === this.slidesLength  ? slides[1] : slides[this.visibleSlide+2]" class="w-full"> 
        </div>
        <div class="flex flex-col justify-between items-center w-2/3 ">
            <carousel @next ='next'>
                <carousel-slide v-for="(slide,index) in slides" 
                :key="slide" 
                :index="index"
                :visibleSlide ="visibleSlide"
                >
                    <img :src="slide" />
                </carousel-slide>
            </carousel>
        </div>

    </div>
</template>

<script>
import Carousel from './carousel/Carousel'
import CarouselSlide from './carousel/CarouselSlide'
export default {
  components: { Carousel , CarouselSlide},
    name: 'Slider',

    data(){
        return{
            visibleSlide: 0,
            slides:[
                'https://res.cloudinary.com/farouk/image/upload/t_large/i4tg6KeY0',
                'https://res.cloudinary.com/farouk/image/upload/t_large/gu0qN-fag',
                'https://res.cloudinary.com/farouk/image/upload/t_large/dob1tMHOk',
                'https://res.cloudinary.com/farouk/image/upload/t_large/9wlWiDRhZ',
                'https://res.cloudinary.com/farouk/image/upload/t_large/_QNpzMg0j'
            ]
        }
    },
    computed:{
        slidesLength(){
            return this.slides.length;
        }

    },
    methods:{
        next(){
            if(this.visibleSlide >= this.slidesLength -1){
                this.visibleSlide =0;
            }
            else{
                this.visibleSlide++;
            }
        }

    },
    
    props:['']
}
</script>