<template>
  <footer>
    © 2022 Developed by
    <a href="https://github.com/YaroslavWeb" target="_blank"> YaroslavWeb </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: flex-end;
  max-width: 1200px;
  height: 128px;
  margin: 0 auto;
  padding: 16px;
  border-top: 1px solid var(--color-text);

  & > a {
    margin-left: 4px;
    color: var(--color-primary);
  }
}
</style>
