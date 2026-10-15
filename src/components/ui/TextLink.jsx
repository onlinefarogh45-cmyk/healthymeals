import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TextLink({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="link"
      accessibilityLabel={label}
      className="flex-row items-center gap-1.5 self-start py-1 hover:opacity-70"
    >
      <Text className="text-sm font-medium text-brand-dark">{label}</Text>
      <Ionicons name="arrow-forward" size={14} color="#3d4a2a" />
    </Pressable>
  );
}
