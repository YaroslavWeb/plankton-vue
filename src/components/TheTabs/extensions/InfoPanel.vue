<script lang="ts" setup>
import { useUsersStore } from '@/stores/users'
import UserCard from '../../UserCard/UserCard.vue'

const usersStore = useUsersStore()
const users = usersStore.getUsers
</script>
<template>
  <div class="user-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>
<style lang="scss" scoped>
.user-list {
  display: grid;
  grid: 1fr / repeat(auto-fill, minmax(212px, 1fr));
  gap: 12px;
}
</style>
