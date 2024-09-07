<template>
    <div class="container">
        <div class="auxbar">
            <AuxBar />
        </div>
        <div class="main-content">
            <div class="menu">
                <MenuSideBar />
            </div>
            <div class="main-content">
                <slot name="main"></slot>
            </div>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import AuxBar from '@/components/AuxBar.vue';
import MenuSideBar from '@/components/MenuSideBar.vue';
</script>
