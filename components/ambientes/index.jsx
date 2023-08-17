import React from "react";
import { VStack, Box, Progress, HStack, Text, View } from "native-base";

const calcularPorcentaje = (capacidad, cantidad) => {
  if (capacidad > 0) {
    return (cantidad / capacidad) * 100;
  }
  return 0;
};

export default function Ambientes({ nombre, capacidad, cantidad }) {
  const porcentaje = calcularPorcentaje(capacidad, cantidad);

  return (
    <Box w="90%" maxW="400">
      <View style={styles.spacing} />
      <VStack space="md">
        <Text style={styles.whiteText}>{nombre}</Text>
        <HStack alignItems="center" mx="1" space="md">
          <Box flex={1}>
            <Progress size="xl" colorScheme="primary" value={porcentaje} />
          </Box>
          <Text style={styles.whiteText}>{cantidad}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

const styles = {
  whiteText: {
    color: "white",
    fontSize: 18,
  },
  spacing: {
    height: 15,
  },
};
