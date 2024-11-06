import { LogoProps } from './interface'

import * as S from './styles'

const Logo = ({ onClick, children }: LogoProps) => {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  )
}

export default Logo
