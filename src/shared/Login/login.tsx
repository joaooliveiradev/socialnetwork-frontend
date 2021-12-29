import styled from 'styled-components'
import { Input } from 'ui/Input'
import { Tipography } from 'ui/Tipography'
import { Button } from 'ui/Button'
import { theme } from 'resources/theme'
type FormLoginProps = {
  className?: string;
}
const ContainerLogin = ({ className }: FormLoginProps) => (
  <div className={className}>
    <StyledWrapperForm />
  </div>
)
const StyledContainerLogin = styled(ContainerLogin)`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: form;
`
const ContainerTitleForm = ({ className }: FormLoginProps) => (
  <div className={className}>
    <Tipography headingLevel="h1">Welcome Back</Tipography>
    <Tipography headingLevel="h3">Use your credentials to access your account</Tipography>
  </div>
)
const StyledContainerTitleForm = styled(ContainerTitleForm)`
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
    margin: 0;
    font-weight: normal;
    font-style: normal;
    font-size: 1.8em;
    margin-bottom: 1em;
    padding-top: 1rem;
  }
`
const Form = ({ className }: FormLoginProps) => (
  <form className={className}>
    <Input htmlFor="email" labelText="Your email" type="email" placeholder="name@domain.com" required />
    <Input htmlFor="password" labelText="Password" type="password" placeholder="at least 8 characters" required />
    <Button width="100%" height="5rem" bgColor={theme.colors.blue}>Login</Button>
    <Tipography headingLevel="p">Not registered yet? Create an Account</Tipography>
  </form>
)
const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  label {
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
    padding-left: 2rem;
  }
  input:focus{
    outline: none;
    border: solid 1px ${({ theme }) => theme.colors.darkPurple};
  }
  button {
    margin-top: 3rem;
  }
`
const WrapperForm = ({ className }: FormLoginProps) => (
  <div className={className}>
    <StyledContainerTitleForm />
    <StyledForm />
  </div>
)
const StyledWrapperForm = styled(WrapperForm)`
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
`
export { StyledContainerLogin as Login }
