<template>
  <div :class="$style.app">
    <div :class="$style.langBar">
      <label :class="$style.langLabel">Language</label>
      <MkSelect v-model="locale" :items="localeItems" />
    </div>
    <DropAndFusion />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DropAndFusion from '@/pages/DropAndFusion.vue';
import MkSelect from '@/components/MkSelect.vue';
import { i18n } from '@/i18n';

const localeItems = i18n.locales.map((item) => ({ label: item.label, value: item.value }));

const locale = computed({
  get: () => i18n.state.locale,
  set: (value) => i18n.setLocale(value as typeof i18n.state.locale),
});
</script>

<style module lang="scss">
.app {
  min-height: 100vh;
}

.langBar {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: color-mix(in srgb, var(--MI_THEME-panel) 85%, transparent);
  border: 1px solid var(--MI_THEME-divider);
  border-radius: 10px;
  box-shadow: 0 6px 16px var(--MI_THEME-shadow);
  backdrop-filter: blur(6px);
}

.langLabel {
  font-size: 12px;
  opacity: 0.7;
}
</style>
