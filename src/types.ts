interface RepositoryType {
  name: string;
  id: number;
  description: string;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
  license?: string;
  mainLanguage?: string;
}

interface ExtendedRepositoryType extends RepositoryType{
  html_url: string;
  open_issues_count: number;
  subscribers: number;
  contributors: Contributors;
}

interface Contributors {
  name: string;
  contributions: number;
}

export { RepositoryType, ExtendedRepositoryType, Contributors };
