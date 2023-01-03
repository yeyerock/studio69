<template>
    <section id="intro"> 
        <div class="cont_video">
            <video src="../assets/videos/hero_vertical.mp4" playsinline autoplay muted loop></video>
        
            <v-container class="cont_elementos d-flex flex-column justify-center align-center">
                <div class="cont_imagen">
                    <img class="" src="../assets/internal/logo_3.png" alt="">
                </div>
                    
                <v-btn class="boton">
                    <router-link to="/home">
                        Entrar
                    </router-link>
                </v-btn>
            </v-container>
        </div>      
    </section>
</template>

<style lang="scss">

    #intro{
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
                -o-filter: blur(15px);
                filter: blur(15px);
                transform: scale(1.1);
            }

            .cont_elementos{
                width: 100%;
                height: 100%;
                position: relative;

                .cont_imagen{
                    width: 50%;
                    height: auto;
                    margin-bottom: 5%;

                    img{
                        width: 100%;
                    }
                }
            }        
        }
    }   

</style>
