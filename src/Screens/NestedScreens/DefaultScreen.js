import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import MyCarousel from "../../Components/MyCarousel";

const DefaultScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#471CA9", "#5736A3", "#4B2A99"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.guestContainer}>
        <View style={styles.guestAvatar}>
          <FontAwesome name="user" size={27} color="#EBD8FF" />
        </View>
        <Text style={styles.wellcomeText}>Hello guest!</Text>
      </View>
      <MyCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  guestContainer: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
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
