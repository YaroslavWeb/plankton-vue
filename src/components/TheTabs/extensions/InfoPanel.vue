<script lang="ts" setup>
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import UserCard from '@/components/UserCard/UserCard.vue'

const usersStore = useUsersStore()
const users = computed(() => usersStore.getUsers)
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
