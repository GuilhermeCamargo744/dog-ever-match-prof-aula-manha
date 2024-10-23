import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { getAllDogs } from "@/src/server/config";
import { useEffect, useState } from "react";
import { CardDogs } from "@/src/components/cardDogs";

export const Home = () => {
  const [getData, setData] = useState([]);
  const [storeMatch, setStoreMatch] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);

  const getDogs = async () => {
    await getAllDogs().then((response) => {
      setData(response.data);
    });
  };

  console.log("getData[0]?.image[0]", getData[0]?.image[0]);
  console;

  return (
    <View style={styles.container}>
      <CardDogs imageApi={getData[0]?.image[0]} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "60%",
        }}
      >
        <TouchableOpacity
          style={{
            height: 70,
            width: 70,
            backgroundColor: "red",
          }}
          onPress={() => setData((prevData) => prevData.slice(1))}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 70,
            width: 70,
            backgroundColor: "green",
          }}
          onPress={() => {
            setStoreMatch((prevData) => [...prevData, getData[0]]);
            setData((prevData) => prevData.slice(1));
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};
