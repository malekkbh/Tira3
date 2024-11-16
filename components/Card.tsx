import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price + "$"}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    width: "70%",
    alignSelf: "center",
    marginTop: 30,
    paddingBottom: 10 
  },
  price: {
    fontSize: 17,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
