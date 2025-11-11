<template>
  <div
    class="relative min-h-screen bg-gradient-to-b from-blue-900 via-sky-900 overflow-hidden"
  >
<div class="absolute min-w-full min-h-screen flex flex-col justify-center items-center w-full z-30">
  <MediumButton label="ქვიზები" icon="/icons/quiz.png" to="/quizzes"/>
</div>
    <ChakraAnimation/>

  </div>
</template>

<script setup>
import ChakraAnimation from "../components/ChakraAnimation.vue";
import MediumButton from "../components/MediumButton.vue";

</script>
