import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader color='#3b82f6' size={50} />
        </div>
    );
};

export default Loader;
