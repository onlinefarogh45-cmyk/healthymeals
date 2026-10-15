import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedSection from "../ui/AnimatedSection";
import RemoteImage from "../ui/RemoteImage";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import PlanCard from "../cards/PlanCard";
import { plans } from "../../data/content";
import { images } from "../../data/images";
import scrollToSection from "../../utils/scrollToSection";

export default function Pricing() {
  return (
    <Section id="plans" tone="white">
      <SectionHeading
        eyebrow="Growth Plans"
        title="Find the Perfect Plan for You"
        actionLabel="View All Plans"
        onActionPress={() => scrollToSection("plans")}
      />
      <AnimatedSection className="flex-col gap-5 md:flex-row md:flex-wrap lg:flex-nowrap">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            onPress={() => scrollToSection("contact")}
            className={`w-full md:w-[48%] lg:w-auto lg:flex-1 ${plan.popular ? "lg:-mt-3" : ""}`}
          />
        ))}
        <View className="relative min-h-[300px] w-full overflow-hidden rounded-xl md:w-[48%] lg:w-auto lg:flex-1">
          <RemoteImage uri={images.invest} alt="Fresh healthy meal bowl" className="absolute inset-0 h-full w-full" />
          <View pointerEvents="none" className="absolute inset-0 bg-brand-forest/55" />
          <View className="absolute bottom-0 left-0 p-6">
            <Ionicons name="leaf-outline" size={22} color="#ffffff" />
            <Text className="mt-2 font-serif text-2xl font-semibold leading-8 text-white">
              Invest in{"\n"}a Healthier{"\n"}You
            </Text>
          </View>
        </View>
      </AnimatedSection>
    </Section>
  );
}
