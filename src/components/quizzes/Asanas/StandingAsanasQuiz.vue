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
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467170/asana1_jvhaqn.jpg", answer: "Padangushthasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467170/asana2_p4vnuq.jpg", answer: "Padahastasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467172/asana3_fgq8x0.png", answer: "Utthita Trikonasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467171/asana4_bdkm7q.png", answer: "Parivritta Trikonasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467172/asana5_llq5nu.png", answer: "Utthita Parshvakonasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467172/asana6_gwtdp5.png", answer: "Parivritta Parshvakonasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467174/prasarita-padotanasana_prulpj.gif", answer: "Prasarita Padottanasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467172/asana11_dhcb8f.png", answer: "Parsvottanasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467175/uthita-hasta-padangushtasana_dufe8d.gif", answer: "Utthita Hasta Padangushthasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467173/asana15_ihx4u6.jpg", answer: "Ardha Baddha Padmottanasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467174/asana16_hwudkz.jpg", answer: "Utkatasana" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763467176/virabhadrasana_vq7ssk.gif", answer: "Virabhadrasana" },

];
</script>
