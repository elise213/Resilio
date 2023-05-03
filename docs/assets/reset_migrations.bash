rm -R -f ./migrations &&
pipenv run init &&
psql postgres -c 'DROP DATABASE example;' || true &&
psql postgres -c 'CREATE DATABASE example;' &&
psql postgres -c 'CREATE EXTENSION unaccent;' -d example &&
pipenv run migrate &&
pipenv run upgrade