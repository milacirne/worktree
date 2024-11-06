import { TitleProps } from './interface'

import * as S from './styles'

const Title = ({ children, fontSize, fontWeight, $lineHeight, textTransform, ...rest } : TitleProps) => {
  return (
    <S.Title {...rest} fontSize={fontSize} fontWeight={fontWeight} $lineHeight={$lineHeight} textTransform={textTransform}>{children}</S.Title>
  )
}

export default Title
