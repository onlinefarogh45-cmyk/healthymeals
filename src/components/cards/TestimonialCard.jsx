import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RemoteImage from "../ui/RemoteImage";

export default function TestimonialCard({ testimonial, className = "" }) {
  const { quote, name, location, avatar } = testimonial;

  return (
    <View className={`justify-between rounded-xl border border-brand-light/30 bg-white p-5 ${className}`}>
      <Text className="text-sm leading-6 text-brand-dark/80">“{quote}”</Text>
      <View className="mt-5 flex-row items-center justify-between gap-3">
        <View className="flex-row items-center gap-3">
          <RemoteImage uri={avatar} alt={`Portrait of ${name}`} className="h-9 w-9 rounded-full" />
          <View>
            <Text className="text-sm font-semibold text-brand-dark">{name}</Text>
            <Text className="text-xs text-brand-dark/60">{location}</Text>
          </View>
        </View>
        <View className="flex-row gap-0.5" accessible accessibilityLabel="Rated 5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((index) => (
            <Ionicons key={index} name="star" size={13} color="#f5b301" />
          ))}
        </View>
      </View>
    </View>
  );
}
