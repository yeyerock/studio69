<template>
    <footer id="footer">
        <v-container class="d-flex flex-column justify-center align-center">
            <v-col class="mx-auto">
                <div class="cont_imagen mx-auto">
                    <img src="../assets/internal/logo_5.png" alt="">
                </div>
            </v-col>
            <v-col class="mx-auto text-center">
                <div>
                    <a class="enlace" target="_blank" href="https://www.google.com/maps/place/Milenio+III,+Santiago+de+Quer%C3%A9taro,+Qro./@20.5958233,-100.3510674,15z/data=!3m1!4b1!4m5!3m4!1s0x85d35b5412d556f3:0x1d68f196ba817575!8m2!3d20.5951924!4d-100.3479663">Milenio III, Santiago de Querétaro, Qro. </a>
                </div>
                <div class="cont_iconos d-flex justify-center align-center">
                    <div class="ma-3">
                        <a class="enlace" target="_blank" href="https://instagram.com/studio69">
                            <v-icon>mdi-instagram</v-icon>
                        </a>
                    </div>
                    <div class="ma-3">
                        <a class="enlace" target="_blank" href="http://">
                            <v-icon>mdi-twitter</v-icon>
                        </a>
                    </div>
                    <div class="ma-3">
                        <a class="enlace" target="_blank" href="http://">
                            <v-icon>mdi-whatsapp</v-icon>
                        </a>
                    </div>
                </div>
            </v-col>
        </v-container>
    </footer>
</template>

<style lang="scss">
    footer{
        background: var(--azul-oscuro);

        .cont_imagen{
            width: 60%;

            img{
                width: 100%;
            }
        }

        .cont_iconos{

            .enlace{
                color: var(--azul-hueso);
            }
        }
    }
</style>