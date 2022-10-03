<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRepositoriesStore } from '../../features/repositories';
import RepositoryItem from './RepositoryItem.vue';

const repositoriesStore = useRepositoriesStore();
const { currentRepositories, isLoading } = storeToRefs(repositoriesStore);
const { fetchRepositoriesByOrgAndPage } = repositoriesStore;
const org = ref('HelloWorksGroup');
const page = ref(1);
const fetchRepo = () => {
  fetchRepositoriesByOrgAndPage(org.value, page.value);
};

const nbRepoIsOdd = computed(() => currentRepositories.value.length % 2 !== 0);
</script>

<template>
  <div class="repo-list-wrapper">
    <p>
      Pour afficher les projets d'une organisation, indiquez son nom et lancer
      la recherche.
    </p>
    <div class="form">
      <label>
        Nom de l'organisation
        <input v-model="org" />
      </label>
      <label>
        Page
        <input type="number" v-model="page" />
      </label>
      <button @click="fetchRepo()">get them !</button>
    </div>
    <div class="loader" v-show="isLoading">Chargement en cours</div>
    <ul
      v-if="currentRepositories.length > 0"
      :class="{ hasOddChildren: nbRepoIsOdd }"
    >
      <li v-for="repository in currentRepositories" :key="repository.id">
        <RepositoryItem :repository="repository" />
      </li>
    </ul>
    <p v-else>Aucun projet, veuillez vérifier vos paramètres de recherche</p>
  </div>
</template>

<style lang="css" scoped>
.repo-list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 111rem;
  margin: 0 auto;
}

.form,
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
label {
  display: flex;
  flex-direction: column;
  text-align: left;
}

input {
  padding: 0.4rem;
  margin-top: 0.4rem;
}

button {
  align-self: flex-end;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

@media screen and (max-width: 800px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }

  .hasOddChildren li:first-child {
    grid-column: span 2;
  }
}
</style>
