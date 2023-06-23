import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req //desestruturado

  if (method === 'GET' && url === '/users') { //ROTA
    return res                                         //Header cabeçalho(Requisição/Resposta => Metadados)         
      .setHeader('Content-Type', 'application/json') //('tipo de conteudo', 'json')
      .end(JSON.stringify(users)) // retonando a resposta em formato json
  }

  if (method === 'POST' && url === '/users') { //ROTA
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com',
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end() //writeHead retorna a porta 
})

server.listen(3333) //ficar "ouvindo"localhost:3333