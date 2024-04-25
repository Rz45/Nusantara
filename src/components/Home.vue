<template>    
    
    <section id="hero" 
        class="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
        <div class="hero-overlay"></div>
        <main>
            <h4>WELCOME TO</h4>
            <h1>NUSANTARA PROJECT</h1>
            <p>Tire Warehouse Management System</p>
            <a class="btn btn-success" href="#" role="button">Get Started</a>
        </main>
    </section>

</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style>

:root {
    --pink: #f14e95;
    --bg: #0a0a0a;
    --shadow: 0 2px rgb(0 0 0 / 0.5);
}

.hero-overlay {
    background-image: url('../assets/ban.png');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(5px);
    filter: grayscale(70%);
}

.hero {
    position: relative;
    min-height: 100vh;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
}

.hero h1, .hero h4, .hero p {
    color: rgb(255, 255, 255);
    text-shadow: var(--shadow);
}

.hero h1 {
    font-family: 'montserrat';
    font-size: 4rem;
    font-weight: 500;
}

.hero h4 {
    font-size: 1.2rem;
}

.hero p {
    font-size: 1.2rem;
}

</style>