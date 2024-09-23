<template>
  <h1>Animaciones con Vue 3</h1>
  <h2>Transition</h2>
  <Transition>
    <h2 v-if="show">Hello world animado</h2>
  </Transition>
  <button @click="show = !show">Mostrar</button>

  <br /><br />
  <hr />
  <h2>Transition group</h2>
  <ul>
    <TransitionGroup name="list" tag="ul">
      <li v-for="note in notes" :key="note">
        <v-icon name="md-controlpoint-sharp" animation="spin" fill="#fC644d"></v-icon>
        {{ note }}
      </li>
    </TransitionGroup>
    <input v-model="note" type="text" />
    <button @click="handleNote">Add note</button>
  </ul>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

// ----- Transition -----
let show = ref(true)

// ----- Transition group -----
const notes: Ref<string[]> = ref([])
const note = ref('')
const handleNote = () => {
  notes.value.push(note.value)
  note.value = ''
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatex(30px);
}
</style>
