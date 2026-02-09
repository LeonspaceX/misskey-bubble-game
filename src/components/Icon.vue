<template>
  <i :class="['ti', iconClass]" aria-hidden="true"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: 'music' | 'settings' | 'player-stop' | 'player-track-next' | 'player-play' | 'arrow-right';
}>();

const iconMap: Record<typeof props.name, string> = {
  music: 'ti-music',
  settings: 'ti-settings',
  'player-stop': 'ti-player-stop',
  'player-track-next': 'ti-player-track-next',
  'player-play': 'ti-player-play',
  'arrow-right': 'ti-arrow-big-right',
};

const iconClass = computed(() => iconMap[props.name]);
</script>

<style module lang="scss">
:global(.ti) {
  width: 1.28em;
  vertical-align: -12%;
}

:global(.ti)::before {
  font-size: 128%;
}
</style>
