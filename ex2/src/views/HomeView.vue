<template>
  <main>
    <p>Welcome to Our Website!</p>
    <p>
      Please <span class="s-up"> Sign up </span>
      or
      <span class="s-in"> Sign in </span>
    </p>
  </main>
</template>
<style scoped>
main {
  padding-block-start: 3rem;
  text-align: center;
  font-size: 2rem;
}
.s-up {
  color: #00bd7e;
}
.s-in {
  color: rgb(68, 68, 207);
}
p + p {
  margin-block-start: 1rem;
  font-size: 1.5rem;
}
</style>
