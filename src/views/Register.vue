<template>
  <div class="register" v-cloak>
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="name"
        />
      </div>
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
      <button type="submit" class="btn btn-primary" value="Register">
        Submit
      </button>

      <p>
        Already have an Account?
        <router-link to="/login" class="link">Login Here</router-link>
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

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => console.log(user.data))
        .catch((err) => alert(err.message));
    };
    return { Register, email, password };
  },
};
</script>

<style>
h1 {
  margin-bottom: 50px !important;
}
.register {
  margin-top: 220px;
}
[v-cloak] {
  display: none;
}
.register input {
  width: 100%;
  padding: 12px;
  border: 5px solid #eee;
  outline: none;
  color: rgb(54, 52, 52);
  margin: 28px auto;
}
.register button {
  margin: 30px auto;
}
input {
  max-width: 390px;
}
.link {
  color: rgb(43, 110, 235);
  margin-top: 10px;
}
</style>
