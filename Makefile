prepare:
	@docker-compose pull
	@docker-compose build

start:
	@docker-compose up -d
	@docker-compose run dev yarn migrate

stop:
	docker-compose stop

clean:
	docker-compose down

lint:
	docker-compose run dev yarn lint

test-unit:
	docker-compose run dev yarn test:unit

test-integration:
	docker-compose run dev yarn test:integration

test: lint
	@test-unit
	@test-integration
dev:
	docker-compose run dev bash



