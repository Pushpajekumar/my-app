import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import UpgradeBanner from "./upgrade-banner";
import { AntDesign } from "@expo/vector-icons";

interface ProfileData {
  name: string;
  email: string;
  imageUrl: any; // for require() image source
  weight: string;
  height: string;
  age: string;
}

interface ProfileInfoProps {
  data: ProfileData;
  onEditPress?: () => void;
}


const ProfileInfo = ({ data, onEditPress }: ProfileInfoProps) => {
  return (
    <View style={styles.profile_container}>
      <View style={styles.image_container}>
        <Image source={data.imageUrl} style={styles.image} />
        <TouchableOpacity 
          style={styles.edit_icon_continer}
          onPress={onEditPress}
        >
          <AntDesign name="edit" size={12} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.email}>{data.email}</Text>

      <UpgradeBanner />

      <View style={styles.details_container}>
        <View
          style={[
            styles.info_container,
            {
              borderRightWidth: 1,
              borderRightColor: Colors.light.primary,
            },
          ]}
        >
          <Text style={styles.info_heading}>Weight</Text>
          <Text style={styles.info_value}>{data.weight}</Text>
        </View>
        <View
          style={[
            styles.info_container,
            {
              borderRightWidth: 1,
              borderRightColor: Colors.light.primary,
            },
          ]}
        >
          <Text style={styles.info_heading}>Height</Text>
          <Text style={styles.info_value}>{data.height}</Text>
        </View>
        <View style={styles.info_container}>
          <Text style={styles.info_heading}>Age</Text>
          <Text style={styles.info_value}>{data.age}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile_container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    position: "relative",
  },

  edit_icon_continer: {
    width: 21,
    height: 21,
    position: "absolute",
    right: 0,
    bottom: 10,
    backgroundColor: Colors.light.text,
    borderRadius: 2, // Make it circular
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  edit_icon: {
    width: 20,
    height: 20,
  },

  image_container: {
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

  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.text,
    textAlign: "center",
  },

  email: {
    fontSize: 12,
    color: Colors.light.text,
    textAlign: "center",
  },

  details_container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: Colors.light.secondary,
    paddingHorizontal: 20,
  },
  info_container: {
    marginVertical: 17,
    justifyContent: "center",
    alignItems: "center",
    width: "33.3%",
  },
  info_heading: {
    fontSize: 12,
    color: Colors.light.text,
  },
  info_value: {
    fontSize: 16,
    color: Colors.light.text,
    fontWeight: "700",
  },
});
export default ProfileInfo;
