import React from 'react';
import { environments } from 'constants/environments';
import { Link, useParams } from 'react-router-dom';
import { Flex, Card, Status, Image, } from './style';

interface Index {
	[number: string]: string;
}

export const StatusList = () => {
	const { id } = useParams();

	const colors: Index =  {
		'1': '#707070',
		'2': '#00FF00',
		'3': '#FFFF00',
		'4': '#FF6E1C',
		'5': '#FF0000', 
	}

	return (
		<Card>
			<Image src={`${environments.URL_HTTP_CAT+id}.jpg`} alt="Gatinho" />
			<Flex>
				{React.Children.toArray(
					environments.statusCode.map((status) => {
						const colorByStatus = Math.round(status / 100);

						return (
							<Link to={`/status-cat/${status}`}>
								<Status color={colors[colorByStatus] || '707070'}>
									{status}
								</Status>
							</Link>
						)
					})
				)}
			</Flex>
		</Card>
	)
}