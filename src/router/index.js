import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";
import BarangMasuk from "../components/BarangMasuk.vue";
import BarangKeluar from "../components/BarangKeluar.vue";
import Pengiriman from "../components/Pengiriman.vue";
import StokOpname from "../components/StokOpname.vue";
import TambahBarang from "../components/TambahBarang.vue";
import Chart from "../components/ChartComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/barang-masuk",
    name: "BarangMasuk",
    component: BarangMasuk,
  },
  {
    path: "/barang-keluar",
    name: "BarangKeluar",
    component: BarangKeluar,
  },
  {
    path: "/pengiriman",
    name: "Pengiriman",
    component: Pengiriman,
  },
  {
    path: "/stok-opname",
    name: "StokOpname",
    component: StokOpname,
  },
  {
    path: "/tambah-barang",
    name: "TambahBarang",
    component: TambahBarang,
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;