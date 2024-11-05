import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const settings = () => {
  const router = useRouter();

  const nav = [
    {
      id: 1,
      label: "Change Password",
      imgUri: require("@/assets/images/lock.png"),
      route: "/(public)/settings/change-password",
    },
    {
      id: 2,
      label: "Notification",
      imgUri: require("@/assets/images/setting-notification.png"),
      route: "/(tabs)/profile/support",
    },
    {
      id: 3,
      label: "Delete Account",
      imgUri: require("@/assets/images/trash.png"),
      route: "/(tabs)/profile/assigned",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack label="Settings" handleBack={() => router.back()} />

      <View style={styles.nav_container}>
        {nav.map((item) => (
          <View style={styles.item} key={item.id}>
            <View style={styles.icon_label_container}>
              <Image source={item.imgUri} style={styles.icon} />
              <Pressable onPress={() => router.push(item.route as any)}>
                <Text style={styles.label}> {item.label}</Text>
              </Pressable>
            </View>
            <AntDesign name="right" size={20} color={Colors.light.text} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
    flex: 1,
  },
  nav_container: {
    marginTop: 20,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },

  icon_label_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 10,
  },

  icon: {
    width: 20,
    height: 20,
  },

  label: {
    fontSize: 18,
    color: Colors.light.text,
  },
});

export default settings;
