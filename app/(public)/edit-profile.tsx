import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { screenHeight } from "@/constants/dimensions";
import Button from "@/components/ui/button";

const editProfile = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack label="Edit Profile" handleBack={() => router.back()} />

      <View style={styles.image_container}>
        <Image
          source={require("@/assets/images/profile-pic.png")}
          style={styles.image}
        />
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.form_container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Select Gender"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Select DOB"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Height"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Weight"
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Age"
            placeholderTextColor={Colors.light.mute}
          />
        </View>

        <View style={styles.button_container}>
          <Button onPress={() => router.push("/sign-up-flow")}>
            <Text style={styles.button_text}>Next</Text>
          </Button>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },

  image_container: {
    marginTop: 20,
    width: 119,
    height: 119,
    borderRadius: 60,
    alignSelf: "center", // Center horizontally
    position: "relative",
  },

  image: {
    width: 119,
    height: 119,
    borderRadius: 60,
  },

  form: {
    marginTop: screenHeight * 0.02,
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
    marginTop: 20,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    lineHeight: 20,
  },
});

export default editProfile;
