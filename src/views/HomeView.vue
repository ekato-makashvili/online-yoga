<template>
  <div
    class="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
  >
<div class="absolute min-w-full min-h-screen sm:min-h-0 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start w-full sm:w-auto gap-4 p-4 sm:mt-10 z-30">
  <StartQuizButton class="mb-5" />
  <VideoLessonsButton class="mb-5" />
  <GalleryButton class="mb-5" />
  <ContactButton class="mb-5"/>
</div>
    <ChakraAnimation/>

  </div>
</template>

<script setup>
import ChakraAnimation from "../components/ChakraAnimation.vue";
import StartQuizButton from "../components/StartQuizButton.vue";
import VideoLessonsButton from "../components/VideoLessonsButton.vue";
import ContactButton from "../components/ContactButton.vue";
import GalleryButton from "../components/GalleryButton.vue";
</script>
