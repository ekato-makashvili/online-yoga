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
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763872180/anconeus_gue2ht.gif",
    answer: "იდაყვის კუნთი (anconeus)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763491786/Biceps_brachii_muscle_-_animation03_hebntv.gif",
    answer: "მხრის ორთავა კუნთი (biceps brachii)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763491776/Brachialis_muscle_-_animation03_ebja8y.gif",
    answer: "მხრის კუნთი (brachialis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763491780/Coracobrachialis_muscle_-_animation02_nq7xtg.gif",
    answer: "ნისკარტ-მხრის კუნთი (coracobrachialis)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763491780/Deltoid_muscle_animation4_hp694d.gif",
    answer: "დელტისებრი კუნთი (deltoideus)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763872105/Teres_major_muscle_animation2_bdwdcw.gif",
    answer: "დიდი მრგვალი კუნთი (teres major)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763872061/Teres_minor_muscle_animation2_iphu1v.gif",
    answer: "მცირე მრგვალი კუნთი (teres minor)",
  },
  {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763491782/Triceps_brachii_muscle_-_animation02_nrpqtd.gif",
    answer: "მხრის სამთავა კუნთი (triceps brachii)",
  },
];
</script>
