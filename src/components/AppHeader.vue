<template>
<header>
  <span>Waypy</span>
  <div class="change-mode">
    <a @click="switchAppMode" title="Ubah Warna Tampilan">
      <moon-icon v-show="appMode === 'normal'"></moon-icon>
      <sun-icon v-show="appMode === 'dark'"></sun-icon>
    </a>
  </div>
</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

export default {
  components: {
    MoonIcon,
    SunIcon,
  },

  data () {
    return {
      styles: {
        dark: {
          background: 'transparent'
        },
        normal: {
          background: 'white'
        }
      },
    }
  },

  computed: {
    headerStyle () {
      return this.styles[this.appMode]
    },
    ...mapGetters([
      'appMode',
    ]),
  },

  methods: {
    ...mapActions([
      'switchAppMode',
    ]),
  }
}
</script>

<style scoped>
header {
  align-items: center;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex: 0 0 50px;
  margin: 0;
  height: 50px;
  padding: 0 1em;
  user-select: none;
  z-index: 1;
}

@media screen and (min-width: 641px) {
  header {
    border-radius: 0 0 6px 6px;
  }
}

span {
  display: block;
  font-size: 20px;
  letter-spacing: .02em;
}

.change-mode {
  margin-left: auto;
}

svg {
  vertical-align: bottom;
}
</style>
