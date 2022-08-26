# excluir containers e volumes

docker-compose down -v

# Criar container postegres com docker

sudo docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

# entrar no postegres

sudo docker exec -it ce38584d5e64 bash

# entrar no postegres

psql -U postgres

# Comando docker para iniciar o container

sudo docker run -p 3000:3000 skill
