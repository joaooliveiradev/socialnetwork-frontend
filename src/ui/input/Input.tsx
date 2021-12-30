import styled from 'styled-components/macro'
type InputProps = {
  className?: string,
  type: string,
  htmlFor: string,
  labelText: string,
  required: boolean,
  placeholder: string,
}
const Input = ({ className, type, htmlFor, labelText, placeholder, required }: InputProps) => (
  <label htmlFor={htmlFor}>
    {labelText}
    <input className={className} type={type} required={required} placeholder={placeholder} autoComplete="off" />
  </label>
)
const StyledInput = styled(Input)`
  height: 5rem;
  font-size: 1.8rem;
  border: solid 1px #DADADA;
  border-radius: 6px;
`
export { StyledInput as Input }
