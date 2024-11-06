export interface AuthFormProps {
  firstChildren: React.ReactNode
  secondChildren: React.ReactNode
  firstType: 'text' | 'email' | 'password'
  secondType: 'text' | 'email' | 'password'
  firstPlaceholder?: string
  secondPlaceholder?: string
}
