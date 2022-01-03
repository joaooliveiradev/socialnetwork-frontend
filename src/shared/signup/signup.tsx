import styled from 'styled-components/macro'
import { Tipography } from 'ui/tipography'
import { Input } from 'ui/input'
import { Button } from 'ui/button'
import { theme } from 'resources/theme'
import { Link } from 'react-router-dom'
type SignUpProps = {
  className?: string
}
const SignUp = ({ className }: SignUpProps) => (
  <form className={className}>
    <Tipography headingLevel="h1">Create Account</Tipography>
    <Tipography headingLevel="h3">Create account to start using SocialNetwork</Tipography>
    <Input htmlFor="name" type="input" labelText="Full Name" placeholder="John Doe" required={true} />
    <Input htmlFor="email" type="email" labelText="Email address" placeholder="name@domain.com" required={true} />
    <Input htmlFor="password" type="password" labelText="Password" placeholder="at least 8 characters" required={true} />
    <Button width="100%" height="5rem" bgColor={theme.colors.blue}>Sign Up</Button>
    <Tipography headingLevel="p">Already have an account? <Link to="/">Login</Link></Tipography>
  </form>
)
const StyledSignUp = styled(SignUp)`
  display: flex;
  flex-direction: column;
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
    font-weight: normal;
    font-size: 1.8rem;
    margin: 0;
  }
  label{
    color: ${({ theme }) => theme.colors.darkPurple};
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    margin-top: 2rem;
  }
  input {
    padding-left: 2rem;
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
  button {
    margin-top: 2.5rem;
  }
  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
  }
  p {
    padding: 2rem 0rem;
    margin: 0;
  }
`
export { StyledSignUp as SignUp }
