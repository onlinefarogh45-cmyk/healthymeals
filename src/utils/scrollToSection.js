import { Platform } from "react-native";

export default function scrollToSection(id) {
  if (Platform.OS !== "web" || typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}
