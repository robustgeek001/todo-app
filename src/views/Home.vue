<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">
              <img src="https://img.icons8.com/fluent/36/000000/tasklist.png" />
              <router-link to="/" class="link">Todo-App</router-link>
            </a>
          </div>
        </nav>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                style="display: none"
                >Home</a
              >
            </li>
          </ul>

          <form class="d-flex">
            <button class="btn btn-dark" type="submit" @click="Logout">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase';

export default {
  setup() {
    const name = ref('');

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        user.name = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log('User Signed out'))
        .catch((err) => alert(err.message));
    };
    return { Logout, name };
  },
};
</script>
<style scoped>
h5 {
  margin-right: 40px;
  padding: 10px auto;
}
.link {
  text-decoration: none;
  color: white !important;
  margin-left: 5px;
}
</style>
