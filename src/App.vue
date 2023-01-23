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
    --azul-oscuro:#606468;
    --transparente-oscuro: #000000b5;
    --transparente-claro: #f9f21ba1;
    --amarillo: #f3e00ef9;
    --negro: #000;
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
      color: var(--azul-hueso);
    }

    .titulo{
      font-family: miller-banner, serif;
      font-weight: 400;
      font-style: normal;
      font-size: 2rem;
      color: var(--amarillo);
    }

    .enlace{
      font-family: montserrat,sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--azul-hueso);
    }

    .enlace:hover,
    .icono:hover{
      color: var(--amarillo);
    }

    .boton{
      background: var(--transparente-claro);
      font-family: montserrat,sans-serif;
      font-weight: 400;
      font-style: normal;
      color: var(--azul-hueso) !important;
    }


    .reveal {
      position: relative;
      opacity: 0;    
    }
  
   .reveal.active {
      opacity: 1;
    } 
  
  
  .section_cont_intro{
      -webkit-clip-path: polygon(0 0, 90.4% 0, 68% 100%, 0% 100%);
              clip-path: polygon(0 0, 90.4% 0, 68% 100%, 0% 100%);
      background: var(--negro);
      height: auto;   
  }
  
  .active.fade-left{
      -webkit-animation: fade-left 1s ease-in;
              animation: fade-left 1s ease-in;
  }
  
  
  @-webkit-keyframes fade-left {
      0% {
        -webkit-transform: translateX(-100px);
                transform: translateX(-100px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
      }
    }
  
  
  @keyframes fade-left {
      0% {
        -webkit-transform: translateX(-100px);
                transform: translateX(-100px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
      }
    }

    .active.fade-right{
      -webkit-animation: fade-right 1.5s ease-in;
              animation: fade-right 1.5s ease-in;
  }
  
  
  @-webkit-keyframes fade-right {
      0% {
        -webkit-transform: translateX(100px);
                transform: translateX(100px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
      }
    }
  
  
  @keyframes fade-right {
      0% {
        -webkit-transform: translateX(100px);
                transform: translateX(100px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
      }
    }
  }


</style>
