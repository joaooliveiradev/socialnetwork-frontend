import styled from 'styled-components/macro'
import { Tipography } from 'ui/tipography'
import { FormVerification } from 'shared/form/form-verification'
import { Link } from 'react-router-dom'
import { Button } from 'ui/button'
type VerificationProps = {
  className?: string,
}
// TODO: Logic to verify and pass to the reset component
const Verification = ({ className }: VerificationProps) => (
  <form className={className}>
    <Tipography headingLevel="h1">Verification</Tipography>
    <Tipography headingLevel="h3">Enter the verification code we just send you on your email address.</Tipography>
    <FormVerification />
    <Tipography headingLevel="p">Didn’t receive the code?<br /><button type="button" className='resendButton'>Resend in 30 seconds</button></Tipography>
    <Button width="100%"><Link to="/reset">Verify Account</Link></Button>
  </form>
)
const StyledVerification = styled(Verification)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.colors.darkPurple};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-style: italic;
    font-size: 3.6rem;
    margin: 0;
  }
  h3 {
    color: #929292;
    margin: 0;
    font-weight: normal;
    font-style: normal;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.darkPurple};
    margin: 0;
    margin-top: 2rem;
  }
  button {
    width: 24rem;
    margin-bottom: 2rem;
  }
  .resendButton {
    background: none;
    color: ${({ theme }) => theme.colors.blue};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  @media(max-width: 425px){
    button {
       width: 100%;
    }
  }
`
export { StyledVerification as Verification }
