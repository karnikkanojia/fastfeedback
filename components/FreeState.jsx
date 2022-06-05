import React from 'react';
import DashboardShell from './DashboardShell';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const FreeState = () => {
  return (
    <DashboardShell>
      <Box width="100%" backgroundColor="white" borderRadius="4px" p={8}>
        <Heading>Get feedback on your site instantly.</Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button variant="solid" size="md">
          Upgrade
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default FreeState;
