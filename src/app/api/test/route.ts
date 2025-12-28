import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  // Тестируем простой запрос к GitHub API
  let testResult = null;
  if (token && username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=2`, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Next.js App'
        }
      });

      testResult = {
        status: response.status,
        ok: response.ok,
        reposCount: response.ok ? (await response.json()).length : 0
      };
    } catch (error) {
      testResult = { error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  return NextResponse.json({
    hasToken: !!token,
    tokenLength: token?.length,
    username,
    nodeEnv: process.env.NODE_ENV,
    testResult
  });
}
