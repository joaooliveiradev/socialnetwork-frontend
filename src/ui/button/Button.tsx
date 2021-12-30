import styled from 'styled-components/macro'
type ButtonProps = {
    children: string;
    width: string,
    height: string,
    bgColor: string,
}
const Button = styled.button<ButtonProps>`
  background-color: ${props => props.bgColor};
  width: ${props => props.width !== undefined ? props.width : '100%'};
  height: ${props => props.height !== undefined ? props.height : '4rem'};
  border: none;
  border-radius: 0.6rem;
  font-size: 1.8rem;
  color: white;
`
export { Button }
