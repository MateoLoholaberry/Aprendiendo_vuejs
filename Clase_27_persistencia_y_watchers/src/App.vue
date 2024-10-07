<template>
    <!-- <h3>{{ store.count }}</h3> -->
    <!-- <button @click="store.increment(1)">Increment</button> -->
    <!-- Watchers -->
    <br />
    <hr />
    <br />
    <h1>Notas</h1>
    <input type="text" v-model="note" />
</template>

<script setup lang="ts">
import { useExample } from '@/stores/useExample.ts'
import { ref, watchEffect, watch } from 'vue'

// const store = useExample()
// store.init()

const note = ref('')

// watchEffect(() => {
//     console.log(note.value)
//     alert('Se ha modificado algo')
// })

watch(note, (newValue, oldValue) => {
    // console.log(newValue, oldValue)
    alert('Se ha modificado la nota especificamente: ' + newValue)
})
</script>
