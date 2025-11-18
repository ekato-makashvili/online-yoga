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
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494581/Obliquus_abdominis_externus_x9yynq.jpg",
    answer: "მუცლის გარეთა ირიბი კუნთი (Obliquus abdominis externus)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494580/Obliquus_abdominis_internus_bgafkv.jpg",
    answer: "მუცლის შიგნითა ირიბი კუნთი (Obliquus abdominis internus)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494580/Transversus_abdominis_uefhq5.jpg",
    answer: "მუცლის განივი კუნთი (Transversus abdominis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494580/Rectus_abdominis_uztpwz.jpg",
    answer: "მუცლის სწორი კუნთი (Rectus abdominis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494580/Pyramidalis_okg8pk.jpg",
    answer: "პირამიდული კუნთი (Pyramidalis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494581/Quadratus_lumborum_xg69r9.png",
    answer: "წელის კვადრატული კუნთი (Quadratus lumborum)",
  },
];
</script>
