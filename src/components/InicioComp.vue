<template>
    <section id="inicio">
        <v-container>
            <h1 class="titulo text-right">
                Espacio y tiempo de liberación.
                No solo sexual, si no integral.
            </h1>
                
            <v-card class="cont_video">
                <video src="../assets/videos/general_web.mp4" playsinline autoplay muted loop></video>
            </v-card>

            <v-card class="cont_elementos"
                elevation="0"
            >
                <v-card-text class="textos">
                    Vive una experiencia única a través de sesiones liberadoras y meditativas, para poder expandir tu ser físico, mental y sexual, sin tabúes, prejuicios o presiones. 
                </v-card-text>
            </v-card>
        </v-container>      
    </section>
</template>

<style lang="scss">
    #inicio{
        width: 100%;

        .titulo{
            font-size: 2rem;
        }

        .cont_video{
            width: 100%;
            height: 30vh;
            overflow: hidden;
            margin-bottom: 5%;

            video{
                width: 100%;
                height: 100%;
                transform:scale(1.3);
            }
        }

        .cont_elementos{
            background: var(--azul-oscuro);

            .textos{
                color: var(--azul-hueso) !important;
            }
        }
    }
</style>