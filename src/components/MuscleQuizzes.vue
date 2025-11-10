<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-8">
      <div class="font-semibold text-2xl text-black/80 mb-6">ქვიზები კუნთებზე</div>
  <SmallButton class="mb-12" label="ბარძაყის კუნთები" icon="/icons/hip.png" to="/quizzes/muscle-quizzes/hip"/>
    <SmallButton class="mb-12" label="მხრის კუნთები" icon="/icons/arm.png" to="/quizzes/muscle-quizzes/arm"/>
  <SmallButton class="mb-12" label="ზურგის კუნთები" icon="/icons/back.png" to="/quizzes/muscle-quizzes/back"/>
  <SmallButton class="mb-12" label="მუცლის კუნთები" icon="/icons/abdomen.png" to="/quizzes/muscle-quizzes/abdomen"/>
  <SmallButton class="mb-12" label="ზურგის ღრმა კუნთები" icon="/icons/deepBack.png" to="/quizzes/muscle-quizzes/deep-back"/>


    </div>
  
  </BaseLayout>
 
</template>

<script setup>
import BaseLayout from "./BaseLayout.vue";
import SmallButton from "./SmallButton.vue";
</script>
