import axios from 'axios';
export const getnews=async()=>{
    const URL='http://localhost:8000';
    try{
   return await axios.get(`${URL}/news`);
    }
    catch(error){
        console.log('Error in api call',error);
    }
}