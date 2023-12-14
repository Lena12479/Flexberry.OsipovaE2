docker build --no-cache -f SQL\Dockerfile.PostgreSql -t osipovae2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t osipovae2/app ../..
