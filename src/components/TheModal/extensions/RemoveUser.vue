<script lang="ts" setup>
import { computed } from 'vue'
import { useUIStore } from '@/stores/ui'
import { E_ButtonVariant } from '@/components/TheButton/interfaces'
import TheButton from '@/components/TheButton/TheButton.vue'
import TheDivider from '@/components/Utilities/TheDivider.vue'
import { useUsersStore } from '@/stores/users'
import { getUserAvatar } from '@/utils/avatar/user'
import type { I_User } from '@/types/user'

const uiStore = useUIStore()
const usersStore = useUsersStore()

const data = uiStore.getModalData as I_User
const avatarLink = computed(() => getUserAvatar(data))

const handleRemoveUser = () => {
  usersStore.removeUser(data.id)
  uiStore.closeModal()
}
</script>

<template>
  <div class="title">DELETE USER</div>
  <div class="close">
    <TheButton @click="uiStore.closeModal" :variant="E_ButtonVariant.ghost">
      <FA icon="fa-solid fa-skull-crossbones" />
    </TheButton>
  </div>
  <TheDivider />
  <p>You want to kill me?</p>
  <TheDivider />
  <img :src="avatarLink" alt="avatar" />
  <TheDivider />
  <div class="actions">
    <TheButton @click="handleRemoveUser">DELETE</TheButton>
    <TheButton @click="uiStore.closeModal">CLOSE</TheButton>
  </div>
</template>

<style lang="scss" scoped>
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

img {
  display: flex;
  margin: 0px auto;
  height: 120px;
  min-width: 108px;
  padding: 4px;
  background: var(--color-bg);
  border: 2px solid var(--color-text);
  border-radius: 0px 0px 5px 5px;
}
</style>
