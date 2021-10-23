import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>James Leal</Text>
          <Text color="gray.300" fontSize="small">
            james.leal2@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="James Leal" />
    </Flex>
  );
}
