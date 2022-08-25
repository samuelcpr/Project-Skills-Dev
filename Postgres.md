# Comandos postgres

# Listar Banco de dados

\l

# Criar usuario no postegres

CREATE USER Samuel WITH ENCRYPTED PASSWORD '1234';

# listar usuarios

\du

# Atribuir funções aos usuários

ALTER ROLE Samuel CREATEROLE CREATEDB REPLICATION BYPASSRLS;

# Atribuir todas a funções ao usuario

ALTER ROLE Samuel SUPERUSER INHERIT LOGIN;

## atribuir permições total ao usuario

    GRANT ALL ON DATABASE template1 TO Samuel
