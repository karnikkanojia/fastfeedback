import React from 'react'
import DashboardShell from './DashboardShell'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

const EmptyState = () => {
  return (
    <DashboardShell>
        <Box width="100%" backgroundColor="white" borderRadius="4px" p={8}>
            <Heading>{"You haven't added any sites"}</Heading>
            <Text>Start today, then grow with us 🌱</Text>
            <Button variant="solid" size="md">
              Upgrade
            </Button>
          </Box>
    </DashboardShell>
  )
}

export default EmptyState