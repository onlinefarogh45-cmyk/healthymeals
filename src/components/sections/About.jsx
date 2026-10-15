import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import RemoteImage from "../ui/RemoteImage";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { aboutPoints } from "../../data/content";
import { images } from "../../data/images";
import scrollToSection from "../../utils/scrollToSection";

export default function About() {
  return (
    <Section id="about" tone="white">
      <View className="flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <AnimatedSection direction="left" className="w-full lg:w-1/2">
          <View className="relative pb-10">
            <RemoteImage
              uri={images.about}
              alt="A colourful, balanced healthy meal bowl"
              className="ml-8 h-64 rounded-2xl md:ml-12 md:h-[340px]"
            />
            <RemoteImage
              uri={images.chef}
              alt="Chef plating a fresh salad"
              className="absolute bottom-0 left-0 h-28 w-28 rounded-xl border-4 border-brand-dark md:h-36 md:w-40"
            />
            <View className="absolute bottom-3 left-32 flex-row items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg md:left-48">
              <Ionicons name="leaf-outline" size={22} color="#5a6b3d" />
              <Text className="font-serif text-sm font-semibold leading-5 text-brand-dark">
                Nourishing{"\n"}Lives Daily
              </Text>
            </View>
          </View>
        </AnimatedSection>

        <AnimatedSection direction="right" className="w-full lg:w-1/2">
          <SectionHeading eyebrow="About Healthify" title={"Your Trusted Healthy\nFood Partner"} compact />
          <Text className="max-w-lg text-sm leading-6 text-brand-dark/75">
            At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.
          </Text>
          <View className="my-6 flex-row flex-wrap gap-x-6 gap-y-3">
            {aboutPoints.map((point) => (
              <View key={point.label} className="flex-row items-center gap-2">
                <Ionicons name={point.icon} size={18} color="#5a6b3d" />
                <Text className="text-xs font-medium text-brand-dark">{point.label}</Text>
              </View>
            ))}
          </View>
          <Button label="More About Us" size="sm" onPress={() => scrollToSection("services")} />
        </AnimatedSection>
      </View>
    </Section>
  );
}
