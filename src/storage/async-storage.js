import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'tasks';

const getData = async () => {
    // JSON.parse tranforma textos em objetos
    let data = JSON.parse(await AsyncStorage.getItem(key));

    // Se não houverem dados, preencher  e salvar um array vazio
    if (data == null) {
        data = new Array()
        setData(data)
    }

    return data
}

const setData = async (value) => {
    // JSON.parse tranforma objetos em textos
    await AsyncStorage.setItem(key, JSON.stringify(value));
}


const addData = async (task) => {
    task.id = new Date().getTime()
    const data = await getData()
    data.push(task)
    await setData(data)
}

const removeData = async (task) => {
    const tasks = await getData();
    // Para cada item do array "tasks" ele cria uma variavel "_tasks"
    for (let _task of tasks) {
        //Se o id da "_task" for igual ao id da minha "task" (passada no parâmetro)
        if (_task.id == task.id) {
            //Salva o índice da "_task" na constante "index"
            const index = tasks.indexOf(_task)
            //Se a tarefa existir
            if (index !== -1) {
                // Remove a tarefa pelo índice encontrado
                tasks.splice(index, 1);
                }
            break
        }
    }
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(tasks);
    }
    await setData(tasks)
}

export {
    getData,
    setData,
    addData,
    removeData
}