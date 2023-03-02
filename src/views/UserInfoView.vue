<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 pb-0 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
      <div class="flex items-center justify-center  mb-4 rounded ">
        <p class="text-2xl text-gray-400 dark:text-gray-500">学员报名信息</p>
      </div>
      <div class="flex flex-col items-center justify-center  mb-4 rounded ">
        <NDataTable :columns="columns" :data="stuData"></NDataTable>
        <NPagination :page-count="pagecount" class="mt-3 mb-0 pb-0"></NPagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NDataTable, NPagination } from 'naive-ui'
import { onBeforeMount, ref } from 'vue';

const columns = [
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '身份证号',
    key: 'id',
  },
  {
    title: '报名科目',
    key: 'subject',
  },
  {
    title: '报名时间',
    key: 'time',
  },
  {
    title: '手机号',
    key: 'phone',
  },
  {
    title: '是否缴费',
    key: 'paid',
  },
  {
    title: '联系情况',
    key: 'contact',
  },
  {
    title: '操作',
    key: 'action',
  }
]
const stuData = ref([])
const pagecount = ref(1)


onBeforeMount(() => {
  console.log('before mount')
})
</script>