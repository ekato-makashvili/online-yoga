<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-8">
      <div class="font-semibold text-2xl text-gray-800 mb-6">ქვიზები კუნთებზე</div>
  <SmallButton class="mb-12" label="ბარძაყის კუნთები" icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467157/hip_acxqrc.png" to="/quizzes/muscle-quizzes/hip"/>
    <SmallButton class="mb-12" label="მხრის კუნთები" icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467155/arm_c0vfkz.png"/>
  <SmallButton class="mb-12" label="ზურგის კუნთები" icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467156/back_jnc4a3.png" to="/quizzes/muscle-quizzes/back"/>
  <SmallButton class="mb-12" label="მუცლის კუნთები" icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467156/abdomen_oivl4f.png" to="/quizzes/muscle-quizzes/abdomen"/>
  <SmallButton class="mb-12" label="ზურგის ღრმა კუნთები" icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467157/deepBack_oymizi.png" to="/quizzes/muscle-quizzes/deep-back"/>


    </div>
  
  </BaseLayout>
 
</template>

<script setup>
import BaseLayout from "../BaseLayout.vue";
import SmallButton from "../SmallButton.vue";
</script>
