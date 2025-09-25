# Docker Setup for MediWeb

This document provides instructions for running the MediWeb application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually included with Docker Desktop)

## Environment Variables

Before running the application, make sure you have the following environment variables set in your `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=your_from_email@domain.com
RESEND_TO_CONTACT_EMAIL=your_contact_email@domain.com
```

## Building and Running

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the application
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build

# Stop the application
docker-compose down
```

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t mediweb-app .

# Run the container
docker run -p 3000:3000 --env-file .env.local mediweb-app
```

## Development vs Production

### Development
For development, it's recommended to run the application locally with:
```bash
pnpm dev
```

### Production
The Docker setup is optimized for production with:
- Multi-stage builds for smaller image size
- Standalone output for better performance
- Non-root user for security
- Health checks for monitoring

## Health Check

The application includes a health check endpoint at `/api/health` that returns:
- Application status
- Timestamp
- Uptime
- Environment
- Version

## Optimization Features

The Dockerfile includes several optimizations:

1. **Multi-stage builds**: Reduces final image size
2. **Standalone output**: Next.js optimization for containers
3. **Layer caching**: Efficient rebuilds by copying package files first
4. **Security**: Runs as non-root user
5. **Alpine Linux**: Smaller base image

## Troubleshooting

### Build Issues
- Ensure all environment variables are properly set
- Check that `.dockerignore` is not excluding necessary files
- Verify pnpm-lock.yaml is present for reproducible builds

### Runtime Issues
- Check container logs: `docker-compose logs mediweb-app`
- Verify environment variables are loaded
- Ensure ports are not conflicting with other services

### Performance
- The application uses Next.js standalone output for optimal performance
- Static assets are properly cached
- Health checks help with load balancer integration

## Scaling

For production scaling, consider:
- Using a reverse proxy (nginx configuration template included)
- Implementing horizontal scaling with multiple container instances
- Adding a CDN for static assets
- Using external monitoring and logging services