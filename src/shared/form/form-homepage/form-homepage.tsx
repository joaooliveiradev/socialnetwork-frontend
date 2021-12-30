import { FormSVGIcon } from 'ui/icons'
import { Logo } from 'ui/logo'
import styled from 'styled-components/macro'
import { ReactNode } from 'react'
type formProps = {
  className?: string,
  form: ReactNode,
}
const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: logoForm;
  @media(max-width: 1024px) {
    display: none;
  }
`
const ContainerSVG = styled(ContainerLogo)`
  grid-area: svgForm;
  @media(max-width: 1024px) {
    display: flex;
    svg {
      width: 100%;
      height: 32rem;
    }
  }
`
const FormHomepage = ({ className, form }: formProps) => {
  return (
    <div className={className}>
      <ContainerLogo>
        <Logo width='512' height='512' />
      </ContainerLogo>
      <ContainerSVG>
        <FormSVGIcon />
      </ContainerSVG>
      {form}
    </div>
  )
}
const StyledFormHomepage = styled(FormHomepage)`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  z-index: 2;
  border-radius: 1rem;
  box-shadow: 25px 25px 30px -15px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10rem 1fr;
  grid-template-areas:'logoForm logoForm'
                      'svgForm form';
  @media(max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:'svgForm'
                        'form';
  }
  `
export { StyledFormHomepage as FormHomepage }
