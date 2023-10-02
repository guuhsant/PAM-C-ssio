import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card, TextInput, Button, Avatar } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Avatar.Image size={150} 
    
     source={require('./assets/perfil.png')}
      />
      <TextInput
      style={styles.inputStyle}
      label= "Login"
      mode= "outlined"

      />
       <TextInput
      style={styles.inputStyle}
      label= "Senha"
      mode= "outlined"
       right={<TextInput.Icon icon="eye" />}
       secureTextEntry
      />
      <Button 
      style={{width: 150}}
     icon="door"
      mode="outlined"
      onPress={() => console.log('Pressed')}>
      Press me
     
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
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
