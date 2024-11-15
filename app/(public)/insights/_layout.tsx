import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="calorie-insight" options={{ headerShown: false }} />
      <Stack.Screen name="water-insight" options={{ headerShown: false }} />
      <Stack.Screen name="photos" options={{ headerShown: false }} />
    </Stack>
  );
}
