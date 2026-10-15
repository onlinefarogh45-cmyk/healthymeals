import { Linking, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { contactInfo } from "../../data/navigation";

export default function WhatsAppButton() {
  return (
    <Pressable
      onPress={() => Linking.openURL(contactInfo.whatsappHref)}
      accessibilityRole="link"
      accessibilityLabel="Chat with us on WhatsApp"
      className="absolute bottom-5 right-5 h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:opacity-90"
      style={{ zIndex: 60 }}
    >
      <Ionicons name="logo-whatsapp" size={26} color="#ffffff" />
    </Pressable>
  );
}
