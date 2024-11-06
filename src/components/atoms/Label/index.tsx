import { LabelProps } from './interface'

import * as S from './styles'

const Label = ({ children, authform, ...rest }: LabelProps ) => {
  return (
    <S.Label authform={authform} {...rest}>{children}</S.Label>
  )
}

export default Label
