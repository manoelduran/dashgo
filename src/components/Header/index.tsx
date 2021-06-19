import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { useSiderbarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { Search } from './Search';
export function Header() {
  const { onOpen } = useSiderbarDrawer();
  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center" >
      {!isLargeVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"

        >
        </IconButton>
      )}
      <Logo />
      {isLargeVersion && (
        <Search />
      )}
      <Flex align="center" ml="auto" >
        <NotificationNav />
        <Profile showProfileData={isLargeVersion} />
      </Flex>
    </Flex >
  );
}