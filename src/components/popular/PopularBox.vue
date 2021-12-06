<template>
<div class=" flex-1 flex flex-col bg-white max-h-96 relative mb-8 rounded-3xl " v-for="popularStat in popularStats" :key="popularStat.id">
        <span class="absolute -top-5 left-2 pt-1 text-light-red border-2 w-12 h-12 bg-white rounded-full shadow-lg z-10"><i class="far fa-heart fa-xl"></i><strong class="block -mt-1 text-black">2</strong></span>
    
    <div class="h-4/5 overflow-hidden relative">
        <img :src="popularStat.imgs[0]"  alt="">
    </div> 
    <div class="flex justify-start p-3">
        <img :src="popularStat.logo" class="w-1/5">
        <div class="text-left ml-6 font-Poppins">
            <h2 class="text-blue-800 font-semibold text-lg">{{popularStat.title}}</h2>
            
            <span class="text-gray-800 text-sm ">{{popularStat.type}}</span>
            <p class="text-gray-900 text-sm "><i class="fas fa-map-marker-alt"></i> casablanca el maarif</p>
        </div>
        <span class="absolute bg-yellow-500 px-4 py-1 right-0 text-white top-0">$average</span>
    </div>
    <div class="text-right m-4 text-yellow-500">
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    
</div>
</template>

<script>
export default {
    name:'PopularBox',
    props:['popularStats'],
}
</script>