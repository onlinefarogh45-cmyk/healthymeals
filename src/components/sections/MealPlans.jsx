import { View } from "react-native";
import AnimatedSection from "../ui/AnimatedSection";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/content";
import scrollToSection from "../../utils/scrollToSection";

export default function MealPlans() {
  return (
    <Section id="services" tone="mist">
      <SectionHeading
        eyebrow="Our Services"
        title="Healthy Meal Plans for Every Lifestyle"
        actionLabel="View All Services"
        onActionPress={() => scrollToSection("plans")}
      />
      <AnimatedSection className="flex-row flex-wrap justify-between">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
            onPress={() => scrollToSection("plans")}
            className="mb-5 w-full sm:w-[48.5%] lg:w-[23.5%]"
          />
        ))}
      </AnimatedSection>
    </Section>
  );
}
