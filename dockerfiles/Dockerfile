#####################################################################
# devops app build on node:4-onbuild.
# Build with the tag "devops-demo-app"
# Exposes default port 3000
# Includes CMD. run as "docker run -itd -p <host port>:3000 <imagename>:<tag>"
#####################################################################
FROM node:4.6.1
MAINTAINER Akash Rajguru <a.rajguru@research.ait.ie>

# Create app directory
RUN mkdir -p /usr/src/node-ci-example
WORKDIR /usr/src/node-ci-example


# Install app dependencies
COPY package.json /usr/src/node-ci-example/
RUN npm install


# Bundle app source
COPY . /usr/src/node-ci-example

EXPOSE 3000
CMD ["npm","start"]
