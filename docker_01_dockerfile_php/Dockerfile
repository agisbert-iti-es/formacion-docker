FROM ubuntu:24.04

RUN apt-get update -y \
    && apt-get install -y php8.3 php8.3-cli

WORKDIR /app

COPY hello.php ./

CMD ["php", "hello.php"]