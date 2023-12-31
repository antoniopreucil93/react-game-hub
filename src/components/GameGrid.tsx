import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
	const { data: games, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			padding="10px"
			spacing={6}
		>
			{isLoading &&
				skeletons.map((skeleton, index) => (
					<GameCardSkeleton key={skeleton} />
				))}
			{games.map((game, index) => (
				<GameCard key={game.id} game={game} />
			))}
		</SimpleGrid>
	);
}

export default GameGrid;
