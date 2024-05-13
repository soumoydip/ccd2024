import { SIGNNUP_DJANGO_URL } from '@/lib/constants/be';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();

  const response = await fetch(SIGNNUP_DJANGO_URL, {
    method: "POST",
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  return NextResponse.json(result, { status: response.status });
}