import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { screenHeight } from "@/constants/dimensions";
import Button from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFontSize } from "@/utils/font";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

const login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.line_decoration} />
      </View>

      <View>
        <Image
          source={require("@/assets/images/login-shapes.png")}
          width={103}
          height={135}
          alt="Login shapes"
          style={styles.login_shapes}
        />
      </View>

      <View style={styles.greeting_container}>
        <Text style={styles.greeting_text}>Welcome Back,</Text>
        <Text style={styles.greetng_subtext}>
          Hello there, sign in to continue
        </Text>
      </View>

      <View style={styles.form_container}>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
          <Fontisto name="email" size={24} color="white" style={styles.icons} />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
          <Ionicons
            name="eye-off-outline"
            size={24}
            color="white"
            style={styles.icons}
          />
        </View>
      </View>
      <View>
        <Text style={styles.forgot_password}>Forgot password?</Text>
      </View>

      <View>
        <View style={styles.seperator} />
        <Text style={styles.orText}>OR</Text>
      </View>

      <View style={styles.button_container}>
        <Button>
          <Text style={styles.button_text}>Login</Text>
        </Button>
        <Button style={styles.button}>
          <Text style={styles.button_text}>Sign In With Google</Text>
        </Button>
      </View>

      <View style={styles.last_container}>
        <Text style={styles.last_text}>New User ?</Text>
        <Link href={"/sign-up"} style={styles.last_text_register}>
          <Text style={[styles.last_text, { color: Colors.light.primary }]}>
            Register Now
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: getFontSize(16),
    fontWeight: "500",
    color: Colors.light.text,
    lineHeight: 19,
    letterSpacing: 0.08,
  },

  line_decoration: {
    width: 43,
    height: 2,
    backgroundColor: Colors.light.primary,
    marginTop: 3,
  },

  login_shapes: {
    width: 103,
    height: 145,
    position: "absolute",
    right: -20,
    opacity: 0.4,
    top: -20,
  },

  greeting_container: {
    marginTop: 40,
  },

  greeting_text: {
    fontSize: getFontSize(24),
    fontWeight: "600",
    color: Colors.light.text,
    lineHeight: 29,
  },

  greetng_subtext: {
    marginTop: 10,
    fontSize: getFontSize(14),
    fontWeight: "400",
    color: Colors.light.mute,
    lineHeight: 17,
  },

  form: {
    marginTop: 10,
  },

  form_container: {
    marginTop: 40,
  },

  label: {
    fontSize: getFontSize(14),
    fontWeight: "400",
    color: Colors.light.text,
    lineHeight: 17,
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    width: "100%",
    borderColor: Colors.light.text,
    color: Colors.light.text,
    paddingHorizontal: 10,
  },

  icons: {
    position: "absolute",
    right: 10,
    top: 30,
  },

  forgot_password: {
    marginTop: 10,
    color: Colors.light.primary,
    fontSize: getFontSize(14),
    fontWeight: "400",
    textAlign: "right",
  },

  seperator: {
    marginTop: screenHeight * 0.05,
    flexDirection: "row",
    height: 1,
    backgroundColor: Colors.light.text,
  },

  orText: {
    fontSize: getFontSize(18),
    fontWeight: "500",
    color: Colors.light.text,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: "absolute",
    top: 30,
    alignSelf: "center",
  },

  button_container: {
    marginTop: screenHeight * 0.05,
  },

  button: {
    marginTop: 20,
  },

  button_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    lineHeight: 20,
  },

  last_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: screenHeight * 0.05,
  },

  last_text: {
    fontSize: getFontSize(18),
    fontWeight: "400",
    color: Colors.light.text,
    lineHeight: 17,
    paddingTop: 5,
  },

  last_text_register: {
    fontSize: getFontSize(18),
    fontWeight: "400",
    color: Colors.light.primary,
    lineHeight: 17,
    marginLeft: 5,
    paddingTop: 5,
  },
});
