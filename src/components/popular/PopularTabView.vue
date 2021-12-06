<template>
    <div class=" bg-gray-200 px-10 py-16">
        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PopularBox :popularStats="popularStats" />
        </div>
        <div class="text-center flex justify-center items-center">
        <a  href="#" class="px-16 py-3  flex items-center justify-center rounded-full border-4 uppercase font-semibold bg-white border-blue-800 text-black text-lg hover:bg-blue-800 hover:text-white">
            Explore More
        </a>

        </div>

    </div>
    

</template>

<script>
import PopularBox from "./PopularBox";
export default {
    name:'PopularTabView',
    props:['popularStats'],
    components:{
        PopularBox,
        
    }
}
</script>