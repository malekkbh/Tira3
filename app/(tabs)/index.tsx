import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/Card";
import data from "@/constants/data";

const index = () => {
  const renderCards = () => {
    const cards = data.map((product) => {
      return (
        <Card 
        name={product.name} 
        price={product.price} 
        img={product.img} />
      );
    });

    return cards;
  };

  const productsStr = () => {
    return <Text style={styles.txt}>{JSON.stringify(data)}</Text>;
  };

  return (
    <View style={styles.container}>
      {/* {[
        <Card name={data[0].name} price={data[0].price} />,
        <Card name={data[1].name} price={data[1].price} />,
        <Card name={data[2].name} price={data[2].price} />,
        <Card name={data[3].name} price={data[3].price} />,
      ]} */}

      {/* <View style={styles.line} /> */}
      <ScrollView>{renderCards()}</ScrollView>
      {/* <ScrollView>{productsStr()}</ScrollView> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red' ,
    paddingTop: 45,
  },
  txt: {
    fontSize: 30,
    marginLeft: 20,
  },
  line: {
    borderWidth: 1,
    width: "100%",
  },
});
