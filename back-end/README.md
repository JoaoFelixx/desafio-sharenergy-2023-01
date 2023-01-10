# Back-end API

## About Project

Esse projeto foi desenvolvido com os seguintes pacotes:

* `Express`: frameworks de rotas NodeJS.
* `Cors`: middleware que abilita cors com mais facilidade.
* `MongoDB/Mongoose`: Driver e object modeling tool no auxilio de conexão com banco de dados com NodeJS
* `Jsonwebtoken`: JWT gera tokens de autenticação para ser ultilizado pela plataforma
* `bcryptjs`: O bcrypt é usado para criação de hash seguras na aplicação

## Environments

No arquivo .env da pasta back-end digite: 
```
URL_MONGO: 'link do banco de dados mongoDB'
```

## Routes 📍📍📍
URL: `http://localhost:4545/api/v1`

| HTTP   | ROUTE        | BODY                                                                                                       | HEADER | DESCRIÇÃO                                |
| ------ | ------------ | ---------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------- |
| GET    | /clients     |                                                                                                            | JWT    | Rota retorna clientes cadastrados.       |
| POST   | /clients     | JSON {"name": "string", "cpf": "number", "email": "string", "address": "string", "phone_number": "number"} | JWT    | Rota de criação de clientes              |
| POST   | /auth        | JSON { "username": "string", password: "string" }                                                          |        | Rota cria token para criação de clientes |
| POST   | /users       | JSON { "username": "string", password: "string" }                                                          |        | Rota para criar usuários.                |
| PUT    | /clients/:id | JSON {"name": "string", "cpf": "number", "email": "string", "address": "string", "phone_number": "number"} | JWT    | Rota atualiza clientes.                  |
| DELETE | /clients/:id |                                                                                                            | JWT    | Rota deleta clientes por ID.             |

> ## Important detail

Vá até o Insomnia ou Postman e crie o usuário Sharenergy

Rota: 
http://localhost:4545/api/v1/users `POST`

data: 
```
{
	"username": "desafiosharenergy",
	"password": "sh@r3n3rgy"
}
```

## Happy hacking 📱💻⚙️