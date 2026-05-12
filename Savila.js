import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

// Importando essa Bomba
import PerfilComponente from './componentes/PerfilComponente';
import AtividadeComponente from './componentes/AtividadeComponente';

export default function Savila() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#5f9792ff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.header}>Sistema Escolar</Text>

        <PerfilComponente 
          nome="Sávila" 
          turma="3° Ano De Informatica(Os Melhores)" 
          foto={require('./imagem/FotoSavila.jpeg')}
          matricula="2222-2222" 
        />

        <AtividadeComponente 
          materia="Quimica II" 
          atv="120 Questões Sobre Isomeria"
          link="(Clique Aqui Pra baixar As Questões)" 
          status="Concluido" 
        />

        <AtividadeComponente 
          materia="Geografia II" 
          atv="Pesquisa Sobre Guerra Fria" 
          link="(Clique Aqui Para Enviar)" 
          status="Pendente" 
        />

        <AtividadeComponente 
          materia="Dev Mobile" 
          atv="Sofra Fazendo Um Codigo Extenso Que No Fim Vai Dar Errado"
          link="(Clique Aqui Para Enviar)" 
          status="Engole o Chorro E Faz O L" 
        />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#35aca6ff',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
});