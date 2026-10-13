FROM ubuntu:24.04
RUN apt update -y && apt install nodejs -y
USER appuser
COPY index.js /app/index.js
WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["node", "/app/index.js"]

