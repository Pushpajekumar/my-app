import { Colors } from "@/constants/Colors";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type ListCardProps = {
  title: string;
  imageSource: any;
  progress: number;
};

const ListCard = ({ title, imageSource, progress }: ListCardProps) => {
  return (
    <View style={styles.listCard}>
      <View style={styles.autoLayoutHorizontal}>
        <View style={[styles.textAndImage, styles.imagePosition]}>
          <Image
            style={[styles.imageIcon, styles.imagePosition]}
            resizeMode="cover"
            source={imageSource}
          />
          <View style={styles.texts}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <View
                style={[
                  styles.groupItem,
                  styles.proTagPosition,
                  { width: `${progress}%` },
                ]}
              />
            </View>
            <Text style={[styles.text, styles.minTypo]}>{`${progress}%`}</Text>
          </View>
        </View>
        <View style={[styles.proTag, styles.proTagPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    left: 0,
    top: 0,
    height: 60,
    position: "absolute",
  },
  minTypo: {
    fontSize: 14,
    textAlign: "left",
  },
  groupLayout: {
    borderRadius: 20,
    height: 5,
    left: 0,
  },
  proTagPosition: {
    backgroundColor: Colors.light.primary,
    top: 0,
    position: "absolute",
  },
  imageIcon: {
    borderRadius: 5,
    width: 60,
    overflow: "hidden",
  },
  title: {
    top: 9,
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 18,
    color: Colors.light.text,
    textAlign: "left",
    fontWeight: "500",
    width: 206,
    left: 0,
    position: "absolute",
  },

  groupChild: {
    borderStyle: "solid",
    borderColor: Colors.light.primary,
    borderWidth: 0.6,
    width: 108,
    borderRadius: 20,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    width: 49,
    borderRadius: 20,
    height: 5,
    left: 0,
  },
  rectangleParent: {
    top: 41,
    height: 5,
    width: 108,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 34,
    left: 115,
    letterSpacing: 0.1,
    lineHeight: 14,
    color: Colors.light.primary,
    fontWeight: "500",
    fontSize: 14,
    position: "absolute",
  },
  texts: {
    marginTop: -29,
    left: 70,
    height: 49,
    width: 206,
    top: "50%",
    position: "absolute",
  },
  textAndImage: {
    width: 282,
    top: 0,
  },
  proTag: {
    left: 282,
    borderRadius: 4,
    width: 33,
    height: 16,
    justifyContent: "center",
    display: "none",
    alignItems: "center",
  },
  autoLayoutHorizontal: {
    marginTop: -30,
    left: 10,
    height: 60,
    top: "50%",
    width: 282,
    position: "absolute",
  },
  listCard: {
    shadowColor: "rgba(197, 198, 199, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderRadius: 12,
    backgroundColor: Colors.light.secondary,
    width: "100%",
    height: 80,
    overflow: "hidden",
    marginBottom: 10,
  },
});

export default ListCard;
