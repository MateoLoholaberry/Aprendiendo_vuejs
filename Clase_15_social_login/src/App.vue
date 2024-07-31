<script setup lang="ts"></script>

<template>
    <header>
        <div>
            <nav>
                <RouterLink to="/">Home</RouterLink> |
                <RouterLink to="/login">Backend</RouterLink> |
                <RouterLink to="/firebase">Firebase</RouterLink> |
                <RouterLink to="/social">Social</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>
