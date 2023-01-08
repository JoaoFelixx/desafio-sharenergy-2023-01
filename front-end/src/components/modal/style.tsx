import styled from 'styled-components';

interface PropsModal {
  isVisible: boolean;
}

const ModalDiv = styled.div<PropsModal>` 
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  right: 0;
  left: 0;
  z-index: 1;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  display: ${props => props.isVisible ? 'block' : 'none'};
  margin: 0 auto;
  background-color: #FEFDED;
  border: 2px solid #000;
	border-image: linear-gradient(90deg, #000, #FFF 100%) 1;
  width: 500px;
  height: auto;
  color: black;
  top: 40px;
  padding: 4px;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

const CloseBtn = styled.button`
  background-color: #FF0000;
  color: #FFFFFF;
  float: right;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export { ModalDiv, CloseBtn, };