# Como usar
Para executar o backend é necessário seguir o passo à passo abaixo:

## Pré-Requisitos
- Ter o docker instalado em sua máquina.

## Passo-a-Passo
- Rodar o comando `yarn install`, para instalar as dependencias do projeto.
- Rodar o comando `docker-compose` up para criar o banco de dados da aplicação.
- Rodar o comando `npx prisma migrate dev` para rodar as migration.
- Rodar o comando `yarn dev` para inicializar o server do backend.
