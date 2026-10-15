import { Linking, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { contactInfo, footerServices, navLinks, socialLinks } from "../../data/navigation";
import scrollToSection from "../../utils/scrollToSection";

function FooterColumn({ title, className = "", children }) {
  return (
    <View className={`mb-8 ${className}`}>
      <Text accessibilityRole="header" aria-level={3} className="mb-4 text-sm font-semibold text-white">
        {title}
      </Text>
      {children}
    </View>
  );
}

function ContactRow({ icon, text, href }) {
  return (
    <Pressable
      onPress={() => Linking.openURL(href)}
      accessibilityRole="link"
      accessibilityLabel={text}
      className="flex-row items-center gap-2 py-1.5 hover:opacity-70"
    >
      <Ionicons name={icon} size={14} color="#ffffff" />
      <Text className="text-xs text-white/75">{text}</Text>
    </Pressable>
  );
}

export default function Footer() {
  return (
    <View nativeID="contact" accessibilityRole="contentinfo" className="bg-brand-forest pt-14">
      <Container>
        <View className="flex-row flex-wrap justify-between">
          <View className="mb-8 w-full md:w-[48%] lg:w-[26%]">
            <Logo light onPress={() => scrollToSection("home")} />
            <Text className="mb-5 mt-4 max-w-[260px] text-xs leading-5 text-white/70">
              At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.
            </Text>
            <View className="flex-row gap-3">
              {socialLinks.map((social) => (
                <Pressable
                  key={social.label}
                  onPress={() => Linking.openURL(social.href)}
                  accessibilityRole="link"
                  accessibilityLabel={social.label}
                  className="h-8 w-8 items-center justify-center rounded-full border border-white/40 hover:bg-white/15"
                >
                  <Ionicons name={social.icon} size={15} color="#ffffff" />
                </Pressable>
              ))}
            </View>
          </View>

          <FooterColumn title="Quick Links" className="w-1/2 md:w-[23%] lg:w-[16%]">
            {navLinks.map((link) => (
              <Pressable
                key={link.id}
                onPress={() => scrollToSection(link.id)}
                accessibilityRole="link"
                accessibilityLabel={link.label}
                className="py-1.5 hover:opacity-70"
              >
                <Text className="text-xs text-white/75">{link.label}</Text>
              </Pressable>
            ))}
          </FooterColumn>

          <FooterColumn title="Our Services" className="w-1/2 md:w-[26%] lg:w-[26%]">
            {footerServices.map((item) => (
              <Text key={item} className="py-1.5 text-xs text-white/75">{item}</Text>
            ))}
          </FooterColumn>

          <FooterColumn title="Get In Touch" className="w-full md:w-[48%] lg:w-[20%]">
            <View className="flex-row items-center gap-2 py-1.5">
              <Ionicons name="location-outline" size={14} color="#ffffff" />
              <Text className="text-xs text-white/75">{contactInfo.address}</Text>
            </View>
            <ContactRow icon="call-outline" text={contactInfo.phone} href={contactInfo.phoneHref} />
            <ContactRow icon="mail-outline" text={contactInfo.email} href={contactInfo.emailHref} />
          </FooterColumn>
        </View>

        <View className="flex-col items-center justify-between gap-3 border-t border-white/15 py-5 md:flex-row">
          <Text className="text-xs text-white/60">
            Copyright © {new Date().getFullYear()} Healthify. All Rights Reserved.
          </Text>
          <View className="flex-row gap-5">
            <Text className="text-xs text-white/60">Privacy Policy</Text>
            <Text className="text-xs text-white/60">Terms of Service</Text>
          </View>
        </View>
      </Container>
    </View>
  );
}
