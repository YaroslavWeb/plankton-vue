import { defineStore } from 'pinia'
import { v4 as uid } from 'uuid'

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
  actions: {
    addLocation({ country, city }: Omit<I_Location, 'id'>) {
      const newLocation: I_Location = {
        id: uid(),
        country,
        city,
      }
      this.locations.unshift(newLocation)
    },
    updateLocation(location: I_Location) {
      this.locations = this.locations.map((item) => (location.id === item.id ? location : item))
    },

    removeLocation(locationId: string) {
      this.locations = this.locations.filter((item) => item.id !== locationId)
    },
  },
})
