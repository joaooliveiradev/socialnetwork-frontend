import styled from 'styled-components'
import { Input } from 'ui/input'
import { Tipography } from 'ui/tipography'
import { Button } from 'ui/button'
import { theme } from 'resources/theme'
import { Link } from 'react-router-dom'
import { MailSVG, LockSVG } from 'ui/icons'
type FormLoginProps = {
  className?: string;
}
const Login = ({ className }: FormLoginProps) => (
  <form className={className}>
    <Tipography headingLevel="h1">Welcome Back</Tipography>
    <Tipography headingLevel="h3">Use your credentials to access your account</Tipography>
    <Input htmlFor="email" svg={<MailSVG />} labelText="Your email" type="email" placeholder="name@domain.com" required />
    <Input htmlFor="password" svg={<LockSVG />} labelText="Password" type="password" placeholder="at least 8 characters" required />
    <Link className="forgot" to="/forgot">Forgot password?</Link>
    <Button width="100%" height="5rem" bgColor={theme.colors.blue}>Login</Button>
    <Tipography headingLevel="p">Not registered yet? <Link to="/signup">Create an Account</Link></Tipography>
  </form>
)
const StyledLogin = styled(Login)`
  display: flex;
  flex-direction: column;
  label {
    position: relative;
    color: ${({ theme }) => theme.colors.darkPurple};
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    font-weight: 400;
  }
  label[for="password"]{
    margin-top: 2rem;
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
  a {
    margin: 1rem 0rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
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
    font-size: 1.8em;
    margin-bottom: 1em;
  }
  svg {
    position: absolute;
    top: 3rem;
    left: 1.5rem;
    width: 2.6rem;
  }
  .forgot {
    margin: 2rem 0rem;
    text-align: right;
  }
`
export { StyledLogin as Login }
