<template>
 <div class="corps-state">
      <div class="corps-statistique-group">
        <div class="corps-statistique-titre">
          <h2 class="titre1">Statistiques 2021 De NaN</h2>
        </div>
        <div class="corps-statistique2">
          <div class="corps-statistique1">
            <div class="corps-statistique-stat1">
                <h3 class="titre2">41</h3>
                <span></span>
                <p class="etud">ÉTUDIANTS EN PRÉSENTIEL</p>
            
              </div>
            <div class="corps-statistique-stat1">
              <h3 class="titre2">98</h3>
              <span></span>
              <p class="etud">ETUDIANTS EN LIGNE</p>
            </div>
        
            <div class="corps-statistique-stat1">
                <h3 class="titre2">143</h3>
                <span></span>
                <br>
                <p class="certs">CERTIFIÉS</p>
            </div>
            <div class="corps-statistique-stat1">
                <h3 class="titre2">41</h3>
                <span></span>
                <p class="etud">ÉTUDIANTS EN PRÉSENTIEL</p>
            </div>
            <div class="corps-statistique-stat1">
              <h3 class="titre2">55</h3>
              <span></span>
              <br>
              <p class="certs">TAUX <br>D'INSERTIONS </p>
            </div>
        </div>
        </div>
      </div>
  </div> 

</template>

<script>
export default {
  name:"slideComponent",
  setup() {
    $(document).ready(function(){
      $('.corps-statistique1').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
      });
    });
    


    // let previous = document.querySelectorAll('.slick-prev slick-arrow');
    // let next=  document.querySelectorAll('.slick-next slick-arrow');



    // console.log(next);
    // console.log(previous);

    // for (let i = 0; i < previous.length; i++) {
    //     const element = previous[i];
    //     element.innerHTML =`<i class="fas fa-arrow-circle-left"></i>`;
        
    // }
    // for (let i = 0; i < next.length; i++) {
    //     const element = next[i];
    //     console.log(element);
    //     element.innerHTML =`<i class="fas fa-arrow-circle-right"></i>`;
        
    // }
  }

}
</script>

<style scoped>

.corps-state{
  width:100%;
  padding-top: 20px;
  text-align:center;
}
.corps-statistique-group{
  display: flex;
  flex-direction: column;
}
.corps-statistique1{
  max-width: var(--max-width);
  margin: 47px auto;
  height: 400px;
  background-color: var(--bg2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding: 0px 10px 0px 10px;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.corps-statistique2{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.corps-statistique-titre .titre1 {
  text-align: center;
  padding: 20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: var(--blanc);
  text-transform: uppercase;
  margin-bottom: -43px;
}

.corps-statistique-stat1 {
  border-right: 3px solid var(--violet);
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.corps-statistique-stat1 .titre2 {
  border-bottom: 4px solid var(--blanc);
  width: 60px;
  font-size: 30px;
  color: var(--violet);
  text-align: center;
}

.corps-statistique-stat1 .cert {
  text-align: center;
  font-size:18px;
  width:150px;
} 

</style>