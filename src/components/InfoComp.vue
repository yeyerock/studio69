<template>
    <section id="info">
        <v-container>            
            
            <h1 class="titulo mb-5">Tu comodidad es mi prioridad.</h1>
            
            <v-row>
                <v-col 
                    lg="6"
                    class="cont_elementos text-center"
                >
                
                    <p class="textos">Studio tántrico está amenizado para tu plena seguridad y comodidad.</p>
                    <v-row>
                        <v-col 
                            cols="12" 
                            sm="6" 
                            class="text-center"
                        >
                            <v-icon class="icono">mdi-car</v-icon>
                            <p class="textos">Estacionamiento</p>
                        </v-col>
        
                        <v-col 
                            cols="12" 
                            sm="6" 
                            class="text-center"
                        >
                            <v-icon class="icono">mdi-shower</v-icon>
                            <p class="textos">2 baños completos</p>
                        </v-col>
                                
                        <v-col 
                            cols="12" 
                            sm="6" 
                            class="text-center"
                        >
                            <v-icon class="icono">mdi-sofa</v-icon>
                            <p class="textos">Amplias instalaciones</p>
                        </v-col>
                    </v-row>                
                </v-col>
            
                <v-col 
                    cols="12"
                    sm="7"
                    lg="6"
                    xl="5"
                >
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
            </v-row>
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
                color: var(--azul-hueso) !important;
            }
        }
    }
</style>