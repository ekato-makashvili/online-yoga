<template>
  <button
    @click="navigate"
    class="flex w-75 h-16 items-center px-8 rounded-lg shadow-md bg-blue-800/95 hover:bg-blue-900 text-gray-100 text-base transition-all"
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
