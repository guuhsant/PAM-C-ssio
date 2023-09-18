import { Text, View, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';
export default function AssetExample() {
  return (
  <SafeAreaView>
  <View style={styles.container}>
  <TextInput
  style={styles.input}
    placeholder="Nome:"
  />
  <TextInput 
 style={styles.input}
    placeholder="Senha:"

  />
  
  <Button
  title="Quero goçar"
   onPress={() => Alert.alert('Right button pressed')}
   color="#000"
  
  />

  </View>
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    margin: 15,
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10  
    },

});
