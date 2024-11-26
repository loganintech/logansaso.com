import { Box, Center, Flex, Image, Paper, Stack, Text } from '@mantine/core';
import { FC } from 'react';

export const Intro: FC = () => {
  return <Stack>
    <Paper withBorder>
      <Flex dir="row" justify="space-between" wrap="nowrap">
        <Box>
          <Image h={200} w={200} src="https://avatars.githubusercontent.com/u/6226408?v=4"/>
        </Box>
        <Center >
          <Box style={{ width: '90%' }}>
            <Text>Hi, I'm Logan: Software Engineer, Helm Chart Maintainer, and Music Enjoyer.</Text>
          </Box>
        </Center>
      </Flex>
    </Paper>
  </Stack>;
};
