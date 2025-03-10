import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Tira3Context from "@/store/Tira3Contetxt";
import Card from "@/components/Card";

const Cart = () => {
  const context = useContext(Tira3Context);

  const renderOrders = ()=>{
    return context.cart.map( order => {
        return <Card {...order} />
    })
  }

  return (
    <View>
      {renderOrders()}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
