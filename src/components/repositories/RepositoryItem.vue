<script setup lang="ts">
import { ref } from 'vue';
import { ExtendedRepositoryType } from '../../types';

defineProps<{
  repository: ExtendedRepositoryType;
}>();
const isExtended = ref(false);
</script>

<template>
  <div class="repo">
    <button @click="isExtended = !isExtended" :class="{ extended: isExtended }">
      <h2>{{ repository.name }}</h2>
      <span class="visually-hidden">Click for more details</span>
      <span class="chevron"></span>
    </button>
    <p>{{ repository.description }}</p>
    <p>
      Forks : {{ repository.forks_count }} Watchers :
      {{ repository.watchers_count }}
    </p>
    <p>MàJ : {{ repository.updated_at }}</p>
    <p>License : {{ repository?.license || 'non définie' }}</p>

    <template v-if="isExtended">
      <p>
        Language principal :
        {{ repository.mainLanguage ? repository.mainLanguage : 'non défini' }}
      </p>
      <div>
        Contributions :
        <ul>
          <li v-for="contributor in repository.contributors">
            {{ contributor.name }} : {{ contributor.contributions }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<style lang="css" scoped>
.repo {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 1.2rem 2.4rem;
  text-align: left;
  height: 100%;
}

h2 {
  word-break: break-all;
  padding-inline: 5rem;
}

button {
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  width: 100%;
  position: relative;
  overflow: hidden;
}

button:hover {
  color: var(--color-hellowork);
}

.chevron {
  position: absolute;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--color-hellowork);
  right: 1.5rem;
  top: 50%;
  translate: 0 -50%;
  transition: rotate 0.25s ease-out;
}

.extended .chevron {
  rotate: -180deg;
}
</style>
