import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from './theme.tsx';


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App/>
    </MantineProvider>
  </StrictMode>,
);
