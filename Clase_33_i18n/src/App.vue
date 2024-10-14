<template>
    <div>
        <select v-model="$i18n.locale">
            <option
                v-for="locale in $i18n.availableLocales"
                :key="locale"
                :value="locale"
            >
                {{ locale }}
            </option>
        </select>
    </div>
    <h1>{{ $t('message.welcome', { name: username }) }}</h1>
    <p>{{ $t('message.content') }}</p>
    <p>{{ $t('message.products', { n: 3 }) }}</p>
    <p>{{ $t('message.products2', 1) }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const username = ref('Juan')
</script>
