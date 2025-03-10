import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Tira3Context from "@/store/Tira3Contetxt";
import Card from "@/components/Card";

const Cart = () => {
  const context = useContext(Tira3Context);
  //   const [orders , setOrders] = useState(context.cart)
  console.log("cart: ", context.cart);

  const renderOrders = () => {
    const orders = Object.values(context.cart);
    return orders.map((order) => {
      return <Card {...order} />;
    });
  };

  return <View>{renderOrders()}</View>;
};

export default Cart;

const styles = StyleSheet.create({});
