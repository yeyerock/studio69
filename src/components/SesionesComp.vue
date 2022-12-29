<template>
    <section id="sesiones">
        <v-container>
            
            <h1 class="titulo">Nuestras sesiones</h1>
            
            <v-row>

                <!-- Trantrico -->
                <v-col 
                    cols="12"   
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/relax_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center" @click="toggleRelax">
                            <div class="cont_imagen">
                                <img src="../assets/sesiones/tantrico.svg" alt="">
                            </div>
                            <v-btn class="enlace"
                                text
                            >
                                Tántrico
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>  

                <v-container v-if="relax" fluid>
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/tantrico_relax_1.mp4"  playsinline autoplay muted loop></video>
                        

                        <v-container class="cont_elementos text-justify d-flex flex-column justity-content-center align-items-center">
                            <h1 class="titulo">Tántrico Relax</h1>

                            <p class="textos">
                                Consta de un tiempo lineal, relajante físico, mental y sexual. Una sensación reconfortable y renovador energético. 
                            </p>

                            <p class="textos">
                                Es un masaje relajante de cuerpo completo, 
                                ejerciendo presión suave y lento fusionado con mi técnica tántrica  que es un masaje muy sutil y 
                                energético.
                            </p>

                            <v-btn dark class="boton enlace"
                                
                            >
                                Agendar una cita
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-container>
        
                <!-- Erotico -->

                <v-col 
                    cols="6"        
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/eros_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center" @click="toggleErotico">
                            <div class="cont_imagen">
                                <img src="../assets/sesiones/erotico.svg" alt="">
                            </div>
                            <v-btn text class="enlace">
                                Erótico
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>    

                <v-container v-if="erotico" fluid>
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/tantrico_ero_1.mp4"  playsinline autoplay muted loop></video>
                        

                        <v-container class="cont_elementos text-justify d-flex flex-column justity-content-center align-items-center">
                            <h1 class="titulo">Tántrico Erótico</h1>

                            <p class="textos">
                                Esta sesión lo aperturo con un masaje relajante que te guiaré a un trance de relajación físico y mental, ya en este modo estimularé tu piel con un masaje tántrico que es sutil y reconfortable para poderlo transmutar al masaje erótico, que es sensual y seductor momento en caminado al climax y de esa manera, si así lo deseas , materializar tu liberación. 
                            </p>

                            <v-btn dark class="boton enlace">
                                Agendar una cita
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-container>

                <!-- Sensorial -->
                <v-col 
                    cols="6"        
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/senso_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center" @click="toggleSensorial">
                            <div class="cont_imagen">
                                <img src="../assets/sesiones/sensorial.svg" alt="">
                            </div>
                            <v-btn text class="enlace">
                                Sensorial
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>    

                <v-container v-if="sensorial" fluid>
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/sensorial_1.mp4"  playsinline autoplay muted loop></video>
                        

                        <v-container class="cont_elementos text-justify d-flex flex-column justity-content-center align-items-center">
                            <h1 class="titulo">Tántrico Sensorial</h1>

                            <p class="textos">
                                Conectar la estimulación de tus cinco sentidos, algunos darle potencialidad y otros reconocerlos. 
                                Se enfoca un estado de relajación mental y fisico, apoyandome con un mesaje relajante frontal y simultaneamente me estare apoyando de elementos para la estimulación auditiva, visual, tacto, olfativa y por supuesto gustativa en un espacio sensual, seductora  y sí así lo deseas , materializar tu liberación. 
                            </p>

                            <v-btn dark class="boton enlace">
                                Agendar una cita
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-container>

                <!-- Abhyanga Pada -->

                <v-col 
                    cols="6"        
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/foot_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center" @click="togglePada">
                            <div class="cont_imagen">
                                <img src="../assets/sesiones/pada.svg" alt="">
                            </div>
                            <v-btn text class="enlace">
                                Abhyanga Pada
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>    

                <v-container v-if="pada" fluid>
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/foot_1.mp4"  playsinline autoplay muted loop></video>                        

                        <v-container class="cont_elementos text-justify d-flex flex-column justity-content-center align-items-center">
                            <h1 class="titulo">Abhyanga Pada</h1>

                            <p class="textos">
                                Un masaje relajante y estimulante con mis pies acompañados de aceites corporales cálidos para poder abrir poros y penetre los aceites medicinales, ejerciendo presión en todo tu cuerpo incluyendo el área genital con un suave masaje con mis pies, es un espacio sensual y cálido, si tienes deseo de adorar mis pies puedes hacerlo y así lo deseas, poder materializar tu liberación. 
                            </p>

                            <v-btn dark class="boton enlace">
                                Agendar una cita
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-container>

                <!-- BDSM -->

                <v-col 
                    cols="6"        
                >
                    <v-card class="cont_video">
                        <video src="../assets/videos/bdsm_web.mp4"  playsinline autoplay muted loop></video>
                        
                        <div class="cont_elementos d-flex flex-column justify-center align-center" @click="toggleBdsm">
                            <div class="cont_imagen">
                                <img src="../assets/sesiones/bdsm.svg" alt="">
                            </div>
                            <v-btn text class="enlace">
                                BDSM
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>    

                <v-container v-if="bdsm" fluid>
                    <v-card class="cont_video_seccion">
                        <video src="../assets/videos/bdsm_2.mp4"  playsinline autoplay muted loop></video>                        

                        <v-container class="cont_elementos text-justify d-flex flex-column justity-content-center align-items-center">
                            <h1 class="titulo">BDSM</h1>

                            <p class="textos">
                                Consta de una sesión liberadora para las personas que exploran su sexualidad alternativa y suelen exponerse a sus límites físico y mental.
                            </p>

                            <p class="textos">
                                “Todas las prácticas del BDSM,  si están bien practicadas, deben cumplir con otra sigla que es la SSC que en español se traduce como Sensato, Seguro y Consensuado y esto tiene que ver con personas mayores de edad que optan por enriquecer sus sexualidad con estas otras alternativas”
                            </p>

                            <v-btn dark class="boton enlace">
                                Agendar una cita
                            </v-btn>
                        </v-container>
                    </v-card>
                </v-container>
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
                -o-filter: blur(15px);
                filter: blur(15px);
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

        .cont_video_seccion{
              width: 100%;
            height: 60vh;
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
                background: var(--transparente-oscuro);

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