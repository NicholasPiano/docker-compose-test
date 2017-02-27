FROM node:7.4.0

EXPOSE 80

COPY . /root/api

WORKDIR /root/api

RUN npm install --silent

CMD ["npm", "start"]
