import { Fragment } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedSection from "../ui/AnimatedSection";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { steps } from "../../data/content";
import scrollToSection from "../../utils/scrollToSection";

export default function Process() {
  return (
    <Section id="process" tone="white">
      <SectionHeading
        eyebrow="Our Process"
        title="Healthy Eating in 3 Simple Steps"
        actionLabel="It's Easy to Get Started"
        onActionPress={() => scrollToSection("plans")}
      />
      <AnimatedSection className="flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            <View className="flex-row items-center gap-3 lg:flex-1">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-brand-sage">
                <Text className="font-serif text-lg font-semibold text-brand-dark">{index + 1}</Text>
              </View>
              <Ionicons name={step.icon} size={30} color="#5a6b3d" />
              <View className="flex-1">
                <Text accessibilityRole="header" aria-level={3} className="text-sm font-semibold text-brand-dark">
                  {step.title}
                </Text>
                <Text className="mt-0.5 text-xs leading-5 text-brand-dark/65">{step.description}</Text>
              </View>
            </View>
            {index < steps.length - 1 ? (
              <View className="hidden lg:flex">
                <Ionicons name="arrow-forward" size={18} color="#8a9a6b" />
              </View>
            ) : null}
          </Fragment>
        ))}
      </AnimatedSection>
    </Section>
  );
}
