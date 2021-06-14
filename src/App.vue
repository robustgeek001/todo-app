<template>
  <router-view />
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import firebase from 'firebase';
import { onBeforeMount } from 'vue';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/');
        }
      });
    });
  },
};
</script>

<style>
body {
  color: whitesmoke !important;
  background: rgb(29, 28, 28) !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Poppins';
  margin-top: 20px;
}
</style>
