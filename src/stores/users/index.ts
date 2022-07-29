import { defineStore } from 'pinia'

import { usersData } from './data'

import type { I_User } from '@/types/user'

interface I_UsersStore {
  users: I_User[]
}

export const useUsersStore = defineStore({
  id: 'users',
  state: (): I_UsersStore => ({
    users: usersData,
  }),
  getters: {
    getUsers: (state) => state.users,
    getTotalUsers: (state) => state.users.length,
  },
  actions: {},
})
