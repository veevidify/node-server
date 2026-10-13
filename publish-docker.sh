#!/bin/bash

# invoke: ./publish-docker.sh 0.0.1
echo "$DOCKERHUB_TOKEN" | podman login docker.io \
  --username veevidify \
  --password-stdin

VERSION=${1:-0.0.1}

# Build a local image
podman build -t node-server .

# Tag the image for Docker Hub
podman tag node-server:latest docker.io/veevidify/node-server:latest
podman tag node-server:latest docker.io/veevidify/node-server:${VERSION}

# Push the image
podman push docker.io/veevidify/node-server:latest
podman push docker.io/veevidify/node-server:${VERSION}

