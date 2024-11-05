import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Dialog } from "react-native-simple-dialogs";

const settings = () => {
  const router = useRouter();
  const [dialogVisible, setDialogVisible] = React.useState(false);

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

  const handleDeletePress = () => {
    setDialogVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack label="Settings" handleBack={() => router.back()} />

      <View style={styles.nav_container}>
        {nav.map((item) => (
          <View style={styles.item} key={item.id}>
            <View style={styles.icon_label_container}>
              <Image source={item.imgUri} style={styles.icon} />
              <Pressable
                onPress={
                  item.label === "Delete Account"
                    ? handleDeletePress
                    : () => router.push(item.route as any)
                }
              >
                <Text style={styles.label}> {item.label}</Text>
              </Pressable>
            </View>
            <AntDesign name="right" size={20} color={Colors.light.text} />
          </View>
        ))}
      </View>
      {/* @ts-ignore */}
      <Dialog
        visible={dialogVisible}
        title=""
        onTouchOutside={() => setDialogVisible(false)}
        dialogStyle={styles.dialogue_container}
      >
        <View>
          <View style={styles.delete_icon_container}>
            <Image
              source={require("@/assets/images/trash-primary.png")}
              style={styles.trash}
            />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text}>
              Are you sure you want to delete your account?
            </Text>
          </View>
          <View style={styles.button_container}>
            <Pressable onPress={() => setDialogVisible(false)}>
              <View
                style={[
                  styles.button,
                  {
                    backgroundColor: Colors.light.background,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.button_text,
                    {
                      color: Colors.light.mute,
                    },
                  ]}
                >
                  Cancel
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setDialogVisible(false)}>
              <View
                style={[
                  styles.button,
                  {
                    backgroundColor: Colors.light.primary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.button_text,
                    {
                      color: Colors.light.secondary,
                    },
                  ]}
                >
                  Delete
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Dialog>
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

  dialogue_container: {
    backgroundColor: Colors.light.secondary,
    borderRadius: 12,
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
  },

  delete_icon_container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignSelf: "center",
    gap: 10,
  },

  trash: {
    width: 37,
    height: 37,
  },

  text_container: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },

  text: {
    fontSize: 18,
    color: Colors.light.text,
    textAlign: "center",
    fontWeight: "500",
  },

  button: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 25,
    gap: 10,
  },

  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button_text: {
    fontSize: 18,
  },
});

export default settings;
