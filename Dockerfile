FROM rust:1.80.1

WORKDIR /app

RUN apt update
RUN apt install rsync

RUN cargo install wasm-pack

ENV NODE_VERSION=22.6.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN npm config set cache /tmp --global

RUN chmod -R 777 /usr/local/cargo

CMD npm ci