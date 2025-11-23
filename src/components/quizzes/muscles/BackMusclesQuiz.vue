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
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871070/Trapezius_qro3pq.png",
    answer: "ტრაპეციული კუნთი (Trapezius)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871068/Latissimus_dorsi_wkiqda.png",
    answer: "ზურგის უგანიერესი კუნთი (Latissimus dorsi)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871065/Rhomboid_major_yed7m0.png",
    answer: "დიდი რომბისებრი კუნთები (Rhomboideus major)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871066/Rhomboid_minor_phsz7m.png",
    answer: "მცირე რომბისებრი კუნთები (Rhomboideus minor)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871066/Levator_scapulae_azchzt.png",
    answer: "ბეჭის ამწევი კუნთი (Levator scapulae)",
  },
      {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871067/Serratus_posterior_superior_gi2hkv.png",
    answer: "უკანა ზედა დაკბილული კუნთი (Serraтus posterior superior)",
  },
        {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871068/Serratus_posterior_inferior_x8xqbd.png",
    answer: "უკანა ქვედა დაკბილული კუნთი (Serraтus posterior inferior)",
  },
          {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871067/splenius_capitis_ag99e5.png",
    answer: "თავის სალმუნის კუნთი (Splenius capitis)",
  },
        {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871068/splenius_cervicis_vvb0gt.png",
    answer: "კისრის სალმუნის კუნთი (Splenius cervicis)",
  },
   {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871067/erector_spinae_paw1kt.png",
    answer: "ზურგის გამმართველი კუნთი (Erector spinae)",
  },
   {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871070/transversospinalis_ag0zlc.png",
    answer: "განივ-წვეტიანი კუნთი (Transversospinalis)",
  },
     {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871067/interspinales_tm6uee.png",
    answer: "წვეტთაშუა კუნთები (Interspinales)",
  },
       {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871065/intertransversarii_gdj7dd.png",
    answer: "განივ მორჩთაშუა კუნთები (Intertransversarii)",
  },
         {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871066/levatores_costarum_p6jbgh.png",
    answer: "ნეკნების ამწევი კუნთები (Levatores costarum)",
  },
         {
    image:
      "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763871067/suboccipitales_n4hawj.png",
    answer: "კეფისქვეშა კუნთები (Suboccipitales)",
  },
];

</script>