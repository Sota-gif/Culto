import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

// Importando essa Bomba
import PerfilComponente from './componentes/PerfilComponente';
import AtividadeComponente from './componentes/AtividadeComponente';

export default function Mateus() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#5f9792ff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.header}>Sistema Escolar</Text>

        <PerfilComponente 
          nome="Mateus" 
          turma="3° Ano De EletroMecanica (Na Teoria)" 
          foto={require('./imagem/FotoMateus.jpeg')}
          matricula="6969-6969" 
        />

        <AtividadeComponente 
          materia="Matematica III" 
          atv="Calcule O que Sobra Pro Beta"
          link="(Clique Aqui Pra baixar Os Dados Sobre O Beta Em Questão)" 
          status="Concluido" 
        />

        <AtividadeComponente 
          materia="Historia E Tecnologia" 
          atv="Pesquisa Sobre Guerra Fria E Suas Armas De Guerra" 
          link="(Clique Aqui Para Enviar)" 
          status="Pendente" 
        />

        <AtividadeComponente 
          materia="Maquinas E Acionamentos Eletricos" 
          atv="Pesquise Sobre as Melhores Formas De Realizar um Acionamento Eletrico"
          link="(Clique Aqui Para Enviar)" 
          status="Pendente" 
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