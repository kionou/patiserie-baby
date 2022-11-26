<template>
    <div class="container">
        <h1>NOTRE MENU</h1>

        <div class="container-card">
            <CardMenu />
        </div>

    </div>
    <Etoile />


</template>

<script>
import Etoile from '@/components/etoile.vue';
import CardMenu from '@/components/cardMenu.vue';

export default {
    components: { Etoile, CardMenu },
    data() {
        return {
            cakes: ''
        };
    },


}
</script>

<style scoped>
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    background-color: var(--blanc);
    height: auto;
    padding: 15px;

}

.container-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 40px 0;
    width: 100%;
    justify-content: center;
}
</style>