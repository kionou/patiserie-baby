<template>
    <div>
        <div class="container">
    <h1> NOS ATELIERS</h1>


<div id="article_container" v-for="cake in cakes" :key="cake.id">
    <div class="article_container_img">
        <img :src="getImage(cake.image)" alt="">
    </div>
    <div class="article_container_content">
         
         <h3>{{cake.nom}}</h3>
         <div class="divider"></div>
         <p>
           {{cake.heure}} Heure/Jour
         </p>

         <p>
           {{cake.prix}} F CFA 
         </p>
         <div class="btn">Read more</div>
    </div>
 </div>


  </div>
  <Etoile/>
    </div>
 
</template>

<script>
import Etoile from '@/components/etoile.vue';
import {getImage} from '@/lib/getImage'

export default {
    components:{Etoile},
  data() {
    return {
      cakes:''
    };
  },
  methods: {
    getImage:getImage
  },
  mounted() {
    let data = require('../assets/atelier.json')
    console.log(data);
    this.cakes = data
  },

}
</script>

<style scoped>
.container {
  max-width: var(--max-width);
  margin: 0 auto;

  height: auto;
  background-color: var(--blanc);
  padding: 20px;

}
.container h1{
    color: var(--chocolat);
}

#article_container {
    height: auto;
    margin: 0 auto;
    margin-top: 56px;
    display: flex;
    border: 1px solid var(--bleu);
}

.article_container_img {
    flex-grow: 1;
    min-width: 50%;
    background-repeat: no-repeat;

}
.article_container_img img{
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.article_container_content {
    flex-grow: 1;
    padding: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


h3 {
    font-size: 1.125rem;
    font-weight: 600;
    font-family: 'PT Serif', serif;
    font-style: italic;
    margin: 0 16px;
}

p {
    font-size: 1.125rem;
    text-align: center;
    line-height: 36px;
}

.btn {
    padding: 20px 44px;
    outline: none;
    border: 1px solid #99a3b4;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: #33363b;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    margin-top: 50px;
}

.btn:hover {
    background-color: #f0f0f0;
}

.divider {
    width: 60px;
    height: 4px;
    background-color: #33363b;
    margin: 40px 0;
}



@media (max-width: 768px) {
    #article_container {
        flex-wrap: wrap;
        width: 100%;
    }
    .article_container_img {
        width: 100%;
    }
    .article_container_content{
        width: 100%;
    }
  }

</style>