<script lang="ts" setup>
import { useUIStore } from '@/stores/ui'
import { E_ButtonVariant } from '@/components/TheButton/interfaces'
import TheButton from '@/components/TheButton/TheButton.vue'
import { useLocationsStore } from '@/stores/locations'
import TheDivider from '../../Utilities/TheDivider.vue'
import type { I_Location } from '@/types/location'

const uiStore = useUIStore()
const locationsStore = useLocationsStore()

const data = uiStore.getModalData as I_Location

const handleRemoveLocation = () => {
  locationsStore.removeLocation(data.id)
  uiStore.closeModal()
}
</script>

<template>
  <div class="title">DELETE LOCATION</div>
  <TheDivider />
  <TheDivider />
  <div class="close">
    <TheButton @click="uiStore.closeModal" :variant="E_ButtonVariant.ghost">
      <FA icon="fa-solid fa-hand-middle-finger" />
    </TheButton>
  </div>
  <div class="actions">
    <TheButton @click="handleRemoveLocation">DELETE</TheButton>
    <TheButton @click="uiStore.closeModal">CLOSE</TheButton>
  </div>
</template>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
}

.close {
  position: absolute;
  right: 8px;
  top: 8px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
</style>
