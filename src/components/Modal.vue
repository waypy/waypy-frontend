<template>
<div
  class="modal-container"
  :class="{ '-show': helpShown }"
  @click="switchHelp(false)">
  <div class="modal" @click.stop="">
    <div class="modal-content">
      <h3>Location</h3>
      <div>
        <label>Latitude:</label> <span>{{ location.lat }}</span>
      </div>
      <div>
        <label>Longitude:</label> <span>{{ location.lng }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'helpShown',
      'location',
    ]),
  },

  methods: {
    ...mapActions([
      'switchHelp',
    ]),
  },
}
</script>

<style scoped>
.modal-container,
.modal {
  opacity: 0;
  transition: 0.3s;
  visibility: hidden;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.75);
  transition-delay: 0.3s;
  z-index: 1;
}

.modal {
  max-width: 640px;
  width: 100%;
  margin: 4em auto 0;
  transform: translateY(-2em);
  z-index: 2;
}

.modal-container.-show,
.modal-container.-show .modal {
  opacity: 1;
  visibility: visible;
}

.modal-container.-show {
  transition-delay: 0s;
}

.modal-container.-show .modal {
  transform: translateY(0);
  transition-delay: 0.3s;
}

.modal-content {
  border-radius: 4px;
  background: white;
  padding: 1em;
}

.-dark .modal-content {
  background: #2f2f40;
}
</style>
