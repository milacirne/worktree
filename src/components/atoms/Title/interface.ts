export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  fontSize?: 1.6 | 2.0
  fontWeight?: 500 | 700
  $lineHeight?: 1.909 | 2.148
  textTransform?: string
}
