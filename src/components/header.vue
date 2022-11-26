<template>  
    <div>
        <Carousel
          :slides="slides"
          :interval="5000"
          :textes="textes"
          :titres="titres"
          indicators
          class="carou"
          :style="{
            height: height + 'px'
         
          }"
        />
    </div>
</template>

<script>
import Carousel from '@/components/banner/carousel.vue'

export default {
    name:'headerComponent',
    props: ['slides', 'textes', 'titres', 'height'],
    components:{
        Carousel
    },
    methods: {
        
    },
   
}
</script>

<style>

.Acc-headd{
    z-index: 999;
}
.carou{
    object-fit: cover;
    max-width: var(--max-width);
     margin: 20px auto;
}

  
</style>