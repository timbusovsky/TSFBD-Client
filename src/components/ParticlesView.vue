<template>
  <div id="app">
    <vue-particles
      id="tsparticles"
      
      url="http://foo.bar/particles.json"
    />

    <vue-particles
      id="tsparticles"

      :options="{
        fpsLimit: 120,
        particles: {
          color: {
            value: '#e81416',
            animation: { enable: true, speed: 40, synch: false },
          },
          move: {
            direction: 'bottom',
            enable: true,
            random: true,
            speed: { min: 3, max: 6 },
            straight: true,
            warp: true,
          },
          number: {
            density: {
              enable: true,
            },
            value: 1000,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'star',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>
