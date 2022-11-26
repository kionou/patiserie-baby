<template>
    <transition :name="transitionEffect">
      <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
        <img :src="getImage(slide)" />
        <div class="Acc-texte">
            <h1>{{titre}}</h1>
            <p>{{ texte }}</p>
            <!-- <button>Voir Plus</button> -->
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    emits: ["mouseenter", "mouseout"],
    props: ["slide", "currentSlide", "index", "direction", 'texte','titre'],
    methods:{
      getImage(path){
        try{
          return this.slide.startsWith('http') ? this.slide : require('@/assets/' + path)
        } catch(e){
          // return require('@/assets/nani/no.png')
        }
      }
    },
    computed: {
      transitionEffect() {
        return this.direction === "right" ? "slide-out" : "slide-in";
      },
    },
  };
  </script>
  
  <style scoped>

 .Acc-texte{
    position: absolute;
    z-index: 1;
    top: 30%;
    font-size: 50px;
    left: 22%;
    max-width: var(--max-width);
  }
  .Acc-texte h1{
    font-size: 50px;
  }
  .Acc-texte p{
    font-size: 25px;
    margin-left: 20px;
  }
  .Acc-texte button{
    padding: 15px 60px;
    font-size:20px ;
    background: var(--violet);;
    border-radius: 6px;
    color: var(--blanc);
    font-weight: bold;
    border: none;
    margin-left: 20px;
    margin-top: 30px;
  }
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .carousel-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
  .slide-in-enter-active,
  .slide-in-leave-active,
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 1s ease-in-out;
  }
  .slide-in-enter-from {
    transform: translateX(-100%);
  }
  .slide-in-leave-to {
    transform: translateX(100%);
  }
  .slide-out-enter-from {
    transform: translateX(100%);
  }
  .slide-out-leave-to {
    transform: translateX(-100%);
  }

  @media (max-width:768px) {
    .Acc-texte{
      left: 9%;
    }
    .Acc-texte h1{
    font-size: 40px;
  }
  .Acc-texte p{
    font-size: 30px;
  }
  }
  </style>