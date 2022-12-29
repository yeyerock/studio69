<template>
    <section id="info">
        <v-container>            
            
            <h1 class="titulo">Tu comodidad <br>Nuestra prioridad.</h1>
            <p class="textos">Studio tántrico está amenizado para tu plena seguridad y comodidad.</p>
               
            <v-col class="cont_elementos">
                <v-col class="text-center">
                    <v-icon class="icono">mdi-car</v-icon>
                    <p class="textos">Estacionamiento</p>
                </v-col>

                <v-col class="text-center">
                    <v-icon class="icono">mdi-shower</v-icon>
                    <p class="textos">2 baños completos</p>
                </v-col>
                        
                <v-col class="text-center">
                    <v-icon class="icono">mdi-sofa</v-icon>
                    <p class="textos">Amplias instalaciones</p>
                </v-col>
            </v-col>
            
            <v-col cols="12">
                <vueper-slides class="no-shadow" 
                    autoplay        
                    bullets-outside 
                    transition-speed="250"
                    fixed-height="220px"
                >
                    <vueper-slide 
                        v-for="(slide, index) in slides"
                        :key="index"
                        :image="slide">
                    </vueper-slide>
                </vueper-slides>
            </v-col>
        </v-container>
    </section>
</template>

<script>

    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    
    export default{
        components: { VueperSlides, VueperSlide },

        data(){
            return{
                slides: [require('../assets/carrusel/01.jpg'),
                            require('../assets/carrusel/02.jpg'),
                            require('../assets/carrusel/03.jpg')],
            }
        },   
    }
</script>

<style lang="scss">
    #info{
        width: 100%;

        .cont_elementos{

            .icono{
                font-size: 3rem;
            }
        }
    }
</style>