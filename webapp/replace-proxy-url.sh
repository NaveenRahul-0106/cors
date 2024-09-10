#!/bin/sh

# Check if PROXY_URL is set
if [ -z "$PROXY_URL" ]; then
  echo "PROXY_URL environment variable is not set."
  exit 1
fi

# Replace the placeholder in bundle.js with the actual proxy URL
sed -i "s|http://localhost:8082|$PROXY_URL|g" /app/dist/bundle.js
