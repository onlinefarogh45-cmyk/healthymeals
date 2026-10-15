import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";

export default function PlanCard({ plan, onPress, className = "" }) {
  const { name, icon, description, price, features, popular } = plan;

  return (
    <View
      className={`overflow-hidden rounded-xl border bg-white ${
        popular ? "border-brand-dark shadow-xl" : "border-brand-light/40"
      } ${className}`}
    >
      {popular ? (
        <View className="flex-row items-center justify-center gap-1.5 bg-brand-dark py-1.5">
          <Text className="text-[10px] font-bold uppercase tracking-[2px] text-white">Most Popular</Text>
          <Ionicons name="star" size={10} color="#ffffff" />
        </View>
      ) : null}
      <View className="flex-1 p-5">
        <View className="flex-row items-start gap-3">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-brand-sage">
            <Ionicons name={icon} size={20} color="#5a6b3d" />
          </View>
          <View className="flex-1">
            <Text accessibilityRole="header" aria-level={3} className="font-serif text-lg font-semibold text-brand-dark">
              {name}
            </Text>
            <Text className="mt-1 text-xs leading-5 text-brand-dark/65">{description}</Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-baseline gap-1">
          <Text className="font-serif text-2xl font-semibold text-brand-dark">AED {price}</Text>
          <Text className="text-xs text-brand-dark/60">/ month</Text>
        </View>
        <View className="my-4 flex-1 gap-2.5">
          {features.map((feature) => (
            <View key={feature} className="flex-row items-center gap-2">
              <Ionicons name="checkmark" size={14} color="#5a6b3d" />
              <Text className="flex-1 text-xs text-brand-dark">{feature}</Text>
            </View>
          ))}
        </View>
        <Button
          label="Get Started"
          icon={null}
          size="sm"
          fullWidth
          variant={popular ? "primary" : "outline"}
          onPress={onPress}
          accessibilityLabel={`Get started with the ${name}`}
        />
      </View>
    </View>
  );
}
