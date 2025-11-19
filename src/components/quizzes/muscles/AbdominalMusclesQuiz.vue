<template>
  <QuizTemplate
    title="გამოიცანი კუნთის სახელწოდება"
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
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763550643/external_oblique_muscle_mmt465.jpg",
    answer: "მუცლის გარეთა ირიბი კუნთი (Obliquus abdominis externus)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763550184/internal-oblique.jpg_kqyuyd.png",
    answer: "მუცლის შიგნითა ირიბი კუნთი (Obliquus abdominis internus)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763550184/Transversus_abdominis_tamzt2.png",
    answer: "მუცლის განივი კუნთი (Transversus abdominis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763550184/rectus-abdominis_bspgtd.png",
    answer: "მუცლის სწორი კუნთი (Rectus abdominis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763550183/Pyramidalis_qj0wgj.png",
    answer: "პირამიდული კუნთი (Pyramidalis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763550183/Quadratus_lumborum_iv2nlw.jpg",
    answer: "წელის კვადრატული კუნთი (Quadratus lumborum)",
  },
];
</script>
