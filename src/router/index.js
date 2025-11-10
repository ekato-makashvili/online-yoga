import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import VideoLessons from "../components/VideoLessons.vue";
// import Contact from "../components/Contact.vue";
// import Gallery from "../components/Gallery.vue";
import Quizzes from "../components/Quizzes.vue";
import AsanaQuiz from "../components/AsanaQuiz.vue";
import MuscleQuizzes from "../components/MuscleQuizzes.vue";
import HipMusclesQuiz from "../components/HipMusclesQuiz.vue";
import ArmMusclesQuiz from "../components/ArmMusclesQuiz.vue";
import BackMusclesQuiz from "../components/BackMusclesQuiz.vue";
import AbdominalMusclesQuiz from "../components/AbdominalMusclesQuiz.vue";
import DeepBackMusclesQuiz from "../components/DeepBackMusclesQuiz.vue";

const routes = [
  // { path: "/lessons", name: "VideoLessons", component: VideoLessons },
  // { path: "/contact", name: "Contact", component: Contact },
  // { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/", name: "Home", component: HomeView },
  { path: "/quizzes", name: "Quizzes", component: Quizzes },
  { path: "/quizzes/asana-quiz", name: "AsanaQuiz", component: AsanaQuiz },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
