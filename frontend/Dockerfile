FROM node:14.18.2 as builder

ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
COPY . .

RUN npm run build


FROM nginx:1.21.6 as deploy

COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html

# project artifacts
COPY --from=builder /app/dist .

RUN nginx -t
CMD ["nginx", "-g", "daemon off;"]
