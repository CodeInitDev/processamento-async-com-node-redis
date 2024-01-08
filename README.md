# 🚀 **Processamento Assincrono utilizando NodeJS e Redis**

E ae Dev! Vamos ver um exemplo de comunicacao asyncrona utilizando NodeJS e Redis. Nesse exemplo vamos criar uma API simples para cadastrar um usuario e enviar um email de boas vindas em background para evitar que nossa conexao fique presa e devolver a resposta para o usuario o mais rapido possivel.

## 🛠 **Stack de Desenvolvimento**

- **Backend**: NodeJS com Redis

## 📖 **Instruções Detalhadas**

Para começar, certifique-se de ter todas as dependências instaladas e siga o passo a passo cuidadosamente.

### Instale

NodeJS - v20
Docker - v20.10
Docker Compose - v2.3

1. Instale a dependencias
```sh
yarn install
```

2. Suba o redis utilizando Docker
```sh
docker-compose up
```

3. Inicie o servidor
```sh
node src/server.js
```

4. Inicie o worker que ira processar as nossas mensagens
```sh
node src/worker.js
```

5. Chame a api para cadastro usuario
```sh
curl --request POST 'http://localhost:3333/cadastro' --data '{ "nome": "John Doe", "email": "john@email.com", "password": "12345" }'
```

## 🤝 **Participe da Comunidade CodeInit**

Dúvidas? Feedback? Quer se conectar com outros entusiastas da programação? Junte-se à nossa comunidade no Discord:

🔗 [CodeInit no Discord](https://discord.gg/Qqs6J9zu)

## 🎥 **Inscreva-se no Canal CodeInit no YouTube**

Não perca nenhum conteúdo incrível que estamos preparando para você! Certifique-se de seguir nosso canal no YouTube para atualizações regulares e conteúdos exclusivos:

🔗 [CodeInit no YouTube](https://www.youtube.com/@CodeInitDev)