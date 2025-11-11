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
  { image: "/asanas/standing/asana1.PNG", answer: "პადანგუშტასანა" },
  { image: "/asanas/standing/asana2.JPG", answer: "პადაჰასტასანა" },
  { image: "/asanas/standing/asana3.PNG", answer: "უტჰიტა ტრიკონასანა" },
  { image: "/asanas/standing/asana4.PNG", answer: "პარივრიტა ტრიკონასანა" },
  { image: "/asanas/standing/asana5.PNG", answer: "უტჰიტა პარშვაკონასანა" },
  { image: "/asanas/standing/asana6.PNG", answer: "პარივრიტა პარშვაკონასანა" },
  { image: "/asanas/standing/prasarita-padotanasana.gif", answer: "პრასარიტა პადოტანასანა" },
  { image: "/asanas/standing/asana11.PNG", answer: "პარშვოტანასანა" },
  { image: "/asanas/standing/uthita-hasta-padangushtasana.gif", answer: "უტჰიტა ჰასტა პადანგუშტასანა" },
  { image: "/asanas/standing/asana15.JPG", answer: "არდჰა ბადჰა პადმოტანასანა" },
  { image: "/asanas/standing/asana16.JPG", answer: "უტკატანასანა" },
  { image: "/asanas/standing/virabhadrasana.gif", answer: "ვირაბჰადრასანა" },

];
</script>
