import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function GameCardContainer({ children }: Props) {
	return <Box borderRadius={10} overflow="hidden" width="100%"></Box>;
}

export default GameCardContainer;
