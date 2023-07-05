//news clction me api hit krwani hai
import News from  '../model/schema.js'
export const getnews=async(request,response)=>{

 try{
  let data= await  News.find({});
  response.status(200).json(data);
 }
 catch(error){
  response.status(500).json({message:data.message});
 }
}