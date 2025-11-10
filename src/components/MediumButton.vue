<template>
  <button
    @click="navigate"
    class="flex w-45 h-16 items-center justify-center rounded-lg shadow-md bg-blue-800/95 hover:bg-blue-900 text-gray-100 text-xl transition-all"
  >
    <img
      v-if="icon"
      :src="icon"
      alt="icon"
      class="inline-block w-9 h-9 mr-3"
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
