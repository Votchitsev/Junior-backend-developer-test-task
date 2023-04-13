run: database install run_project

database:
	docker-compose up --detach  

install:
	npm install

run_project:
	node app.js

stop: kill_port stop_container

kill_port:
	fuser -k 3000/tcp

stop_container:
	docker-compose down