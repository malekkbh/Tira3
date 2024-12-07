import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import ScreenNames from "@/constants/ScreenNames";
import { AntDesign } from "@expo/vector-icons";

const Card = (props: any) => {
  const navigation = useNavigation();
  var amountValue = 0;
  const [amount, setAmount] = useState(0);
  const totalPrice = amount * props.price + '$'
  // const [state , setState ] = useState(initValue)

  const onCardPress = () => {
    const data = JSON.stringify(props);
    navigation.navigate(ScreenNames.Products, { product: data });
  };

  console.log("amount : ", amount);
  console.log("amount value : ", amountValue);

  const onPlusPress = () => {
    setAmount(amount + 1);
    amountValue = amount + 1;
  };

  const onMinusPress = () => {
    setAmount(amount - 1);
  };

  useEffect(() => {
    // console.log("mount change: ", amount);
  }, [amount]);

  return (
    <TouchableOpacity onPress={() => onCardPress()}>
      <View style={styles.container}>
        <Image source={props.img} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.price}>{props.price + "$"}</Text>
          <View style={styles.orderContainer}>
            <AntDesign
              name="pluscircleo"
              size={24}
              color="green"
              onPress={onPlusPress}
            />
            <Text style={styles.amountText}>{amount}</Text>
            <AntDesign
              name="minuscircleo"
              size={24}
              color="red"
              onPress={onMinusPress}
            />
            <Text style={styles.amountText}>{totalPrice}</Text>
          </View>
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
  orderContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  amountText: {
    marginHorizontal: 10,
    fontSize: 20,
  },
});
