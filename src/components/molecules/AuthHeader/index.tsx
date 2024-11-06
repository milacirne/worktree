import Image from 'next/image'

import Logo from '@/components/atoms/Logo'
import Title from '@/components/atoms/Title'

import * as S from './styles'

const AuthHeader = () => {
  return (
    <S.Container>
      <Logo>
        <Image src='/images/logo.png' alt='Logo da Worktree' height={32} width={32}/>
      </Logo>
      <Title fontWeight={500} fontSize={1.6} $lineHeight={1.909}>Worktree</Title>
    </S.Container>
  )
}

export default AuthHeader
