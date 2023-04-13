run: database install run_project

database:
	docker-compose up --detach postgres 

install:
	npm install

run_project:
	node app.js