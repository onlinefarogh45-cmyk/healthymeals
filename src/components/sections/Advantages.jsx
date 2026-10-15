import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { advantages } from "../../data/content";
import scrollToSection from "../../utils/scrollToSection";

export default function Advantages() {
  return (
    <Section id="advantages" tone="sage">
      <View className="flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <View className="w-full lg:w-[32%]">
          <SectionHeading
            eyebrow="Our Advantages"
            title="Why Choose Healthify"
            subtitle="More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle."
            compact
          />
          <Button label="Discover All Advantages" size="sm" onPress={() => scrollToSection("plans")} />
        </View>
        <AnimatedSection className="w-full flex-row flex-wrap justify-between lg:flex-1">
          {advantages.map((item) => (
            <View
              key={item.title}
              className="mb-4 w-[48.5%] items-center rounded-xl bg-white/70 p-5 lg:mb-0 lg:w-[23.5%]"
            >
              <Ionicons name={item.icon} size={30} color="#5a6b3d" />
              <Text accessibilityRole="header" aria-level={3} className="mt-3 text-center text-xs font-semibold text-brand-dark">
                {item.title}
              </Text>
              <Text className="mt-1 text-center text-[11px] leading-4 text-brand-dark/65">{item.description}</Text>
            </View>
          ))}
        </AnimatedSection>
      </View>
    </Section>
  );
}
