import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Images from "@/assets/images/Images";
import { useLocalSearchParams } from "expo-router";

const Products = () => {
  const params = useLocalSearchParams();
  //get data from prev screen
  console.log("data: ", params);
  const data = JSON.parse(params.product);
  console.log("data: ", data);

  return (
    <View style={styles.container}>
      <Image source={data.img} style={styles.headerImage} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.price}>{data.price + "₪"}</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
  },
  headerImage: {
    width: "100%",
    resizeMode: "stretch",
    height: 200,
  },
  name: {
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 20,
  },
  price: {
    fontSize: 30,
    marginLeft: 20,
  },
});
