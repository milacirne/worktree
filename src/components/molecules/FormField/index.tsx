import { FormFieldProps } from './interface'

import Input from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'

import * as S from './styles'

const FormField = ( { children, type, ...rest }: FormFieldProps ) => {
  return (
    <S.Container>
      <Label {...rest}>{children}</Label>
      <Input type={type} {...rest}/>
    </S.Container>
  )
}
export default FormField
