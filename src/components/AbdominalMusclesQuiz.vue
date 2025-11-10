<template>
  <QuizGame
    title="გამოიცანი კუნთის სახელწოდება 💪"
    :questions="asanas"
    @goHome="goHome"
  />
</template>

<script setup>
import QuizGame from "./QuizGame.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push("/");

const asanas = [

];

</script>
