import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Section from "../ui/Section";
import { stats } from "../../data/content";

export default function Stats() {
  return (
    <Section tone="sage" padded={false}>
      <View className="flex-row flex-wrap py-6">
        {stats.map((stat, index) => (
          <View
            key={stat.label}
            className={`w-1/2 flex-row items-center justify-center gap-3 py-3 lg:w-1/4 ${
              index < stats.length - 1 ? "lg:border-r lg:border-brand-light/40" : ""
            }`}
          >
            <Ionicons name={stat.icon} size={28} color="#5a6b3d" />
            <View>
              <Text className="font-serif text-xl font-semibold text-brand-dark md:text-2xl">{stat.value}</Text>
              <Text className="text-[11px] text-brand-dark/70">{stat.label}</Text>
            </View>
          </View>
        ))}
      </View>
    </Section>
  );
}
