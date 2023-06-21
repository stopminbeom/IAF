import {
	Box,
	Flex,
	Text,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useDisclosure,
	Grid,
	Center,
  } from '@chakra-ui/react';
  import {
	ChevronDownIcon,
	ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();
  
	return (
	  <Grid h='200px'
	  		templateRows='2'
			templateColumns='3'>
			<Center fontSize='5xl'>무적의 공격대</Center>
			<hr />
			<Center display={{ base: 'center', md: 'center' }}>
				<DesktopNav />
			</Center>

		{/* <Collapse in={isOpen} animateOpacity>
		  <MobileNav />
		</Collapse> */}
	  </Grid>
	);
  }
  
  const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
	return (
	  <Stack direction={'row'} spacing={3}>
		{NAV_ITEMS.map((navItem) => (
		  <Box key={navItem.label}>
			<Popover trigger={'hover'} placement={'bottom-start'}>
			  <PopoverTrigger>
				<Link
				  p={50}
				  href={navItem.href ?? '#'}
				  fontSize={'lg'}
				  fontWeight={500}
				  color={linkColor}
				  _hover={{
					textDecoration: 'none',
					color: linkHoverColor,
				  }}>
				  {navItem.label}
				</Link>
			  </PopoverTrigger>
  
			  {navItem.children && (
				<PopoverContent
				  border={0}
				  boxShadow={'xl'}
				  bg={popoverContentBgColor}
				  p={5}
				  rounded={'xl'}
				  minW={'sm'}>
				  <Stack>
					{navItem.children.map((child) => (
					  <DesktopSubNav key={child.label} {...child} />
					))}
				  </Stack>
				</PopoverContent>
			  )}
			</Popover>
		  </Box>
		))}
	  </Stack>
	);
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
	  <Link
		href={href}
		role={'group'}
		display={'block'}
		p={2}
		rounded={'md'}
		_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
		<Stack direction={'row'} align={'center'}>
		  <Box>
			<Text
			  transition={'all .3s ease'}
			  _groupHover={{ color: 'pink.400' }}
			  fontWeight={500}>
			  {label}
			</Text>
			<Text fontSize={'sm'}>{subLabel}</Text>
		  </Box>
		  <Flex
			transition={'all .3s ease'}
			transform={'translateX(-10px)'}
			opacity={0}
			_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
			justify={'flex-end'}
			align={'center'}
			flex={1}>
			<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
		  </Flex>
		</Stack>
	  </Link>
	);
  };
  
  const MobileNav = () => {
	return (
	  <Stack
		bg={useColorModeValue('white', 'gray.800')}
		p={4}
		display={{ md: 'none' }}>
		{NAV_ITEMS.map((navItem) => (
		  <MobileNavItem key={navItem.label} {...navItem} />
		))}
	  </Stack>
	);
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();
  
	return (
	  <Stack spacing={4} onClick={children && onToggle}>
		<Flex
		  py={2}
		  as={Link}
		  href={href ?? '#'}
		  justify={'space-between'}
		  align={'center'}
		  _hover={{
			textDecoration: 'none',
		  }}>
		  <Text
			fontWeight={600}
			color={useColorModeValue('gray.600', 'gray.200')}>
			{label}
		  </Text>
		  {children && (
			<Icon
			  as={ChevronDownIcon}
			  transition={'all .25s ease-in-out'}
			  transform={isOpen ? 'rotate(180deg)' : ''}
			  w={6}
			  h={6}
			/>
		  )}
		</Flex>
  
		<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
		  <Stack
			mt={2}
			pl={4}
			borderLeft={1}
			borderStyle={'solid'}
			borderColor={useColorModeValue('gray.200', 'gray.700')}
			align={'start'}>
			{children &&
			  children.map((child) => (
				<Link key={child.label} py={2} href={child.href}>
				  {child.label}
				</Link>
			  ))}
		  </Stack>
		</Collapse>
	  </Stack>
	);
  };
  
  interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
	{
	  label: '공대 레이드표',
	  children: [
		{
		  label: '전체 보기',
		  subLabel: '공대원 전체의 레이드표를 볼 수 있습니다',
		  href: '#',
		},
		{
		  label: '나만 보기',
		  subLabel: '내 레이드표를 볼 수 있습니다',
		  href: '#',
		},
	  ],
	},
	{
	  label: '일정',
	  children: [
		{
		  label: '일정 등록',
		  subLabel: '일정을 등록합니다',
		  href: '#',
		},
		{
		  label: '일정 확인',
		  subLabel: '공대의 레이드 일정을 확인합니다',
		  href: '#',
		},
	  ],
	},
	{
	  label: '임시 표',
	  href: 'https://docs.google.com/spreadsheets/d/1_39uZ3bti8FldfYT98ooFfP50dotUf7nNKmi5skEllk/edit?usp=sharing',
	},
  ];