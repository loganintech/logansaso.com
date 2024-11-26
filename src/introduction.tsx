import { Center, Flex, Image, Paper, Stack, Text } from '@mantine/core';
import { FC } from 'react';

const getAge = (): number => {
  // Parse the birthday string into a Date object
  const birthDate = new Date('1998-05-22');

  // Get the current date
  const today = new Date();

  // Calculate the age
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if the birthday hasn't occurred yet this year
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
};

export const Intro: FC = () => {
  const age = getAge();

  return <Paper withBorder>
    <Flex dir="row" justify="space-between" wrap="nowrap">
      <Image h={200} w={200} src="https://avatars.githubusercontent.com/u/6226408?v=4"/>
      <Stack style={{ padding: '4%' }} justify="space-between">
        <Center>
          <Text>
            Hi, I'm Logan, a {age} year old software engineer working across the stack for the love of the machine.
            If you want to learn more about me, continue browsing 😁.
          </Text>
        </Center>
        <Flex justify="space-between">
          {/*<Badge>*/}
          {/*  Linkedin*/}
          {/*</Badge>*/}
          {/*<Badge>*/}
          {/*  GitHub*/}
          {/*</Badge>*/}
          {/*<Badge>*/}
          {/*  BlueSky*/}
          {/*</Badge>*/}
        </Flex>
      </Stack>
    </Flex>
  </Paper>;
};
