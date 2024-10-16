<template class="temp" :style:>

  <input type="text" placeholder="Please enter your acronym" v-model.trim="searchTerm" @keyup.enter="search(searchTerm)" >
  <button class="submit" v-on:click="search(searchTerm)">Submit</button>
  
  
  <div v-if="lyrics.length > 0" v-bind:style="bcg">
    <h3>Album: {{ lyrics[0].album }}</h3>
    <h3>Song: {{ lyrics[0].song }}</h3>
    <button class="change-color" v-on:click="document.button.style.backgroundColor =  lyrics[0].album">Change Background Color</button>
  </div>
  <div class="search" v-for="lyric in lyrics" v-bind:key="lyric.lineId" v-bind:lyric="lyric">
    <p class="line">{{ lyric.lyric }}</p>
  </div>
  <!--<button v-on:click="getLyricsBySongId(1)">Let's See Tim McGraw!</button>
  <input id ="input" type="text" placeholder="Please enter your Friendship Bracelet acronym" v-model="searchTerm" v-on:change="search">
  <button v-on:click="search(input)">Submit</button>
    <div class = "lyricSearch" v-for="lyric in lyrics" v-bind:key="lyric.lineId" v-bind:lyric="lyric">
      <p class="line">{{ lyric.lyric }}</p>
    </div>
    <p>Input: {{ input }}</p>-->
  <LyricCard/>
  <!--<p>{{ lyrics[0].album }}</p>
  <p>{{ lyrics[0].song }}</p>-->
  
  
  <div class = "lyric" v-for="lyric in lyrics" v-bind:key="lyric.lineId" v-bind:lyric="lyric">
        <p class="cedarville-cursive-regular">{{ lyric.lyric }}</p>
  </div>


</template>

<script>
import LyricService from '../services/LyricService';
import LyricCard from './LyricCard.vue';



export default {
    props: {
        lyric: []
    },
    data() {
        return {
            lyrics: [],
            input: '',
            searchTerm: '',
            bcg: {
              backgroundColor: "white"
            },
            
            Fearless: "#EFC180"
        }
    },
    computed: {
  
    },
    components: {
        LyricCard
    },
    methods: {
        // getLyrics() {
        //     LyricService
        //     .getLyrics()
        //     .then(response => {
        //         this.lyrics = response.data;
        //     })
        //     .catch(error => {
        //         console.log(error + " from getLyrics")
        //     });
        // },
        getLyricsBySongId(id) {
            LyricService
            .getLyricsBySongId(id)
            .then(response => {
                this.lyrics = response.data;
                console.log("getLyricsBySongId Ran");
            })
            .catch(error => {
                console.log(error + " from getLyricsBySongId")
            });
        },
        search(searchTerm) {
          LyricService
          .search(searchTerm)
          .then(response => {
            this.lyrics = response.data;
            
            console.log("search method ran");
          })
          .catch(error => {
            console.log(error + " from search method")
          });
        }
        },
        reset() {
        this.lyrics = [];
        },
        
        changeBackgroundColor(album) {
          console.log("changeBackgroundColor ran")
          if(album === "Taylor Swift") {
            this.bcg.backgroundColor = "#A5C9A5"
          }
          if(album === "Fearless") {
            document.body.style.backgroundColor = "#EFC180"
          }
          if(album === "Speak Now") {
            document.body.style.backgroundColor = "#C7A8CB"
          }
          if(album === "Red") {
            document.body.style.backgroundColor = "#7A2E39"
          }
          if(album === "1989") {
            document.body.style.backgroundColor = "#B5E5F8"
          }
          if(album === "Reputation") {
            document.body.style.backgroundColor = "#746F70"
          }
          if(album === "Lover") {
            document.body.style.backgroundColor = "#F7B0CC"
          }
          if(album === "Folklore") {
            document.body.style.backgroundColor = "#CDC9C1"
          }
          if(album === "Evermore") {
            document.body.style.backgroundColor = "#C5AC90"
          }
          if(album === "Midnights") {
            document.body.style.backgroundColor = "#242E47"
          }
          if(album === "The Tortured Poets Department") {
            document.body.style.backgroundColor = "#000000"
          }
          return 1;
        }
        
      
  }


</script>

<style>

body {
  background-color: white;
}


h3 {
  color: purple;
}

p {
  font-family: "Cedarville Cursive", cursive;
  font-weight: 400;
  font-style: normal;
  color: blue;
}

</style>
