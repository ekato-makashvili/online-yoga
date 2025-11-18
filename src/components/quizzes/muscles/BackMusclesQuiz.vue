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
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494593/640px-Trapezius_animation_small2_yyqufw.gif",
    answer: "ტრაპეციული კუნთი (Trapezius)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494595/Latissimus_dorsi_muscle_animation_y8juhr.gif",
    answer: "ზურგის უგანიერესი კუნთი (Latissimus dorsi)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494597/Rhomboid_major_muscle_animation_small_wrgqto.gif",
    answer: "დიდი რომბისებრი კუნთები (Rhomboideus major)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494597/Rhomboid_minor_muscle_animation_small_jbsedu.gif",
    answer: "მცირე რომბისებრი კუნთები (Rhomboideus minor)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494595/Levator_scapulae_muscle_animation_small_fcu6j7.gif",
    answer: "ბეჭის ამწევი კუნთი (Levator scapulae)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494599/Serratus_posterior_superior_muscle_animation_small_ryy8c5.gif",
    answer: "უკანა ზედა დაკბილული კუნთი (Serraтus posterior superior)",
  },
        {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763494598/Serratus_posterior_inferior_muscle_animation_xsc2rd.gif",
    answer: "უკანა ქვედა დაკბილული კუნთი (Serraтus posterior inferior)",
  },

];

</script>