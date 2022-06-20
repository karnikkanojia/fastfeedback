import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import styles from '../styles/Home.module.css';
import { Button, Heading, Text, Code, Icon, Flex } from '@chakra-ui/react';
import { Github, Google, Logo } from '../constants/Icons';
import SiteEmptyState from '@/components/SiteEmptyState';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return <SiteEmptyState />;
}
