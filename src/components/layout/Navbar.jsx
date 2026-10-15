import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { navLinks } from "../../data/navigation";
import scrollToSection from "../../utils/scrollToSection";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const goTo = (id) => {
    setActiveId(id);
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <View accessibilityRole="navigation" className="border-b border-black/5 bg-white" style={{ zIndex: 50 }}>
      <Container>
        <View className="flex-row items-center justify-between py-3">
          <Logo onPress={() => goTo("home")} />

          <View className="hidden flex-row items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Pressable
                key={link.id}
                onPress={() => goTo(link.id)}
                accessibilityRole="link"
                accessibilityLabel={link.label}
                className="hover:opacity-70"
              >
                <Text
                  className={`text-xs font-medium ${
                    activeId === link.id ? "text-brand" : "text-brand-dark"
                  }`}
                >
                  {link.label}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="hidden lg:flex">
            <Button label="Get Started" size="sm" onPress={() => goTo("plans")} />
          </View>

          <Pressable
            onPress={() => setMenuOpen((open) => !open)}
            accessibilityRole="button"
            accessibilityLabel={menuOpen ? "Close menu" : "Open menu"}
            accessibilityState={{ expanded: menuOpen }}
            className="p-1 lg:hidden"
          >
            <Ionicons name={menuOpen ? "close" : "menu"} size={28} color="#3d4a2a" />
          </Pressable>
        </View>

        {menuOpen ? (
          <View className="border-t border-black/5 pb-4 pt-2 lg:hidden">
            {navLinks.map((link) => (
              <Pressable
                key={link.id}
                onPress={() => goTo(link.id)}
                accessibilityRole="link"
                accessibilityLabel={link.label}
                className="py-3"
              >
                <Text className={`text-base ${activeId === link.id ? "text-brand" : "text-brand-dark"}`}>
                  {link.label}
                </Text>
              </Pressable>
            ))}
            <View className="mt-2">
              <Button label="Get Started" fullWidth onPress={() => goTo("plans")} />
            </View>
          </View>
        ) : null}
      </Container>
    </View>
  );
}
