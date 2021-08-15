FROM node

COPY . /code

WORKDIR /code

RUN npm install -g serve

CMD serve -s build -l 5000