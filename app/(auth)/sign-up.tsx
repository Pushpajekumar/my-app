import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import Button from "@/components/ui/button";
import { Link, useRouter } from "expo-router";
import { screenHeight } from "@/constants/dimensions";

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
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor={Colors.light.mute}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor={Colors.light.mute}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Conform Your Password"
              placeholderTextColor={Colors.light.mute}
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
    paddingTop: 20,
    backgroundColor: Colors.light.background,
  },
  content_container: {
    marginTop: screenHeight * 0.01,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    lineHeight: 30,
  },

  form: {
    marginTop: screenHeight * 0.02,
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
    marginTop: screenHeight * 0.1,
  },

  button_container: {
    marginTop: screenHeight * 0.1,
  },

  forgot_password: {
    marginTop: 10,
    color: Colors.light.text,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },

  button_text: {
    fontSize: 16,
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
