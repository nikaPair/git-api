import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontFamily: 'Monserrat',
                fontSize: '25px',
            }}
        >
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
