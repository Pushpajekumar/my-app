import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import Button from "@/components/ui/button";
import { Link, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getFontSize } from "@/utils/font";
import { Fontisto } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUp = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AntDesign name="left" size={24} color={Colors.light.primary} />
      </View>

      <View style={styles.content_container}>
        <Text style={styles.heading}>Tell us about yourself</Text>

        <View style={styles.form_container}>
          <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              placeholderTextColor={Colors.light.mute}
            />
            <FontAwesome
              name="user-o"
              size={24}
              color="white"
              style={styles.icons}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor={Colors.light.mute}
            />
            <Fontisto
              name="email"
              size={24}
              color="white"
              style={styles.icons}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Phone"
              placeholderTextColor={Colors.light.mute}
            />
            <MaterialIcons
              name="phone-callback"
              size={24}
              color="white"
              style={styles.icons}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor={Colors.light.mute}
            />
            <Ionicons
              name="eye-off-outline"
              size={24}
              color="white"
              style={styles.icons}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Conform Your Password"
              placeholderTextColor={Colors.light.mute}
            />
            <Ionicons
              name="eye-off-outline"
              size={24}
              color="white"
              style={styles.icons}
            />
          </View>
        </View>
        <View style={styles.button_container}>
          <Button onPress={() => router.push("/sign-up-flow")}>
            <Text style={styles.button_text}>Next</Text>
          </Button>

          <View style={styles.account_text_container}>
            <Text style={styles.forgot_password}>
              Already have an account?{" "}
            </Text>
            <Link href={"/login"} style={styles.forgot_password}>
              <Text
                style={[
                  styles.forgot_password,
                  { color: Colors.light.primary },
                ]}
              >
                Login
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
  },
  content_container: {
    marginTop: 10,
  },
  heading: {
    fontSize: getFontSize(24),
    fontWeight: "600",
    color: Colors.light.text,
    lineHeight: 29,
  },

  form_container: {
    marginTop: 20,
  },

  form: {
    marginTop: 10,
  },

  icons: {
    position: "absolute",
    right: 10,
    top: 30,
  },

  label: {
    fontSize: getFontSize(14),
    fontWeight: "400",
    color: Colors.light.text,
    lineHeight: 17,
    marginBottom: 5,
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

  button_container: {
    marginTop: 40,
  },

  forgot_password: {
    marginTop: 10,
    color: Colors.light.text,
    fontSize: getFontSize(18),
    fontWeight: "400",
    textAlign: "center",
  },

  button_text: {
    fontSize: getFontSize(16),
    fontWeight: "500",
    color: "black",
    lineHeight: 20,
  },
  account_text_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
