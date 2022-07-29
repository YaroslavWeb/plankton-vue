<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import InfoPanel from './extensions/InfoPanel.vue'
import UsersPanel from './extensions/UsersPanel.vue'
import LocationsPanel from './extensions/LocationsPanel.vue'
import StructurePanel from './extensions/StructurePanel.vue'

import type { I_Tab } from '@/types/app'

const router = useRouter()

const tabs: I_Tab[] = [
  { id: 0, name: 'INFO', component: InfoPanel, path: 'info' },
  { id: 1, name: 'USERS', component: UsersPanel, path: 'users' },
  { id: 2, name: 'LOCATIONS', component: LocationsPanel, path: 'locations' },
  { id: 3, name: 'JSON', component: StructurePanel, path: 'json' },
]

const queryTabPath = computed(() => router.currentRoute.value.query.tab || tabs[0].path)

const activeTab = computed(() => ({
  path: queryTabPath,
  index: tabs.findIndex((tab) => tab.path === queryTabPath.value),
}))

const setActiveTab = (path: string) => {
  router.push({ query: { tab: path } })
}
</script>
<template>
  <div>
    <div class="navigation">
      <div
        v-for="tab in tabs"
        :class="{ active: tab.path === activeTab.path.value }"
        :key="tab.id"
        @click="setActiveTab(tab.path)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="panel">
      <component :is="tabs[activeTab.index].component"></component>
    </div>
  </div>
</template>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  & > div {
    cursor: pointer;
    display: flex;
    width: 100%;
    padding: 4px 12px;

    box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;
    background-color: var(--color-bg);
    color: var(--color-primary);

    &.active {
      background-color: var(--color-secondary);
    }
  }
}

.panel {
  width: 100%;
  padding: 12px;
  background-color: var(--color-secondary);
  color: var(--color-bg);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

table {
  width: 100%;
}

thead > th:first-child {
  min-width: 50px;
}

thead > th:last-child {
  text-align: end;
}

th {
  padding: 8px;
  color: var(--color-primary);
  min-width: 140px;
}

tr > td:first-child {
  min-width: 50px;
  color: var(--color-primary);
  font-weight: 700;
}

tr > td:last-child {
  text-align: end;
}

td {
  padding: 8px;
  text-align: center;
  font-weight: 200;
}
</style>
