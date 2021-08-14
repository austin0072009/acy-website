FROM node

COPY . /code

WORKDIR /code

RUN npm i

RUN npm i -g serve

RUN npm run build

CMD serve -s build -l 5000