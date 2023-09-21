import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
	const sortOrders = [
		{ value: '', lable: 'Relevance' },
		{ value: '-added', lable: 'Date added' },
		{ value: 'name', lable: 'Name' },
		{ value: '-released', lable: 'Release date' },
		{ value: 'metacritic', lable: 'Popularity' },
		{ value: '-rating', lable: 'Average' },
	];

	const currentSortOrder = sortOrders.find(
		order => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
				Order by: {currentSortOrder?.lable || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map(order => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
					>
						{order.lable}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default SortSelector;
