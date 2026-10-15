import AnimatedSection from "../ui/AnimatedSection";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/content";

export default function Testimonials() {
  return (
    <Section id="reviews" tone="white">
      <SectionHeading eyebrow="Customer Stories" title="What Our Customers Say" actionLabel="View More Reviews" />
      <AnimatedSection className="flex-col gap-5 md:flex-row">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} testimonial={item} className="w-full md:flex-1" />
        ))}
      </AnimatedSection>
    </Section>
  );
}
