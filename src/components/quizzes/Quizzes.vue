<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-4">
      <div class="font-semibold text-2xl text-gray-800">ქვიზები</div>
      <SmallButton
        class="my-6"
        label="ასანები"
        icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467155/asana-white_l90na6.png"
        to="quizzes/asana-quizzes"
      />
      <SmallButton
        class="mb-12"
        label="კუნთები"
        icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467157/muscle_vsatgk.png"
        to="quizzes/muscle-quizzes"
      />
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "../BaseLayout.vue";
import SmallButton from "../SmallButton.vue";
</script>
