<template>
    <section id="hero">
        <div class="cont_video">
            <video class="hero_vertical" src="../assets/videos/hero_vertical.mp4" playsinline autoplay muted loop></video>
            <!-- <video class="hero_horizontal" src="../assets/videos/hero_horizontal.mp4" playsinline autoplay muted loop></video> -->
        
            <v-container class="cont_elementos d-flex flex-column justify-center align-center">
                <div class="cont_texto">
                    <h1 class="titulo ">
                        <span class="mr-4">Libera </span>  
                        <span class="mr-4"> tu </span> 
                        <span class="mr-4"> Mente,</span> 
                        <span class="mr-4">Energía,</span> 
                        <span class="mr-4">Sexualidad </span>
                    </h1>
                </div>
                <v-btn class="boton">
                    <router-link to="/home">
                        Agendar cita
                    </router-link>
                </v-btn>
            </v-container>
        </div>      
    </section>
</template>

<style lang="scss">

    #hero{
        width: 100%;

        .cont_video{
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
            text-align: center;

            video{
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                position: absolute;
                object-fit: cover;
            }

            .cont_elementos{
                width: 100%;
                height: 100%;
                position: relative;

                .cont_texto{
                    width: 100%;

                   .titulo{
                        font-size: 4rem;
                        color: var(--azul-hueso);
                        margin-bottom: 5%;
                        transform: scale(0.94);
                        animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

                        @keyframes scale {
                            100% {
                                transform: scale(1);
                            }
                        }

                        @keyframes fade-in {
                            100% {
                                opacity: 1;
                                filter: blur(0);
                            }
                        }



                        span {
                            display: inline-block;
                            opacity: 0;
                            filter: blur(4px);
                        }

                            span:nth-child(1) {
                            animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
                            }

                            span:nth-child(2) {
                            animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
                            }

                            span:nth-child(3) {
                            animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
                            }

                            span:nth-child(4) {
                            animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
                            }

                            span:nth-child(5) {
                            animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
                            }
                        
                   }
                }
                
            }  
        }     
    }   

</style>