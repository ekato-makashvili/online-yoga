<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-8">
  <ButtonDesign class="my-6" label="ასანების სახელები" icon="/icons/asana-white.png" to="asanaQuiz"/>
  <ButtonDesign class="mb-12" label="კუნთების სახელები" icon="/icons/muscle.png" to="muscleQuiz"/>

    </div>
  
  </BaseLayout>
 
</template>

<script setup>
import ButtonDesign from "./ButtonDesign.vue";
import BaseLayout from "./BaseLayout.vue";
</script>
