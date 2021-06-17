import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Manoel Duran</Text>
          <Text color="gray.300" fontSize="small">manoel.duran@hotmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Manoel Duran" src="http://github.com/manoelduran.png" />
    </Flex>
  );
}