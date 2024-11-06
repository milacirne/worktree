import { AuthFormProps } from './interface'

import FormField from '@/components/molecules/FormField'

import * as S from './styles'

const AuthForm = ({firstChildren, secondChildren, firstType, secondType, firstPlaceholder, secondPlaceholder, ...rest}: AuthFormProps) => {
  return (
    <S.Form>
      <FormField {...rest} type={firstType} placeholder={firstPlaceholder}>{firstChildren}</FormField>
      <FormField {...rest} type={secondType} placeholder={secondPlaceholder}>{secondChildren}</FormField>
    </S.Form>
  )
}

export default AuthForm
