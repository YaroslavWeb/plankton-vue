<script lang="ts" setup>
interface I_InputTextProps {
  value: string
  placeholder: string
  name: string
  error: string
}

withDefaults(defineProps<I_InputTextProps>(), {})

const emit = defineEmits<{
  (e: 'change', value: string, name: string): void
}>()

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('change', target.value, target.name)
}
</script>
<template>
  <div>
    <input :value="value" :name="name" :placeholder="placeholder" @input="handleChange" />
    <label>{{ placeholder }}</label>
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin-bottom: 24px;
}

input {
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 4px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid rgb(25, 25, 27);
  transition: border-bottom-color 0.3s ease 0s;
  background-color: transparent;
  color: inherit;
  outline: 0px;

  &::placeholder {
    color: transparent !important;
    opacity: 0 !important;
  }

  &:focus {
    border-bottom-color: var(--color-primary);
  }

  &:not(:placeholder-shown),
  &:focus {
    ~ label {
      top: -16px;
      font-size: 12px;
      outline: none;
      line-height: 16px;
      transform: translateY(0);
    }
  }

  &:disabled {
    border-bottom-color: var(--color-secondary);
  }
}

label {
  position: absolute;
  left: 0px;
  top: 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(25, 25, 27);
  pointer-events: none;
  transition-property: color, top, font-size;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

span {
  position: absolute;
  top: 32px;
  left: 0;
  color: var(--color-error);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}
</style>
