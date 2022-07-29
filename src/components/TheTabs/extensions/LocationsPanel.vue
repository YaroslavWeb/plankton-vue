<script lang="ts" setup>
import { useLocationsStore } from '@/stores/locations'
import { useUIStore } from '@/stores/ui'
import TheButton from '@/components/TheButton/TheButton.vue'
import { E_ButtonSize, E_ButtonVariant } from '@/components/TheButton/interfaces'

const locationsStore = useLocationsStore()

const locations = locationsStore.getLocations
const totalLocations = locationsStore.getTotalLocations

const uiStore = useUIStore()
const handleOpenModal = () => {
  uiStore.openModal()
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
          @click="handleOpenModal"
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
          <TheButton @click="handleOpenModal" :variant="E_ButtonVariant.ghost"
            ><FA icon="fa-solid fa-edit"
          /></TheButton>
          |
          <TheButton @click="handleOpenModal" :variant="E_ButtonVariant.ghost"
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
