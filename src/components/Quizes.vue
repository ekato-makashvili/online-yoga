<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-8">
      <div class="font-semibold text-2xl text-black/80">ქვიზები</div>
  <SmallButton class="my-6" label="ასანების სახელები" icon="/icons/asana-white.png" to="asanaQuiz"/>
  <SmallButton class="mb-12" label="კუნთების სახელები" icon="/icons/muscle.png" to="muscleQuiz"/>

    </div>
  
  </BaseLayout>
 
</template>

<script setup>
import BaseLayout from "./BaseLayout.vue";
import SmallButton from "./SmallButton.vue";
</script>
