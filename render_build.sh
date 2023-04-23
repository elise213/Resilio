#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

pipenv install

pipenv run reset_db
pipenv run migrate

pipenv run upgrade
pipenv run popdb

pipenv run start