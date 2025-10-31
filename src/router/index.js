import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import YogaQuiz from "../components/YogaQuiz.vue";
import VideoLessons from "../components/VideoLessons.vue";
import Contact from "../components/Contact.vue";
import Gallery from "../components/Gallery.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/quiz", name: "YogaQuiz", component: YogaQuiz },
  { path: "/lessons", name: "VideoLessons", component: VideoLessons },
  { path: "/contact", name: "Contact", component: Contact },
    { path: "/gallery", name: "Gallery", component: Gallery },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
