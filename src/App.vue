<template>
<div id="app" :style="appStyle">
  <main :style="mainStyle">
    <app-header @change="changeMode">
    </app-header>
    <messages></messages>
  </main>
  <message-input @height-change="onHeightChange"></message-input>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from './components/AppHeader'
import MessageInput from './components/MessageInput'
import Messages from './components/Messages'
import MoonIcon from './components/MoonIcon'
import SunIcon from './components/SunIcon'

export default {
  components: {
    AppHeader,
    MessageInput,
    Messages,
    MoonIcon,
    SunIcon,
  },

  data () {
    return {
      styles: {
        dark: {
          background: '#000022',
          color: 'white'
        },
        normal: {
          background: '#ececfc',
          color: '#444466'
        }
      },
      mainStyle: null,
    }
  },

  computed: {
    appStyle () {
      return this.styles[this.appMode]
    },
    ...mapGetters([
      'appMode',
    ])
  },

  methods: {
    changeMode (mode) {
      this.mode = mode
    },
    onHeightChange (height) {
      this.mainStyle = {
        paddingBottom: height
      }
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
}

a {
  cursor: pointer;
}

img {
  max-width: 100%;
}

#app {
  height: 100%;
  overflow: hidden;
  position: fixed;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 50%;
  max-width: 640px;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
}
</style>
