import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import data from "@/constants/data";
import Images from "@/assets/images/Images";
import { getAllproductsFromAPI } from "@/constants/api";

const index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderCards = () => {
    const cards = products.map((product) => {
      return (
        <Card name={product.name} price={product.price} img={product.img} />
      );
    });

    return cards;
  };

  const getAllProducts = () => {
    setLoading(true)
    getAllproductsFromAPI().then((res) => {
      setProducts(res);
      setLoading(false)
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>{renderCards()}</ScrollView>
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
  image: {
    width: 100,
    height: 100,
  },
});
