<template>
  <div
    class="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
  >
<div class="absolute min-w-full min-h-screen flex flex-col justify-center items-center w-full z-30">

  <MediumButton label="ქვიზები" icon="/icons/quiz.png" to="/quizzes"/>
    <!-- <ButtonDesign label="ონლაინ იოგა" icon="/icons/video-lesson.png" to="/lessons"/>
  <ButtonDesign label="გალერეა" icon="/icons/gallery.png" to="/gallery"/>
  <ButtonDesign label="კონტაქტი" icon="/icons/info.png" to="/contact"/> -->

</div>
    <ChakraAnimation/>

  </div>
</template>

<script setup>
import ChakraAnimation from "../components/ChakraAnimation.vue";
import MediumButton from "../components/MediumButton.vue";

</script>
