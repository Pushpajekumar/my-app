import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={styles.search_text}>Search...</Text>
        <Image
          source={require("@/assets/images/Magnifer.png")}
          alt="Search bar"
          style={styles.search_icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchBox: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.text,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },

  search_text: {
    color: Colors.light.text,
    fontSize: 14,
    fontWeight: "500",
  },

  search_icon: {
    height: 24,
    width: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeSearch;

//extra
{
  /* <FontAwesome6
name="bars-staggered"
size={24}
color={Colors.light.primary}
/> */
}
