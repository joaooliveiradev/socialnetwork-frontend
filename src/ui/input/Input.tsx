import { ReactNode } from 'react'
import styled from 'styled-components/macro'
type InputProps = {
  className?: string,
  svg?: ReactNode,
  type: string,
  htmlFor: string,
  labelText: string,
  required: boolean,
  placeholder: string,
  minLength?: number,
  maxLength?: number,
}
const Input = ({ className, svg, type, htmlFor, labelText, placeholder, required, minLength, maxLength }: InputProps) => (
  <label htmlFor={htmlFor}>
    {labelText}
    {svg}
    <input className={className} type={type} required={required} placeholder={placeholder} autoComplete="off" minLength={minLength} maxLength={maxLength} />
  </label>
)
const StyledInput = styled(Input)`
  height: 5rem;
  font-size: 1.8rem;
  border: solid 1px #DADADA;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.darkPurple};
`
export { StyledInput as Input }
