<template>
    <section id="inicio">
        <v-container>
            <div class="cont_titulo d-flex justify-end w-100">
                <h1 class="titulo text-right mb-5">
                    Espacio y tiempo de liberación.
                    No solo sexual, sino integral.
                </h1>
            </div>
            

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
            </div>
                
            
        </v-container>      
    </section>
</template>

<style lang="scss">
    #inicio{
        width: 100%;

        .titulo{
            font-size: 2rem;
            writing-mode: rl-bt;
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
</style>