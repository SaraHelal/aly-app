<template>
    <div class=" bg-gray-200 px-10 py-16">
        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewBox :reviewStats="reviewStats" />
        </div>
       

    </div>
    

</template>

<script>
import ReviewBox from "./ReviewBox";
export default {
    name:'ReviewBoxes',
    props:['reviewStats'],
    components:{
        ReviewBox,
        
    }
}
</script>