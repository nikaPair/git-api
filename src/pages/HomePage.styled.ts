import styled from 'styled-components';
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 480px) {
        padding: 0 20px;
    }
`;
export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    width: 300px;
    border-radius: 5px;
    font-weight: 500;
    outline: none;
    font-size: 16px;
    font-family: Montserrat, sans-serif;

    @media (max-width: 480px) {
        width: 100%;
    }
`;
