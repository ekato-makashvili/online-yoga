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
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467219/dandasana_mrwmrf.png", answer: "დანდასანა" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467219/paschimotasana_sykvxk.png", answer: "პაშჩიმოტასანა" },

];
</script>
