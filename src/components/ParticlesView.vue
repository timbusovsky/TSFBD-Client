<template>
    <div id="app">
        <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" url="http://foo.bar/particles.json" />

        <vue-particles
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="{
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: '#BF40BF',
                            animation: {enable: true, speed: 40, synch: false}
                        },
                        move: {
                            direction: 'bottom',
                            enable: true,
                            random: true,
                            speed: {min: 3, max: 6},
                            straight: false,
                            warp: true
                            

                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 500
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'star'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
        />
    </div>
</template>