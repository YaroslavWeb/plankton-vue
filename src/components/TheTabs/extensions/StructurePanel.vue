<script lang="ts" setup>
import { useUsersStore } from '@/stores/users'
import { useLocationsStore } from '@/stores/locations'
import TheDivider from '../../Utilities/TheDivider.vue'

const usersStore = useUsersStore()
const locationsStore = useLocationsStore()

const users = usersStore.getUsers
const locations = locationsStore.getLocations
</script>
<template>
  <h2>Users</h2>
  <pre>{{ JSON.stringify(users, undefined, 2) }}</pre>
  <TheDivider />
  <h2>Locations</h2>
  <pre>{{ JSON.stringify(locations, undefined, 2) }}</pre>
</template>
