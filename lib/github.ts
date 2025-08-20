// lib/github.ts
const OWNER = 'rennegomes';
const REPO = 'blog-posts';
const API = `https://api.github.com/repos/${OWNER}/${REPO}`;

export type Issue = {
  number: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  labels: { name: string }[];
  user: { login: string; avatar_url: string; url: string };
  pull_request?: unknown;
  html_url: string;
};

function headers() {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

export async function listIssues(): Promise<Issue[]> {
  const res = await fetch(`${API}/issues?state=open&per_page=50`, {
    headers: headers(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data: Issue[] = await res.json();
  // filtra PRs (issues com campo pull_request)
  return data.filter(i => !('pull_request' in i));
}

export async function getIssue(number: string | number): Promise<Issue> {
  const res = await fetch(`${API}/issues/${number}`, {
    headers: headers(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Post ${number} não encontrado`);
  return res.json();
}


export type GitHubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  html_url: string;
};

export async function getUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Usuário não encontrado');
  return res.json();
}
