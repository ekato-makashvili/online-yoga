<template>
  <QuizTemplate
    title="გამოიცანი ასანის სახელი 🧘‍♀️"
    :questions="asanas"
    @goHome="goHome"
  />
</template>

<script setup>
import QuizTemplate from "../../quizzes/QuizTemplate.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push("/");

const asanas = [
  { image: "", answer: "დანდასანა" },
  { image: "/asanas/sitting/paschimotasana.png", answer: "პაშჩიმოტასანა" },

];
</script>
