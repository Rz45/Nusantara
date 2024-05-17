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
                        <a href="#" class="sidebar-link nav-link active">
                            <i class="fa-solid fa-list pe-2"></i>
                            <RouterLink :to="{ name: 'Dashboard' }" class="nav-link">Dashboard</RouterLink>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
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
            <nav class="navbar navbar-expand px-3 border-bottom">
                <button class="btn" id="sidebar-toggle" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                                <img src="../assets/nusantara.png" class="avatar img-fluid rounded" alt="">
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="#" class="dropdown-item">Profile</a>
                                <a href="#" class="dropdown-item">Setting</a>
                                <a href="#" class="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
        </div>
  
</template>

<script>

  export default {
    name: 'Nav'
  }

</script>