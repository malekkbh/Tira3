import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Tira3Context from "./Tira3Contetxt";

const Tira3Provider = (props) => {
  const [cart, setCart] = useState([]);

  const providerValue = {
    cart,
    setCart,
    // cart : cart ,
    //setCart : (val) => setCart(val)
  };

  return (
    <Tira3Context.Provider value={providerValue}>
      {props.children}
    </Tira3Context.Provider>
  );
};

export default Tira3Provider;

const styles = StyleSheet.create({});
