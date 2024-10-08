import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = ({ isLoading, children }) => {
    return (
        <>
            {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                    />
                </div>
            )}
            {children}
        </>
    );
};

export default Loader;
