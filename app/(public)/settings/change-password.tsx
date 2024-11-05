import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Button from "@/components/ui/button";

const chnagePassword = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack label="Change Password" handleBack={() => router.back()} />

      <Text style={styles.text}>
        Your new password must be different from old password
      </Text>

      <View style={styles.form_container}>
        <View style={styles.form}>
          <Text style={styles.label}>Old Password</Text>
          <TextInput
            style={styles.input}
            placeholder="****"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="****"
            placeholderTextColor={Colors.light.mute}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Re-enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder="****"
            placeholderTextColor={Colors.light.mute}
          />
        </View>

        <View style={styles.button_container}>
          <Button onPress={() => router.push("/sign-up-flow")}>
            <Text style={styles.button_text}>Save</Text>
          </Button>
        </View>
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

  text: {
    marginTop: 20,
    color: Colors.light.mute,
    fontSize: 14,
  },

  form: {
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.light.text,
    lineHeight: 17,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    borderColor: Colors.light.text,
    color: Colors.light.text,
    paddingHorizontal: 10,
  },

  form_container: {
    marginTop: 20,
  },

  button_container: {
    marginTop: 50,
  },

  button_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    lineHeight: 20,
  },
});

export default chnagePassword;
