<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="form-field">
        <label for="username">Username:</label>
        <br />
        <input id="username" type="text" required v-model="username" />
      </div>
      <div class="form-field">
        <label for="email">Email:</label>
        <br />
        <input id="email" type="email" required v-model="email" />
      </div>
      <div class="form-field">
        <label for="password">Password: (minimum 8 characters)</label>
        <br />
        <input id="password" type="password" minlength="8" required v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="dummy">
      <h4>Dummy User:</h4>
      <p>Username: dummyuser</p>
      <p>Email: dummy@example.com</p>
      <p>Password: password123</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      const dummyUser = {
        username: 'dummyuser',
        email: 'dummy@example.com',
        password: 'password123'
      }
      if (
        this.username === dummyUser.username &&
        this.email === dummyUser.email &&
        this.password === dummyUser.password
      ) {
        this.$router.push({ path: '/profile', query: { username: this.username } })
      } else {
        alert('Invalid Credentials')
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: min(100%, 50rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block-start: 2rem;
  gap: 3rem;
}
.dummy {
  color: rgb(221, 103, 103);
  font-weight: 700;
}
input {
  padding: 0.25rem 0.5rem;
  font-size: inherit;
}
.form-field {
  margin-block-end: 1rem;
}
form button {
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: #00bd7e;
  font-size: 1rem;
}
label {
  cursor: pointer;
}
</style>
