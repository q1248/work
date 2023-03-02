<template>
  <Sidebar></Sidebar>
  <router-view></router-view>
</template>
<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';

</script>