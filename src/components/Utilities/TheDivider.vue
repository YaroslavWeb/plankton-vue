<script lang="ts" setup>
import { withDefaults, computed } from 'vue'

interface I_DividerProps {
  height?: number
}

const props = withDefaults(defineProps<I_DividerProps>(), {
  height: 24,
})

const styles = computed(() => ({ height: props.height + 'px' }))
</script>

<template><div :style="styles" /></template>
