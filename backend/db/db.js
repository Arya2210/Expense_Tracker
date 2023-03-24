// const mongoose = require('mongoose');

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('Db Connected')
//     } catch (error) {
//         console.log('DB Connection Error');
//     } 
// }

// module.exports = {db}

// const mongoose = require('mongoose')
const link = 'mongodb+srv://aryarajput:Hbd12345@cluster1.e1pqck4.mongodb.net/?retryWrites=true&w=majority'
// const db =  async ()=>{

//     try{
//         const conn = await mongoose.connect(link,{
//             //must add in order to not get any error masseges:
//             useUnifiedTopology:true,
//             useNewUrlParser: true,
           
//         })
//         console.log(`mongo database is connected!!! ${conn.connection.host} `)
//     }catch(error){
//         console.error(`Error: ${error} `)
//         process.exit(1) //passing 1 - will exit the proccess with error
//     }

// }

// module.exports = { db }
const mongoose = require('mongoose')

const db = async ()=>{

    try{
        mongoose.set('strictQuery' ,false)
        await mongoose.connect(link)
        console.log("db connected succesfully")

    }
    catch(error){
        console.log('db not connected ')
    }
}

module.exports = { db } 