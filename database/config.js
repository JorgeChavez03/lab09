const mongoose=require('mongoose');

const dbconection=async()=> {

try{
    await mongoose.connect(process.env.DB_CONN,
        {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
        });
    console.log('Conexion exitosa a la base de datos');

    }catch(error){
    console.log(error);
    throw new Error('Error en al conexion de la base de datos');

    }
}

module.exports={
    dbconection
}