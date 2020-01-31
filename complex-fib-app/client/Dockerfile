FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx
EXPOSE 3000
copy ./nginx/default.conf /etc/nginx/conf.d/default.conf
copy --from=builder /app/build /user/share/nginx/html
