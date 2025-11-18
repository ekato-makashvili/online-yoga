<template>
  <QuizTemplate
    title="გამოიცანი კუნთის სახელი"
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
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403333/Adductor_brevis_fy1nku.gif", answer: "მოკლე მომზიდველი კუნთი (adductor brevis)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403333/Adductor_longus_sckaqt.gif", answer: "გრძელი მომზიდველი კუნთი (adductor longus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403334/Adductor_magnus_xfnyms.gif", answer: "დიდი მომზიდველი კუნთი (adductor magnus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403335/Adductor_minimus_uvv4t7.gif", answer: "მცირე მომზიდველი კუნთი (adductor minimus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403336/Articularis_genus_Crop_a54kr5.gif", answer: "მუხლის სახსრის კუნთი (articularis genus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403334/Biceps_femoris_kky8bs.gif", answer: "ბარძაყის ორთავა კუნთი (biceps femoris)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403335/Gluteus_maximus_3D_ej2ywb.gif", answer: "დიდი დუნდულა კუნთი (gluteus maximus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403337/Gracilis_o25e2j.gif", answer: "ნაზი კუნთი (gracilis)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403339/Pectineus_3D_llbjcg.gif", answer: "ქედის კუნთი (pectineus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403340/Quadriceps_3D_ttftst.gif", answer: "ბარძაყის ოთხთავა კუნთი (quadriceps femoris)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403342/Rectus_femoris_3D_pmfdhv.gif", answer: "ბარძაყის სწორი კუნთი (rectus femoris)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403343/Sartorius_3D_uf5jkr.gif", answer: "თერძის კუნთი (sartorius)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403344/Semimembranosus_zxmgut.gif", answer: "თითისტარა კუნთი (semimembranosus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403337/Hamstrings_vz3nmb.gif", answer: "ნახევრად მყესოვანი კუნთი (semitendinosus)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403338/Hip-TensorFasciaeLatae_bi2ubf.gif", answer: "განიერი ფასციის გამჭიმავი კუნთი (tensor fasciae latae)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403346/Vastus_intermedialis_xidkca.gif", answer: "ბარძაყის შუამდებარე განიერი კუნთი (vastus intermedius)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403348/Vastus_lateralis_skkplw.gif", answer: "ბარძაყის ლატერალური განიერი კუნთი (vastus lateralis)" },
  { image: "https://res.cloudinary.com/dmr48sbbr/image/upload/v1763403350/Vastus_medialis_umurva.gif", answer: "ბარძაყის მედიალური განიერი კუნთი (vastus medialis)" },
];
</script>