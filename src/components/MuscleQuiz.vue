<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">გამოიცანი კუნთის სახელი: 💪</h1>

    <div v-if="currentQuestion < questions.length" class="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
      <img
        :src="questions[currentQuestion].gif"
        alt="muscle gif"
        class="rounded-xl mb-4 w-full h-64 object-cover"
      />
      <div class="grid grid-cols-1 gap-3">
        <button
          v-for="(option, index) in questions[currentQuestion].options"
          :key="index"
          @click="selectAnswer(option)"
          class="p-3 rounded-xl border text-left transition-all"
          :class="{
            'bg-green-300 border-green-500': showAnswer && option === questions[currentQuestion].answer,
            'bg-red-300 border-red-500': showAnswer && option === selected && option !== questions[currentQuestion].answer,
            'hover:bg-gray-200': !showAnswer
          }"
          :disabled="showAnswer"
        >
          {{ option }}
        </button>
      </div>

      <div class="mt-6 flex justify-between">
        <button
          v-if="showAnswer && currentQuestion < questions.length - 1"
          @click="nextQuestion"
          class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          შემდეგი →
        </button>

        <button
          v-if="showAnswer && currentQuestion === questions.length - 1"
          @click="restartQuiz"
          class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
        >
          ხელახლა დაწყება
        </button>
      </div>
    </div>

    <div v-else class="text-center mt-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        🎉 ქვიზი დასრულდა !
      </h2>
      <p class="text-lg">შენ მოიპოვე: {{ score }} / {{ questions.length }} ქულა</p>
      <button
        @click="restartQuiz"
        class="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600"
      >
        ხელახლა ცდა
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([
  {
    gif: "public/muscles/Adductor_minimus.gif",
    options: [
      "vastus lateralis - ბარძაყის ლატერალური განიერი კუნთი",
      "Adductor minimus - მცირე მომზიდველი კუნთი",
      "Sartorius - თერძის კუნთი",
      "Adductor magnus - დიდი მომზიდველი კუნთი",
    ],
    answer: "Adductor_minimus",
  },
  {
    gif: "public/muscles/Adductor_brevis.gif.gif",
    options: [
      "Rectus abdominis",
      "Obliquus internus",
      "Transversus abdominis",
      "Quadratus lumborum",
    ],
    answer: "Rectus abdominis",
  },
  {
    gif: "public/muscles/Adductor_longus.gif",
    options: [
      "Gluteus maximus",
      "Adductor brevis",
      "Gracilis",
      "Vastus lateralis",
    ],
    answer: "Gluteus maximus",
  },
  {
    gif: "public/muscles/Adductor_magnus.gif",
    options: [
      "Deltoideus",
      "Brachialis",
      "Teres major",
      "Anconeus",
    ],
    answer: "Deltoideus",
  },
]);

const currentQuestion = ref(0);
const showAnswer = ref(false);
const selected = ref(null);
const score = ref(0);

const selectAnswer = (option) => {
  selected.value = option;
  showAnswer.value = true;
  if (option === questions.value[currentQuestion.value].answer) {
    score.value++;
  }
};

const nextQuestion = () => {
  currentQuestion.value++;
  selected.value = null;
  showAnswer.value = false;
};

const restartQuiz = () => {
  currentQuestion.value = 0;
  selected.value = null;
  showAnswer.value = false;
  score.value = 0;
};
</script>
