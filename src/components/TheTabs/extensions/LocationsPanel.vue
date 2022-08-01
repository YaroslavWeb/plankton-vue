<script lang="ts" setup>
import { computed } from 'vue'
import { useLocationsStore } from '@/stores/locations'
import { useUIStore } from '@/stores/ui'
import TheButton from '@/components/TheButton/TheButton.vue'
import { E_ButtonSize, E_ButtonVariant } from '@/components/TheButton/interfaces'
import { E_ModalWindow } from '@/types/ui'
import type { T_LocationId } from '@/types/location.js'

const locationsStore = useLocationsStore()

const locations = computed(() => locationsStore.getLocations)
const totalLocations = computed(() => locationsStore.getTotalLocations)

const uiStore = useUIStore()
const handleOpenAddLocationModal = () => {
  uiStore.openModal(E_ModalWindow.addLocation)
}
const handleOpenUpdateLocationModal = (locationId: T_LocationId) => {
  const location = locationsStore.getLocationById(locationId)
  uiStore.openModal(E_ModalWindow.updateLocation, location)
}
const handleOpenRemoveLocationModal = (locationId: T_LocationId) => {
  const location = locationsStore.getLocationById(locationId)
  uiStore.openModal(E_ModalWindow.removeLocation, location)
}
</script>
<template>
  <table>
    <thead>
      <th>№ ({{ totalLocations }})</th>
      <th>Country</th>
      <th>City</th>
      <th>
        <TheButton
          @click="handleOpenAddLocationModal"
          :size="E_ButtonSize.sm"
          :variant="E_ButtonVariant.outline"
          >ADD NEW+</TheButton
        >
      </th>
    </thead>
    <tbody>
      <tr v-for="(location, index) in locations" :key="location.id">
        <td>{{ index + 1 }}</td>
        <td>{{ location.country }}</td>
        <td>{{ location.city }}</td>
        <td>
          <TheButton
            @click="handleOpenUpdateLocationModal(location.id)"
            :variant="E_ButtonVariant.ghost"
            ><FA icon="fa-solid fa-edit"
          /></TheButton>
          |
          <TheButton
            @click="handleOpenRemoveLocationModal(location.id)"
            :variant="E_ButtonVariant.ghost"
            ><FA icon="fa-solid fa-trash"
          /></TheButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
}

td {
  text-align: center;
}
</style>
