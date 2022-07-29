<script lang="ts" setup>
import { computed } from 'vue'
import { useLocationsStore } from '@/stores/locations'
import { getUserAvatar } from '@/utils/avatar/user'
import type { I_User } from '@/types/user'

interface I_UserCardProps {
  user: I_User
}

const props = defineProps<I_UserCardProps>()
const avatarLink = computed(() => getUserAvatar(props.user))

const locationsStore = useLocationsStore()
const getLocationLabels = () => {
  const userLocation = locationsStore.getLocationById(props.user.locationId)
  if (userLocation) return `${userLocation?.country} | ${userLocation?.city}`
  return '-'
}
</script>
<template>
  <div class="card">
    <img :src="avatarLink" alt="avatar" />
    <table>
      <tbody>
        <tr>
          <td><FA color="#79cba1" icon="fa-solid fa-user" /></td>
          <td>{{ user.name }} | {{ user.age }} y.o.</td>
        </tr>
        <tr>
          <td><FA color="#79cba1" icon="fa-solid fa-location" /></td>
          <td>{{ getLocationLabels() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-top: 53px;
  height: 180px;
  padding: 12px;
  color: rgb(25, 25, 27);
  background: rgb(229, 228, 232);
  box-shadow: rgb(0 0 0 / 20%) 0px 12px 28px 0px, rgb(0 0 0 / 10%) 0px 2px 4px 0px,
    rgb(255 255 255 / 5%) 0px 0px 0px 1px inset;

  & > img {
    position: absolute;
    top: -32px;
    right: 50%;
    transform: translateX(50%);
    width: 50%;
    height: 90px;
    padding: 4px;
    background: rgb(229, 228, 232);
    border: 5px solid rgb(43, 43, 43);
    border-radius: 0px 0px 5px 5px;
  }

  td {
    padding: 0;
    text-align: unset;
    min-width: auto;
  }
}
</style>
