<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
      <div class="flex items-center justify-center  mb-4 rounded ">
        <p class="text-2xl text-gray-800 dark:text-gray-500">小程序前端显示设置</p>
      </div>
      <div class="flex flex-col  justify-start  mb-4 rounded ">
        <div class="flex flex-col justify-start text-xl ">
          <p class=" pb-1">轮播图修改</p>
          <VueUploadImgs v-model="files" :type="0" :after-read="aterRead" multiple compress />

          <button type="button"
            class="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-9 ">保存修改</button>
        </div>
        <div class="flex flex-col justify-start text-xl ">
          <p class="  mb-2">科目修改</p>
          <NDynamicTags class="mb-3" v-model:value="typetags">
          </NDynamicTags>

          <button type="button"
            class="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-9 ">保存修改</button>

        </div>
        <div class="flex flex-col justify-start text-xl">
          <p class=" mb-2">联系电话修改</p>
          <NInput v-model:value="phone" class="mb-3" type="text"></NInput>

          <button type="button"
            class="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-9 ">保存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NDynamicTags, NButton, NInput } from 'naive-ui';
import VueUploadImgs from 'vue-upload-imgs/dist/vue3/VueUploadImgs.esm'
import { ref, onBeforeMount } from 'vue';
const typetags = ref(['摩托车'])
const phone = ref('123456789')
const files = ref()
function aterRead(file) {
  console.log(file[0].url)
}

onBeforeMount(() => {
  typetags.value = ['三轮摩托车']

})
</script>