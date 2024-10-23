import { Home } from "@/src/screens/home";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#ffc42d",
          },
          headerTitleAlign: "center",
        }}
      />
      <Home />
    </>
  );
}
