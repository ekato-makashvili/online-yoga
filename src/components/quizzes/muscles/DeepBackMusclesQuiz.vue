<template>
  <QuizTemplate
    title="გამოიცანი კუნთის სახელი"
    :questions="asanas"
    @goHome="goHome"
  />
</template>

<script setup>
import QuizTemplate from "../QuizTemplate.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push("/");

const asanas = [

];
</script>