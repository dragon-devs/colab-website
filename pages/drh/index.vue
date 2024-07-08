<template>
  <div>
    <nav class="nav">
      <span class="logo"></span>
      <ul class="flex gap-4">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>New</li>
      </ul>
      <span class="btn">Login</span>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav {
  @apply bg-slate-200 text-slate-800 font-semibold text-lg flex gap-2 justify-between items-center p-4
}
.logo{
  @apply w-8 h-8 bg-slate-400 rounded-full
}
.logo{
  @apply text-sm p-2 px-4 text-white rounded-md shadow bg-blue-500
}
</style>
