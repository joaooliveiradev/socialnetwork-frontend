import styled from 'styled-components/macro'
import { Tipography } from 'ui/tipography'
import { Input } from 'ui/input'
import { Button } from 'ui/button'
import { MailSVG } from 'ui/icons'
type ForgotProps = {
  className?: string,
}
// TODO: Logic to send instructions to reset the password on e-mail
const Forgot = ({ className }: ForgotProps) => (
  <form className={className}>
    <Tipography headingLevel="h1">Forgot Password?</Tipography>
    <Tipography headingLevel='h3'>Don’t worry! It happens. Please enter the address associated with your account.</Tipography>
    <Input type="email" htmlFor="email" labelText="Your email" svg={<MailSVG />} placeholder="name@domain.com" required={true} />
    <Button width="100%" height="5rem" bgColor="#0099FF">Send Instructions</Button>
  </form>
)
const StyledForgot = styled(Forgot)`
  display: flex;
  flex-direction: column;
  width: 35rem;
  @media(max-width: 425px){
    width: auto;
  }
  label {
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${({ theme }) => theme.colors.darkPurple};
    font-size: 2rem;
    font-weight: 400;
    margin-top: 2rem;
  }
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
  }
  input {
    padding-left: 5rem;
  }
   input:focus{
    outline: none;
    border: solid 1px ${({ theme }) => theme.colors.darkPurple};
  }
  input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(22, 26, 58, 0.7);
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    rgba(22, 26, 58, 0.7);
    opacity:  1;
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    rgba(22, 26, 58, 0.7);
    opacity:  1;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    rgba(22, 26, 58, 0.7);
  }
  input::-ms-input-placeholder { /* Microsoft Edge */
    color:    rgba(22, 26, 58, 0.7);
  }
  input::placeholder { /* Most modern browsers support this now. */
    color:    rgba(22, 26, 58, 0.7);
  }
  svg {
    position: absolute;
    top: 3rem;
    left: 1.5rem;
    width: 2.6rem;
  }
  button {
    margin: 3rem 0;
  }
`

export { StyledForgot as Forgot }
