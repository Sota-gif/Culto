import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Adicionamos "foto" aqui nas propriedades
const PerfilComponente = ({ nome, turma, matricula, foto }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image 
          source={foto} // Agora a fonte é a prop que você enviar
          style={styles.imgPerfil} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.turma}>{turma}</Text>
          <Text style={styles.matricula}>{matricula}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8bedddba',
    width: '100%', 
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
  },
  imgPerfil: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#eee', // Fundo cinza caso a imagem falhe
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  turma: {
    fontSize: 12,
    color: '#666',
  },
  matricula: {
    fontSize: 13,
    color: '#116497ff',
    fontWeight: '600',
  },
});

export default PerfilComponente;