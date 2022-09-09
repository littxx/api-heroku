const express = require('express');
const server = express();

server.get('/', (req,res)=>{

    return res.json({mensagem: 'tiago cabeça de rola'})
})



server.listen(3000, ()=>{
    console.log("oi")
})