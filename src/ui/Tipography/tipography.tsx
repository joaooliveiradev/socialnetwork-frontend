import { ReactNode } from 'react'
import styled from 'styled-components/macro'
type validHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
type TitleProps = {
  headingLevel: validHeadingLevel,
  children: ReactNode,
  className?: string,
}
const Tipography = ({ headingLevel, className, children }: TitleProps) => {
  const Title = `${headingLevel}` as validHeadingLevel
  return <Title className={className}>{children}</Title>
}
const TipographyStyled = styled(Tipography)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.darkPurple};
`
export { TipographyStyled as Tipography }
