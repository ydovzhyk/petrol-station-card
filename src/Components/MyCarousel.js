import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 250;

const images = [
  require("../../assets/images/Carousel/Picture1.jpg"),
  require("../../assets/images/Carousel/Picture2.jpg"),
  require("../../assets/images/Carousel/Picture3.jpg"),
  require("../../assets/images/Carousel/Picture4.jpg"),
];

const MyCarousel = ({ style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000);

    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: index === currentIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Image
        style={[
          styles.image,
          {
            width: BannerWidth - 30,
            height: BannerHeight - 30,
            opacity: fadeAnim,
          },
        ]}
        source={images[currentIndex]}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: BannerHeight - 25,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#EBD8FF",
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "transparent",
  },
  image: {
    resizeMode: "cover",
    borderRadius: 9,
    overflow: "hidden",
  },
  pagination: {
    marginLeft: "auto",
    marginRight: "auto",
    alignContent: "center",
    height: 12,
    borderColor: "#EBD8FF",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: -20,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
  },
  paginationDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#EBD8FF",
    marginHorizontal: 4,
  },
});

export default MyCarousel;
