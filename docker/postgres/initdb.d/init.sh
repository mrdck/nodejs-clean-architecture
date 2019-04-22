#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
	CREATE USER $POSTGRES_USERNAME WITH '$POSTGRES_PASSWORD';
	CREATE DATABASE $POSTGRES_CORE_DB_NAME;
	GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_CORE_DB_NAME TO $POSTGRES_USERNAME;
EOSQL