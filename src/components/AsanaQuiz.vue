<template>
  <QuizGame
    title="გამოიცანი ასანის სახელი 🧘‍♀️"
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
  { image: "/asanas/asana1.PNG", answer: "პადანგუშტასანა" },
  { image: "/asanas/asana2.JPG", answer: "პადაჰასტასანა" },
  { image: "/asanas/asana3.PNG", answer: "უტჰიტა ტრიკონასანა" },
  { image: "/asanas/asana4.PNG", answer: "პარივრიტა ტრიკონასანა" },
  { image: "/asanas/asana5.PNG", answer: "უტჰიტა პარშვაკონასანა" },
  { image: "/asanas/asana6.PNG", answer: "პარივრიტა პარშვაკონასანა" },
  { image: "/asanas/asana7.PNG", answer: "პრასარიტა პადოტანასანა 1" },
  { image: "/asanas/asana8.PNG", answer: "პრასარიტა პადოტანასანა 2" },
  { image: "/asanas/asana9.PNG", answer: "პრასარიტა პადოტანასანა 3" },
  { image: "/asanas/asana10.PNG", answer: "პრასარიტა პადოტანასანა 4" },
  { image: "/asanas/asana11.PNG", answer: "პარშვოტანასანა" },
  { image: "/asanas/asana12.PNG", answer: "უტჰიტა ჰასტა პადანგუშტასანა 1" },
  { image: "/asanas/asana13.PNG", answer: "უტჰიტა ჰასტა პადანგუშტასანა 2" },
  { image: "/asanas/asana14.PNG", answer: "უტჰიტა ჰასტა პადანგუშტასანა 3" },
  { image: "/asanas/asana15.JPG", answer: "არდჰა ბადჰა პადმოტანასანა" },
  { image: "/asanas/asana16.JPG", answer: "უტკატანასანა" },
  { image: "/asanas/asana17.JPG", answer: "ვირაბჰადრასანა 1" },
  { image: "/asanas/asana18.JPG", answer: "ვირაბჰადრასანა 2" },
];
</script>
