import { LogoSVG } from 'ui/icons'
type logoProps = {
  width: string,
  height: string,
}
const Logo = ({ width, height }: logoProps) => (
  <LogoSVG width={width} height={height}/>
)
export { Logo }
