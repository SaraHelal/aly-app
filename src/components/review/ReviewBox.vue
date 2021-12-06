<template>
<div class="flex flex-col bg-white max-h-100 relative rounded-3xl mb-8" v-for="reviewStat in reviewStats" :key="reviewStat.id">
    <div class="flex justify-between items-start py-3">
        <div class="flex justify-start  items-start p-4 flex-shrink">
            <img :src="reviewStat.logo" class="" width="35" height="35">
            <div class="text-left ml-3 font-Poppins">
                <h2 class="text-black font-semibold text-sm truncate w-20">{{reviewStat.title}}</h2>
                <span class="text-gray-800 text-xs truncate block w-20">{{reviewStat.type}}</span>
            </div>
        </div>
        <div class="flex-1">
            <div class="flex flex-col justify-between items-center font-Poppins">
                <div class="flex items-center justify-end">
                    <img src="https://img.icons8.com/ios-glyphs/60/000000/user-female-circle.png"/>
                    <span>{{reviewStat.user}}</span>
                </div>
                <div class="text-right mb-2 text-yellow-500">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            <!--<span class=" bg-yellow-500 px-4 py-1  text-white block">$average</span>-->
            <span class="text-sm font-extralight text-gray-400 py-2">{{reviewStat.reviewDay}}</span>

            </div>
        </div>
    </div> 
   <p class="font-Poppins font-normal p-4 text-left h-1/4">{{reviewStat.reviewMessage}}</p>
    <div class="overflow-hidden relativ flex items-start justify-center">
        <img :src="reviewStat.imgs[0]"  class="w-11/12 h-2/3 text-center rounded-xl mb-12">
    </div>
    
    
</div>
</template>

<script>
export default {
    name:'ReviewBox',
    props:['reviewStats'],
}
</script>