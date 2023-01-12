<template>
    <section id="sesiones">
        <v-container>
            
            <h1 class="titulo mb-5">Nuestras sesiones</h1>
            
            <v-row class="justify-center">

                <!-- Trantrico -->
                <v-col 
                    cols="12"
                    sm="4"
                    md="auto"
                    
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/relax_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center pa-3 pa-sm-5" @click="toggleRelax">
                            <div class="cont_imagen d-flex justify-center align-center">
                                <img src="../assets/sesiones/tantrico.svg" alt="">
                            </div>
                            <p class="enlace text-center">
                                Tántrico
                            </p>
                        </div>
                    </v-card>
                </v-col>  

                <v-col 
                    cols="12" 
                    class="order-md-last"
                    v-if="relax"
                >
                    <!-- <v-container  fluid> -->
                        <v-card class="cont_video_seccion">
                            <video src="../assets/videos/tantrico_relax_1.mp4"  playsinline autoplay muted loop></video>
                            
                            <v-container class="cont_elementos text-justify d-flex flex-column justity-center align-start pa-5 pa-lg-12">
                                <h1 class="titulo">Tántrico</h1>
        
                                <p class="textos">
                                    Tendrás un tiempo meditativo y energético,
                                    conectarás tu mente con tu cuerpo mediante un
                                    masaje relajante fusionado con mi técnica
                                    tántrica, apoyándome de instrumentos de
                                    armonización, respiraciones profundas y
                                    acompañada de posturas tántricas para lograr
                                    equilibrar tu energía kundalini.
                                </p>
    
                                <v-btn 
                                    dark
                                    class="boton enlace"
                                >
                                <a class="enlace" href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20sesión%20Tántrica!">Agendar una cita</a>
                                </v-btn>
                            </v-container>
                        </v-card>
                    <!-- </v-container> -->
                </v-col>

                
        
                <!-- Erotico -->

                <v-col 
                    cols="6"    
                    sm="4"
                    md="auto"
                        
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/eros_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center pa-3 pa-sm-5" @click="toggleErotico">
                            <div class="cont_imagen d-flex justify-center align-center">
                                <img src="../assets/sesiones/erotico.svg" alt="">
                            </div>
                            <p class="enlace text-center">
                                Erótico
                            </p>
                        </div>
                    </v-card>
                </v-col>    

                <v-col 
                    cols="12" 
                    class="order-md-last"
                    v-if="erotico"
                >
                    <!-- <v-container  fluid> -->
                        <v-card class="cont_video_seccion">
                            <video src="../assets/videos/tantrico_ero_1.mp4"  playsinline autoplay muted loop></video>
                            

                            <v-container class="cont_elementos text-justify d-flex flex-column justity-center align-start pa-5 pa-lg-12">
                                <h1 class="titulo">Tántrico Erótico</h1>

                                <p class="textos">
                                    Una secuencia para lograr un estado evolutivo.
                                </p>

                                <p class="textos">
                                    Te guiaré a un trance de relajación físico y mental,
                                    estimularé tu cuerpo con mi masaje tántrico que es
                                    sutil y reconfortante para transmutar al masaje
                                    erótico, que es sensual y seductor, integraré
                                    partes de mi cuerpo, finalizando con un
                                    estimulante masaje lingam.
                                </p>

                                <v-btn dark class="boton enlace">
                                    <a class="enlace" href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20sesión%20Tántrico%20Erótico!">Agendar una cita</a>
                                </v-btn>
                            </v-container>
                        </v-card>
                    <!-- </v-container> -->
                </v-col>
                

                <!-- Sensorial -->
                <v-col 
                    cols="6"  
                    sm="4"
                    md="auto"
                           
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/senso_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center pa-3 pa-sm-5" @click="toggleSensorial">
                            <div class="cont_imagen d-flex justify-center align-center">
                                <img src="../assets/sesiones/sensorial.svg" alt="">
                            </div>
                            <p class="enlace text-center">
                                Sensorial
                            </p>
                        </div>
                    </v-card>
                </v-col>    

                <v-col
                    cols="12"
                    class="order-md-last"
                    v-if="sensorial"
                >
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/sensorial_1.mp4"  playsinline autoplay muted loop></video>
                        
                        <v-container class="cont_elementos text-justify d-flex flex-column justity-center align-start pa-5 pa-lg-12">
                            <h1 class="titulo">Tántrico Sensorial</h1>

                            <p class="textos">
                                Conectaré tus cinco sentidos a través de la estimulación de estos para potencializar y reconocerlos.
                            </p>

                            <p class="textos">
                                Llegarás a un estado de relajación mental y físico, a
                                través de un masaje relajante, integraré elementos para
                                la estimulación auditiva, visual, tacto, olfativa y
                                gustativa en un espacio sensual y seductor.
 
                            </p>

                            <v-btn dark class="boton enlace">
                                <a class="enlace" href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20sesión%20Tántrico%20Sensorial!">Agendar una cita</a>
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-col>

                

                <!-- Abhyanga Pada -->

                <v-col 
                    cols="6"        
                    sm="4"
                    md="auto"
                    
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/foot_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center pa-3 pa-sm-5" @click="togglePada">
                            <div class="cont_imagen d-flex justify-center align-center">
                                <img src="../assets/sesiones/pada.svg" alt="">
                            </div>
                            
                                <p class="text-center enlace">
                                    Abhyanga Pada
                                </p>
                            
                        </div>
                    </v-card>
                </v-col>    

                <v-col
                    cols="12"
                    class="order-md-last"
                    v-if="pada"
                >
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/foot_1.mp4"  playsinline autoplay muted loop></video>                        

                        <v-container class="cont_elementos text-justify d-flex flex-column justity-center align-start pa-5 pa-lg-12">
                            <h1 class="titulo">Abhyanga Pada</h1>

                            <p class="textos">
                                Te liberaré de la tensión corporal ejerciendo presión con mis pies.
                            </p>

                            <p class="textos">
                                Un masaje relajante y estimulante con mis pies
                                acompañados de aceites cálidos y medicinales, ejerceré
                                presión en todo tu cuerpo incluyendo el área genital con
                                un suave masaje con mis pies, estarás en un espacio
                                sensual y cálido.
                            </p>

                            <v-btn 
                                dark 
                                medium
                                class="boton enlace">
                                <a class="enlace" href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20sesión%20Abhyanga%20Pada!">Agendar una cita</a>
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-col>

                <!-- BDSM -->

                <v-col 
                    cols="6"
                    sm="4"
                    md="auto"
                           
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/bdsm_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center pa-3 pa-sm-5" @click="toggleBdsm">
                            <div class="cont_imagen d-flex justify-center align-center">
                                <img src="../assets/sesiones/bdsm.svg" alt="">
                            </div>
                            <p class="text-center enlace">
                                BDSM
                            </p>
                        </div>
                    </v-card>
                </v-col>    

                <v-col
                    cols="12"
                    class="order-md-last"
                    v-if="bdsm"
                >
                <v-card class="cont_video_seccion">
                    <video src="../assets/videos/bdsm_2.mp4"  playsinline autoplay muted loop></video>                        

                    <v-container class="cont_elementos text-justify d-flex flex-column justity-center align-start pa-5 pa-lg-12">
                        <h1 class="titulo">BDSM</h1>

                        <p class="textos">
                            Una sesión liberadora para personas que exploran su
                            sexualidad tocando su limite mental y físico.
                        </p>

                        <p class="textos">
                            Mis aliados serán tu vulnerabilidad y la incertidumbre,
                            cerrare la sesión con un masaje tántrico para armonizar
                            tu integridad.
                        </p>

                        <p class="textos">
                            “Todas las prácticas del BDSM son Sensato, Seguro y Consensuado"
                        </p>

                        <v-btn 
                            dark 
                            medium
                            class="boton enlace"
                        >
                            <a class="enlace" href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20sesión%20BDSM%20!">Agendar una cita</a>
                        </v-btn>
                    </v-container>
                </v-card>
                </v-col>
                <!-- <v-container  fluid>
                    
                </v-container> -->
            </v-row>
        </v-container>
    </section>
</template>

<style lang="scss">

    #sesiones{
        width: 100%;

        .cont_video{
            width: 100%;
            height: 30vh;
            position: relative;
            overflow: hidden;

            video{
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                position: absolute;
                object-fit: cover;
              
                transform: scale(1.1);
            }

            .cont_elementos{
                width: 100%;
                height: 100%;
                position: relative;

                .cont_imagen{
                    width: 40%;
                    height: auto;
                    margin-bottom: 5%;

                    img{
                        width: 100%;
                    }
                }
            }        
        }

        .cont_video:hover{
            cursor: pointer;
        }

        .cont_video_seccion{
            width: 100%;
            height: auto;
            position: relative;
            overflow: hidden;      

            video{
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                position: absolute;
                object-fit: cover;
                transform: scale(1.1);                
            }

            .cont_elementos{
                width: 100%;
                height: 85vh;
                position: relative;
               

                .titulo, .textos{
                    color: var(--azul-hueso);
                }
            } 
        }
    }   

</style>

<script>
  export default {
    data () {
        return {
            relax: false,
            erotico: false,
            sensorial: false,
            pada: false,
            bdsm: false,

        }
    },
    methods:{
        toggleRelax : function() {
            this.relax = !this.relax;
            this.erotico = false;
            this.sensorial = false;
            this.pada = false;
            this.bdsm = false;
        },
        toggleErotico : function() {
            this.relax = false;
            this.erotico = !this.erotico;
            this.sensorial = false;
            this.pada = false;
            this.bdsm = false;
        },
        toggleSensorial : function() {
            this.relax = false;
            this.erotico = false;
            this.sensorial = !this.sensorial;
            this.pada = false;
            this.bdsm = false;
        },
        togglePada : function() {
            this.relax = false;
            this.erotico = false;
            this.sensorial = false;
            this.pada = !this.pada;
            this.bdsm = false;
        },
        toggleBdsm : function() {
            this.relax = false;
            this.erotico = false;
            this.sensorial = false;
            this.pada = false;
            this.bdsm = !this.bdsm;
        },
    }
  }
</script>