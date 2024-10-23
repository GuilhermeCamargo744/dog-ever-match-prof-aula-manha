import { ButtonCustom } from "@/src/components/buttonCustom";
import { colors } from "@/src/utils/colors";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { InputWithTitle } from "@/src/components/inputWithTitle";
import { useState } from "react";
import { loginApi } from "@/src/server/config";
import { getToken, storeToken } from "@/src/utils/asyncStorage/loginStorage";
import { router } from "expo-router";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: senha,
    };

    console.log("CAIU aq", payload);

    return await loginApi(payload)
      .then((response) => {
        if (response.status == 200) {
          storeToken(response.data.token);
          console.log("SUCESSO@@@@@@@@@@@@@@@@");
          router.navigate("/home");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DogEverMatch</Text>
      <InputWithTitle setText={setEmail} title="E-mail:" />

      <InputWithTitle setText={setSenha} title="Senha:" />
      <ButtonCustom
        titleButton="Entrar"
        styleContainer={{
          backgroundColor: colors.PRIMARY,
          position: "absolute",
          bottom: 36,
        }}
        styleText={{
          color: colors.WHITE,
        }}
        handleClick={handleLogin}
      />
    </View>
  );
};
