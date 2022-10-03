<script setup>
import RepositoryList from './components/repositories/RepositoryList.vue';
import SvgSprite from './components/icons/SvgSprite.vue';
import Header from './components/Header.vue';
</script>

<template>
  <SvgSprite />
  <Header />
  <main>
    <RepositoryList />
  </main>
</template>
