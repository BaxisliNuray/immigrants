import { URL } from "./base_url";
import axios from 'axios'

//get all
export const getAll = async () => {
    let globalData
    await axios.get(`${URL}/immigrants`).then((res) =>{
        globalData=res.data
    })
    return globalData
}

//delete
export const deleteById=async(ID)=>{
    let deleteImmg
    await axios.delete(`${URL}/immigrants/${ID}`).then((res)=>{
        deleteImmg=res.data
    })
    return deleteImmg
}
//post
export const postById=async(payload)=>{
    axios.post(`${URL}/immigrants`,payload)
}