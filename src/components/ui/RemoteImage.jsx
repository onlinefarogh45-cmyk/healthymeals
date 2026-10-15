import { useState } from "react";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Image with a graceful placeholder if the remote file fails to load.
export default function RemoteImage({ uri, alt = "", className = "", resizeMode = "cover" }) {
  const [failed, setFailed] = useState(false);

  return (
    <View className={`overflow-hidden bg-brand-light/30 ${className}`}>
      {failed ? (
        <View className="h-full w-full items-center justify-center">
          <Ionicons name="leaf" size={32} color="#8a9a6b" />
        </View>
      ) : (
        <Image
          source={{ uri }}
          alt={alt}
          accessible={alt !== ""}
          accessibilityLabel={alt || undefined}
          resizeMode={resizeMode}
          onError={() => setFailed(true)}
          className="h-full w-full"
        />
      )}
    </View>
  );
}
