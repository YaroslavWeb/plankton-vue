<script lang="ts" setup>
import { reactive } from 'vue'
import { useUIStore } from '@/stores/ui'
import { E_ButtonVariant } from '@/components/TheButton/interfaces'
import TheButton from '@/components/TheButton/TheButton.vue'
import { useLocationsStore } from '@/stores/locations'
import TheDivider from '../../Utilities/TheDivider.vue'
import TextField from '../../TextField/TextField.vue'

const uiStore = useUIStore()
const locationsStore = useLocationsStore()

enum E_FormField {
  country = 'country',
  city = 'city',
}

const form = reactive({
  [E_FormField.country]: {
    value: '',
    error: '',
  },
  [E_FormField.city]: {
    value: '',
    error: '',
  },
})

const handleChangeForm = (value: string, name: string) => {
  form[name as E_FormField].value = value
}

const handleAddLocation = () => {
  if (!form.country.value.trim()) {
    form.country.error = 'Please enter Country'
  } else {
    form.country.error = ''
  }
  if (!form.city.value.trim()) {
    form.city.error = 'Please enter City'
  } else {
    form.city.error = ''
  }
  if (!form.country.value.trim() || !form.city.value.trim()) return
  locationsStore.addLocation({ country: form.city.value, city: form.country.value })
  uiStore.closeModal()
}
</script>

<template>
  <div class="title">CREATE LOCATION</div>
  <TheDivider />
  <TextField
    :value="form.country.value"
    :error="form.country.error"
    name="country"
    @change="handleChangeForm"
    placeholder="Country"
  />
  <TheDivider />
  <TextField
    :value="form.city.value"
    :error="form.city.error"
    name="city"
    @change="handleChangeForm"
    placeholder="City"
  />
  <TheDivider />
  <div class="close">
    <TheButton @click="uiStore.closeModal" :variant="E_ButtonVariant.ghost">
      <FA icon="fa-solid fa-cat" />
    </TheButton>
  </div>
  <div class="actions">
    <TheButton @click="handleAddLocation">ADD</TheButton>
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
