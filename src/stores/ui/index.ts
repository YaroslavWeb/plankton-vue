import { defineStore } from 'pinia'

interface I_UsersStore {
  modal: boolean
}

export const useUIStore = defineStore({
  id: 'ui',
  state: (): I_UsersStore => ({
    modal: false,
  }),
  getters: {
    getModal: (state) => state.modal,
  },
  actions: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
  },
})
