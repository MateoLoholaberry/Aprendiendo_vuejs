<template>
    <div class="post-card">
        <h3>Titulo H3</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, quas soluta aut vitae est suscipit incidunt a repellat facilis explicabo. Minima soluta maiores recusandae similique possimus mollitia neque nesciunt asperiores.</p>
        <PostButton />
    </div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>
    .post-card {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
</style>