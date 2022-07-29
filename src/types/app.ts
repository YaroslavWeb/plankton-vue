import type { Component } from 'vue'

export interface I_Tab {
  id: number
  name: string
  path: string
  component: Component
}
