import observer from './observer';
import type { EasySubscriber } from 'easy-eventbus';
import { ref, onUnmounted } from 'vue';

export function useObserver() {
  const sub = ref<EasySubscriber>(observer.createSubscriber());
  onUnmounted(() => {
    observer.removeSubscriber(sub.value.id);
  });
  return {
    sub,
  };
}
