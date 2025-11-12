<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-8">
      <div class="font-semibold text-2xl text-gray-800 mb-6">
        ქვიზები ასანებზე
      </div>
      <SmallButton
        class="mb-12"
        label="ფეხმდგომელა ასანები"
        icon="/icons/standingPose.png"
        to="/quizzes/asana-quizzes/standing-asanas"
      />
      <SmallButton
        class="mb-12"
        label="მჯდომარე ასანები"
        icon="/icons/sittingPose.png"
        to="/quizzes/asana-quizzes/sitting-asanas"
      />

    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "../BaseLayout.vue";
import SmallButton from "../SmallButton.vue";
</script>
