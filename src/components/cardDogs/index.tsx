import { Image, StyleSheet, View } from "react-native";

interface IProps {
  imageApi: string;
}

export const CardDogs = ({ imageApi }: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageApi }}
        style={styles.styleImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "red",
  },
  styleImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
