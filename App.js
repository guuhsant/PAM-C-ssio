import { Text, SafeAreaView, StyleSheet,  } from 'react-native';
// You can import supported modules from npm
import { Card, TextInput, Button, Avatar } from 'react-native-paper';
import React, {useState} from 'react';
// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
   const [nome, setNome] = useState('')
   const [senha,setSenha] = useState('')
   
  function VerificarSenha(){
    if(nome == '' && senha == ''){
      alert("Espaço em branco!")
    }else{
      alert('Nome: ' + nome + '\n' + 'Senha: ' + senha)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
     <Avatar.Image size={150} 
    
     source={require('./assets/avatar.png')}
      />
      <TextInput
      style={styles.inputStyle}
      label= "Login"
      mode= "outlined"
       Value = {nome}
       onChangeText= {(nome) => setNome(nome)}
      />
       <TextInput
      style={styles.inputStyle}
      label= "Senha"
      mode= "outlined"
       right={<TextInput.Icon icon="eye" />}
       secureTextEntry
        Value = {senha}
       onChangeText= {(senha) => setSenha(senha)}
      />
      <Button 
      style={{width: 150}}
     icon="door"
      mode="contained"
      
     onPress={() => {
       VerificarSenha()
     }}>
     Submit
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e5cd',
    padding: 8,
  },
  inputStyle: {
    width: 300,
    margin: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
