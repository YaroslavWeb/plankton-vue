<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useUIStore } from '@/stores/ui'
import { E_ButtonVariant } from '@/components/TheButton/interfaces'
import TheButton from '@/components/TheButton/TheButton.vue'
import { useLocationsStore } from '@/stores/locations'
import { useUsersStore } from '@/stores/users'

import TheDivider from '@/components/Utilities/TheDivider.vue'
import TextField from '@/components/TextField/TextField.vue'
import TheSelect from '@/components/TheSelect/TheSelect.vue'
import { getUserAvatar } from '@/utils/avatar/user'

import type { I_User } from '@/types/user'

const uiStore = useUIStore()
const usersStore = useUsersStore()
const locationsStore = useLocationsStore()
const locations = locationsStore.getLocations

enum E_FormField {
  name = 'name',
  age = 'age',
  location = 'location',
}
const data = uiStore.getModalData as I_User

const avatarLink = computed(() =>
  getUserAvatar({
    id: '',
    name: form.name.value,
    age: form.age.value,
    locationId: form.location.value,
  }),
)
const form = reactive({
  [E_FormField.name]: {
    value: data.name,
    error: '',
  },
  [E_FormField.age]: {
    value: data.age,
    error: '',
  },
  [E_FormField.location]: {
    value: data.locationId,
    error: '',
  },
})

const handleChangeForm = (value: string, name: string) => {
  form[name as E_FormField].value = value
}

const handleUpdateUser = () => {
  if (!form.name.value.trim()) form.name.error = 'Please enter Name'
  else form.name.error = ''

  if (!form.age.value.trim()) form.age.error = 'Please enter Age'
  else form.age.error = ''

  if (!form.location.value.trim()) form.location.error = 'Please select Location'
  else form.location.error = ''

  if (!form.name.value.trim() || !form.age.value.trim() || !form.location.value.trim()) return
  usersStore.updateUser({
    id: data.id,
    name: form.name.value,
    age: form.age.value,
    locationId: form.location.value,
  })
  uiStore.closeModal()
}
</script>

<template>
  <div class="title">UPDATE USER</div>
  <TheDivider />
  <TextField
    :value="form.name.value"
    :error="form.name.error"
    name="name"
    @change="handleChangeForm"
    placeholder="Name"
  />
  <TheDivider />
  <TextField
    :value="form.age.value"
    :error="form.age.error"
    name="age"
    @change="handleChangeForm"
    placeholder="Age"
  />
  <TheDivider />
  <TheSelect
    :value="form.location.value"
    :error="form.location.error"
    name="location"
    @change="handleChangeForm"
    placeholder="Location"
  >
    <option v-for="location in locations" :key="location.id" :value="location.id">
      {{ location.country }} | {{ location.city }}
    </option>
  </TheSelect>
  <TheDivider />
  <div>Avatar</div>
  <img :src="avatarLink" alt="avatar" />
  <TheDivider />
  <div class="close">
    <TheButton @click="uiStore.closeModal" :variant="E_ButtonVariant.ghost">
      <FA icon="fa-solid fa-burger" />
    </TheButton>
  </div>
  <div class="actions">
    <TheButton @click="handleUpdateUser">UPDATE</TheButton>
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
