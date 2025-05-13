import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'tasks';

const getData = async () => {
    return await AsyncStorage.getItem(key);
    if (data == null) {
        data = []
        setData(data)
    }
    return data
}

const setData = async (value) => {
    await AsyncStorage.setItem(key, JSON.stringify (value));
}

export {
    getData,
    setData
}