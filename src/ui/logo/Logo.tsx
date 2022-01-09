import { LogoSVG } from 'ui/icons'
type logoProps = {
  href: string
  width: string,
  height: string,
}
const Logo = ({ href, width, height }: logoProps) => (
  <a href={href}>
    <LogoSVG width={width} height={height} />
  </a>
)
export { Logo }
