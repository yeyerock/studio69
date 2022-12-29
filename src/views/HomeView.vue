<template>
 

  <div class="home">
    <v-app-bar 
      app
      inverted-scroll>
      

      <v-toolbar-title>Studio 69</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

     
    </v-app-bar>

    <Hero-comp/>
    <Inicio-comp/>
    <Sesiones-comp/>
    <Info-comp/>
    <Footer-comp/>
  </div>
</template>

<script>
import HeroComp from '@/components/HeroComp.vue'
import InicioComp from '@/components/InicioComp.vue'
import SesionesComp from '@/components/SesionesComp.vue'
import InfoComp from '@/components/InfoComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComp, InicioComp, SesionesComp, InfoComp, FooterComp
  }
}
</script>
