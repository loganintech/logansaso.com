import App from './App.tsx';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {MantineProvider} from '@mantine/core';
// @ts-expect-error // global import for mantine
import '@mantine/core/styles.css';
import {theme} from './theme.tsx';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </StrictMode>,
);
