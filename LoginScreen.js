import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const USERS = [
  { matricula: '40028922', senha: 'ana123', route: 'AnaClara', nome: 'Ana Clara' },
  { matricula: '07012010', senha: 'cauan123', route: 'Cauan', nome: 'Cauan' },
  { matricula: '69696969', senha: 'mateus123', route: 'Mateus', nome: 'Mateus' },
  { matricula: '22222222', senha: 'savila123', route: 'Savila', nome: 'Savila' },
];

export default function matriculaScreen({ navigation }) {
  const [matricula, setmatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handlematricula = () => {
    setErro('');
    setSucesso('');

    if (!matricula.trim() || !senha.trim()) {
      setErro('Preencha matricula e senha!');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const usuario = USERS.find(
        (u) => u.matricula.toLowerCase() === matricula.toLowerCase() && u.senha === senha
      );

      if (usuario) {
        setSucesso('Redirecionando para ' + usuario.nome + '...');
        setTimeout(() => {
          navigation.navigate(usuario.route);
        }, 1000);
      } else {
        setErro('matricula ou senha incorretos!');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Sistema Escolar</Text>
        <Text style={styles.subtitulo}>Entre com sua Matricula E Senha</Text>

        <View style={styles.card}>
          <Text style={styles.label}>MATRICULA</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu matricula"
            placeholderTextColor="#999"
            value={matricula}
            onChangeText={setmatricula}
            autoCapitalize="none"
          />

          <Text style={styles.label}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          {erro ? <Text style={styles.erro}>{erro}</Text> : null}
          {sucesso ? <Text style={styles.sucesso}>{sucesso}</Text> : null}

          <TouchableOpacity
            style={[styles.botao, loading && styles.botaoDisabled]}
            onPress={handlematricula}
            disabled={loading}
          >
            <Text style={styles.textoBotao}>
              {loading ? 'Carregando...' : 'ENTRAR'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9792ff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitulo: {
    fontSize: 14,
    color: '#E0F2F1',
    marginTop: 5,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 380,
    elevation: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5f9792ff',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  erro: {
    color: '#D32F2F',
    textAlign: 'center',
    marginTop: 12,
  },
  sucesso: {
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#5f9792ff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 25,
  },
  botaoDisabled: {
    backgroundColor: '#A5D6D3',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 25,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    color: '#FFF',
    fontSize: 12,
  },
});