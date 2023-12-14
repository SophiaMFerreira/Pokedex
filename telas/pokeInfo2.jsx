import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PokeInfo2({ route }) {
    
    //console.log('PokeInfo2')
    //console.log(route.params)
    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text>HP: </Text>
                </View>
                <View style={styles.info}>
                    <Text>Ataque:</Text>
                </View>
                <View style={styles.info}>
                    <Text>Defesa:</Text>
                </View>
                <View style={styles.info}>
                    <Text>Esp. Ataque:</Text>
                </View>
                <View style={styles.info}>
                    <Text>Esp. Defesa:</Text>
                </View>
                <View style={styles.info}>
                    <Text>Velocidade:</Text>
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