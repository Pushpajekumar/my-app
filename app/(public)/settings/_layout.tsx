import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="change-password" options={{ headerShown: false }} />
    </Stack>
  );
}