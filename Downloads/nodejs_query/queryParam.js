//O módulo url ajuda a separar 
//pathname -> a rota 
//query -> os dados enviados na url

const http = require('http');
const url = require('url');

//Criação do servidor 
const server = http .createServer((req, res) =>{
     //Estamos quebrando a/separando a URL que chega para o servidor, assim, teremos ela como texto.
    const urlcompleta = url.parse(req.url,true);
    // Mostra no console tudo que o node conseguiu entender da URL.
    console.log(urlcompleta);
    //Mensagem que aparecerá no navegador.
    res.end('Veja o console ');
});

//Porta onde o servidor está rodando.
server.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});

//Resumo:
//Pathname -> rota 
//Query -> dados
//search -> busca.

// url antes da busca :https://www.sp.senac.br
// usar o campo  de busca do site e observar a url 
//url após a busca:https://www.sp.senac.br/busca?q=cursos 

//busca é a rota (pathname)
 //'?' sa inicio a busca/query
//'q'  é a chave 
//'cursos' é o valor 
// query : ?q=cursos.
 
