# PowerShell script to build and run the Docker container
# Usage: .\scripts\docker-build.ps1

Write-Host "Building MediWeb Docker image..." -ForegroundColor Green

# Check if Docker is running
try {
    docker version | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Docker is not running"
    }
} catch {
    Write-Host "Error: Docker is not running. Please start Docker Desktop and try again." -ForegroundColor Red
    exit 1
}

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "Warning: .env.local file not found. Make sure to create it with your environment variables." -ForegroundColor Yellow
}

# Build the Docker image
Write-Host "Building Docker image..." -ForegroundColor Blue
docker build -t mediweb-app .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To run the container:" -ForegroundColor Cyan
    Write-Host "  docker run -p 3000:3000 --env-file .env.local mediweb-app" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use Docker Compose:" -ForegroundColor Cyan
    Write-Host "  docker-compose up" -ForegroundColor White
} else {
    Write-Host "❌ Docker build failed!" -ForegroundColor Red
    exit 1
}