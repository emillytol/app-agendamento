import { View, Text, StyleSheet} from 'react-native';
import TarefaItem from '../components/TarefaItem';

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ABRIL / 2025</Text>
                <View style={styles.icone}></View>
            </View>
            <View style={styles.body}>
                <TarefaItem />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    icone: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 15,
        position: 'absolute',
        right: 15
    }
});