import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import {
  tambahCounter,
  kurangCounter,
} from "../../redux/actions/counterAction";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(kurangCounter(counter))}
      >
        <Text style={styles.textCounter}>-</Text>
      </TouchableOpacity>
      <Text style={styles.textView}>{counter}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(tambahCounter(counter))}
      >
        <Text style={styles.textCounter}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
