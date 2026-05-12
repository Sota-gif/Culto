import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AtividadeComponente = ({ materia, atv, link, status }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.materia}>{materia}</Text>
      <Text style={styles.desc}>{atv}</Text>
      <Text style={styles.link}>{link}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#76a8b6ff',
    width: '100%', 
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },
  materia: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  desc: {
    fontSize: 14,
    marginVertical: 5,
    color: '#444',
  },
  link: {
    fontSize: 12,
    color: '#184575ff',
  },
  status: {
    fontSize: 14,
    color: '#2e6dccff',
    marginTop: 8,
    fontWeight: '600',
  },
});

export default AtividadeComponente;