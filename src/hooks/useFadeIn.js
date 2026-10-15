import { useCallback, useEffect, useRef } from "react";
import { Platform } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export default function useFadeIn({
  direction = "up",
  delay = 0,
  distance = 20,
  duration = 500,
} = {}) {
  const reduced = useReducedMotion();
  const progress = useSharedValue(reduced ? 1 : 0);
  const ref = useRef(null);

  const play = useCallback(() => {
    progress.value = withDelay(
      delay,
      withTiming(1, { duration, easing: Easing.out(Easing.cubic) })
    );
  }, [delay, duration, progress]);

  useEffect(() => {
    if (reduced) {
      progress.value = 1;
      return undefined;
    }
    const node = ref.current;
    const canObserve =
      Platform.OS === "web" &&
      typeof IntersectionObserver !== "undefined" &&
      typeof Element !== "undefined" &&
      node instanceof Element;

    if (!canObserve) {
      play();
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [play, reduced, progress]);

  const style = useAnimatedStyle(() => {
    const offset = (1 - progress.value) * distance;
    const transform =
      direction === "left" ? [{ translateX: -offset }]
      : direction === "right" ? [{ translateX: offset }]
      : [{ translateY: offset }];
    return { opacity: progress.value, transform };
  });

  return { ref, style };
}
