import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import Carousel from "../../Components/MyCarousel";
import HiddenComponent from "../../Components/HiddenComponent";
import Logo from "../../../assets/images/logo.svg";

const DefaultScreen = ({ route, navigation }) => {
  const carouselStyle = {
    marginTop: 110,
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#471CA9", "#5736A3", "#4B2A99"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Logo width={35} height={47} />
        </View>
        <Text style={styles.logoText}>PETROL</Text>
      </View>
      <View style={styles.guestContainer}>
        <View style={styles.guestAvatar}>
          <FontAwesome name="user" size={27} color="#EBD8FF" />
        </View>
        <Text style={styles.wellcomeText}>Hello guest!</Text>
      </View>
      <Carousel style={carouselStyle} />
      <HiddenComponent navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  guestContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  guestAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#EBD8FF",
  },
  wellcomeText: {
    marginRight: 15,
    color: "#EBD8FF",
    fontSize: 18,
  },
});

export default DefaultScreen;
