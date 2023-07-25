const http = require('http');
http.createServer((req,res) =>{

    //res.writeHead(200,{'Content-Type':'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200,{'Content-Type':'application/csv'});

   
    res.write('id, nombre\n');
    res.write('1, jafet\n'); 
    res.write('2, pablo\n'); 
    res.write('3, fernanfloo\n');  //se le hace stringify ya que res.write pide un string no un objeto
    res.end();

}).listen(8080);
console.log('listen port:8080');