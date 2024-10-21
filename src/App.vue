<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ParticlesView from './components/ParticlesView.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      
      <h1>welcome to tsfbd.com</h1>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
      <img src="C:\Users\timbu\Documents\Projects\ITDB\TSFBD Client Tester\src\assets\tsresized.png" class="logo" alt="">
    </div>
  </header>

  <RouterView />
    <img src="C:\Users\timbu\Documents\Projects\ITDB\TSFBD Client Tester\src\assets\fb.png" alt="" class="logo">
    <ParticlesView id="particles" />
</template>

<script>
  export default {
    data() {
      return {
        components: {
          ParticlesView
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  display: flex;
  font-size: 25px;
  justify-content: center;
}

.nav-link {
  padding: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  justify-content: center;
}

h1 {
  display: grid;
  color: black;
  justify-items: center;
  
}

img {
  padding: 20px;
}

#particles {
  position: fixed;
  z-index: -1;
}

</style>
