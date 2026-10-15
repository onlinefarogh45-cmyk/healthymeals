import { Pressable, Text } from "react-native";

export default function Logo({ light = false, onPress }) {
  const color = light ? "text-white" : "text-brand-dark";
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="link"
      accessibilityLabel="Healthify home"
      className="items-start hover:opacity-80"
    >
      <Text className={`font-serif text-2xl leading-7 ${color}`}>صحتي</Text>
      <Text className={`text-[10px] font-bold tracking-[3px] ${color}`}>HEALTHIFY</Text>
    </Pressable>
  );
}
