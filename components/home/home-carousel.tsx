import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const carouselImages = [
  {
    id: 1,
    imgUrl: require("@/assets/images/Workout_level_card (1).jpg"),
  },
  {
    id: 2,
    imgUrl: require("@/assets/images/Workout_level_card (2).jpg"),
  },
  {
    id: 3,
    imgUrl: require("@/assets/images/Workout_level_card.jpg"),
  },
];

const { width: screenWidth } = Dimensions.get("window");

const HomeCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth} // Adjusted width to fit within the screen with some margin
        height={150}
        autoPlay={true}
        data={carouselImages}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={item.imgUrl}
              style={styles.image}
              alt="Carousel Image"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    // backgroundColor: "red",
    // borderRadius: 8,
  },
  image: {
    width: "93%",
    height: "100%",
    resizeMode: "contain",
    // borderRadius: 8,
  },
});

export default HomeCarousel;
