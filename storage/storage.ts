import { AsyncStorage } from "react-native"

const setStoreAsync=async(data:any)=>{
    await AsyncStorage.setItem('currentUser',data)
}
const getStorageAsync=async()=>{
    const data=await AsyncStorage.getItem('currentUser')
    return data
}
const storage={
    setStoreAsync,
    getStorageAsync
}
export default storage; 