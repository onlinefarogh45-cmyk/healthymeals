import { View } from "react-native";

export default function Container({ children, className = "" }) {
  return (
    <View className={`mx-auto w-full max-w-[1180px] px-5 md:px-8 ${className}`}>
      {children}
    </View>
  );
}
