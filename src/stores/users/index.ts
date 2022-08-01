import { defineStore } from 'pinia'
import { v4 as uid } from 'uuid'

import { usersData } from './data'

import type { I_User, T_UserId } from '@/types/user'

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
    getUserById: (state) => {
      return (userId: T_UserId) => state.users.find((user) => user.id === userId)
    },
    getTotalUsers: (state) => state.users.length,
  },
  actions: {
    addUser({ name, age, locationId }: Omit<I_User, 'id'>) {
      const newUser: I_User = {
        id: uid(),
        name,
        age,
        locationId,
      }
      this.users.unshift(newUser)
    },
    updateUser(user: I_User) {
      this.users = this.users.map((item) => (user.id === item.id ? user : item))
    },

    removeUser(userId: string) {
      this.users = this.users.filter((item) => item.id !== userId)
    },
  },
})
