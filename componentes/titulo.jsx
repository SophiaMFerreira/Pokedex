import { StyleSheet, Text, View } from 'react-native';

export default function Titulo() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Pokédex</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#cbd5d4',
    width:330,
    height: 75,
    borderRadius: 6,
    marginBottom: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 60,
  },
});
