<template>
    <footer id="footer">
        <v-container class="d-flex flex-column justify-center align-center">
            <v-row>            
                <v-col 
                    cols="12"
                    sm="6" 
                    class="mx-auto  d-flex justify-center align-center"
                >
                    <div class="cont_imagen mx-auto">
                        <img src="../assets/internal/logo_final_solotexto.png" alt="">
                    </div>
                </v-col>
                <v-col 
                    cols="12"
                    sm="6"  
                    class="mx-auto d-flex flex-column justify-center align-center"
                >
                    
                    <div class="cont_iconos d-flex justify-center align-center">
                        <div class="mx-3 mb-sm-4">
                            <a class="enlace" target="_blank" href="https://www.instagram.com/studio.tantrico/">
                                <v-icon class="icono">mdi-instagram</v-icon>
                            </a>
                        </div>
                        <div class="mx-3 mb-sm-4">
                            <a class="enlace" target="_blank" href="https://twitter.com/LauMasajista">
                                <v-icon class="icono">mdi-twitter</v-icon>
                            </a>
                        </div>
                        <div class="mx-3 mb-sm-4">
                            <a class="enlace" target="_blank" href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20los%20masajes%20!">
                                <v-icon class="icono">mdi-whatsapp</v-icon>
                            </a>
                        </div>
                    </div>
                    <div class="justify-center">
                        <a class="enlace" target="_blank" href="https://www.google.com/maps/place/Milenio+III,+Santiago+de+Quer%C3%A9taro,+Qro./@20.5958233,-100.3510674,15z/data=!3m1!4b1!4m5!3m4!1s0x85d35b5412d556f3:0x1d68f196ba817575!8m2!3d20.5951924!4d-100.3479663">Milenio III, Santiago de Querétaro, Qro. </a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>

<style lang="scss">
    #footer{
        background: var(--transparente-oscuro);

        .cont_imagen{
            width: 60%;

            img{
                width: 100%;
            }
        }

        .cont_iconos{

            .enlace{
                color: var(--blanco);

                .icono{
                    font-size: 2.5rem;
                    color: var(--blanco);
                }

                .icono:hover{
                    cursor: pointer;
                    color: var( --amarillo) !important;                   
                }
            }

            .enlace:hover{
                cursor: pointer;
                color: var( --amarillo) !important;                   
            }
            
        }
    }
</style>