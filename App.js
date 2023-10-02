import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = [
    { id: "1", name: "Stan", age: 45 },
    { id: 2, name: "Francine", age: 65 },
    { id: 2, name: "Francine", age: 65 },
    { id: 4, name: "Hély", age: 18 },
    { id: 5, name: "Steeve", age: 14 },
    { id: 6, name: "Stan", age: 150 },
  ];

  const [family, setFamily] = useState(obj);
  console.log(family);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.viewList}>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Name: </Text>
          {item.name}
        </Text>
        <Text style={styles.textBold}>Age:</Text>
        <Text style={styles.text}>{item.age}</Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={family}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },

  viewList: {
    marginTop: 30,
    backgroundColor: "purple",
    padding: 19,
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  textBold: {
    fontWeight: "bold",
  },
});
