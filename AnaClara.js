import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

// Importando essa Bomba
import PerfilComponente from './componentes/PerfilComponente';
import AtividadeComponente from './componentes/AtividadeComponente';

export default function AnaClara() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#5f9792ff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.header}>Sistema Escolar</Text>

        <PerfilComponente 
          nome="Ana Clara" 
          turma="3° Ano De Informatica(Os Melhores)" 
          foto={require('./imagem/gatinhoDevMobile.jpeg')}
          matricula="4002-8922" 
        />

        <AtividadeComponente 
          materia="Quimica II" 
          atv="120 Questões Sobre Isomeria"
          link=<a href='https://sota-gif.github.io/Portif-lio-Desenvolvimento-Mobile/'>"(Clique Aqui Pra baixar As Questões)" </a>
          status="Concluido" 
        />

        <AtividadeComponente 
          materia="Geografia II" 
          atv="Pesquisa Sobre Guerra Fria" 
          link=<a href='https://sota-gif.github.io/Portif-lio-Desenvolvimento-Mobile/'>"(Clique Aqui Pra baixar As Questões)" </a> 
          status="Pendente" 
        />

        <AtividadeComponente 
          materia="Dev Mobile" 
          atv="Sofra Fazendo Um Codigo Extenso Que No Fim Vai Dar Errado"
          link=<a href='https://sota-gif.github.io/Portif-lio-Desenvolvimento-Mobile/'>"(Clique Aqui Pra baixar As Questões)" </a>
          status="Tu n termina hoje nem se quiser" 
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