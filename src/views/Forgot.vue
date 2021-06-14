<template>
  <div class="forgot">
    <h1>Forgot Password</h1>
    <form @submit.prevent="handleSubmit">
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
      <button type="submit" class="btn btn-primary" value="Forgot">
        <router-link to="/login" class="submit">Submit</router-link>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Forgot',
};
</script>

<style>
.forgot {
  margin-top: 220px;
}
.forgot input {
  width: 100%;
  padding: 12px;
  border: 5px solid #eee;
  outline: none;
  color: rgb(44, 42, 42);
  margin: 28px auto;
}
.forgot button {
  margin: 30px auto;
}
input {
  max-width: 390px;
}
.submit {
  text-decoration: none;
  color: whitesmoke !important;
}
</style>
