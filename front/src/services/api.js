import axios from 'axios';
const url='http://localhost:9090';

 export const addUser=(user)=>{
    try{
    axios.post(`${url}/add`,user);
    }catch(error){
      console.log("error while using api");  
    }
}
export const getUsers=async()=>{
    return await axios.get(`${url}`);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}