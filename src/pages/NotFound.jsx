import { Stack } from '@mui/material';
import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.history.back();
        }, 7000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Stack spacing={2} direction="column" alignItems="center" style={{ textAlign: 'center', padding: '10px', paddingLeft: '6px', paddingRight: '6px' }}>
            <h2
                style={{
                    display: 'inline-block',
                    fontSize: '2xl',
                    background: 'linear-gradient(to right, teal.400, teal.600)',
                    backgroundClip: 'text',
                }}
            >
                404
            </h2>
            <p style={{ fontSize: '18px' }}>Page Not Found</p>
            <p style={{ color: 'gray.500' }}>
                The page you&apos;re looking for does not seem to exist (yet)
            </p>
            <button
                onClick={() => window.history.back()}
                style={{
                    color: 'white',
                    backgroundColor: 'teal',
                    backgroundImage: 'linear-gradient(to right, teal.400, teal.500, teal.600)',
                }}
            >
                Go to last page
            </button>
        </Stack>
    );
}
