<template>
    <p
        v-bind:class="{
            danger: hasError
        }"
    >
        El mensaje se ha enviado satisfactoriamente.
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ClassBind',
    setup() {
        let hasError = true;

        return { hasError };
    }
});
</script>

<style>
.danger {
    color: red;
}
</style>
