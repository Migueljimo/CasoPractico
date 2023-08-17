import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Text,
  NativeBaseProvider,
  HStack,
  VStack,
  Box,
  Image,
  Container,
} from "native-base";
import ImgCalendar from "../../images/iconsCal.png";
import Ambientes from "../../components/ambientes";
import { ambientesCondominio } from "./data";

export default function HomeScreen() {
  const semana = 7;
  let sumatoriaCantidades = 0;
  if (semana <= 7) {
    sumatoriaCantidades = ambientesCondominio.reduce(
      (total, ambiente) => total + ambiente.cantidad,
      0
    );
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Box>
          <HStack space="md">
            <Box>
              <Avatar bg="#566573" size="xl">
                <Image source={ImgCalendar} alt="Calendar Icon" size="md" />
              </Avatar>
            </Box>
            <VStack alignItems="flex-end">
              <Text color="#007AFF" fontSize="xl" bold>
                {sumatoriaCantidades} reservaciones
              </Text>
              <Text color="white" fontSize="lg">
                en los ultimos {semana} dias
              </Text>
            </VStack>
          </HStack>
        </Box>
        <View style={styles.spacing} />
        <Box w="90%" maxW="300">
          {ambientesCondominio.map((ambiente) => (
            <Ambientes
            key={ambiente.id}
            nombre={ambiente.nombre}
            capacidad={ambiente.capacidad}
            cantidad={ambiente.cantidad}
            />
            ))}
        </Box>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#273746",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 18,
  },
  spacing: {
    height: 20,
  },
});
