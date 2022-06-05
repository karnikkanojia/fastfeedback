import React from 'react';
import {
  Flex,
  Stack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { Logo } from '../constants/Icons';

const DashboardShell = ({ children }) => (
  <Flex flexDirection="column">
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      opacity={0.97}
      p={4}
    >
      <Stack spacing={2} isInline justifyContent="center" alignItems="center">
        <Logo color="black" size="32px" />
        <Link>Sites</Link>
        <Link>Feedback</Link>
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.100" p={8} height="100%">
      <Flex
        alignItems="stretch"
        justifyContent="flex-start"
        maxWidth="800px"
        ml="auto"
        mr="auto"
        flexDirection="row"
      >
        <Breadcrumb />
        <Breadcrumb />
        <Flex flexDirection="column">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          { children }
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
