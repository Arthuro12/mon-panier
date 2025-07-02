import { createWebHistory, createRouter } from "vue-router";

import LabPage from "./views/lab/LabPage.vue";
import LoginPage from "./views/LoginPage.vue";

const routes = [
    { path: "/", component: LoginPage },
    { path: "/lab", component: LabPage }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})