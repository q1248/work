<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import { useMutationObserver } from '@vueuse/core';
import { NDialogProvider, NMessageProvider } from 'naive-ui';

import GlobalContainer from './components/global.vue'
// 修复 Naive UI 和 Tailwind 样式优先级引起的样式错误问题
useMutationObserver(
  document.head,
  () => {
    const naiveStyles = Array.from(
      document.head.querySelectorAll('style[cssr-id]')
    );

    if (
      naiveStyles.find((style) =>
        style.nextElementSibling
          ? !style.nextElementSibling.hasAttribute('cssr-id')
          : false
      )
    ) {
      naiveStyles.forEach((style) => {
        document.head.appendChild(style);
      });
    }
  },
  {
    childList: true,
  }
);
//使用naive-ui的对话框组件

</script>

<template>
  <Sidebar></Sidebar>
  <NMessageProvider>
    <NDialogProvider>
      <GlobalContainer>
      </GlobalContainer>
    </NDialogProvider>
  </NMessageProvider>
</template>
