import { NextResponse } from 'next/server';

interface Commit {
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
}

interface Repository {
  name: string;
  created_at: string;
  pushed_at: string;
}

interface MonthlyCommits {
  [key: string]: number;
}

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME || 'igorao79';

    console.log('GitHub GraphQL API Request:', {
      username,
      hasToken: !!token,
      tokenLength: token?.length,
      nodeEnv: process.env.NODE_ENV
    });

    if (!token) {
      console.error('GitHub token not configured');
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    // Используем GraphQL API для получения коммитов из всех репозиториев пользователя (включая приватные)
    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const variables = {
      username,
      from: '2025-01-01T00:00:00Z',
      to: '2025-12-31T23:59:59Z'
    };

    console.log('GraphQL query variables:', variables);

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Next.js App'
      },
      body: JSON.stringify({ query, variables })
    });

    console.log('GraphQL response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GraphQL API error:', errorText);
      throw new Error(`GitHub GraphQL API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    const contributions = data.data?.user?.contributionsCollection?.contributionCalendar;

    if (!contributions) {
      console.error('No contributions data found');
      throw new Error('No contributions data found');
    }

    console.log(`Total contributions from GraphQL: ${contributions.totalContributions}`);

    // Подсчитываем коммиты по месяцам
    const monthlyCommits: { [key: string]: number } = {};

    contributions.weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        const date = new Date(day.date);
        const monthKey = date.toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'short'
        });

        monthlyCommits[monthKey] = (monthlyCommits[monthKey] || 0) + day.contributionCount;
      });
    });

    // Преобразуем в массив для фронтенда
    const breakdown = Object.entries(monthlyCommits)
      .filter(([_, commits]) => commits > 0) // Убираем месяцы без коммитов
      .map(([month, commits]) => ({
        month,
        commits
      }));

    const result = {
      total: contributions.totalContributions,
      year: 2025,
      breakdown: breakdown.sort((a, b) => {
        const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        return months.indexOf(a.month) - months.indexOf(b.month);
      }),
      repositoriesCount: 'all', // GraphQL дает общую статистику по всем репозиториям
      totalReposFound: 'all'
    };

    console.log(`Final result - Total commits in 2025: ${result.total}`);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching commits:', error);
    return NextResponse.json(
      { error: 'Failed to fetch commits' },
      { status: 500 }
    );
  }
}
