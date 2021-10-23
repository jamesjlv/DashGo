import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { Profile } from '../../components/Header/Profile';
import { useSideBarDrawer } from '../../contexts/SideBarDrawerContext';
import { Logo } from '../Header/Logo';
import { NotificationsNav } from '../Header/NotificationsNav';
import { SearchBox } from '../Header/SeachBox';

export function Header() {
  const { onOpen } = useSideBarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex as="header" width="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          aria-label="Open navigation"
        >
          {' '}
        </IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
