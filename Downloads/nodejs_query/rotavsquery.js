const http = require('http');
const url = require('url');

//Criação do servidor
const server = http .createServer((req, res) =>{
        //Estamos quebrando a/separando a URL que chega para o servidor, assim, teremos ela como texto.
        const urlcompleta = url.parse(req.url,true);
        //Separação dos principais dados da requisição.
        const rota = urlcompleta.pathname;
        const query= urlcompleta.query;
         
         if (rota === "/teste" && req.method === "GET"){
            res.end(JSON.stringify({
               mensagem: "Deu certo",
               dadosRecebidos: query
            }));
            return;
         };
         res.end('Rota não encontradada ');

});
 
    server.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000');
    });