import { Colors } from "@/constants/Colors";
import { getFontSize } from "@/utils/font";
import { useRouter } from "expo-router";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png";

const HomeHeader = () => {
  const router = useRouter();

  function handleNotificationPress() {
    console.log("Notification Pressed");
    router.navigate("/(public)/notification");
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={{ uri: GITHUB_AVATAR_URI }}
          style={styles.avatar}
          alt="Zach Nugent's Avatar"
        />
        <View>
          <Text style={styles.greetingText}>Hey, Pushpaje 👋</Text>
          <Text style={styles.subtitleText}>Stay Healthy always.</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Pressable onPress={() => router.push("/(public)/program-plans")}>
          <Image
            source={require("@/assets/images/Cart Large Minimalistic.png")}
            style={styles.icon}
            alt="Shopping Cart"
          />
        </Pressable>
        <Pressable onPress={handleNotificationPress}>
          <Image
            source={require("@/assets/images/Notification.png")}
            style={styles.icon}
            alt="Notification Bell"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetingText: {
    fontSize: getFontSize(20),
    fontWeight: "500",
    color: "white",
  },
  subtitleText: {
    fontSize: getFontSize(14),
    color: Colors.light.mute,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeHeader;
