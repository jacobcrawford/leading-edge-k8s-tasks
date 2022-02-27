
const http = require("http");

http.createServer(function (req, res) {
  
   res.writeHead(200, {'Content-Type': 'application/json'});
 
   data = [{datapoint: "You"},{datapoint: "rock"}, {datapoint: "Mindster!"}]
   res.end(JSON.stringify(data));
   
}).listen(8000);

console.log('Server started at http://127.0.0.1:8000/');
