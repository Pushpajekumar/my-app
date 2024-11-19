import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import { getFontSize } from "@/utils/font";

type HomeExploreProps = {
  data: {
    id: number;
    name: string;
    imgUrl: any;
  }[];
};

const HomeExplore = ({ data }: HomeExploreProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
        <AntDesign name="right" size={20} color={Colors.light.primary} />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={item.imgUrl}
              alt="Explore Icon"
              style={styles.image}
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        scrollEnabled
        horizontal
        style={styles.flatList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: getFontSize(20),
    fontWeight: "500",
  },

  flatList: {
    marginTop: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  itemText: {
    color: "white",
    marginTop: 10,
    fontSize: getFontSize(14),
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 17,
  },
  separator: {
    width: 20,
  },
});

export default HomeExplore;
