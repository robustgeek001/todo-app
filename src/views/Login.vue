<template>
  <div class="login" v-cloak>
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" value="Login">
        Submit
      </button>
      <p class="forgot-password">
        <router-link to="/forgot">Forgot Password?</router-link>
      </p>
      <p>
        Need an Account?
        <router-link to="/register" class="link">Register Here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';
export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((user) => console.log(user.data))
        .catch((err) => alert(err.message));
    };
    return { Login, email, password };
  },
};
</script>

<style>
h1 {
  margin-bottom: 50px !important;
}
.login {
  margin-top: 220px;
}
.login input {
  width: 100%;
  padding: 12px;
  border: 5px solid #eee;
  outline: none;
  color: rgb(44, 42, 42);
  margin: 28px auto;
}
.login button {
  margin: 30px auto;
}
[v-cloak] {
  display: none;
}
input {
  max-width: 390px;
}
.link {
  color: rgb(43, 110, 235);
  margin-top: 10px;
}
</style>
