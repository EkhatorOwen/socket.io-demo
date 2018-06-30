const app  = require('express')()
const server = require('http').Server(app);
const io = require('socket.io')(server)
PORT = 4004

io.on('connection',(socket)=>{

    console.log('user connected')
       // socket.emit('news',{hello: 'world'})

        socket.on('message',(data)=>{
            console.log(data)
            socket.emit('news',{hello: 'world'})
        })

    
        // socket.on('another event',(data)=>{
        //     console.log(data)
            
        // })
})

server.listen(PORT,()=>{
    console.log('now listening on ',PORT)
})