<template>  
    <div class = "lyric" v-for="lyric in lyrics" v-bind:key="lyric.lineId" v-bind:lyric="lyric">
        <p class="line">{{ lyric.lyric }}</p>
    </div>
</template>

<script>

    import LyricService from '../services/LyricService';

    export default {
        props: {
            lyric: Object
        },
        data() {
            return {
                lyrics: Object
            }
        },
        methods: {
            getLyrics() {
                LyricService
                .getLyrics()
                .then(response => {
                    this.lyrics = response.data;
                })
                .catch(error => {
                    console.log(error + " from getLyrics")
                });
            // },
            // getLyricsBySongId(id) {
            //     LyricService
            //     .getLyricsBySongId(id)
            //     .then(response => {
            //         this.lyrics = response.data;
            //     })
            //     .catch(error => {
            //         console.log(error + " from getLyricsBySongId")
            //     });
             }
        }
        
    }

</script>

<style></style>
