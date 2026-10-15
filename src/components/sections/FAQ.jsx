import { useState } from "react";
import { View } from "react-native";
import AccordionItem from "../ui/AccordionItem";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "../../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <Section id="faq" tone="mist">
      <View className="flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <View className="w-full lg:w-[38%]">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={"Have Questions?\nWe've Got Answers."}
            subtitle="Find quick answers to common questions about our meal plans, delivery, and more."
            compact
          />
          <Button label="View All FAQs" size="sm" />
        </View>
        <AnimatedSection className="w-full gap-2.5 lg:flex-1">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </AnimatedSection>
      </View>
    </Section>
  );
}
