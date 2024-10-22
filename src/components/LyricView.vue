<template>
  <div class="search-buttons">
    <input
      type="text"
      id="input"
      style="width: 300px"
      placeholder="Please enter your acronym"
      v-model.trim="searchTerm"
      @keyup.enter="search(searchTerm)"
    />
    <button
      id="submit"
      @click="search(searchTerm)"
      @event="changeBackgroundColor(lyrics[0].album)"
    >
      Submit
    </button>
    <button class="reset" @click="reset()">Reset</button>
  </div>
  <div>
    <h2>Friendship Bracelet Acronym: {{ searchTerm }}</h2>
  </div>
  <div class="album-and-song" v-if="lyrics.length > 0">
    <h2>Album: {{ lyrics[0].album }}</h2>
    <h3>Song: {{ lyrics[0].song }}</h3>
  </div>
  <div
    class="lyrics"
    v-for="lyric in lyrics"
    v-bind:key="lyric.lineId"
    v-bind:lyric="lyric"
  >
    <p class="line" :style="{ color: fontColor }">{{ lyric.lyric }}</p>
  </div>
</template>

<script>
import LyricService from '../services/LyricService'

export default {
  props: {},
  data() {
    return {
      lyrics: [],
      input: '',
      searchTerm: '',
      fontColor: '#0000FF',
    }
  },
  computed: {},
  components: {},
  methods: {
    getLyricsBySongId(id) {
      LyricService.getLyricsBySongId(id)
        .then(response => {
          this.lyrics = response.data
          // eslint-disable-next-line no-undef
          changeBackgroundColor(this.lyrics[0].album)
          console.log('getLyricsBySongId Ran')
        })
        .catch(error => {
          console.log(error + ' from getLyricsBySongId')
        })
    },
    search(searchTerm) {
      LyricService.search(searchTerm)
        .then(response => {
          this.lyrics = response.data
          this.changeBackgroundColor(this.lyrics[0].album)
          console.log('search method ran')
        })
        .catch(error => {
          console.log(error + ' from search method')
        })
    },
    changeBackgroundColor(album) {
      console.log('changeBackgroundColor ran')
      console.log(album)

      if (album === 'Taylor Swift') {
        document.body.style.backgroundColor = '#A5C9A5'
        this.fontColor = '#000000'
      }
      if (album === 'Fearless') {
        document.body.style.backgroundColor = '#EFC180'
        this.fontColor = '#000000'
      }
      if (album === 'Speak Now') {
        document.body.style.backgroundColor = '#C7A8CB'
      }
      if (album === 'Red') {
        document.body.style.backgroundColor = '#7A2E39'
        this.fontColor = '#ffffff'
      }
      if (album === '1989') {
        document.body.style.backgroundColor = '#B5E5F8'
      }
      if (album === 'Reputation') {
        document.body.style.backgroundColor = '#746F70'
      }
      if (album === 'Lover') {
        document.body.style.backgroundColor = '#F7B0CC'
      }
      if (album === 'Folklore') {
        document.body.style.backgroundColor = '#CDC9C1'
      }
      if (album === 'Evermore') {
        document.body.style.backgroundColor = '#C5AC90'
      }
      if (album === 'Midnights') {
        document.body.style.backgroundColor = '#242E47'
      }
      if (album === 'The Tortured Poets Department') {
        document.body.style.backgroundColor = '#000000'
      }
      if (album === null) {
        document.body.style.backgroundColor = 'ffffff'
      }
    },
    reset() {
      this.lyrics = []
      document.body.style.backgroundColor = '#ffffff'
      this.searchTerm = ''
    },
  },
}
</script>

<style>
body {
  transition:
    color 0.5s,
    background-color 0.5s;
  justify-items: center;
}

h1 {
  color: black;
}

h2 {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
h3 {
  display: flex;
  justify-content: center;
  color: black;
}

p {
  font-weight: 400;
  font-style: normal;
  color: blue;
  transition: color 0.5s;
  margin: auto;
}

.search-buttons {
  display: flex;
  justify-content: center;
}

.lyrics {
  display: grid;
  justify-content: center;
  transition: color 0.5s;
}
</style>
