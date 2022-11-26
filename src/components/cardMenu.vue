<template>
   <div id="article_container" v-for="cake in cakes" :key="cake.id">
                <div class="article_container_img">
                    <img :src="getImage(cake.image)" alt="">
                </div>
                <div class="article_container_content">

                    <h4>{{cake.nom}}</h4>
                    <p>
                        {{cake.description}}
                    </p>
                    <span>{{cake.prix}} F CFA</span>
                </div>
            </div>
</template>

<script>
import {getImage} from '@/lib/getImage'

export default {
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


#article_container {
    height: auto;
    margin: 0 auto;
    /* margin-top: 56px; */
    display: flex;
    border: 1px solid var(--bleu);
}

.article_container_img {
    flex-grow: 1;
    /* min-width: 50%; */
    background-repeat: no-repeat;

}

.article_container_img img {
    background-repeat: no-repeat;
    /* width: 100%; */
    height: 100%;
}

.article_container_content {
    flex-grow: 1;
    /* padding: 55px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

h3 {
    font-weight: 600;
    margin: 0 16px;
}

P{
    font-size: 16px;
    text-align: justify;
    padding: 0 10px;


}


@media (max-width: 768px) {
    #article_container {
        flex-wrap: wrap;
        width: 100%;
    }

    .article_container_img img {
        width: 100%;
    }

    .article_container_content {
        width: 100%;
        padding: 40px 10px;
    }
}

</style>