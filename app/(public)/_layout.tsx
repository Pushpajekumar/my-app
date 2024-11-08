import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="search" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="privacy-policy" options={{ headerShown: false }} />
      <Stack.Screen name="terms" options={{ headerShown: false }} />
      <Stack.Screen name="refund-policy" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
      <Stack.Screen
        name="assigned-workout-diet"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="insights/calorie-insight"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="insights/water-insight"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
