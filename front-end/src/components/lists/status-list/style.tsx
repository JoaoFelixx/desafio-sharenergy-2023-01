import styled from 'styled-components';

interface Color {
	color: string;
}

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Status = styled.div<Color>` 
	width: 8em;
	height: 5em;
	margin: 0.4em 0;
	background-color: ${props => props.color};
	color: #FFF;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.4em;
`;

const Image = styled.img`
	width: 50%;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const Flex = styled.div` 
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: stretch;
	flex-flow: wrap row;
`;

export { Flex, Card, Image, Status }