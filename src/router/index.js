import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import VideoLessons from "../components/VideoLessons.vue";
// import Contact from "../components/Contact.vue";
// import Gallery from "../components/Gallery.vue";
import Quizzes from "../components/quizzes/Quizzes.vue";
import AsanaQuizzes from "../components/quizzes/AsanaQuizzes.vue";
import MuscleQuizzes from "../components/quizzes/MuscleQuizzes.vue";
import HipMusclesQuiz from "../components/quizzes/muscles/HipMusclesQuiz.vue";
import ArmMusclesQuiz from "../components/quizzes/muscles/ArmMusclesQuiz.vue";
import BackMusclesQuiz from "../components/quizzes/muscles/BackMusclesQuiz.vue";
import AbdominalMusclesQuiz from "../components/quizzes/muscles/AbdominalMusclesQuiz.vue";
import DeepBackMusclesQuiz from "../components/quizzes/muscles/DeepBackMusclesQuiz.vue";
import StandingAsanasQuiz from "../components/quizzes/Asanas/StandingAsanasQuiz.vue";
import SittingAsanasQuiz from "../components/quizzes/Asanas/SittingAsanasQuiz.vue";

const routes = [
  // { path: "/lessons", name: "VideoLessons", component: VideoLessons },
  // { path: "/contact", name: "Contact", component: Contact },
  // { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/", name: "Home", component: HomeView },
  { path: "/quizzes", name: "Quizzes", component: Quizzes },
  { path: "/quizzes/asana-quiz", name: "AsanaQuizzes", component: AsanaQuizzes },
  {
    path: "/quizzes/muscle-quizzes",
    name: "muscleQuizzes",
    component: MuscleQuizzes,
  },
  {
    path: "/quizzes/muscle-quizzes/hip",
    name: "HipMusclesQuiz",
    component: HipMusclesQuiz,
  },
  {
    path: "/quizzes/muscle-quizzes/arm",
    name: "ArmMusclesQuiz",
    component: ArmMusclesQuiz,
  },
  {
    path: "/quizzes/muscle-quizzes/back",
    name: "BackMusclesQuiz",
    component: BackMusclesQuiz,
  },
  {
    path: "/quizzes/muscle-quizzes/abdomen",
    name: "AbdominalMusclesQuiz",
    component: AbdominalMusclesQuiz,
  },
  {
    path: "/quizzes/muscle-quizzes/deep-back",
    name: "DeepBackMusclesQuiz",
    component: DeepBackMusclesQuiz,
  },

    {
    path: "/quizzes/asana-quizzes/standing-asanas",
    name: "StandingAsanasQuiz",
    component: StandingAsanasQuiz,
  },
      {
    path: "/quizzes/asana-quizzes/sitting-asanas",
    name: "SittingAsanasQuiz",
    component: SittingAsanasQuiz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
