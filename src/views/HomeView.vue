<template>
  <div
    class="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
  >
    <ChakraAnimation class="mt-10" />
<div class="absolute justify-between top-[5%] sm:top-[30%] w-full flex flex-col md:flex-row md:items-start md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4 px-4 z-10">
  <StartQuizButton />
  <VideoLessonsButton  />
  <Gallery />
    <ContactButton />

</div>
  </div>
</template>

<script setup>
import ChakraAnimation from "../components/ChakraAnimation.vue";
import StartQuizButton from "../components/StartQuizButton.vue";
import VideoLessonsButton from "../components/VideoLessonsButton.vue";
import ContactButton from "../components/ContactButton.vue";
import Gallery from "../components/GalleryButton.vue";
</script>
