FROM node:16 AS build
WORKDIR /srv
ADD package.json package-lock.json ./
RUN npm install

FROM node:16-slim
WORKDIR /srv
COPY --from=build /srv .
ADD . .
EXPOSE 3000
CMD ["node", "index.js"]