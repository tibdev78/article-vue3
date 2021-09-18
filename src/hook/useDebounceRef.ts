import { ref, customRef, Ref } from "vue";
import { CallbackFunction } from "@/models/Global";

const debounce = (fn: CallbackFunction, delay?: number) => {
  let timeout = 0;
  return (...args: Array<unknown>) => {
    if (!delay && !timeout) fn(...args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * function to debounce a ref data
 * @param initialValue ref value
 * @param delay delay for debounce value
 * @param immediate immediate data or non
 * @returns data
 */
const useDebounceRef = (
  initialValue: string | number,
  delay: number
): Ref<string | number> => {
  const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce((val: string | number) => {
      state.value = val;
      trigger();
    }, delay),
  }));
  return debouncedRef;
};

export default useDebounceRef;
