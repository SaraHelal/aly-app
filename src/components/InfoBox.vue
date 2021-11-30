<template>
<div class=" flex-1 flex flex-col bg-white max-h-80 overflow-hidden ">
    <div class="h-4/5 overflow-hidden">
        <img src="https://res.cloudinary.com/farouk/image/upload/t_large/9wlWiDRhZ"  alt="">
    </div>
    
        <div class="flex justify-start p-4">
            <img src="https://res.cloudinary.com/farouk/image/upload/t_small/6AG4BlYF1" class="w-1/5">
            <div class="text-left ml-6">
                <h2 class="text-black font-semibold text-xl">Bondi Coffe Kitchen</h2>
                <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                </div>
                <span>Vegetarian, International</span>
            </div>
        </div>
    
</div>
</template>

<script>
export default {
    name:'InfoBox',
    props:['catStats'],
}
</script>