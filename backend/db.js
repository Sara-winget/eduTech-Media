import mongoose from 'mongoose'

const db = async()=>{
    try{
 const connect=await mongoose.connect(process.env.DB)
        console.log('DB connected successfully')
}
    catch(e){
        console.log('not connected: ',e)
    }
}

export default db