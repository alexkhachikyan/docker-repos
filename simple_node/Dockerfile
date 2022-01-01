# Specify a base image
FROM node:alpine

# set workdir in the image
WORKDIR /usr/app

# Install some dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]