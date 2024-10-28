import HomeSearch from "@/components/home/home-search";
import HomeHeader from "@/components/home/home-header";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCarousel from "@/components/home/home-carousel";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <HomeHeader />
        <HomeSearch />
        <HomeCarousel />
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
