<template>
   <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
export default {
  components:{
    Navbar , Footer
  }
  
}
</script>

<style lang="css">

  @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;800&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,100&family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,100;1,900&display=swap');

:root{
  --bg: #f9d195;
  --blanc: #fff;
  --bleu: #99e3ec;
  --noir: #000;
  --chocolat:#68391a;
  --max-width: 980px;
  --titre: 35px;
  --paragraphe: 18px;

}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
  background-color: var(--bg);
}

p{
  font-size: var(--paragraphe);
  letter-spacing: .5px;
}

h1{
  padding: 20px;
  font-size: var(--titre);
  margin: 20px 0;
}

/* .router-link{
  min-height: 100vh;
  height: auto;
}

.router-link-exact-active {
  color: var(--violet) !important;
  cursor: pointer;
} */

@media (max-width:768px) {
h1{
  font-size: 20px;
}
p{
  font-size: 16px;
}
}
#app {
  text-align: center;
}


</style>
