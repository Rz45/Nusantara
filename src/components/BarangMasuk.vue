<template>

    <div class="wrapper">
        <aside id="sidebar" class="js-sidebar">
            <!-- Content For Sidebar -->
            <div class="h-100">
                <div class="sidebar-logo mb-5">
                    <img src="../assets/nusantara.png" class="logo-nusantara" alt="">
                    <br>
                    <a href="#">Nusantara</a>
                </div>
                <ul class="sidebar-nav nav-tabs">
                    <li class="sidebar-header mb-4">
                        Hello, Admin!
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-solid fa-list pe-2"></i>
                            <RouterLink :to="{ name: 'Dashboard' }" class="nav-link">Dashboard</RouterLink>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link nav-link active">
                            <i class="fa-solid fa-list pe-2"></i>
                            <RouterLink :to="{ name: 'BarangMasuk' }" class="nav-link">Barang Masuk</RouterLink>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-solid fa-list pe-2"></i>
                            <RouterLink :to="{ name: 'BarangKeluar' }" class="nav-link">Barang Keluar</RouterLink>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-solid fa-list pe-2"></i>
                            <RouterLink :to="{ name: 'Pengiriman' }" class="nav-link">Pengiriman</RouterLink>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="fa-solid fa-list pe-2"></i>
                            <RouterLink :to="{ name: 'StokOpname' }" class="nav-link">Stok Opname</RouterLink>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link mt-5">
                            <RouterLink :to="{ name: 'Login' }" class="nav-link">
                                <i class="fa-solid fa-list pe-2 bi-box-arrow-right"></i>
                                Logout
                            </RouterLink>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <div class="main">
            <div class="input-group mt-5 mb-5">
                <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
                <div class="input-group-append mx-3">
                    <button id="button-addon5" type="submit" class="btn btn-primary"><i class="bi bi-search"></i></button>
                </div>
                <div class="tambah-barang">
                    <a href="#" class="btn btn-primary">
                        <RouterLink :to="{ name: 'Login' }" class="tambah-button">Tambah Barang</RouterLink>
                            <!-- <i class="bi bi-plus"></i> -->
                    </a>
                </div>
            </div>
                    <!-- Table Element -->
                    <div class="card border-0 mx-5">
                        <div class="card-header">
                            <h5 class="card-title">
                                Recent Orders
                            </h5>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nomor DO</th>
                                        <th scope="col">Kode Barang</th>
                                        <th scope="col">Deskripsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>DO-001</td>
                                        <td>DUEL-1</td>
                                        <td>Dueller</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>DO-002</td>
                                        <td>PTNZ-3</td>
                                        <td>Potenza</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>DO-001</td>
                                        <td>DUEL-1</td>
                                        <td>Dueller</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>DO-002</td>
                                        <td>PTNZ-3</td>
                                        <td>Potenza</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            <a href="#" class="theme-toggle">
                <i class="fa-regular fa-moon"></i>
                <i class="fa-regular fa-sun"></i>
            </a>
        </div>
        <!-- <footer class="footer">
                <div class="container-fluid">
                    <div class="row text-muted">
                        <div class="col-6 text-start">
                            <p class="mb-0">
                                <a href="#" class="text-muted">
                                    <strong>Nusantara</strong>
                                </a>
                            </p>
                        </div>
                        <div class="col-6 text-end">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class="text-muted">Contact</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-muted">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> -->
    
</template>

<script>
// import axios from 'axios';

export default {
  methods: {
    logout() {
      // Hapus token dari localStorage
      localStorage.removeItem('token');

      // Arahkan kembali ke halaman login
      this.$router.push({ name: 'Login' });
    }
}
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*,
::after,
::before {
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    opacity: 1;
    overflow-y: scroll;
    margin: 0;
}

a {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}

li {
    list-style: none;
}

h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.275rem;
    color: var(--bs-emphasis-color);
}

::-webkit-input-placeholder {
   font-size: 15px;
}

.tambah-button {
    color: #FFF;
    font-size: 0.875rem;
}

.input-group {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin-left: 300px;
    margin-top: 20px;
    font-size: 1rem;
}

.footer {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: var(--bs-primary-bg-subtle);

}

/* Layout for admin dashboard skeleton */

.wrapper {
    align-items: stretch;
    display: flex;
    width: 100%;
}

#sidebar {
    max-width: 264px;
    min-width: 264px;
    background: #cf1313;
    transition: all 0.35s ease-in-out;
}

.main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 0;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    width: 100%;
    background: var(--bs-dark-bg-subtle);
}

/* Sidebar Elements Style */
.logo-nusantara {
    margin-left: 30px;
    width: 150px;
    height: 150px
}

.sidebar-logo {
    padding: 1.15rem;
}

.sidebar-logo a {
    color: #e9ecef;
    font-size: 1.15rem;
    font-weight: 600;
    margin-left: 60px;
}

.sidebar-nav {
    flex-grow: 1;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    margin-left: 0;
}

.sidebar-header {
    color: #e9ecef;
    font-size: .75rem;
    padding: 1.5rem 1.5rem .375rem;
}

a.sidebar-link {
    padding: .625rem 1.625rem;
    color: #e9ecef;
    position: relative;
    display: block;
    font-size: 0.875rem;
}

.sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}

.avatar {
    height: 40px;
    width: 40px;
}

.navbar-expand .navbar-nav {
    margin-left: auto;
}

.content {
    flex: 1;
    max-width: 100vw;
    width: 100vw;
}

.form-control:focus {
  box-shadow: none;
}

.form-control-underlined {
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding-left: 0;
}


@media (min-width:768px) {
    .content {
        max-width: auto;
        width: auto;
    }
}

.card {
    box-shadow: 0 0 .875rem 0 rgba(60, 35, 34, 0.05);
    margin-bottom: 24px;
}

.illustration {
    background-color: var(--bs-primary-bg-subtle);
    color: var(--bs-emphasis-color);
}

.illustration-img {
    max-width: 150px;
    width: 100%;
}

/* Sidebar Toggle */

#sidebar.collapsed {
    margin-left: -264px;
}

/* Footer and Nav */

@media (max-width:767.98px) {

    .js-sidebar {
        margin-left: -264px;
    }

    #sidebar.collapsed {
        margin-left: 0;
    }

    .navbar,
    footer {
        width: 100vw;
    }
}

/* Theme Toggler */

.theme-toggle {
    position: fixed;
    top: 50%;
    transform: translateY(-65%);
    text-align: center;
    z-index: 10;
    right: 0;
    left: auto;
    border: none;
    background-color: var(--bs-body-color);
}

html[data-bs-theme="dark"] .theme-toggle .fa-sun,
html[data-bs-theme="light"] .theme-toggle .fa-moon {
    cursor: pointer;
    padding: 10px;
    display: block;
    font-size: 1.25rem;
    color: #FFF;
}

html[data-bs-theme="dark"] .theme-toggle .fa-moon {
    display: none;
}

html[data-bs-theme="light"] .theme-toggle .fa-sun {
    display: none;
}

</style>