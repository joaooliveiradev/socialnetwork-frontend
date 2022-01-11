import { ReactNode } from 'react'
import styled from 'styled-components/macro'
type ButtonProps = {
    children: ReactNode;
    width?: string,
    height?: string,
    bgColor?: string,
}
const Button = styled.button<ButtonProps>`
  background-color: ${props => props.bgColor !== undefined ? props.bgColor : '#0099FF'};
  width: ${props => props.width !== undefined ? props.width : '100%'};
  height: ${props => props.height !== undefined ? props.height : '5rem'};
  border: none;
  border-radius: 0.6rem;
  font-size: 1.8rem;
  color: white;
`
export { Button }
