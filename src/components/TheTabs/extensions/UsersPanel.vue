<script lang="ts" setup>
import { computed } from 'vue'
import { useLocationsStore } from '@/stores/locations'
import { useUIStore } from '@/stores/ui'
import { useUsersStore } from '@/stores/users'
import TheButton from '@/components/TheButton/TheButton.vue'
import { E_ButtonSize, E_ButtonVariant } from '@/components/TheButton/interfaces'
import { E_ModalWindow } from '@/types/ui'
import type { T_UserId } from '@/types/user.js'

const usersStore = useUsersStore()
const users = computed(() => usersStore.getUsers)
const totalUsers = computed(() => usersStore.getTotalUsers)

const locationsStore = useLocationsStore()

const getLocationLabels = (userLocationId: string) => {
  const userLocation = locationsStore.getLocationById(userLocationId)
  if (userLocation) return `${userLocation?.country} | ${userLocation?.city}`
  return '-'
}

const uiStore = useUIStore()

const handleOpenAddUserModal = () => {
  uiStore.openModal(E_ModalWindow.addUser)
}
const handleOpenUpdateUserModal = (userId: T_UserId) => {
  const user = usersStore.getUserById(userId)
  uiStore.openModal(E_ModalWindow.updateUser, user)
}
const handleOpenRemoveUserModal = (userId: T_UserId) => {
  const user = usersStore.getUserById(userId)
  uiStore.openModal(E_ModalWindow.removeUser, user)
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
          @click="handleOpenAddUserModal"
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
          <TheButton @click="handleOpenUpdateUserModal(user.id)" :variant="E_ButtonVariant.ghost"
            ><FA icon="fa-solid fa-edit"
          /></TheButton>
          |
          <TheButton @click="handleOpenRemoveUserModal(user.id)" :variant="E_ButtonVariant.ghost"
            ><FA icon="fa-solid fa-trash"
          /></TheButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>
