import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RemoteImage from "../ui/RemoteImage";
import { unsplash } from "../../data/images";

export default function ServiceCard({ service, onPress, className = "" }) {
  return (
    <View className={`overflow-hidden rounded-xl border border-brand-light/30 bg-white ${className}`}>
      <RemoteImage
        uri={unsplash(service.image, 700)}
        alt={service.title}
        className="h-36 w-full md:h-40"
      />
      <View className="p-4">
        <Text accessibilityRole="header" aria-level={3} className="text-sm font-semibold text-brand-dark">
          {service.title}
        </Text>
        <Text className="mt-1.5 min-h-[40px] text-xs leading-5 text-brand-dark/65">
          {service.description}
        </Text>
        <Pressable
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={`Explore ${service.title}`}
          className="mt-2 h-8 w-8 items-center justify-center self-end rounded-full border border-brand-light bg-brand-mist hover:bg-brand-sage"
        >
          <Ionicons name="arrow-forward" size={14} color="#5a6b3d" />
        </Pressable>
      </View>
    </View>
  );
}
