<template>
    <section id="laura">
        <header class="navbar">
            <div class="logo mx-2">
                <router-link to="/">
                    <img class="logo_menu align-self-center"  src="../assets/internal/logo_5.png" >
                </router-link> 
            </div>		
            
            <ul class="links">
                <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/home">Inicio</router-link> </li>
                <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/laura">Conoce a Laura</router-link> </li>
            
                <div class="cont_redes d-flex justify-content-center mx-auto">
                    <div class=" mx-2 "><a class="enlace" target="_blank" href="https://www.instagram.com/studio.tantrico/" ><v-icon class="icono">mdi-instagram</v-icon></a></div>
                    <div class=" mx-2 "><a class="enlace"  target="_blank" href="https://twitter.com/LauMasajista"><v-icon class="icono">mdi-twitter</v-icon></a></div>
                    <div class=" mx-2 "><a class="enlace" target="_blank"  href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20los%20masajes%20!"><v-icon class="icono">mdi-whatsapp</v-icon></a></div>
                </div>
            </ul>

            <div class="toggle mx-2" v-on:click="abrir()">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </header>

        <v-container class="cont_superior px-12">   
            <h1 class="titulo mb-5">
                Hola, soy Laura Cuen
            </h1>

            <v-row class="justify-end">
                <v-col
                    cols="12"
                    class=""
                >
                    <p class="textos text-justify">
                        Soy una persona espiritual en constante aprendizaje de múltiples materias, como la metafísica, holística, escénica (danza-teatro), músicoterapía, vivenciando mis propios y distintos caminos de sanación, liberación, el bello arte del perdón, formando mi criterio a base de mis propias experiencias para mi desarrollo personal, tanto en terapias tradicionales y muchas otras alternativas. 
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="cont_inferior">
            <v-row class="px-sm-12">
                <v-col
                    cols="10"
                    sm="5"
                    md="5"
                    lg="6"
                    class="mx-auto cont_img reveal fade-right"
                >
                <div class="mx-auto d-flex justify-center">
                    <img  src="../assets/laura/lau_03.jpg" alt=""/>
                </div>
                </v-col>
    
                <v-col
                    cols="10"
                    sm="5"
                    md="5"
                    lg="6"
                    class="mx-auto cont_img reveal fade-left"
                >
                <div class="mx-auto d-flex justify-center">
                    <img  src="../assets/laura/lau_02.jpg" /> 
                </div>
                </v-col>
    
                <v-col
                    cols="10"
                    sm="5"
                    md="5"
                    lg="6"
                    class="mx-auto cont_img reveal fade-right"
                >
                <div class="mx-auto d-flex justify-center">
                    <img  src="../assets/laura/lau_01.jpg" />  
                </div>  
                </v-col>
            </v-row>
            
        </v-container>
        <Footer-comp/>
    </section>
</template>

<style lang="scss">

    #laura{
        width: 100%;
        background: var(--blanco);

        .cont_superior{
            background: var(--azul-hueso);
            padding-top: 80px;
            
        }

        .cont_inferior{
            padding-top: 3rem;
            padding-bottom: 3rem;

            .cont_img{

                width: 100%;

                img{
                    width: 100%;
                }
            }

            .cont_img:nth-child(1) img{
                rotate: -15deg;
            }

            .cont_img:nth-child(2) img{
                rotate: 15deg;
            }

            .cont_img:nth-child(3) img{
                rotate: -15deg;
            }
        }            
        
    }
</style>

<script>

    import FooterComp from '@/components/FooterComp.vue'
    
    export default{
        components: {
            FooterComp
        },

        methods: {
      abrir () {
        const navbar = document.querySelector('.navbar')
          navbar.querySelector('.toggle').addEventListener('click',()=>{          
          navbar.classList.toggle('collapsed')          
        })

        window.addEventListener('scroll',()=>{
          let windowY = window.pageYOffset
          let navbarHeight = document.querySelector('.navbar').offsetHeight
          if(windowY>navbarHeight) navbar.classList.add('sticky')
          else navbar.classList.remove('sticky')
        })
      },
      cerrar () {
        const navbar = document.querySelector('.navbar')
        navbar.classList.remove('collapsed')   
       
      }
    }
    }

</script>