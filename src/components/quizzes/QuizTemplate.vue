<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-900 via-sky-900 px-3"
  >
    <div
      class="bg-white shadow-xl rounded-3xl w-full max-w-2xl md:max-w-3xl p-5 md:p-8 mt-4 flex flex-col relative h-[95vh]"
    >
      <h1
        v-if="!finished"
        class="text-lg md:text-3xl font-bold text-center text-gray-800 mb-5"
      >
        {{ title }}
      </h1>

      <!-- Progress bar -->
      <div v-if="!finished" class="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          class="bg-emerald-600 h-3 rounded-full transition-all duration-500"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>

      <!-- Quiz content -->
      <div v-if="!finished" class="flex flex-col flex-1">
        <div
          class="flex justify-between text-gray-700 text-sm md:text-base mb-4"
        >
          <span>კითხვა {{ currentIndex + 1 }} / {{ questions.length }}</span>
          <span
            >ქულა: <strong>{{ score }}</strong></span
          >
        </div>

        <!-- Image -->
        <div class="flex justify-center mb-4">
          <img
            :src="current.image"
            alt="quiz photo"
            class="w-full h-[25vh] sm:h-[40vh] object-contain rounded-2xl border border-pink-200 shadow-md"
          />
        </div>

        <!-- Options -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <button
            v-for="(opt, i) in getOptions(current)"
            :key="i"
            class="py-1 px-2 h-[45px] rounded-xl border border-gray-400 shadow-sm text-gray-800 font-medium transition-all duration-200 hover:bg-pink-50 text-sm flex flex-col justify-center items-center text-center break-words whitespace-pre-wrap relative"
            :class="buttonClass(opt)"
            @click="selectAnswer(opt)"
            :disabled="answered"
          >
            <span class="whitespace-pre-wrap break-words">{{ opt }}</span>

            <!-- Check / Cross icon -->
            <span
              v-if="answered"
              class="absolute top-2 right-2 w-6 h-6 flex justify-center items-center"
            >
              <svg
                v-if="opt === current.answer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="black"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <svg
                v-else-if="opt === selected && selected !== current.answer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="black"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>

        <!-- Bottom button -->
        <div class="flex justify-center sm:mt-4 lg:mt-10">
          <button
            v-if="!answered"
            disabled
            class="w-35 h-10 rounded-full shadow-md transition-all text-gray-600 bg-gray-200 cursor-default"
          >
            შემდეგი →
          </button>

          <button
            v-else
            @click="nextQuestion"
            class="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-md transition-all"
          >
            {{ isLastQuestion ? "დასრულება" : "შემდეგი →" }}
          </button>
        </div>
      </div>

      <!-- Finished screen -->
      <div v-else class="text-center justify-center items-center flex flex-col flex-1">
               <h2 class="text-2xl font-bold text-gray-800 p-3">
  {{ resultMessage }}
</h2>
          <img class="h-36 w-36" :src="resultImage" alt="img">

        <div class="text-gray-700">
          შენი ქულა: <p class="text-3xl"><strong>{{ score }}</strong> / {{ questions.length }}</p> 
        </div>

        <button
          @click="restart"
          class="px-4 py-2 my-10 mx-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-md transition-all mb-4"
        >
          ⟲ ხელახლა ცდა
        </button>

        <button
          @click="$emit('goHome')"
          class="px-4 py-2 mb-6 bg-blue-400 hover:bg-blue-600 text-white rounded-full shadow-md transition-all"
        >
          ← მთავარი გვერდზე დაბრუნება
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const resultImage = computed(() => {
  const percentage = (score.value / props.questions.length) * 100;

  if (percentage < 50) {
    return "/icons/cry.gif"; // დაბალი შედეგი
  } else if (percentage < 80) {
    return "/icons/smile.gif"; // საშუალო შედეგი
  } else {
    return "/icons/soul.gif"; // მაღალი შედეგი
  }
});

const resultMessage = computed(() => {
  const percentage = (score.value / props.questions.length) * 100;

  if (percentage < 50) {
    return "მეტი ვარჯიში გჭირდება";
  } else if (percentage < 80) {
    return "კარგად გაართვი თავი";
  } else {
    return "შესანიშნავი შედეგია!";
  }
});


const props = defineProps({
  title: String,
  questions: { type: Array, required: true },
});
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
const isLastQuestion = computed(
  () => currentIndex.value === props.questions.length - 1
);

// Generate answer options
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

// Handle answer selection
function selectAnswer(option) {
  if (answered.value) return;
  selected.value = option;
  answered.value = true;

  // Score immediately if correct
  if (option === current.value.answer) score.value++;
}

// Move to next question
function nextQuestion() {
  if (isLastQuestion.value) {
    currentIndex.value = props.questions.length;
    return;
  }
  currentIndex.value++;
  answered.value = false;
  selected.value = null;
}

// Restart quiz
function restart() {
  props.questions.forEach((q) => delete q._options);
  currentIndex.value = 0;
  score.value = 0;
  answered.value = false;
  selected.value = null;
}

// Button coloring
function buttonClass(opt) {
  if (!answered.value)
    return selected.value === opt ? "border-1 border-blue-400 bg-blue-50" : "";
  if (opt === current.value.answer)
    return "bg-emerald-600 border-2 border-emerald-600 text-white";
  if (opt === selected.value && selected.value !== current.value.answer)
    return "bg-rose-600 border-1 border-rose-600 text-white";
  return "";
}
</script>
