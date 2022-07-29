import { defineStore } from 'pinia'

import { locationsData } from './data'

import type { I_Location, T_LocationId } from '@/types/location'

interface I_LocationsStore {
  locations: I_Location[]
}

export const useLocationsStore = defineStore({
  id: 'locations',
  state: (): I_LocationsStore => ({
    locations: locationsData,
  }),
  getters: {
    getLocations: (state) => state.locations,
    getLocationById: (state) => {
      return (locationId: T_LocationId) =>
        state.locations.find((location) => location.id === locationId)
    },
    getTotalLocations: (state) => state.locations.length,
  },
  actions: {},
})
