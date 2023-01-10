import styled from 'styled-components';

const FormCard = styled.form`
	display: flex;
	flex-flow column wrap;

	h1 {
		text-align: center;
		font-size: 1.5em;
		font-weight: bold;
	}

	label {
		font-weight: bold;
	}

	input {
		background-color: transparent;
		border: none;
		border-bottom: 1px solid #000 ;
		color: #000;
		font-size: 1em;

		&:focus {
			box-shadow: 0 0 0 0;
			outline: 0;
		}
	}

`;

export { FormCard }