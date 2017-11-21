<template>
<header>
  <span>Waypy</span>
  <div class="links">
    <a href="https://github.com/waypy/waypy-frontend" title="Github Repo">
      <github-icon></github-icon>
    </a>
    <a @click="switchHelp(!helpShown)" title="Bantuan">
      <help-icon></help-icon>
    </a>
    <a @click="switchAppMode" title="Ubah Warna Tampilan">
      <moon-icon v-show="appMode === 'normal'"></moon-icon>
      <sun-icon v-show="appMode === 'dark'"></sun-icon>
    </a>
  </div>
</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GithubIcon from './GithubIcon'
import HelpIcon from './HelpIcon'
import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

export default {
  components: {
    GithubIcon,
    HelpIcon,
    MoonIcon,
    SunIcon,
  },

  computed: {
    ...mapGetters([
      'appMode',
      'helpShown',
    ]),
  },

  methods: {
    ...mapActions([
      'switchAppMode',
      'switchHelp',
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

a {
  color: inherit;
  margin-left: 0.5em;
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

.links {
  margin-left: auto;
}

svg {
  vertical-align: bottom;
}
</style>
