<template>
  <QuizTemplate
    title="გამოიცანი კუნთის სახელწოდება 💪"
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
 ];

</script>
