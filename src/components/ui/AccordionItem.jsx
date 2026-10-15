import { Pressable, Text, View } from "react-native";
import Animated, { FadeInDown, ReduceMotion } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

export default function AccordionItem({ question, answer, open, onToggle }) {
  return (
    <View className="overflow-hidden rounded-lg border border-brand-light/30 bg-white">
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={question}
        className="flex-row items-center justify-between gap-4 px-4 py-3.5 hover:bg-brand-mist"
      >
        <Text className="flex-1 text-sm font-medium text-brand-dark">{question}</Text>
        <Ionicons name={open ? "remove" : "add"} size={18} color="#3d4a2a" />
      </Pressable>
      {open ? (
        <Animated.View
          entering={FadeInDown.duration(200).reduceMotion(ReduceMotion.System)}
          className="px-4 pb-4"
        >
          <Text className="text-sm leading-6 text-brand-dark/70">{answer}</Text>
        </Animated.View>
      ) : null}
    </View>
  );
}
