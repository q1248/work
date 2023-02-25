<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useMessage, useDialog } from 'naive-ui';
import { RouterView } from 'vue-router';
window.$message = useMessage();
window.$dialog = useDialog();

</script>