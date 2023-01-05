<template>
    <div id="navbar">
    <div class="container-nav">
      <div class="logo"> 
          <img src="@/assets/images/logo-removebg-preview.png" alt="logo">
      <i class="fa fa-navicon" v-on:click="display"></i>
    </div>

    <div class="bar-items" :class="{ hide: !show }">
      <div id="menu">
        <ul class="Acc-menu">
            <li><router-link to="/" class="Acc-lien">Accueil</router-link></li>
            <li><router-link to="/menu" class="Acc-lien">Menu</router-link></li>
            <li><router-link to="/apropos" class="Acc-lien">Apropos</router-link></li>
            <li><router-link to="/atelier" class="Acc-lien">Atelier</router-link></li>
            <li><router-link to="/contact" class="Acc-lien">Contact</router-link></li>
          </ul>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
    name:'navbar',
    data() {
    return { show: false }
  },
  methods: {
    display() {
      console.log("clicked")
      this.show = !this.show
    }
  }


}
</script>

<style scoped>

#navbar {
  background-color: var(--vert);
  max-width:var(--max-width);
  margin: 0 auto;
  padding: 15px 0;
  /* border: 1px solid red; */
  height: 300px;
}
.container-nav{
  /* border: 1px solid blue; */
  height: 100%;
 
}
.logo{
  /* border: 1px solid red; */
  height: 200px;
  width: 100%;
}
.logo  img{
    height: 100%;
    /* width: 100%; */
    /* border: 1px solid blue; */
}

#menu {
  list-style-type: none;
  height: 40px;
  width: 100%;
  /* border: 1px solid green; */
}

 ul {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    height: 100%;
}
.Acc-menu a {
  color: var(--chocolat);
    background-color: var(--blanc);
    padding: 7px 35px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    border: 4px solid var(--bleu);
}

.Acc-menu a::before{
    content: '';
    position:absolute;
    width: 100%;
    height: 2px;
    background: var(--or);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
}
.Acc-menu.active {
    background-color: var(--blanc);;
}
.Acc-menu.active a {
    color: var(--noir);
}
.Acc-nav.active .container-nav {
padding: 10px 0;
}
.Acc-lien:hover{
    color: var(--or);     
}
.fa {
  display: none;
}

@media(max-width:675px) {
  #navbar {
    flex-direction: column;
    height: auto;
  }
  .container-nav{
    flex-direction: column;
    align-items: flex-start;
  }

  .fa {
    display: block;
    padding: 0 25px;
    position: absolute;
    right: 0;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    top: 30px;

  }
  /* .Acc-menu{
    flex-direction: column;
    padding: 5px 0;

  } */
  /* .Acc-menu  li {
    padding: 15px;
    width: 100%;
  } */
/* .bar-items{
  width: 65%;
} */

#menu{
height: 65px;
border: 1px solid white;

}
  .hide {
    display: none;
  }
  .nav-brand {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;
    background-color: #15935a;
  }

  .Acc-menu a {
    background-color: transparent;
    padding: 0;
    border: none;
}
}

</style>