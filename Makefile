run-question1:
	docker-compose -f ./question1/docker-compose.yml up -d

run-question2:
	(npm run --prefix ./question2/tech-blog start&)

run-question3:
	(npm run --prefix ./question3/fetch start&)

run:
	make run-question1
	make run-question2
	make run-question3

