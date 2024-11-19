import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { screenHeight } from "@/constants/dimensions";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";

const OptionalInfo = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color={Colors.light.primary} />
        <Text style={styles.skip_text}>Skip</Text>
      </View>

      <View style={styles.headig_container}>
        <Text style={styles.heading}>Add your injury (Optional)</Text>
      </View>

      <View style={styles.form_container}>
        <View style={styles.form}>
          <Text style={styles.label}>Issues</Text>
          <TextInput
            style={styles.issue_input}
            placeholderTextColor={Colors.light.mute}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.disc_input}
            multiline
            numberOfLines={6}
            placeholderTextColor={Colors.light.mute}
          />
        </View>
      </View>

      <View style={styles.button_container}>
        <View style={styles.note_container}>
          <Text style={styles.notes_text}>Note : </Text>
          <Text style={styles.note_desc_text}>
            You can also add later From your Profile
          </Text>
        </View>
        <Button style={styles.button} onPress={() => router.push("/(tabs)")}>
          <Text style={styles.button_text}>Next</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default OptionalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: Colors.light.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  skip_text: {
    color: Colors.light.primary,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },

  headig_container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.light.text,
    lineHeight: 24,
  },

  form: {
    marginTop: screenHeight * 0.02,
  },

  label: {
    color: Colors.light.primary,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14,
  },

  issue_input: {
    marginTop: 10,
    paddingHorizontal: 10,
    color: Colors.light.text,
    borderBottomWidth: 1,
    borderBottomColor: "#262626",
  },

  disc_input: {
    marginTop: 10,
    padding: 5,
    color: Colors.light.text,
    backgroundColor: "#262626",
    borderRadius: 10,
    height: screenHeight * 0.2,
    textAlignVertical: "top",
  },

  form_container: {
    // marginTop: screenHeight * 0.1,
  },

  note_container: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button_container: {
    marginTop: screenHeight * 0.1,
  },

  notes_text: {
    color: Colors.light.primary,
    fontSize: 12,
    lineHeight: 14,
  },

  note_desc_text: {
    color: "#C5C6C7",
    fontSize: 12,
    lineHeight: 14,
  },

  button: {
    marginTop: 15,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    lineHeight: 20,
  },
});
