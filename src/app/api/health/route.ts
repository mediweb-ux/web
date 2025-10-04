import { NextResponse } from 'next/server'

// Simple health check for Docker
export async function GET() {
  return NextResponse.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString() 
  }, { status: 200 })
}