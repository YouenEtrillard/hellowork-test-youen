<script setup>
import CustomIcon from './icons/CustomIcon.vue';
</script>
<template>
  <header>
    <a
      href="https://www.hellowork.com/"
      title="Se rendre sur le site d'Hellowork"
      class="logo hellowork"
      target="_blank"
    >
      <CustomIcon icon="hellowork" alt="Logo Hellowork" />
    </a>
    <span class="plus">+</span>
    <a
      class="logo youen"
      href="https://www.youen-etrillard.com"
      title="Se rendre sur le site de Youen"
      target="_blank"
    >
      <CustomIcon icon="youen" alt="Logo Youen Etrillard" />
    </a>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 12rem;
  height: 8rem;
  padding: 0.5rem;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em var(--color-hellowork));
}
.logo.youen:hover {
  filter: drop-shadow(0 0 2em var(--color-youen));
}

a {
  display: inline-block;
}

.plus {
  font-size: 4rem;
}

.icon-youen {
  fill: var(--color-youen);
}
</style>
