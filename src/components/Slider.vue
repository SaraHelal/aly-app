<template>
    <div class="bg-white flex justify-between items-center space-x-6 max-h-80 overflow-hidden">
        <div class="flex flex-col justify-between items-center w-1/3 space-y-6">
            <img :src="images[0]" class=" w-full ">
            <img :src="images[1]" class="w-full">
        </div>
        <div class="flex flex-col justify-between items-center w-2/3 ">
            <img :src="images[2]" class=" w-full h-auto">
        </div>

    </div>
</template>

<script>
export default {
    name: 'Slider',
    
    props:['images']
}
</script>