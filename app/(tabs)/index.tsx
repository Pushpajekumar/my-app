import HomeSearch from "@/components/globals/home-search";
import HomeHeader from "@/components/home/home-header";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <HomeHeader />
        <HomeSearch />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
});
