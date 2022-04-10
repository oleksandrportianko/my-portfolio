start:
	docker-compose -f docker-compose.yml up

start_d:
	docker-compose -f docker-compose.yml up -d

clear:
	docker system prune --all --force
	docker volume prune --force

clearstop:
	docker-compose -f docker-compose.yml stop
	docker system prune --all --force
	docker volume prune --force