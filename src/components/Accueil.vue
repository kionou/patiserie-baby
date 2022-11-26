<template>
  <div class="container">
    <div class="container-image">

    <div class="card" v-for="cake in cakes" :key="cake.id">
      <img :src="getImage(cake.image)" alt="">
    </div>


    <!-- <div class="card">
      <img src="../assets/images/series.webp" alt="">
    </div> -->
  </div>
  </div>
  <div class="container-etoile">
    <Etoile/>
  </div>
  <div class="container-parfun">
      <div class="parfun-card">
        <img src="@/assets/images/84770f_281203f2f6f79894fba328b24f391404.webp" alt="">
        <p>LIKE & FOLLOW</p>
      </div>
      <div class="parfun-card">
        <img src="@/assets/images/home2.webp" alt="">
        <p>ORDER ONLINE</p>
      </div>
      <div class="parfun-card">
        <img src="@/assets/images/home3.webp" alt="">
        <p>COME VISIT US</p>
      </div>
  </div>
  <div class="container-etoile">
    <Etoile/>
  </div>
 

</template>

<script>
import Etoile from './etoile.vue';
import {getImage} from '@/lib/getImage'

export default {
    components:{
      Etoile 
  },
  data() {
    return {
      cakes:''
    };
  },
  methods: {
    getImage:getImage
  },
  mounted() {
    let data = require('../assets/data.json')
    console.log(data);
    this.cakes = data
  },
 
}
</script>

<style scoped>

.container{
  max-width: var(--max-width);
margin: 0 auto;
/* border: 1px solid red; */
/* padding: 10px; */
margin-bottom: 10px;
}
.container-image{
/* border: 1px solid blue; */
width: 100%;
height: 100%;
display: -webkit-box;
overflow: auto;

}

.container-image::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.3);
  height:  1px;
}
.container-image::-webkit-scrollbar
{
	height: 1px;
	background-color: #F5F5F5;
  /* display: none; */
}

.card{

width: 240px;
height: 240px;
border: 5px solid var(--blanc);
margin: 0 5px;

}
.card:hover{
  transition: opacity .2s ease;
    opacity: 1;
    display: block;

}

.card img{
width: 100%;
height: 100%;
}

.container-parfun{
  max-width: var(--max-width);
  margin: 0 auto;
  height: auto;
/* border: 1px solid red; */
/* padding: 10px; */
margin-bottom: 10px;
display: flex;
    justify-content: space-around;
}

.parfun-card{

  /* border: 1px solid red; */
  height: 230px;
  width: 200px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.parfun-card img{
  width: 80px;
  height: 80px;
}
.parfun-card p{
  font-size: 36px;
}

@media only screen and (max-width: 768px) {
.container-parfun{
  justify-content: space-around;
    flex-direction: column;
    align-items: center;
}

.parfun-card{
  margin: 5px 0;
}

}


</style>