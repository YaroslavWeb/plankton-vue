<script lang="ts" setup>
import type { Component } from 'vue'
import { useUIStore } from '@/stores/ui'
import { E_ModalWindow } from '@/types/ui'
import AddLocation from './extensions/AddLocation.vue'
import AddUser from './extensions/AddUser.vue'
import UpdateLocation from './extensions/UpdateLocation.vue'
import UpdateUser from './extensions/UpdateUser.vue'
import RemoveLocation from './extensions/RemoveLocation.vue'
import RemoveUser from './extensions/RemoveUser.vue'

const windows: Record<E_ModalWindow, Component> = {
  [E_ModalWindow.addLocation]: AddLocation,
  [E_ModalWindow.updateLocation]: UpdateLocation,
  [E_ModalWindow.removeLocation]: RemoveLocation,
  [E_ModalWindow.addUser]: AddUser,
  [E_ModalWindow.updateUser]: UpdateUser,
  [E_ModalWindow.removeUser]: RemoveUser,
}

const uiStore = useUIStore()
</script>

<template>
  <teleport to="#modal">
    <Transition name="fade">
      <div v-if="uiStore.getModalIsOpen" class="modal">
        <div @click="uiStore.closeModal" class="overlay" />
        <div class="window">
          <component :is="windows[uiStore.getModalWindow]"></component>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0px;
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(56, 56, 56, 0.5);
  z-index: 100;
}

.overlay {
  position: fixed;
  inset: 0px;
}

.window {
  position: relative;
  padding: 24px 30px;
  width: 540px;

  background-color: rgb(229, 228, 232);
  border-radius: 2px;
}
</style>
