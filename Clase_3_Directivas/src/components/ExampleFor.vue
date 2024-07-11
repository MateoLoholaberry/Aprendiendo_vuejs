<template>
    <ul>
        <li v-for="(country, index) in countries" v-bind:key="index">
            <b>country:</b> {{ country.name }} - <b>code:</b> {{ country.code }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'

// let countries: Ref<string[]> = ref(['Spain', 'France', 'UK', 'Italy', 'Portugal'])

interface ICountry {
    code: string
    name: string
}

let countries: Ref<ICountry[]> = ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'en',
        name: 'UK'
    },
    {
        code: 'it',
        name: 'Italy'
    },
    {
        code: 'pt',
        name: 'Portugal'
    }
])
</script>

<style scoped></style>
