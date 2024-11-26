import { Stack } from '@mantine/core';
import { Intro } from 'introduction.tsx';
import { FC } from 'react';


const App: FC = () => {
  return (
    <Stack align="center">
      <Stack justify="flex-start" align="center" style={{ width: '600px' }}>
        <Intro />  
      </Stack>
    </Stack>
  );
};

export default App;
