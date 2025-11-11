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
  { image: "/muscles/Adductor_brevis.gif", answer: "მოკლე მომზიდველი კუნთი (adductor brevis)" },
  { image: "/muscles/Adductor_longus.gif", answer: "გრძელი მომზიდველი კუნთი (adductor longus)" },
  { image: "/muscles/Adductor_magnus.gif", answer: "დიდი მომზიდველი კუნთი (adductor magnus)" },
  { image: "/muscles/Adductor_minimus.gif", answer: "მცირე მომზიდველი კუნთი (adductor minimus)" },
  { image: "/muscles/Articularis_genus_Crop.gif", answer: "მუხლის სახსრის კუნთი (articularis genus)" },
  { image: "/muscles/Biceps_femoris.gif", answer: "ბარძაყის ორთავა კუნთი (biceps femoris)" },
  { image: "/muscles/Gluteus_maximus_3D.gif", answer: "დიდი დუნდულა კუნთი (gluteus maximus)" },
  { image: "/muscles/Gracilis.gif", answer: "ნაზი კუნთი (gracilis)" },
  { image: "/muscles/Pectineus_3D.gif", answer: "ქედის კუნთი (pectineus)" },
  { image: "/muscles/Quadriceps_3D.gif", answer: "ბარძაყის ოთხთავა კუნთი (quadriceps femoris)" },
  { image: "/muscles/Rectus_femoris_3D.gif", answer: "ბარძაყის სწორი კუნთი (rectus femoris)" },
  { image: "/muscles/Sartorius_3D.gif", answer: "თერძის კუნთი (sartorius)" },
  { image: "/muscles/Semimembranosus.gif", answer: "თითისტარა კუნთი (semimembranosus)" },
  { image: "/muscles/Hamstrings.gif", answer: "ნახევრად მყესოვანი კუნთი (semitendinosus)" },
  { image: "/muscles/Hip-TensorFasciaeLatae.gif", answer: "განიერი ფასციის გამჭიმავი კუნთი (tensor fasciae latae)" },
  { image: "/muscles/Vastus_intermedialis.gif", answer: "ბარძაყის შუამდებარე განიერი კუნთი (vastus intermedius)" },
  { image: "/muscles/Vastus_lateralis.gif", answer: "ბარძაყის ლატერალური განიერი კუნთი (vastus lateralis)" },
  { image: "/muscles/Vastus_medialis.gif", answer: "ბარძაყის მედიალური განიერი კუნთი (vastus medialis)" },
];

</script>
