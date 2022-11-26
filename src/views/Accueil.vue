<template>
 <Header :slides="slides" :textes="textes" :titres="titres" :height="522" />
 <Accueil/>
</template>

<script>
import Accueil from '@/components/Accueil.vue';
import Header from '@/components/header.vue';

export default {
  name:'HomeView',
  components:{
    Accueil , Header
  
  },
  data() {
    return {
            slides:[
                "images/silde.webp",
                "images/slide2.webp",
                "images/slide3.webp",

               
            ],
            textes: [      
               
               
                

            ],
            titres: [
              
            ]
        }
  },

}
</script>

<style>


</style>