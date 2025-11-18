<template>
  <BaseLayout>
    <div class="flex flex-col items-center justify-center mt-8">
      <div class="font-semibold text-2xl text-gray-800 mb-6">
        ქვიზები ასანებზე
      </div>
      <SmallButton
        class="mb-12"
        label="ფეხმდგომელა ასანები"
        icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467157/standingPose_rbl3be.png"
        to="/quizzes/asana-quizzes/standing-asanas"
      />
      <SmallButton
        class="mb-12"
        label="მჯდომარე ასანები"
        icon="https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467156/sittingPose_vk6upk.png"
        to="/quizzes/asana-quizzes/sitting-asanas"
      />

    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "../BaseLayout.vue";
import SmallButton from "../SmallButton.vue";
</script>
