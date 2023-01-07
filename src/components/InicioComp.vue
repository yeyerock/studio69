<template>
    <section id="inicio">
        <v-container class="d-flex flex-column">
            <div class="cont_titulo align-self-end">
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

            <div class="contenedor d-flex flex-column align-lg-center py-3 mb-4">              
                <div class="cont_video ">
                    <video class=""  playsinline autoplay loop muted src="../assets/videos/general_web.mp4"></video>
                </div>
                <div class="cont_elementos align-self-end pa-8 reveal fade-left">
                    <p class="textos">Vive una experiencia única a través de sesiones liberadoras y meditativas, para poder expandir tu ser físico, mental y sexual, sin tabúes, prejuicios o presiones. </p>
                </div>
           </div>
        </v-container>    
    </section>
</template>

<style lang="scss">
    #inicio{
        width: 100%;
        min-height:50vh;

        .cont_titulo{
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
        }
        
        .contenedor{
            width: 100%;
    
            .cont_video{
                width: 100%;
                z-index: 1;
                
                video{
                    width: 100%;
                    height: auto;
                }
            }
    
            .cont_elementos{
                width: 80%;
                position: relative;
                margin-top: -5%;
                margin-right: 0;
                background: var(--azul-oscuro);
    
                .textos{
                    color: var(--azul-hueso) !important;
                    text-align: justify;
                    word-break:normal;
                }
            
            }
        }
    }
</style>