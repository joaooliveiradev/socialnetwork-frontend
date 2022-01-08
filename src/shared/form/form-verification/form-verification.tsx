import styled from 'styled-components/macro'
type FormVerificationProps = {
  className?: string,
}
const FormVerification = ({ className }: FormVerificationProps) => (
  <div className={className}>
    <input type="text" minLength={1} maxLength={1} />
    <input type="text" minLength={1} maxLength={1} />
    <input type="text" minLength={1} maxLength={1} />
    <input type="text" minLength={1} maxLength={1} />
  </div>
)
const StyledFormVerification = styled(FormVerification)`
  width: auto;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  @media(max-width: 375px){
    gap: 1.5rem;
  }
  input {
    width: 4rem;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
    font-size: 2.6rem;
    text-align: center;
    color: #222;
  }
  input:focus{
    outline: none;
  }
  /* REMOVE ARROWS FROM INPUT */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
   /* REMOVE ARROWS FROM INPUT */
`
export { StyledFormVerification as FormVerification }
