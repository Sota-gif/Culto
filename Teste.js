import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Teste() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>🎉 TESTE FUNCIONOU!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
});