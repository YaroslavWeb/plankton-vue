<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheDivider from './components/Utilities/TheDivider.vue'
import TheModal from './components/TheModal/TheModal.vue'
</script>

<template>
  <header>
    <div>Plankton <sup class="sup-title">Vue 3 + Pinia</sup></div>
  </header>
  <div class="container">
    <TheDivider :height="16" />

    <h1 class="title1">Simple CRUD App</h1>

    <TheDivider />
    <div>
      <h2 class="title2">
        <FA color="#A8324A" icon="fa-solid fa-gear" />
        Technologies
        <FA color="#A8324A" icon="fa-solid fa-gear" />
      </h2>

      <TheDivider :height="8" />
      <ul class="list">
        <li><FA color="#79cba1" icon="fa-brands fa-vuejs" /><span>Vue 3</span></li>
        <li><FA color="#3265a8" icon="fa-brands fa-vuejs" /><span>Pinia</span></li>
        <li><FA color="#6532a8" icon="fa-brands fa-vuejs" /><span>TypeScript</span></li>
        <li><FA color="#a032a8" icon="fa-brands fa-vuejs" /><span>SCSS</span></li>
        <li>
          <FA color="#f57e33" icon="fa-brands fa-vuejs" />
          <span
            >Avatar generator -
            <a href="https://avatars.dicebear.com" target="_blank">DiceBear Avatars</a>
          </span>
        </li>
        <li>
          <FA color="#c521aa" icon="fa-brands fa-vuejs" />
          <span
            >Icons -
            <a href="https://fontawesome.com" target="_blank">Font Awesome</a>
          </span>
        </li>
      </ul>
    </div>

    <TheDivider :height="48" />
    <RouterView />
  </div>
  <TheModal />
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;

  height: var(--header-height);
  padding: 0 16px;

  color: var(--color-primary);
  font-size: 24px;

  background-color: var(--color-secondary);

  & > div {
    font-weight: 200;
  }
}

.sup-title {
  font-size: 14px;
  font-weight: 300;
}

.container {
  min-height: calc(100vh - var(--header-height));
  width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

.title1 {
  font-size: 24px;
  font-weight: 700;
}

.title2 {
  font-size: 18px;
  font-weight: 700;

  & > svg {
    animation: spin 4s linear infinite;
    @keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
}

.list {
  font-size: 18px;

  span {
    font-weight: 300;
    padding-left: 8px;
  }

  a {
    font-weight: 300;
  }
}
</style>
