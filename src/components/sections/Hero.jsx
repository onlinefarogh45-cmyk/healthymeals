import { Text, View } from "react-native";
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp, ReduceMotion } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";
import Container from "../ui/Container";
import RemoteImage from "../ui/RemoteImage";
import { heroIndicators } from "../../data/content";
import { images } from "../../data/images";
import scrollToSection from "../../utils/scrollToSection";

const motion = ReduceMotion.System;

export default function Hero() {
  return (
    <View nativeID="home" className="relative overflow-hidden bg-brand-cream">
      <Container className="relative z-10">
        <Animated.View
          entering={FadeInLeft.duration(600).reduceMotion(motion)}
          className="py-10 lg:w-[46%] lg:py-24"
        >
          <Text
            accessibilityRole="header"
            aria-level={1}
            className="font-serif text-5xl font-bold leading-[1.1] text-brand-dark lg:text-6xl"
          >
            Healthy Meals
          </Text>
          <Text className="font-serif text-5xl font-bold leading-[1.1] text-brand lg:text-6xl">
            Happier Lives
          </Text>
          <Text className="mt-4 font-serif text-base text-brand-dark md:text-lg">
            Fresh. Nutritious. Convenient. Delivered to You.
          </Text>
          <Text className="mt-3 max-w-md text-sm leading-6 text-brand-dark/75">
            At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals.
          </Text>
          <View className="mt-6 flex-row flex-wrap gap-3">
            <Button label="Explore Meal Plans" onPress={() => scrollToSection("services")} />
            <Button label="Learn More" variant="outline" icon={null} onPress={() => scrollToSection("about")} />
          </View>
          <View className="mt-7 flex-row flex-wrap gap-x-6 gap-y-3">
            {heroIndicators.map((item) => (
              <View key={item.label} className="flex-row items-center gap-2">
                <Ionicons name={item.icon} size={16} color="#5a6b3d" />
                <Text className="text-xs text-brand-dark/80">{item.label}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </Container>

      <Animated.View
        entering={FadeInRight.duration(700).reduceMotion(motion)}
        className="relative h-72 w-full md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]"
      >
        <RemoteImage
          uri={images.hero}
          alt="Grilled chicken, avocado and tomato healthy meal bowl"
          className="h-full w-full"
        />
        <View
          pointerEvents="none"
          className="absolute inset-0 hidden bg-gradient-to-r from-brand-cream via-brand-cream/40 to-transparent lg:flex"
        />
        <Animated.View
          entering={FadeInDown.delay(400).duration(600).reduceMotion(motion)}
          className="absolute left-[22%] top-8 hidden lg:flex"
        >
          <Text className="font-script text-3xl text-brand-dark" style={{ transform: [{ rotate: "-8deg" }] }}>
            Good Food{"\n"}Brightens You
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(600).duration(600).reduceMotion(motion)}
          className="absolute bottom-6 right-5 flex-row items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg lg:bottom-20 lg:right-10"
        >
          <View className="h-9 w-9 items-center justify-center rounded-lg bg-brand-sage">
            <Ionicons name="leaf-outline" size={18} color="#5a6b3d" />
          </View>
          <View>
            <Text className="text-xs font-semibold text-brand-dark">Nutritious Meals</Text>
            <Text className="text-[11px] text-brand-dark/70">A Healthier Tomorrow</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
