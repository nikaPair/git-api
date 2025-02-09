import React from 'react';
import {
    RepoContainer,
    RepoDate,
    RepoDescription,
    RepoImage,
    RepoInfo,
    RepoLink,
    RepoStars,
    RepoTitle,
} from './RepositoryCard.styled';
import { formatDate } from '../../utils/formatDate';
interface RepositoryCardProps {
    name: string;
    description: string | null;
    url: string;
    stars: number;
    lastUpdated: string;
    image: string;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ name, description, url, stars, lastUpdated, image }) => {
    return (
        <RepoContainer>
            <RepoImage src={image} alt='Avatar' />

            <RepoDescription>{description ? description : 'Нет описания'}</RepoDescription>
            <RepoInfo>
                <RepoTitle> {name.length > 10 ? name.slice(0, 10) + '...' : name} </RepoTitle>
                <RepoLink href={url} target='_blank'>
                    Ссылка на репозиторий
                </RepoLink>
                <RepoStars>⭐ {stars}</RepoStars>
                <RepoDate>Обновлено: {formatDate(lastUpdated)}</RepoDate>
            </RepoInfo>
        </RepoContainer>
    );
};

export default RepositoryCard;
