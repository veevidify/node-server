FROM node:26-alpine
USER appuser
COPY index.js /app/index.js
WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["node", "/app/index.js"]

