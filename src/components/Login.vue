<template>
    <div class="container-sm d-flex justify-content-center align-items-center min-vh-100">
      <!-- login -->
      <div class="row border rounder-5 bg-white shadow box-area">
        <!-- kotak kiri -->
        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="../assets/login1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="../assets/login2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../assets/login3.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../assets/login4.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!-- kotak kanan -->
        <div class="col-md-6 p-4 my-3 right-box">
          <form @submit.prevent="login" class="needs-validation">
            <div class="row align-items-center">
              <div class="header-text mb-4">
                <h2>Sign In</h2>
              </div>
              <div class="input-group mb-3">
                <div class="col">
                  <label for="" class="mb-2">Username</label>
                  <input type="text" id="username" v-model="username" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Username" required autofocus />
                  <div class="invalid-feedback">Username is invalid</div>
                </div>
              </div>
              <div class="input-group mb-3">
                <div class="col">
                  <label for="" class="mb-2">Password</label>
                  <input type="password" id="password" v-model="password" class="form-control form-control-lg bg-light fs-6" placeholder="password" required />
                  <div class="invalid-feedback">Password is required</div>
                </div>
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="formCheck" />
                  <label for="formCheck" clas><small>Remember Me</small></label>
                </div>
                <div class="forgot">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-lg btn-primary w-100 fs-6">Login</button>
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="forgot">
                  <p>Don't have an account?
                    <a href="#">
                      <RouterLink :to="{ name: 'Register' }" class="nav-link">Sign up here</RouterLink>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          username: this.username,
          password: this.password
        });
        console.log(response.data);
        // Simpan token JWT ke localStorage atau Vuex state
        localStorage.setItem('token', response.data.token);
        this.$router.push({ name: 'Dashboard' });
      } catch (error) {
        console.error(error.response.data.message);
      }
    }
  }
}
</script>

<style>


</style>