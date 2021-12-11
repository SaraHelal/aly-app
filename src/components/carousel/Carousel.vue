<template>
        <div class="carousel relative">
            <slot></slot>
            <button @click="next" class="absolute text-center right-0 text-blue-800 border bg-gray-200 p-5 font-bold"
            style="top: calc(50% - 2.5rem);"
            >></button>
        </div>
        
</template>

<script>
export default {
    name: 'Carousel',
    methods:{
        next(){
            this.$emit('next');
        }
    },
    
    props:['']
}
</script>