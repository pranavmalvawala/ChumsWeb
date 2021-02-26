FROM node:12-alpine

RUN apk update && \
    apk add git

WORKDIR /app

RUN git clone https://github.com/LiveChurchSolutions/ChumsWeb.git .

RUN git submodule init && git submodule update

RUN npm install

CMD npm run $ENVIRONMENT

EXPOSE 3100
