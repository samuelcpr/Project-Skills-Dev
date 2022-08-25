# excluir containers e volumes

docker-compose down -v

# Criar container postegres com docker

sudo docker run --name nome-banco -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

# entrar no postegres

sudo docker exec -it ce38584d5e64 bash

# entrar no postegres

psql -U postegres
