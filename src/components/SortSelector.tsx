import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { BsChevronBarDown } from 'react-icons/bs';

function SortSelector() {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
				Order by: Relavance
			</MenuButton>
			<MenuList>
				<MenuItem>Relavance</MenuItem>
				<MenuItem>Date added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Rating</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default SortSelector;
