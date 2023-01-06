import React from 'react';
import { ModalDiv, CloseBtn } from './style';

interface Provider {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: React.Dispatch<boolean>;
}

export function UserModal({ children, isVisible, setIsVisible }: Provider) {
  return (
    <ModalDiv isVisible={isVisible}>
      <CloseBtn onClick={() => setIsVisible(false)} >X</CloseBtn>
      {children}
    </ModalDiv>
  )
}