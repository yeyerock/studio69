<template>
    <section id="inicio">
        <v-container class="cont_parallax">
            <div class="cont_titulo d-flex justify-end w-100">
                <h1 class="titulo text-right mb-5">
                    <span class="mr-4">Espacio </span>
                    <span class="mr-4">y </span>
                    <span class="mr-4">tiempo </span>
                    <span class="mr-4">de </span>
                    <span class="mr-4">liberación.</span>
                    <span class="mr-4">No </span>
                    <span class="mr-4">solo </span>
                    <span class="mr-4">sexual, </span>
                    <span class="mr-4">sino </span>
                    <span class="mr-4">integral.</span>
                </h1>
            </div>
            
 <!--
            <div class="d-flex flex-column flex-sm-row justify-sm-center align-sm-center">
                <v-card class="cont_video d-flex justify-center align-center">
                    <video src="../assets/videos/general_web.mp4" playsinline autoplay muted loop></video>
                </v-card>
    
                <v-card class="cont_elementos"
                    elevation="0"
                >
                    <v-container class="text-justify">
                        <p class="textos">
                            Vive una experiencia única a través de sesiones liberadoras y meditativas, para poder expandir tu ser físico, mental y sexual, sin tabúes, prejuicios o presiones. 
                        </p>
                    </v-container>                   
                </v-card>
            </div> -->

            <div class="box">
                <div class="container">
                     <div class="video_box jarallax">
                        <video class="jarallax-img" src="../assets/videos/general_web.mp4" playsinline autoplay muted loop></video>
                    </div>

                    <div data-jarallax-element = "0 - 200" class="content text-justify pa-5 pa-lg-12">
                         <p class="textos">
                            Vive una experiencia única a través de sesiones liberadoras y meditativas, para poder expandir tu ser físico, mental y sexual, sin tabúes, prejuicios o presiones. 
                        </p>
                    </div>
                </div>
            </div>
                
            
        </v-container>    
        
        
    </section>
</template>

<style lang="scss">
    #inicio{
        width: 100%;
        padding-bottom: 300px;

        .titulo{
            font-size: 2rem;
            writing-mode: rl-bt;
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

            span:nth-child(6) {
                animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
            }

            span:nth-child(7) {
                animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
            }

            span:nth-child(8) {
                animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
            }

            span:nth-child(9) {
                animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
            }

            span:nth-child(10) {
                animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
            }
                        
        }

        .cont_video{
            width: 100%;
            height: 30vh;
            overflow: hidden;
            margin-bottom: 5%;
            background: none;
            box-shadow: none;

            video{
                width: 100%;
                height: 100%;
                transform:scale(1.3);
            }
        }

        .cont_elementos{
            width: 100%;
            background: var(--azul-oscuro);

            .textos{
                color: var(--azul-hueso) !important;
            }
        }
    }

    #inicio:before{
        content: '';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .cont_parallax{
        position: relative;   
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        .container{
            position: relative;
            width: 1000px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .video_box{
                position: relative;
                width: 800px;
                height: 400px;                
                overflow: hidden;
                margin-bottom: 5%;
    
                video{
                    width: 100%;
                    height: 100%;
                   object-fit: cover;
                }
            }

            .content{
                position: absolute;
                right: 10%;
                margin-bottom: 200px;
                margin-top: 40px;
                z-index: 1;
                max-width: 400px;
                background: var(--azul-oscuro);
                color: var(--azul-hueso);
                border-bottom: 6px solid var(--azul-hueso);
            }
        }
    }
</style>