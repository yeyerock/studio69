<template>
  <div id="app"> 
    <v-app>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">

  :root{
    --blanco: #ffffff;
    --azul-hueso: #F0F7F4;
    --azul-oscuro:#3E5F8A;
    --transparente-oscuro: #000000b5;
    --transparente-claro: #ffffffa1;
  }


  *{
    margin:0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  html,
  body{
      overflow-x: hidden;
      width: 100vw;    
  }

  #app {

    width: 100%;
    height: 100%;
    background: var(--azul-blanco);

    .fondo_transparente{
      background: var(--transparente-oscuro);
      backdrop-filter: blur(10px);
    }

    section{
      width: 100vw;
      height: auto;
      position: relative;
    }

    a{
      text-decoration: none;
    }

    .textos{
      font-family: montserrat, sans-serif;
      font-weight: 300;      
      font-style: normal;
    }

    .titulo{
      font-family: miller-banner, serif;
      font-weight: 400;
      font-style: normal;
      font-size: 2rem;
      color: var(--azul-oscuro);
    }

    .enlace{
      font-family: montserrat,sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--azul-hueso);
    }

    .boton{
      background: var(--transparente-claro);
      font-family: montserrat,sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--azul-hueso) !important;
    }

   }


</style>
