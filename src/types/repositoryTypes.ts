export type Repository = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    updated_at: string;
    owner: {
        avatar_url: string;
    };
};
