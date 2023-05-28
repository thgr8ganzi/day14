//socket.io 팩키지 참조
const SocketIO = require("socket.io");
//socket.js모듈 기능정의
module.exports =(server)=>{
    const io = SocketIO(server,{path:"/socket.io"});

    io.on("connection",(socket)=>{
        // 서버 이벤트 수신기명인 broadcast 이벤트에 msg 라는 데이터를 클라이언트에서 전송해준다
        socket.on("broadcast",function(msg){
            // 현재 서버소켓에 연결된 모든 클라이언트에서 메시지를 보내는데 클라이언트 라이브러리에
            // receiveAll 이라는 이벤트 수신기가 msg 라는 데이터를 받아서 처리한다
            io.emit("receiveAll",msg);
            //socket.broadcast.emit("receive",msg);
        });
    });
}