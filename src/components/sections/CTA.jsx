import { Text, View } from "react-native";
import Button from "../ui/Button";
import Container from "../ui/Container";
import RemoteImage from "../ui/RemoteImage";
import { images } from "../../data/images";
import scrollToSection from "../../utils/scrollToSection";

export default function CTA() {
  return (
    <View className="relative overflow-hidden bg-brand-dark py-12 md:py-14">
      <RemoteImage uri={images.cta} alt="" className="absolute inset-0 h-full w-full" />
      <View pointerEvents="none" className="absolute inset-0 bg-brand-dark/80" />
      <Container>
        <View className="flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <View className="flex-1">
            <Text className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-white/80">
              Ready to Start?
            </Text>
            <Text accessibilityRole="header" aria-level={2} className="font-serif text-2xl font-semibold text-white md:text-4xl">
              Transform Your Health, One Meal At A Time
            </Text>
            <Text className="mt-2 text-sm text-white/85">
              Fresh. Nutritious. Convenient. Join thousands of happy customers today.
            </Text>
          </View>
          <Button label="Get Started Today" variant="light" size="sm" onPress={() => scrollToSection("plans")} />
        </View>
      </Container>
    </View>
  );
}
