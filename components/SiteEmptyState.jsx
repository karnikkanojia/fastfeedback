import React from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

import AddSiteModal from './AddSiteModal';

const SiteEmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        backgroundColor="white"
        borderRadius="8px"
        width="100%"
        direction="column"
        p="16"
        justify="center"
        align="center"
      >
        <Heading size="lg" mb="2">
          {"You haven't added any sites."}
        </Heading>
        <Text mb="4">{"Welcome 👋 Let's get started."}</Text>
        <AddSiteModal>Add Your First Site</AddSiteModal>
      </Flex>
    </DashboardShell>
  );
};

export default SiteEmptyState;
