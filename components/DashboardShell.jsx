import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar } from '@chakra-ui/react';
import { Logo } from 'constants/Icons';

import { useAuth } from '@/lib/auth';
import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py="4"
          maxW="1250px"
          margin="0 auto"
          w="full"
          px="8"
          h="60px"
        >
          <Flex align="center" justify="space-between">
            <NextLink href="/" passHref>
              <Link>
                <Logo name="logo" boxSize="24px" mr="8" />
              </Link>
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link pr="8">Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={user?.photoUrl} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default DashboardShell;
