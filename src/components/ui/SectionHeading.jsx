import { Text, View } from "react-native";
import TextLink from "./TextLink";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  actionLabel,
  onActionPress,
  compact = false,
}) {
  return (
    <View
      className={`flex-col gap-3 md:flex-row md:items-end md:justify-between ${
        compact ? "mb-5" : "mb-8 md:mb-10"
      }`}
    >
      <View className="flex-1">
        {eyebrow ? (
          <Text className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-brand">
            {eyebrow}
          </Text>
        ) : null}
        <Text
          accessibilityRole="header"
          aria-level={2}
          className="font-serif text-3xl font-semibold leading-tight text-brand-dark md:text-4xl"
        >
          {title}
        </Text>
        {subtitle ? (
          <Text className="mt-3 max-w-md text-sm leading-6 text-brand-dark/70">{subtitle}</Text>
        ) : null}
      </View>
      {actionLabel ? <TextLink label={actionLabel} onPress={onActionPress} /> : null}
    </View>
  );
}
