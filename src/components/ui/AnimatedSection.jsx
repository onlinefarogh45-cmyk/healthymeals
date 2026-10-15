import Animated from "react-native-reanimated";
import useFadeIn from "../../hooks/useFadeIn";

export default function AnimatedSection({ children, direction = "up", delay = 0, className = "" }) {
  const { ref, style } = useFadeIn({ direction, delay });
  return (
    <Animated.View ref={ref} style={style} className={className}>
      {children}
    </Animated.View>
  );
}
