import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack >
      <Stack.Screen name="search" options={{ headerShown: false }} />
    </Stack>
  );
}
