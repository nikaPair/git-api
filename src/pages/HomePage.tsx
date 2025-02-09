import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories, resetState } from '../features/repositories/repositoriesSlice';
import RepositoryCard from '../components/RepositoryCard/RepositoryCard';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import useDebounce from '../hooks/useDebounce';
import { RootState } from '../store/store';
import { AppDispatch } from '../store/store';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MainContainer, Input } from './HomePage.styled';

const HomePage: React.FC = () => {
    const [username, setUsername] = useState('');
    const debouncedUsername = useDebounce(username.toLocaleLowerCase(), 1000);

    const dispatch: AppDispatch = useDispatch();
    const { repositories, loading, error, page } = useSelector((state: RootState) => state);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        dispatch(resetState());
    };

    useEffect(() => {
        if (debouncedUsername) {
            dispatch(fetchRepositories({ username: debouncedUsername, page }));
        }
    }, [debouncedUsername, dispatch]);

    const loadMoreRepositories = () => {
        if (!loading && debouncedUsername) {
            dispatch(fetchRepositories({ username: debouncedUsername, page }));
        }
    };
    const hasMore = repositories.length > 0 && repositories.length % 20 === 0;
    return (
        <MainContainer>
            <Input
                type='text'
                value={username}
                onChange={handleInputChange}
                placeholder='Введите имя пользователя GitHub'
            />

            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <InfiniteScroll
                dataLength={repositories.length}
                next={loadMoreRepositories}
                hasMore={hasMore}
                loader={<Loader />}
                scrollThreshold={1}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
            >
                {repositories.map(repo => (
                    <RepositoryCard
                        key={`${repo.id} - ${repo.name}`}
                        name={repo.name}
                        description={repo.description}
                        url={repo.html_url}
                        stars={repo.stargazers_count}
                        lastUpdated={repo.updated_at}
                        image={repo.owner.avatar_url}
                    />
                ))}
            </InfiniteScroll>
        </MainContainer>
    );
};

export default HomePage;
