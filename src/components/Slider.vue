<template>
    <div class="bg-gray-300 flex justify-between items-center space-x-1">
        <div class="flex flex-col justify-between items-center">
            <img :src="images[0]" class="pb-8">
            <img :src="images[1]" class="">
        </div>
        <div class="flex flex-col justify-between items-center">
            <img :src="images[2]" class="pb-8">
        </div>

    </div>
</template>

<script>
export default {
    name: 'Slider',
    
    props:['images']
}
</script>