import { Stack } from '@mantine/core';
import { FC } from 'react';
import { Intro } from 'src/introduction.tsx';


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
