import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import GuitarPedal from "@/views/GuitarPedal.vue";
import Amp from "@/views/Amp.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/guitarpedal/random",
    name: "Random Guitar Pedal",
    component: GuitarPedal,
    props: () => ({ seed: `${Date.now()}` })
  },
  {
    path: "/guitarpedal/:seed",
    name: "Guitar Pedal",
    component: GuitarPedal,
    props: route => ({ seed: route.params.seed || `${Date.now()}` })
  },
  {
    path: "/amp/random",
    name: "Random Amp",
    component: Amp,
    props: () => ({ seed: `${Date.now()}` })
  },
  {
    path: "/amp/:seed",
    name: "Amp",
    component: Amp,
    props: route => ({ seed: route.params.seed || `${Date.now()}` })
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
