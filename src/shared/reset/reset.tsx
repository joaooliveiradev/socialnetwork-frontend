import styled from 'styled-components/macro'
import { LockSVG } from 'ui/icons'
import { Tipography } from 'ui/tipography'
import { Input } from 'ui/input'
import { Button } from 'ui/button'
type ResetProps = {
  className?: string,
}
// TODO: Logic to reset password
const Reset = ({ className }: ResetProps) => (
  <form className={className}>
    <Tipography headingLevel="h1">Create a new password</Tipography>
    <Tipography headingLevel="h3">Your new password must be different from previous used passwords.</Tipography>
    <Input type="password" svg={<LockSVG />} htmlFor="password" labelText="New password" placeholder="New password" required />
    <Input type="password" svg={<LockSVG />} htmlFor="password" labelText="Confirm password" placeholder="Confirm password" required />
    <Button>Verify Account</Button>
    {/* TODO: Message when submit fails and when submit is ok shows an loading and redirect to Login */}
  </form>
)
const StyledReset = styled(Reset)`
  display: flex;
  flex-direction: column;
  width: auto;
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
    font-size: 1.8em;
  }
  label {
    position: relative;
    color: ${({ theme }) => theme.colors.darkPurple};
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    font-weight: 400;
  }
  input {
    padding-left: 5rem;
  }
  label[for="password"]{
    margin-top: 2rem;
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
  a {
    margin: 1rem 0rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
  svg {
    position: absolute;
    top: 3rem;
    left: 1.5rem;
    width: 2.6rem;
  }
  button {
    margin-top: 2.5rem;
  }
`
export { StyledReset as Reset }
