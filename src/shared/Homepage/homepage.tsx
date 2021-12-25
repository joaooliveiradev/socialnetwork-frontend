import styled, { css } from 'styled-components/macro'
import { FormHomepage } from './form-homepage'
type homepageProps = {
  className?: string,
}
const Homepage = ({ className }: homepageProps) => {
  return (
    <div className={className}>
      <FormHomepage />
    </div>
  )
}
const StyledHomepage = styled(Homepage)`${({ theme }) => css`
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5rem 5rem;
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
