import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VideoLessons from "../components/VideoLessons.vue";
import Contact from "../components/Contact.vue";
import Gallery from "../components/Gallery.vue";
import Quizzes from "../components/Quizes.vue";
import AsanaQuiz from "../components/AsanaQuiz.vue";
import MuscleQuiz from "../components/MuscleQuiz.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/asanaQuiz", name: "AsanaQuiz", component: AsanaQuiz },
  { path: "/lessons", name: "VideoLessons", component: VideoLessons },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/quizzes", name: "Quizzes", component: Quizzes },
  { path: "/muscleQuiz", name: "muscleQuiz", component: MuscleQuiz },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
