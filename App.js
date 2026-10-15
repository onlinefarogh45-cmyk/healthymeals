import "./global.css";
import { ScrollView, View } from "react-native";
import Footer from "./src/components/layout/Footer";
import Navbar from "./src/components/layout/Navbar";
import WhatsAppButton from "./src/components/layout/WhatsAppButton";
import About from "./src/components/sections/About";
import Advantages from "./src/components/sections/Advantages";
import CTA from "./src/components/sections/CTA";
import FAQ from "./src/components/sections/FAQ";
import Hero from "./src/components/sections/Hero";
import MealPlans from "./src/components/sections/MealPlans";
import Pricing from "./src/components/sections/Pricing";
import Process from "./src/components/sections/Process";
import Stats from "./src/components/sections/Stats";
import Testimonials from "./src/components/sections/Testimonials";

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <MealPlans />
        <Advantages />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </ScrollView>
      <WhatsAppButton />
    </View>
  );
}
