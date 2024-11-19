import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { getFontSize } from "@/utils/font";

const HomeSearch = () => {
  const router = useRouter();

  function handleSearchClick() {
    router.push("/(public)/search");
  }
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.searchBox} onPress={handleSearchClick}>
        <Text style={styles.search_text}>Search...</Text>
        <Image
          source={require("@/assets/images/Magnifer.png")}
          alt="Search bar"
          style={styles.search_icon}
        />
      </Pressable>
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
    height: 44,
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
    fontSize: getFontSize(14),
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
