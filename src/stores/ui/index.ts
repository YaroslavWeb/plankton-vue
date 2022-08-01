import { defineStore } from 'pinia'

import { E_ModalWindow } from '@/types/ui'
import type { I_User } from '@/types/user'
import type { I_Location } from '@/types/location'

interface I_UsersStore {
  modal: {
    isOpen: boolean
    window: E_ModalWindow
    data: I_User | I_Location | null
  }
}

export const useUIStore = defineStore({
  id: 'ui',
  state: (): I_UsersStore => ({
    modal: {
      isOpen: false,
      window: E_ModalWindow.addLocation,
      data: null,
    },
  }),
  getters: {
    getModalIsOpen: (state) => state.modal.isOpen,
    getModalWindow: (state) => state.modal.window,
    getModalData: (state) => state.modal.data,
  },
  actions: {
    openModal(window: E_ModalWindow, data: I_User | I_Location | null = null) {
      this.modal.isOpen = true
      this.modal.window = window
      this.modal.data = data
    },
    closeModal() {
      this.modal.isOpen = false
    },
  },
})
