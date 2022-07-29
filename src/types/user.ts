import type { T_LocationId } from './location'

export type T_UserId = string

export interface I_User {
  id: T_UserId
  name: string
  age: string
  locationId: T_LocationId
}
