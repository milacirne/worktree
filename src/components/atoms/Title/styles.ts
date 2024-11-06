'use client'

import styled from 'styled-components'

import { TitleProps } from './interface'

export const Title = styled.h1<TitleProps>`
  font-size: ${(props) => `${props.fontSize}rem` || '2.4rem'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => `${props.$lineHeight}rem` || '2.864rem'};
  text-transform: ${(props) => props.textTransform || 'capitalize'};
  color: #FFFFFF; // alterar com a variável
`
