import styled from 'styled-components';

const FormCard = styled.div`
	display: flex;
	flex-direction: column; 
	align-items: center;

	p {
		font-weight: bold;
	}

	button {
		background-color: #F00;
		color: #FFF;
		padding: 0.5em 1em;
	}
`;

export { FormCard };