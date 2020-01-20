#Specify a base image
FROM node:alpine

#Specify the folder where you put your application or Current working directory
WORKDIR /user/app

#copy files from current working directory of your application to container current working directory

#install some dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default command
CMD ["npm","start"]