<template>
  <span>{{ formatted }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: number;
}>();

const formatted = computed(() => props.value.toLocaleString());
</script>
