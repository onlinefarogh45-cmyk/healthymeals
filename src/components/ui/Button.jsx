import { Pressable, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const containers = {
  primary: "bg-brand-dark",
  outline: "bg-white/80 border border-brand-dark/30",
  light: "bg-white",
};
const texts = { primary: "text-white", outline: "text-brand-dark", light: "text-brand-dark" };
const iconColors = { primary: "#ffffff", outline: "#3d4a2a", light: "#3d4a2a" };
const sizes = { sm: "px-5 py-2.5", md: "px-6 py-3" };
const textSizes = { sm: "text-sm", md: "text-sm md:text-base" };

export default function Button({
  label,
  onPress,
  variant = "primary",
  size = "md",
  icon = "arrow-forward",
  fullWidth = false,
  accessibilityLabel,
}) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => (scale.value = withSpring(0.96))}
      onPressOut={() => (scale.value = withSpring(1))}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      className={`hover:opacity-85 ${fullWidth ? "w-full" : "self-start"}`}
    >
      <Animated.View
        style={animatedStyle}
        className={`flex-row items-center justify-center gap-2 rounded-lg ${sizes[size]} ${containers[variant]}`}
      >
        <Text className={`font-semibold ${textSizes[size]} ${texts[variant]}`}>{label}</Text>
        {icon ? <Ionicons name={icon} size={size === "sm" ? 14 : 16} color={iconColors[variant]} /> : null}
      </Animated.View>
    </Pressable>
  );
}
