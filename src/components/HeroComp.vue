<template>
    <section id="hero">
        <div class="cont_video">
            <video class="hero_vertical" src="../assets/videos/hero_studio69_vertical_full_1.mp4" playsinline autoplay muted loop></video>
            <video class="hero_horizontal" src="../assets/videos/hero_studio69_full_1.mp4" playsinline autoplay muted loop></video>
                   
        </div>      
    </section>
</template>

<style lang="scss">

    #hero{
        width: 100%;

        .cont_video{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            text-align: center;

            video{
                width: 100%;
                height: auto;
                top: 0;
                left: 0;
            }

            .hero_horizontal{
                display: none;
            } 
        }     
    }   

</style>