# apiRestfull

# Instalações
``
Instale o node 

dependÊncias:  
$ npm install express nodemon mongoose

ou apenas npm install

``

# TESTANDO MÉTODOS
```shell
  POST:
  Abra qualquer aplcação que você possa testar uma api EX:
  POSTMAN E INSOMNIA

  crie um request  e insira na url http://localhost:3001/person

  e insira uma pessoa ao body usando o esqueleto JSON de exemplo abaixo.

  {
    "name": "<string>",
    "salary": <number>,
    "approved": <booblean>
  }

```
```shell
  GET (lista de usuários):
  Abra qualquer aplcação que você possa testar uma api EX:
  POSTMAN E INSOMNIA

  crie um request  e insira na url http://localhost:3001/person/usuarios

  E mande um SEND que irá listar os usuários listados

```
```shell
  GET (individual):
  Abra qualquer aplcação que você possa testar uma api EX:
  POSTMAN E INSOMNIA

  crie um request  e insira na url http://localhost:3001/person/usuarios/<id>

  Na URL onde está <id>, passe o id do usuário que você quer visualizar e mande um SEND
 
  Listará apenas o usuário passado
```
```shell
  PATCH:
  Abra qualquer aplcação que você possa testar uma api EX:
  POSTMAN E INSOMNIA

  crie um request  e insira na url http://localhost:3001/person/editarusuario/<id>

  Na URL onde está <id>, passe o id do usuário que você quer visualizar e mande um SEND

    Usando o esqueleto JSON de exemplo abaixo. 

    Insira modificando o campo que quer editar do usuário escolhido

  {
    "name": "<string>",
    "salary": <number>,
    "approved": <booblean>
  }

```

```shell
DELETE:
  Abra qualquer aplcação que você possa testar uma api EX:
  POSTMAN E INSOMNIA

  crie um request  e insira na url http://localhost:3001/person/delete/<id>

  Na URL onde está <id>

  E mande um SEND que irá DELETAR o usuário que foi passado o id

```

```shell
OPTIONS:
  Abra qualquer aplcação que você possa testar uma api EX:
  POSTMAN E INSOMNIA

  crie um request  e insira na url http://localhost:3001/

 E listará o método options por completo

```


