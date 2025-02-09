import styled from 'styled-components';

export const RepoContainer = styled.div`
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    justify-content: space-between;
    gap: 50px;
    border: 1px solid #ccc;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    padding: 20px;

    @media (max-width: 768px) {
        gap: 20px;
    }
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const RepoImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-sizing: border-box;
    align-self: center;
`;
export const RepoInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const RepoDescription = styled.p`
    width: 200px;
    word-wrap: break-word;
    @media (max-width: 724px) {
        width: 100px;
    }
`;
export const RepoDate = styled.span``;
export const RepoStars = styled.span``;
export const RepoTitle = styled.h2`
    font-size: 20px;
`;
export const RepoLink = styled.a`
    text-decoration: none;
    color: #8bc34a;
    font-weight: 500;
`;
