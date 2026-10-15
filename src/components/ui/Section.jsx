import { View } from "react-native";
import Container from "./Container";

const tones = {
  white: "bg-white",
  cream: "bg-brand-cream",
  mist: "bg-brand-mist",
  sage: "bg-brand-sage",
};

export default function Section({ id, tone = "white", padded = true, children }) {
  return (
    <View nativeID={id} className={`${tones[tone]} ${padded ? "py-14 md:py-20" : ""}`}>
      <Container>{children}</Container>
    </View>
  );
}
