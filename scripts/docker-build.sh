#!/bin/bash
# Bash script to build and run the Docker container
# Usage: ./scripts/docker-build.sh

echo "🐳 Building MediWeb Docker image..."

# Check if Docker is running
if ! docker version >/dev/null 2>&1; then
    echo "❌ Error: Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local file not found. Make sure to create it with your environment variables."
fi

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t mediweb-app .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo ""
    echo "To run the container:"
    echo "  docker run -p 3000:3000 --env-file .env.local mediweb-app"
    echo ""
    echo "Or use Docker Compose:"
    echo "  docker-compose up"
else
    echo "❌ Docker build failed!"
    exit 1
fi