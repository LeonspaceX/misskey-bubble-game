<template>
<div :class="$style.root" ref="rootEl">
  <div :class="$style.label" @click="focus"><slot name="label"></slot></div>
  <div
    ref="containerEl"
    tabindex="0"
    :class="[$style.input, { [$style.inline]: inline, [$style.disabled]: disabled, [$style.focused]: focused || opened }]"
    @focus="focused = true"
    @blur="focused = false"
    @mousedown.prevent="toggle"
    @keydown.space.enter="toggle"
  >
    <div ref="prefixEl" :class="$style.prefix"><slot name="prefix"></slot></div>
    <div ref="inputEl" :class="$style.inputCore">
      <div>{{ currentLabel }}</div>
      <div style="display: none;">
        <slot></slot>
      </div>
    </div>
    <div ref="suffixEl" :class="$style.suffix">
      <span :class="[$style.chevron, { [$style.chevronOpening]: opened }]"></span>
    </div>
  </div>
  <div :class="$style.caption"><slot name="caption"></slot></div>
  <div v-if="opened" :class="[$style.menu, '_popup', '_shadow']">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      :class="[$style.option, { [$style.active]: item.value === modelValue }]"
      @click="select(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  items: { label: string; value: string }[];
  modelValue: string;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  inline?: boolean;
}>(), {
  disabled: false,
  readonly: false,
  inline: false,
});

const emit = defineEmits<{
  (ev: 'update:modelValue', value: string): void;
}>();

const opened = ref(false);
const focused = ref(false);
const rootEl = ref<HTMLElement | null>(null);
const containerEl = ref<HTMLElement | null>(null);
const inputEl = ref<HTMLElement | null>(null);
const prefixEl = ref<HTMLElement | null>(null);
const suffixEl = ref<HTMLElement | null>(null);

const currentLabel = computed(() => {
  return props.items.find((item) => item.value === props.modelValue)?.label ?? '';
});

function focus() {
  containerEl.value?.focus();
}

function toggle() {
  if (props.disabled || props.readonly) return;
  opened.value = !opened.value;
}

function select(value: string) {
  emit('update:modelValue', value);
  opened.value = false;
}

function onDocClick(ev: MouseEvent) {
  if (!rootEl.value) return;
  if (!rootEl.value.contains(ev.target as Node)) {
    opened.value = false;
  }
}

watch(opened, (isOpen) => {
  if (isOpen) {
    focused.value = true;
  }
});

onMounted(() => {
  if (props.autofocus) focus();
  document.addEventListener('click', onDocClick);

  if (inputEl.value && suffixEl.value?.offsetWidth) {
    inputEl.value.style.paddingRight = `${suffixEl.value.offsetWidth}px`;
  }
  if (inputEl.value && prefixEl.value?.offsetWidth) {
    inputEl.value.style.paddingLeft = `${prefixEl.value.offsetWidth}px`;
  }
});

onUnmounted(() => {
  document.removeEventListener('click', onDocClick);
});
</script>

<style module lang="scss">
.root {
  position: relative;
  display: inline-block;
  min-width: 220px;
}

.label {
  font-size: 0.85em;
  padding: 0 0 8px 0;
  user-select: none;

  &:empty {
    display: none;
  }
}

.caption {
  font-size: 0.85em;
  padding: 8px 0 0 0;
  color: color(from var(--MI_THEME-fg) srgb r g b / 0.75);

  &:empty {
    display: none;
  }
}

.input {
  position: relative;
  cursor: pointer;

  &.inline {
    display: inline-block;
    margin: 0;
  }

  &.focused {
    > .inputCore {
      border-color: var(--MI_THEME-accent) !important;
    }
  }

  &.disabled {
    opacity: 0.7;

    &,
    > .inputCore {
      cursor: not-allowed !important;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    > .inputCore {
      border-color: var(--MI_THEME-inputBorderHover) !important;
    }
  }
}

.inputCore {
  appearance: none;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  height: 36px;
  width: 100%;
  margin: 0;
  padding: 0 12px;
  font: inherit;
  font-weight: normal;
  font-size: 1em;
  color: var(--MI_THEME-fg);
  background: var(--MI_THEME-panel);
  border: solid 1px var(--MI_THEME-panel);
  border-radius: 6px;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  transition: border-color 0.1s ease-out;
  cursor: pointer;
  pointer-events: none;
  user-select: none;
}

.prefix,
.suffix {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  padding: 0 12px;
  font-size: 1em;
  height: 36px;
  min-width: 16px;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;

  &:empty {
    display: none;
  }
}

.prefix {
  left: 0;
  padding-right: 6px;
}

.suffix {
  right: 0;
  padding-left: 6px;
}

.chevron {
  width: 12px;
  height: 12px;
  border-right: 2px solid var(--MI_THEME-fg);
  border-bottom: 2px solid var(--MI_THEME-fg);
  transform: rotate(45deg);
  opacity: 0.65;
  transition: transform 0.15s ease-out;
}

.chevronOpening {
  transform: rotate(-135deg);
}

.menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--MI_THEME-popup);
  border-radius: var(--MI-radius);
  box-shadow: 0 4px 32px var(--MI_THEME-shadow);
  padding: 8px 0;
  box-sizing: border-box;
  max-width: 100vw;
  min-width: 200px;
  overflow: auto;
  overscroll-behavior: contain;
  z-index: 50;
}

.option {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  text-align: left;
  padding: 5px 16px;
  border: none;
  background: transparent;
  color: var(--MI_THEME-fg);
  font-weight: normal;
  font-size: 0.9em;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: calc(100% - 16px);
  height: 100%;
  border-radius: 6px;
}

.option:focus-visible {
  outline: none;

  &:not(:hover):not(:active)::before {
    outline: var(--MI_THEME-focus) solid 2px;
    outline-offset: -2px;
  }
}

.option:not(:disabled):hover {
  color: var(--MI_THEME-accent);

  &::before {
    background-color: var(--MI_THEME-accentedBg);
  }
}

.option:not(:disabled):active,
.option:not(:disabled).active {
  color: var(--MI_THEME-fgOnAccent);

  &::before {
    background-color: var(--MI_THEME-accent);
  }
}

.option.active {
  color: var(--MI_THEME-fgOnAccent);
}
</style>
