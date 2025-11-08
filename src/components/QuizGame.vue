<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-3">
    <div class="bg-white shadow-xl rounded-3xl w-full max-w-2xl md:max-w-3xl p-5 md:p-8 flex flex-col justify-between relative">
      <h1 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-5">{{ title }}</h1>

      <!-- Progress bar -->
      <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div class="bg-emerald-600 h-3 rounded-full transition-all duration-500" :style="{ width: progressPercent + '%' }"></div>
      </div>

      <!-- Quiz content -->
      <div v-if="!finished" class="flex flex-col justify-between flex-1">
        <div class="flex justify-between text-gray-700 text-sm md:text-base mb-4">
          <span>კითხვა {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <span>ქულა: <strong>{{ score }}</strong></span>
        </div>

        <div class="flex justify-center mb-5">
          <img :src="current.image" alt="quiz photo" class="w-full max-h-[55vh] object-contain rounded-2xl border border-pink-200 shadow-md"/>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            v-for="(opt, i) in getOptions(current)"
            :key="i"
            class="py-4 px-4 min-h-[90px] rounded-xl border text-gray-800 font-medium transition-all duration-200 hover:bg-pink-50 text-sm md:text-lg flex flex-col justify-center items-center text-center leading-snug break-words whitespace-pre-wrap relative"
            :class="buttonClass(opt)"
            @click="selectAnswer(opt)"
            :disabled="answered"
          >
            <span class="whitespace-pre-wrap break-words">{{ opt }}</span>

            <!-- ✔ / ✗ icons -->
            <span v-if="answered" class="absolute top-2 right-2 w-6 h-6 flex justify-center items-center">
              <svg v-if="opt === current.answer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else-if="opt === selected && selected !== current.answer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Finished screen -->
      <div v-else class="text-center p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">🎉 დასრულდა!</h2>
        <p class="text-gray-700 mb-4">შენი ქულა: <strong>{{ score }}</strong> / {{ questions.length }}</p>

        <button @click="restart" class="px-6 mx-2 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full shadow-md transition-all mb-4">⟲ ხელახლა ცდა</button>

        <button @click="$emit('goHome')" class="px-6 py-2 bg-indigo-400 hover:bg-indigo-600 text-white rounded-full shadow-md transition-all">← მთავარი გვერდზე დაბრუნება</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Props
const props = defineProps({
  title: String,
  questions: { type: Array, required: true },
});

// Emits
defineEmits(["goHome"]);

const currentIndex = ref(0);
const score = ref(0);
const answered = ref(false);
const selected = ref(null);

const current = computed(() => props.questions[currentIndex.value]);
const finished = computed(() => currentIndex.value >= props.questions.length);
const progressPercent = computed(() => (currentIndex.value / props.questions.length) * 100);

// Options with English + Georgian in parentheses
function getOptions(q) {
  if (!q) return [];
  if (!q._options) {
    const allAnswers = props.questions.map(x => x.answer); // just the answer string
    const opts = [q.answer];
    const pool = allAnswers.filter(a => a !== q.answer);
    while (opts.length < 4 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      opts.push(pool.splice(idx, 1)[0]);
    }
    q._options = opts.sort(() => Math.random() - 0.5);
  }
  return q._options;
}


// Answer selection
function selectAnswer(option) {
  if (answered.value) return;
  selected.value = option;
  answered.value = true;

  if (option === current.value.answer) score.value++;

  setTimeout(nextQuestion, 700);
}

function nextQuestion() {
  if (currentIndex.value < props.questions.length - 1) {
    currentIndex.value++;
    answered.value = false;
    selected.value = null;
  } else {
    currentIndex.value = props.questions.length;
  }
}

// Restart quiz
function restart() {
  props.questions.forEach(q => delete q._options);
  currentIndex.value = 0;
  score.value = 0;
  answered.value = false;
  selected.value = null;
}

// Button styling
function buttonClass(opt) {
  if (!answered.value) return "";
  if (opt === current.value.answer) return "bg-emerald-600 border-2 border-emerald-600";
  if (opt === selected.value && selected.value !== current.value.answer) return "bg-rose-600 border-2 border-rose-600";
  return "";
}

</script>
