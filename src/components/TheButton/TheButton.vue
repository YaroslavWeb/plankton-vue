<script lang="ts" setup>
import { withDefaults, computed } from 'vue'
import { E_ButtonVariant, E_ButtonSize, E_ButtonColor } from './interfaces'

interface I_ButtonProps {
  variant?: E_ButtonVariant
  size?: E_ButtonSize
}

const props = withDefaults(defineProps<I_ButtonProps>(), {
  variant: E_ButtonVariant.solid,
  size: E_ButtonSize.md,
  color: E_ButtonColor.primary,
})

const classes = computed(() => props.size + ' ' + props.variant)
</script>
<template>
  <button type="button" :class="classes"><slot /></button>
</template>
<style lang="scss" scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  user-select: none;
  position: relative;
  white-space: nowrap;
  outline: transparent solid 2px;
  outline-offset: 2px;
  line-height: 1.2;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  width: max-content;
  transition-property: background-color, border-color, color;
  transition-duration: 300ms;
  transition-timing-function: ease;

  // E_ButtonVariant & E_ButtonColor
  &.solid {
    background-color: var(--color-primary);
    color: var(--color-bg);

    :hover {
      background-color: var(--color-primary-lighter);
      border-color: var(--color-primary-lighter);
    }

    :active {
      background-color: var(--color-primary-darker);
      border-color: var(--color-primary-darker);
    }
  }
  &.outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-bg);
      border-color: var(--color-primary);
    }

    &:active {
      background-color: transparent;
      color: var(--color-primary-darker);
    }
  }
  &.ghost {
    background-color: transparent;
    color: var(--color-primary);
    border: none;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    &:hover {
      background-color: var(--color-primary-lighter);
      color: var(--color-bg);
    }

    &:active {
      background-color: var(--color-primary-darker);
      color: var(--color-bg);
    }
  }
  // E_ButtonSize
  &.xs {
    height: 24px;
    font-size: 12px;
  }

  &.sm {
    height: 32px;
    font-size: 14px;
  }

  &.md {
    height: 40px;
    font-size: 16px;
  }

  &.lg {
    height: 48px;
    font-size: 18px;
  }
}
</style>
