<template>
  <div class="etoile">
    <div class="etoile-card">
        <img src="@/assets/images/serietoile.webp" alt="">
    </div>
    <div class="etoile-card1">
    <img src="@/assets/images/etoile.svg" alt="">
    </div>
    <div class="etoile-card">
        <img src="@/assets/images/serietoile.webp" alt="">
    </div>

  </div>
</template>

<script>
export default {
    name:"etoile"

}
</script>

<style scoped>
.etoile{
max-width: var(--max-width);
margin: 10px auto;
/* border: 1px solid red; */
height: auto;
display: flex;
align-items: center;

}
.etoile-card {
    width: 100%;
    /* border: 1px solid blue; */
}

.etoile-card1{
    height: 100%;
    width: 20%;
    /* border: 1px solid rgb(0, 255, 89); */
    display: flex;
    height: 35px;

}
.etoile-card img, .etoile-card1 img{
    width: 100%;
}

</style>