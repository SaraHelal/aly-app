<template>
    <div class=" bg-gray-200 p-12">
        <div class="grid grid-cols-3 gap-8">
            <InfoBox :catStats="catStats" />
            <InfoBox :catStats="catStats" />
            <InfoBox :catStats="catStats" />
        </div>
        <div class="text-center flex justify-center items-center">
        <a  href="#" class="`px-12 py-4 my-6 md:px-12 md:py-4 flex items-center justify-center rounded-full border-4 uppercase font-semibold bg-white border-blue-800 text-black text-lg my-2`">
            Explore More
        </a>

        </div>

    </div>
    

</template>

<script>
import InfoBox from "./InfoBox";
export default {
    name:'PopularTabView',
    props:['catStats'],
    components:{
        InfoBox,
        
    }
}
</script>