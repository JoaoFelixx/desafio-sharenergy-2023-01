import React, { 
	useState,
	useEffect, 
} from 'react';
import { api } from 'services';
import { toast } from 'react-toastify';
import { environments } from 'constants/environments';
import { Link, useParams } from 'react-router-dom';
import { Flex, Card, Status, Image, } from './style';

interface Index {
	[number: string]: string;
}

export const StatusList = () => {
	const { id } = useParams();
	const [hasId, setHasId] = useState<boolean>(false);

	const colors: Index =  {
		'1': '#707070',
		'2': '#00FF00',
		'3': '#FFFF00',
		'4': '#FF6E1C',
		'5': '#FF0000', 
	}

	useEffect(() => {
		const hasIdAtArray = environments.statusCode.find((status) => status === Number(id));

		if (hasIdAtArray)
			setHasId(false)

		setHasId(true)
	}, [id])

	return (
		<Card>
			{(id && hasId) && <Image src={`${environments.URL_HTTP_CAT+id}.jpg`} alt="Gatinho" />}
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