<template>
    <div class="d-flex flex-column">
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
                    <div class=" mx-2 "><a class="enlace"  href="https://instagram.com" ><v-icon class="icono">mdi-instagram</v-icon></a></div>
                    <div class=" mx-2 "><a class="enlace"   href="https://facebook.com"><v-icon class="icono">mdi-facebook</v-icon></a></div>
                    <div class=" mx-2 "><a class="enlace"   href="https://api.whatsapp.com/send?phone=5214425772540&text=Hola%20necesito%20información%20sobre%20los%20masajes%20!" target="_blank"><v-icon class="icono">mdi-whatsapp</v-icon></a></div>
                   
                </div>
            </ul>
            
        
            
            <div class="toggle mx-2" v-on:click="abrir()">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            
        </header>

        <section id="laura" class="mt-12">       
            <v-container>   
                <div class="contenedor_superior px-5 pt-5 pt-sm-12 px-sm-12">
                    <div class="cont_titulo">
                        <h1 class="titulo">
                            Hola, soy Laura Cuen
                        </h1>
                    </div>
                    <v-row>
                        <v-col>
                            <p class="textos text-justify">
                                Soy una persona espiritual en constante aprendizaje de múltiples materias, como la metafísica, holística, escénica (danza-teatro), músicoterapía, vivenciando mis propios y distintos caminos de sanación, liberación, el bello arte del perdón, formando mi criterio a base de mis propias experiencias para mi desarrollo personal, tanto en terapias tradicionales y muchas otras alternativas. 
                            </p>
                        </v-col>
                    </v-row>
                </div>           
                
            </v-container>

            <div class="cont_inferior">
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    >
                        <div class="cont_img mx-auto">
                                <img src="../assets/laura/lau_03.jpg" alt=""/>
                            <!-- <v-parallax
                                class="img_parallax"
                                height="400"
                                src="../assets/laura/lau_03.jpg"
                            >
                            </v-parallax> -->
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <div class="cont_img mx-auto">
                            <img
                                class="w-100"
                                
                                src="../assets/laura/lau_02.jpg"
                                />
                           
                        </div>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="6"
                        class="mx-auto"
                    >
                        <div class="cont_img mx-auto">
                            <img
                                class="w-100"
                                src="../assets/laura/lau_01.jpg"
                            />                              
                        </div>
                    </v-col>
                </v-row>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    #laura{
        width: 100%;
        background: var(--blanco);

        .contenedor_superior{
            background: var(--azul-hueso);
            padding-bottom: 100px;

                  
        }

        .cont_inferior{
            width: 100%;
            position: relative;

            .cont_img{
                width:70%;

                img{
                    width: 100%;
                }
            }

            .col-sm-6:nth-child(1) .cont_img{
                rotate: 15deg;

            }

            .col-sm-6:nth-child(2) .cont_img{
                rotate: -15deg;
            }

            .col-sm-6:nth-child(3) .cont_img{
                rotate: 15deg;
            }
        }

        
    }
</style>

<script>

    // import FooterComp from '@/components/FooterComp.vue'
    
    export default{
        components: {
            
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