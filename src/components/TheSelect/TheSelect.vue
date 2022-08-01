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
    <label>{{ placeholder }}</label>
    <select :value="value" :name="name" :placeholder="placeholder" @input="handleChange">
      <option disabled value="" style="display: none" />
      <slot />
    </select>
    <span v-if="error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 24px;

  cursor: pointer;
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 8px;
    right: 4px;
    top: 10px;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);

    transition: 300ms ease background-color;
    background-color: var(--color-text);
  }

  &:focus {
    :after {
      background-color: var(--color-primary);
    }
  }
}

label {
  position: absolute;
  outline: 0;
  line-height: 16px;
  top: -16px;
  font-size: 12px;
  outline: none;
  line-height: 16px;
  transform: translateY(0);
}

select {
  width: 100%;
  padding-bottom: 4px;
  padding-right: 8px;
  appearance: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: none;
  transition: 300ms ease border-bottom-color;
  outline: none;
  cursor: pointer;

  color: var(--color-text);
  background-color: transparent;
  border-bottom: 1px solid var(--color-text);

  &:focus {
    border-bottom-color: var(--color-primary);
  }

  &::-ms-expand {
    display: none;
  }
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
