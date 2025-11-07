<template>
  <QuizGame
    title="გამოიცანი კუნთის სახელწოდება 💪"
    :questions="asanas"
    @goHome="goHome"
  />
</template>

<script setup>
import QuizGame from "../components/QuizGame.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push("/");

const asanas = [
  { image: "/muscles/Adductor_brevis.gif", answer: "მოკლე მომზიდველი კუნთი" },
  { image: "/muscles/Adductor_longus.gif", answer: "გრძელი მომზიდველი კუნთი" },
  { image: "/muscles/Adductor_magnus.gif", answer: "დიდი მომზიდველი კუნთი" },
  { image: "/muscles/Adductor_minimus.gif", answer: "მცირე მომზიდველი კუნთი" },
    { image: "/muscles/articularis_genus.webp", answer: "მუხლის სახსრის კუნთი" },

];
</script>
