import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const ProfileNav = () => {
  const router = useRouter();

  const nav = [
    {
      id: 1,
      label: "Settings",
      imgUri: require("@/assets/images/Settings.png"),
      route: "/(public)/settings",
    },
    {
      id: 2,
      label: "Support",
      imgUri: require("@/assets/images/support.png"),
      route: "/(tabs)/profile/support",
    },
    {
      id: 3,
      label: "Assigned Workout & Diet",
      imgUri: require("@/assets/images/assigned.png"),
      route: "/(public)/assigned-workout-diet",
    },
    {
      id: 4,
      label: "About App",
      imgUri: require("@/assets/images/about.png"),
      route: "/(public)/about",
    },
    {
      id: 5,
      label: "Privacy Policy",
      imgUri: require("@/assets/images/security.png"),
      route: "/(public)/privacy-policy",
    },
    {
      id: 6,
      label: "Terms & Conditions",
      imgUri: require("@/assets/images/terms.png"),
      route: "/(public)/terms",
    },
    {
      id: 7,
      label: "Refund Policy",
      imgUri: require("@/assets/images/money.png"),
      route: "/(public)/refund-policy",
    },
    {
      id: 9,
      label: "Logout",
      imgUri: require("@/assets/images/logout.png"),
      route: "/(tabs)/profile/logout",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {nav.map((item) => (
          <Pressable
            onPress={() => router.push(item.route as any)}
            key={item.id}
          >
            <View style={styles.item}>
              <View style={styles.icon_label_container}>
                <Image source={item.imgUri} style={styles.icon} />

                <Text style={styles.label}> {item.label}</Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.light.text} />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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

export default ProfileNav;
