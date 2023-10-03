FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN npm ci
##RUN npm ci > installs the exact same version dependencies
##RUN npm install > installs any latest version of dependencies if available and if package.json in not using fixed versionings

COPY . .
#copy each and every files except dockerignore ones from local app dir to /usr/src/app inside docker

EXPOSE 5000

CMD ["node" "server.js"]