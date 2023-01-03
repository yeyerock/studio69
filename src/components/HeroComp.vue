<template>
    <section id="hero">
        <div class="cont_video">
            <video class="hero_vertical" src="../assets/videos/hero_studio69_full_1.mp4" playsinline autoplay muted loop></video>
            <!-- <video class="hero_horizontal" src="../assets/videos/hero_horizontal.mp4" playsinline autoplay muted loop></video> -->
        
            <v-container class="cont_elementos d-flex flex-column justify-between align-start">
             
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
                height: auto;
                top: 0;
                left: 0;
                position: absolute;
                object-fit: fill;
            }

            .cont_elementos{
                width: 100%;
                height: 100%;
                position: relative;
                            
            }  
        }     
    }   

</style>