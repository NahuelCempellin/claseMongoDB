import mongoose from "mongoose";


mongoose.connect('mongodb+srv://institutoantonucci:bzItQr0o1m21ntZT@cluster0.8avx0xh.mongodb.net/?retryWrites=true&w=majority')



const connetion = mongoose.connection;


connetion.once('open', ()=>{
    console.log('Mongodb connection stablished')
})


connetion.on('error', err =>{
    console.log(err)
    process.exit(0)
})