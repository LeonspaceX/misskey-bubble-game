import { onMounted, onUnmounted } from 'vue';

export function useInterval(fn: () => void, ms: number) {
  let id: number | null = null;

  onMounted(() => {
    id = window.setInterval(fn, ms);
  });

  onUnmounted(() => {
    if (id != null) window.clearInterval(id);
  });
}
