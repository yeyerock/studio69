<template>
    <header class="navbar">
        <div class="logo mx-2">
			<router-link to="/"  >
				<img class="logo_menu "  src="../assets/internal/logo_5.png" >
			</router-link> 
		</div>		
		
		<ul class="links">
			<li v-on:click="cerrar()" class=" mx-3"> <a class="enlace " href="#sesiones">Sesiones</a> </li>
            <li v-on:click="cerrar()" class=" mx-3"><router-link class="enlace " to="/laura">Conoce a Laura</router-link> </li>
		
			<div class="cont_redes d-flex justify-content-center mx-auto">
				<div class=" mx-2 "><a class="enlace" target="_blank" href="https://www.instagram.com/studio.tantrico/" ><v-icon class="icono">mdi-instagram</v-icon></a></div>
                <div class=" mx-2 "><a class="enlace"  target="_blank" href="https://twitter.com/LauMasajista"><v-icon class="icono">mdi-twitter</v-icon></a></div>
				<div class=" mx-2 "><a class="enlace" target="_blank"  href="https://api.whatsapp.com/send?phone=5214426802582&text=Hola%20necesito%20información%20sobre%20los%20masajes%20!"><v-icon class="icono">mdi-whatsapp</v-icon></a></div>
            </div>
		</ul>
		
	
		
		<div class="toggle mx-2" v-on:click="abrir()">
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>
		</div>
		
	</header>

</template>

<style lang="scss">
    .navbar {
        background: var(--transparente-oscuro);
        padding: 15px;
        width: 100vw;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
    }

    .navbar .logo .logo_menu{
        width: 6rem;
        height: auto;
    }

    .cont_redes .icono{
        color: var(--blanco);
        font-size: 1.4rem;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    .navbar ul.links {
        margin-right: 0;
        list-style: none;
        display: flex;
        transition: 0.4s ease all, 0s ease background;
    }

    .toggle{
        display: none;
    }

    .enlace {
        text-decoration: none;
        color: var(--blanco) !important;
        text-transform: uppercase;
        padding: 0 15px;
        display: flex;
        align-items: center;
        transition: 0.4s ease all, 0s ease margin;
    }

    .enlace:hover,
    .icono:hover {
        color: var(--azul-oscuro) !important;
        cursor: pointer;
    }

    .navbar.sticky {
        position: fixed;
        z-index: 40;
    }
    .navbar.sticky ~ main {
        position: relative;
        z-index: 20;
        top: 65px;
    }

    @media screen and (max-width: 1024px) {
        .navbar .right {
            height: 0;
            overflow: hidden;
        }
        .toggle {
            position: absolute;
            top: 32.5px;
            right: 20px;
            z-index: 99;
            transform: translateY(-50%);
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            transition: 0.3s;
        }
        .toggle > * {
            width: 80%;
            height: 2px;
            background: var(--blanco);
            margin: 3px 0;
            transition: 0.3s;
        }
        .navbar.collapsed .toggle .line1 {
            transform: rotate(-45deg) translate(-4px, 5px);
            transition: 0.3s;
        }
        .navbar.collapsed .toggle .line2 {
            opacity: 0;
            transition: 0.3s;
        }
        .navbar.collapsed .toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
            transition: 0.3s;
        }
        .navbar.collapsed .logo {
            position: absolute;
            z-index: 44;
        }
        .navbar .links {
            position: fixed;
            background: var(--azul-oscuro);
            z-index: 40;
            top: 0;
            left: -100%;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
        }
        .navbar .links li:first-child {
            margin-top: 6rem;
        }
        .navbar.collapsed .links {
            left: 0;
        }
        .enlace {
            text-align: left;
            height: 65px;
        }

        .cont_redes{
            margin-top: 1rem;
        }

        .cont_redes .enlace .icono{
            font-size: 1.5rem;
        }

        .navbar.collapsed .links li {
            width: 100%;
        }
        .enlace:hover {
            color: var(--azul-oscuro);
        }
        .navbar.collapsed .right {
            position: fixed;
            width: 45vw;
            text-align: center;
            height: auto;
            bottom: 40px;
            left: 22.5vw;
            transform: translateX(-50%);
            z-index: 45;
        }
        .navbar.collapsed ~ main {
            filter: blur(1px);
            opacity: 0.8;
        }
        .navbar.sticky {
            position: fixed;
            z-index: 40;
        }
    }
</style>

<script>
    export default {
   
   methods: {
      abrir () {
        const navbar = document.querySelector('.navbar')
          navbar.querySelector('.toggle').addEventListener('click',()=>{          
          navbar.classList.toggle('collapsed')          
        })

        window.addEventListener('scroll',()=>{
          let windowY = window.pageYOffset
          let navbarHeight = document.querySelector('.navbar').offsetHeight
          if(windowY>navbarHeight) navbar.classList.add('sticky')
          else navbar.classList.remove('sticky')
        })
      },
      cerrar () {
        const navbar = document.querySelector('.navbar')
        navbar.classList.remove('collapsed')   
       
      }
    }
}
</script>