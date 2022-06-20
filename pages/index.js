import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import styles from '../styles/Home.module.css';
import { Button, Heading, Text, Code, Icon, Flex } from '@chakra-ui/react';
import { Github, Google, Logo } from '../constants/Icons';
import SiteEmptyState from '@/components/SiteEmptyState';
import FreePlanEmptyState from '@/components/FreePlanEmptyState';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="container">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Logo boxSize="32" color="black" name="logo" />
        <Text>
          Current User: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <>
            <SiteEmptyState />
            <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
          </>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signInWithGithub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
}
