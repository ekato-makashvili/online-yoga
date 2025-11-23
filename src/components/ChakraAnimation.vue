<template>
  <div class="relative flex justify-center items-center w-full h-screen overflow-hidden">
    <!-- ლოტუსის ფიგურა (სტატიკური ფონი შუაში) -->
    <LotusFigure id="lotus-image" />

    <!-- ჩაკრების ანიმაცია ზემოდან -->
    <div
      v-for="(chakra, index) in chakras"
      :key="index"
      class="absolute rounded-full"
      :style="chakraStyle(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import LotusFigure from './LotusFigure.vue'

const chakras = ref([
  { color: "#583d90" },
  { color: "#4a68a9" },
  { color: "#5899cb" },
  { color: "#6ca560" },
  { color: "#dbc34e" },
  { color: "#d78546" },
  { color: "#b34b50" },
]);

const chakraPositions = ref([]);
const targetPositions = ref([]);
const chaosEnabled = ref(true);
const lerpSpeed = 0.05;

// --- სტატიკური ჩაკრის ზომები და საერთო სიმაღლე ---
const getResponsiveValues = () => {
  const width = window.innerWidth;
  let size, totalHeight;

  if (width < 480) {       // პატარა ეკრანები
    size = 35;
    totalHeight = 400;
  } 
  else if (width < 768) { // საშუალო ეკრანები
    size = 50;
    totalHeight = 580;
  } else if (width < 1024) { // საშუალო ეკრანები
    size = 60;
    totalHeight = 600;
  } else {                  // დიდი ეკრანები
    size = 65;
    totalHeight = 650;
  }

  return { size, totalHeight };
};

// --- სტატიკური Y პოზიციები ჩაკრებისთვის ---
const getStaticYPositions = () => {
  const { size, totalHeight } = getResponsiveValues();
  const topY = -totalHeight / 2 + size / 2;
  const bottomY = totalHeight / 2 - size / 2;
  const step = (bottomY - topY) / (chakras.value.length - 1);

  return chakras.value.map((_, i) => topY + i * step);
};

onMounted(() => {
  const yPositions = getStaticYPositions();

  chakras.value.forEach((c, i) => {
    chakraPositions.value.push({
      x: Math.random() * 0.3 * window.innerWidth - 0.15 * window.innerWidth,
      y: yPositions[i],
      speed: 1 + Math.random() * 2,
    });
    targetPositions.value.push(chakraPositions.value[i].x);
  });

  // მოძრაობის tick
  setInterval(() => {
    chakraPositions.value = chakraPositions.value.map((c, i) => {
      const targetX = targetPositions.value[i];
      const newX = c.x + (targetX - c.x) * lerpSpeed;
      return { ...c, x: newX };
    });
  }, 50);

  // ცენტრი/ქაოსი ციკლი
  const centerCycle = () => {
    chaosEnabled.value = false;
    targetPositions.value = chakraPositions.value.map(() => 0);

    setTimeout(() => {
      chaosEnabled.value = true;
      targetPositions.value = chakraPositions.value.map(
        () => Math.random() * 0.3 * window.innerWidth - 0.15 * window.innerWidth
      );
    }, 4000);
  };

  centerCycle();
  setInterval(centerCycle, 10000);
});

// --- ჩაკრის სტილი ---
const chakraStyle = (index) => {
  const pos = chakraPositions.value[index] || { x: 0, y: 0 };
  const color = chakras.value[index].color;
  const { size } = getResponsiveValues();

  const maxDistance = 0.15 * window.innerWidth;
  const glow = 1 - Math.min(Math.abs(pos.x) / maxDistance, 1);

  return {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    left: `calc(50% + ${pos.x - size / 2}px)`,
    top: `calc(50% + ${pos.y - size / 2}px)`,
    borderRadius: "50%",
    filter: `brightness(${glow * 1.5})`,
    transition: "all 0.05s linear",
    position: "absolute",
    zIndex: 20,
  };
};
</script>
