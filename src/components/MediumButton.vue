<template>
  <button
    @click="navigate"
    class="flex w-60 h-22 items-center justify-center rounded-lg shadow-md bg-indigo-800/95 hover:bg-indigo-900 text-gray-100 text-3xl transition-all"
  >
    <img
      v-if="icon"
      :src="icon"
      alt="icon"
      class="inline-block w-10 h-10 mr-3"
    />
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: null },
  to: { type: String, default: null }, // ახალი prop — მისამართისთვის
});

const router = useRouter();

const navigate = () => {
  if (props.to) {
    router.push(props.to);
  } else {
    // თუ არ აქვს "to", უბრალოდ ამიტავს emit-ს, რომ მშობელმა გამოიყენოს
    emit("click");
  }
};
</script>
