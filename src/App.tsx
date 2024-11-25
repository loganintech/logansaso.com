import {Stack} from '@mantine/core';
import {Intro} from './introduction.tsx';


function App() {
    return (
        <Stack align="center">
            <Stack justify="flex-start" align="center" style={{width: '600px'}}>
                <Intro />
            </Stack>
        </Stack>
    );
}

export default App;
