<template>
    <h3>Counter</h3>
    <h3>{{ counter }} x 2 = {{ doubleCounter }}</h3>
    <button @click="incrementar">Incrementar</button>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue';
// import { mapMutations, mapState, mapGetters } from 'vuex';
import { useStore } from 'vuex';
import { computed } from 'vue';

// ------------ Con Composition API ------------
const store = useStore();
const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => store.getters.doubleCounter);
const incrementar = () => store.commit('increment');

// ------------ Con Option API ------------

// 2° Forma de llamar al estado global
// export default defineComponent({
//     name: 'TheWelcome',
//     computed: {
//         ...mapState(['counter']),
//         ...mapGetters(['doubleCounter'])
//     },
//     methods: {
//         ...mapMutations(['increment']),
//         incrementar() {
//             this.increment();
//         }
//     }
// });

// 1° Forma de llamar al estado global
// export default defineComponent({
//     name: 'TheWelcome',
//     computed: {
//         counter() {
//             // leemos el valor del contador desde el store
//             return this.$store.state.counter;
//         },
//         doubleCounter() {
//             // leemos el valor del contador desde el store
//             return this.$store.getters.doubleCounter;
//         }
//     },
//     methods: {
//         increment() {
//             // llamamos a la mutación increment del store
//             this.$store.commit('increment');
//         }
//     }
// });
</script>
