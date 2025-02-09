import { Repository } from '../../types/repositoryTypes';

export async function getRepositories(username: string, page: number): Promise<Repository[]> {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=20&page=${page}`);
    if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
    }
    return await response.json();
}
