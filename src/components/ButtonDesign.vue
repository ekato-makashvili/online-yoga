<template>
  <button
    @click="navigate"
    class="w-65 h-15 flex items-center justify-center px-6 py-3 rounded-lg shadow-md bg-indigo-800/80 hover:bg-indigo-900 text-gray-100 text-base transition-all"
  >
    <img
      v-if="icon"
      :src="icon"
      alt="icon"
      class="inline-block w-8 h-8 mr-3 -mt-1"
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
