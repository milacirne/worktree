import { TabProps } from './interface'

import * as S from './styles'

const Tab = ({ children, $active, $authtab, ...rest } : TabProps) => {
  return (
    <S.TabButton $active={$active} $authtab={$authtab} {...rest}>
      {children}
    </S.TabButton>
  )
}

export default Tab
