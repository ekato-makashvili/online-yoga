<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-3"
  >
    <div
      class="bg-white shadow-xl rounded-3xl w-full max-w-2xl md:max-w-3xl p-5 md:p-8 flex flex-col justify-between relative"
    >
      <h1 class="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-5">
        {{ title }}
      </h1>

      <!-- Progress bar -->
      <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          class="bg-pink-500 h-3 rounded-full transition-all duration-500"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>

      <div v-if="!finished" class="flex flex-col justify-between flex-1">
        <div class="flex justify-between text-gray-700 text-sm md:text-base mb-4">
          <span>კითხვა {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <span>ქულა: <strong>{{ score }}</strong></span>
        </div>

        <div class="flex justify-center mb-5">
          <img
            :src="current.image"
            alt="quiz photo"
            class="w-full max-h-[55vh] object-contain rounded-2xl border border-pink-200 shadow-md"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            v-for="(opt, i) in getOptions(current)"
            :key="i"
            class="p-3 min-h-[56px] rounded-xl border text-gray-800 font-medium transition-all duration-200 hover:bg-pink-50 text-sm md:text-base flex justify-between items-center"
            :class="buttonClass(opt)"
            @click="selectAnswer(opt)"
            :disabled="answered"
          >
            <span class="truncate">{{ opt }}</span>
            <span v-if="answered" class="w-6 text-center">
              <span v-if="opt === current.answer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span v-else-if="opt === selected && selected !== current.answer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 stroke-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div v-else class="text-center p-6">
        <h2 class="text-2xl font-bold text-pink-600 mb-2">🎉 დასრულდა!</h2>
        <p class="text-gray-700 mb-4">
          შენი ქულა: <strong>{{ score }}</strong> / {{ questions.length }}
        </p>

        <button
          @click="restart"
          class="px-6 mx-2 py-2 bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full shadow-md transition-all mb-4"
        >
          თავიდან
        </button>

        <button
          @click="$emit('goHome')"
          class="px-6 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full shadow-md transition-all"
        >
          ← მთავარი გვერდზე დაბრუნება
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

// Props (title და questions მოდის გარედან)
const props = defineProps({
  title: String,
  questions: {
    type: Array,
    required: true,
  },
});

// Emits (რათა მთავარი გვერდზე დაბრუნება მოხდეს parent-იდან)
defineEmits(["goHome"]);

const currentIndex = ref(0);
const score = ref(0);
const answered = ref(false);
const selected = ref(null);

const current = computed(() => props.questions[currentIndex.value]);
const finished = computed(() => currentIndex.value >= props.questions.length);
const progressPercent = computed(
  () => (currentIndex.value / props.questions.length) * 100
);

function getOptions(q) {
  if (!q) return [];
  if (!q._options) {
    const allAnswers = props.questions.map((x) => x.answer);
    const opts = [q.answer];
    const pool = allAnswers.filter((a) => a !== q.answer);
    while (opts.length < 4 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      opts.push(pool.splice(idx, 1)[0]);
    }
    q._options = opts.sort(() => Math.random() - 0.5);
  }
  return q._options;
}

function selectAnswer(option) {
  if (answered.value) return;
  selected.value = option;
  answered.value = true;
  if (option === current.value.answer) score.value++;

  setTimeout(() => {
    if (currentIndex.value < props.questions.length - 1) {
      currentIndex.value++;
      answered.value = false;
      selected.value = null;
    } else {
      currentIndex.value = props.questions.length;
    }
  }, 700);
}

function restart() {
  props.questions.forEach((q) => delete q._options);
  currentIndex.value = 0;
  score.value = 0;
  answered.value = false;
  selected.value = null;
}

function buttonClass(opt) {
  if (!answered.value) return "";
  if (opt === current.value.answer)
    return "bg-green-400 border-green-400 text-green-800";
  if (opt === selected.value && selected.value !== current.value.answer)
    return "bg-red-400 border-red-400 text-red-800";
  return "";
}
</script>
