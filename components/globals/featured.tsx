import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

type FeaturedTypeProps = {
  title: string;
  data: {
    id: number;
    name: string;
    imgUrl: any;
  }[];
  isLast?: boolean;
};

const Featured = ({ title, data, isLast }: FeaturedTypeProps) => {
  return (
    <View
      style={[
        styles.container,
        isLast && {
          marginBottom: 20,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <AntDesign name="right" size={20} color={Colors.light.primary} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer} key={item.id}>
            <Image
              source={item.imgUrl}
              alt="Explore Icon"
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
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
    fontSize: 20,
    fontWeight: "500",
  },
  flatList: {
    marginTop: 12,
  },
  itemContainer: {
    position: "relative",
  },
  image: {
    width: 250,
    height: 160,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#21202090",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  separator: {
    width: 20,
  },
});

export default Featured;
