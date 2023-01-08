import styled from 'styled-components';

interface ButtonColor {
  bgColor: string;
}

const Button = styled.button<ButtonColor>` 
  margin: 2px;
  background-color: ${props => props.bgColor};
  padding: 4px;
  color: #fff;
  border: 1px solid ${props => props.bgColor};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #fff;
    color: ${props => props.bgColor};
  }
`;

const Card = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	color: #000;
`;

const Table = styled.table` 
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
`;

const Th = styled.th`
  border: 1px solid #000;
  text-align: left;
  padding: 0.4em;
  background-color: #D40241;
  color: #fff;
  font-weight: bold;
  font-size: 1.4em;
  text-transform: uppercase;
`;

const Td = styled.th`
  border: 1px solid #000;
  text-align: left;
  padding: 8px;
  font-size: 18px;
  background-color: #A8A7A5;

  &&::first-letter {
    text-transform: uppercase;
  }
`;

const Tr = styled.tr`
  cursor: pointer;
  
  :nth-child(even) {
    background-color: #87827A;
  }
`;

const Add = styled.button`
  width: 100%;
  text-align: center;
  background-color: #0A60A1;
  font-size: 18px;
  padding: 6px;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 4px;
  font-weight: bold;
`;

export {
  Td,
  Th,
  Tr,
  Add,
  Card,
  Table,
  Button,
}