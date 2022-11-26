<template>
  <div class="container">
    <div class="image">
      <img src="@/assets/images/about.webp" alt="">
    </div>
    <div class="texte">
      <h1>OUR STORY</h1>
      <p>
        Nous produisons également sous les marques propres des plus grands acteurs mondiaux tels que Délifrance,
        Panesco ou Nestlé. En même temps, nous sommes un fournisseur certifié de chaînes de café mondiales telles
        que Starbucks, McCafé ou Costa Coffee.
      </p>

      <p>
        Peut-être avez-vous goûté nos gâteaux dans l'un de vos cafés préférés et pensé que vous apprécieriez
        l'opportunité de les déguster à la maison en famille ou entre amis. C'est pourquoi notre équipe travaille
        dur pour que vous puissiez en profiter à la maison. Sous la marque Dortie's, nous proposons nos gâteaux
        les plus vendus qui sont appréciés par les gens du monde entier.
      </p>
    </div>

  </div>
  <Etoile />
</template>

<script>
import Etoile from '@/components/etoile.vue';
export default {
  components: {
    Etoile
  }

}
</script >

<style scoped>
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  /* border: 1px solid red; */
  height: 560px;
  background-color: var(--blanc);
  display: flex;
  justify-content: space-around;
  padding: 20px 0;

}

.image {
  /* border: 1px solid blue; */
  height: 100%;
  width: 45%;
  /* box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

}

.image img {
  width: 100%;
  height: 100%;

}
.texte {
  /* border: 1px solid rgb(22, 148, 115); */
  height: 100%;
  width: 45%;
  color: var(--chocolat);

}

.texte p {
  margin: 10px 0;
  text-align: start;

}


@media only screen and (max-width: 768px) {
  .container {

    flex-direction: column;
    align-items: center;
    height: auto;

  }

  .image {
    width: 90%;


  }

  .texte {
    width: 100%;
    padding: 20px;

  }

}
</style>
