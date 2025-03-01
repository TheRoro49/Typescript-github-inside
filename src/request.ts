
export interface GithubUser {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    user_view_type:      string;
    site_admin:          boolean;
    name:                string | null;
    company:             string | null;
    blog:                string;
    location:            string | null;
    email:               string | null;
    hireable:            string | null;
    bio:                 string | null;
    twitter_username:    string | null;
    public_repos:        number;
    public_gists:        number;
    followers:           number;
    following:           number;
    created_at:          string;
    updated_at:          string;
}


export async function getUser(user: string): Promise<GithubUser | null> {
    const url = `https://api.github.com/users/${user}`
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
    });
    if (response.ok) {
        return response.json() as Promise<GithubUser>;
    }
    return null;
}
