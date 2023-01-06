import styled from 'styled-components';

const Flex = styled.div`
	background-color: #CFCFCF;
	display: flex;

	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Image = styled.img` 

`;

const FullName = styled.h2` 
	font-size: 2.4em;
`;

const Detail = styled.span` 
	color: #707070;
`;

const Card = styled.div`
	width: 100%;
	padding: 2em;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export { 
	Flex, Card, Image, Detail, Content, FullName, 
}