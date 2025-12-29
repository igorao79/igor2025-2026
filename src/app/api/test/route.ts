// app/api/test/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  console.log('Token from env:', process.env.GITHUB_TOKEN);
  console.log('Username from env:', process.env.GITHUB_USERNAME);

  return NextResponse.json({
    token: process.env.GITHUB_TOKEN ? 'found' : 'not found',
    username: process.env.GITHUB_USERNAME || null
  });
}
