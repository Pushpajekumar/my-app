import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack >
      <Stack.Screen name="search" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
  );
}
