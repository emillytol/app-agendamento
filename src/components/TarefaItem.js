import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { removeData } from "../storage/async-storage";

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.task.status == 'concluído') {
        statusColor ='green';
    }
    const handleDelete = async () => {
        await removeData(props.task)
        props.setIsLoaded(true)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.task.nome} </Text>
            <Text style={styles.data}>{props.task.data}</Text>
            <Text style={styles.categoria}>categoria - {props.task.categoria}</Text>
            <View style={{ ...styles.status, backgroundColor: statusColor }}>
                <Text style={styles.textoStts}>{props.task.status}</Text>
            </View>
            <TouchableOpacity style={styles.botaoExcluir} onPress={() => handleDelete()}> 
                <MaterialCommunityIcons name="delete" size={32} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        margin: 15,
        borderBottomWidth: 1,
        paddingRight: 10  
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 18
    },

    data: {
        marginTop: 5,
        marginLeft: 3.5
    },

    categoria: {
        marginTop: 8
    },

    status: {
        backgroundColor: 'orange',
        width: 150,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 150
    },

    textoStts: {
        color: 'white'
    },

    botaoExcluir:{
        position:'absolute',
        right:20,
        bottom: 35
    }


 
});

