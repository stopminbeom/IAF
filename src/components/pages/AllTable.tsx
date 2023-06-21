import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Checkbox,
	TableCaption,
	TableContainer,
  } from '@chakra-ui/react'

export default function AllTable() {
	return (
		<TableContainer>
		<Table variant='simple' colorScheme='bule'>
			<TableCaption>무적의 공격대 레이드 리스트</TableCaption>
			<Thead>
			<Tr>
				<Th>오너</Th>
				<Th>캐릭터</Th>
				<Th>발탄</Th>
				<Th>비아키스</Th>
				<Th>쿠크세이튼</Th>
				<Th>아브렐슈드</Th>
				<Th>하브렐슈드</Th>
				<Th>카양겔</Th>
			</Tr>
			</Thead>
			<Tbody>
			<Tr>
				<Td>할배</Td>
				<Td>건슬링어</Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
			</Tr>
			<Tr>
				<Td>할배</Td>
				<Td>스카우터</Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
			</Tr>
			<Tr>
			<Td>할배</Td>
				<Td>슬레이어</Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
				<Td><Checkbox></Checkbox></Td>
			</Tr>
			</Tbody>
		</Table>
		</TableContainer>
	);
}
