<template>
  <div class="about">
    <h1>Welcome, {{ username }}!</h1>
  </div>
  <RouterLink to="/">Go Back</RouterLink>
</template>
<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  created() {
    this.username = this.$route.query.username
  }
}
</script>

<style>
.about {
  text-align: center;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
