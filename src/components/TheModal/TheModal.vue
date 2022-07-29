<script lang="ts" setup>
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()
</script>

<template>
  <teleport to="#modal">
    <div v-if="uiStore.getModal" class="modal">
      <p>Hello from the modal!</p>
      <button @click="uiStore.closeModal">Close</button>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  background-color: red;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
