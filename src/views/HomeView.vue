<template>
  <div id="home">
    <Menu-comp/>
    <Hero-comp/>
    <Inicio-comp/>
    <Sesiones-comp/>
    <Info-comp/>
    <Footer-comp/>
  </div>
</template>

<script>
import MenuComp from '@/components/MenuComp.vue'
import HeroComp from '@/components/HeroComp.vue'
import InicioComp from '@/components/InicioComp.vue'
import SesionesComp from '@/components/SesionesComp.vue'
import InfoComp from '@/components/InfoComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    MenuComp, HeroComp, InicioComp, SesionesComp, InfoComp, FooterComp
  }
}
</script>

<style>
  #home{
    background: var(--negro);
  }
</style>
