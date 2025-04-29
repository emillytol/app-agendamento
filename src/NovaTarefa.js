import  { View, Text, StyleSheet, TextInput } from 'react-native';

export default function NovaTarefa() {
    return (
        <View>
            <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Adicionar Tarefa</Text>
        </View>
        <View style= {styles.body}>
            <Text style={styles.texto}>Nome da Tarefa:</Text>
            <Text style={styles.categoria}>Categoria da Tarefa:</Text>
            <TextInput style={styles.TextInput} />
            </View>
        </View>
    )
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
    body: {
        padding: 15
    },
    texto: {
        marginBottom: 5
    },
    TextInput: {
        borderWidth:1,
        borderRadius: 10,
        borderColor:'#ccc',
        padding: 10,
        backgroundColor: 'white'
    }
});