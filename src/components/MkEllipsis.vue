<template>
  <span :class="$style.root">
    <span v-for="i in 3" :key="i" :style="{ animationDelay: `${i * 0.15}s` }">.</span>
  </span>
</template>

<style module lang="scss">
.root span {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
}
</style>
