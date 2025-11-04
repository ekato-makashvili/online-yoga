<template>
  <div
    class="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
  >
<div class="absolute min-w-full min-h-screen sm:min-h-0 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start w-full sm:w-auto gap-4 p-4 sm:mt-10 z-30">

  <ButtonDesign label="ქვიზები" icon="/icons/quiz.png" to="/quizzes"/>
    <ButtonDesign label="ონლაინ იოგა" icon="/icons/video-lesson.png" to="/lessons"/>
  <ButtonDesign label="გალერეა" icon="/icons/gallery.png" to="/gallery"/>
  <ButtonDesign label="კონტაქტი" icon="/icons/info.png" to="/contact"/>

</div>
    <ChakraAnimation/>

  </div>
</template>

<script setup>
import ChakraAnimation from "../components/ChakraAnimation.vue";
import ButtonDesign from "../components/ButtonDesign.vue"

</script>
