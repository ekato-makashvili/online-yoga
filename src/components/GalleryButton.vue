<template>
  <div class="z-10">
    <button
      @click="goTogallery"
      class="w-65 h-15 flex bottom-6 left-1/2 transform px-6 py-3 rounded-lg shadow-md bg-indigo-800/80 hover:bg-indigo-900 text-gray-100 text-base transition-all"
    >
    <img src="/icons/gallery.png" alt="gallery Icon" class="inline-block w-8 h-8 mr-3 -mt-1" />
      გალერეა
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goTogallery = () => router.push("/gallery");
</script>
