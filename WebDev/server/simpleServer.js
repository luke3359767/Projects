const http=require('http');

http.createServer((req,res)=>{
    res.write('hekko World');
    res.end();
}).listen(8000);

console.log("Server start")

//ssh -i fefe root@134.122.44.212
//ssh -i fefe luke@134.122.44.212
