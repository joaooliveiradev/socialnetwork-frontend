import { FormSVGIcon } from 'ui/icons'
import { Logo } from 'ui/logo'
import styled from 'styled-components/macro'
import { ReactNode } from 'react'
type formHomePageProps = {
  className?: string,
  titleForm?: ReactNode,
  formElement: ReactNode
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
  @media(max-width: 425px){
    svg {
      height: 30rem;
    }
  }
  @media(max-width: 320px){
    svg {
      height: 24rem;
    }
  }
`
const ContainerForm = ({ className, formElement }: formHomePageProps) => (
  <div className={className}>
    {formElement}
  </div>
)
const StyledContainerForm = styled(ContainerForm)`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: form;
  @media(max-width: 1024px) {
    padding: 0 2rem;
  }
`
const FormHomepage = ({ className, titleForm, formElement }: formHomePageProps) => {
  return (
    <div className={className}>
      <ContainerLogo>
        <Logo width='512' height='512' />
      </ContainerLogo>
      <ContainerSVG>
        <FormSVGIcon />
      </ContainerSVG>
      <StyledContainerForm titleForm={titleForm} formElement={formElement} />
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
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:'svgForm'
                        'form';
  }
  `
export { StyledFormHomepage as FormHomepage }
