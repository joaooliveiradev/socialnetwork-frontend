import styled, { css } from 'styled-components/macro'
import { FormHomepage } from 'shared/Form/FormHomepage'
type loginProps = {
  className?: string,
}
const Homepage = ({ className }: loginProps) => {
  return (
    <div className={className}>
      <FormHomepage />
    </div>
  )
}
const StyledHomepage = styled(Homepage)`${({ theme }) => css`
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    ::before{
      position: absolute;
      content: '';
      width: 50%;
      height: 100%;
      left: 0rem;
      background-color: ${theme.colors.lightBlue};
    }
    ::after{
      position: absolute;
      content: '';
      width: 50%;
      height: 100%;
      right: 0rem;
      background-color: ${theme.colors.blue};
    }
`}`
export { StyledHomepage as Homepage }
