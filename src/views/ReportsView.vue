<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg  ">
      <div class="flex items-center justify-center  mb-4 rounded  ">
        <p class="text-2xl text-gray-800 ">投诉信息管理</p>
      </div>
      <div class="flex  flex-col items-center justify-center  mb-2 rounded ">
        <section class="bg-white mb-10 ">
          <div class="max-w-2xl mx-auto px-4">
            <article class="p-6 text-base bg-white border-b border-gray-200   ">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"> 用户名</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-06-23"
                      title="June 23rd, 2022">Jun. 23, 2022</time></p>
                </div>
                <button @click="deleteMsg()" data-dropdown-toggle="dropdownComment4"
                  class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50   dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button">
                  <svg class="w-5 h-5" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>

              </footer>
              <p class="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development
                and explored some of the tools to design my Side Projects.</p>
              <div class="flex items-center mt-4 space-x-4">
                <button @click="markRead()" type="button"
                  class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" class="mr-1 w-4 h-4" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                  已读
                </button>
              </div>
            </article>
          </div>
        </section>
        <NPagination :page-count="10"></NPagination>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { NPagination } from 'naive-ui';

function deleteMsg() {
  console.log('delete');
}

function markRead() {
  console.log('markRead');
}
</script>