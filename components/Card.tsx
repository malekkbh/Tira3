import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import ScreenNames from "@/constants/ScreenNames";

const Card = (props: any) => {
  const navigation = useNavigation();

  const onCardPress = () => {
    const data = JSON.stringify(props);
    navigation.navigate(ScreenNames.Products, { product: data });
  };

  return (
    <TouchableOpacity onPress={() => onCardPress()}>
      <View style={styles.container}>
        <Image source={props.img} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.price}>{props.price + "$"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    width: "70%",
    alignSelf: "center",
    marginTop: 30,
    paddingBottom: 10,
    flexDirection: "row",
  },
  price: {
    fontSize: 20,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 20,
  },
});
