<script lang="ts" setup>
import { useLocationsStore } from '@/stores/locations'
import { useUIStore } from '@/stores/ui'
import { useUsersStore } from '@/stores/users'
import TheButton from '@/components/TheButton/TheButton.vue'
import { E_ButtonSize, E_ButtonVariant } from '@/components/TheButton/interfaces'

const usersStore = useUsersStore()
const users = usersStore.getUsers
const totalUsers = usersStore.getTotalUsers

const locationsStore = useLocationsStore()

const getLocationLabels = (userLocationId: string) => {
  const userLocation = locationsStore.getLocationById(userLocationId)
  if (userLocation) return `${userLocation?.country} | ${userLocation?.city}`
  return '-'
}

const uiStore = useUIStore()
const handleOpenModal = () => {
  uiStore.openModal()
}
</script>
<template>
  <table>
    <thead>
      <th>№ ({{ totalUsers }})</th>
      <th>Name</th>
      <th>Age</th>
      <th>Location</th>
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
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ index + 1 }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ getLocationLabels(user.locationId) }}</td>
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
