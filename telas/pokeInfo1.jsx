import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PokeInfo1({ route }) {
    
    const { itemId } = route.params;
    console.log('PokeInfo1')
    console.log(itemId)

    return (
        <>
            <View style={styles.container}>
            <View style={styles.info}>
                    <Text>Tipo: </Text>
                </View>
                <View style={styles.info}>
                    <Text>Abilidade: </Text>
                </View>
                <View style={styles.info}>
                    <Text>Altura: </Text>
                </View>
                <View style={styles.info}>
                    <Text>Peso: </Text>
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434c43',
    },
    info: {
        backgroundColor: '#729c7b',
        borderRadius: 6,
        marginTop: 10,
        marginRight: 2,
        marginLeft: 2,
    }
});