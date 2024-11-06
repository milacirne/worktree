'use client'

import styled from 'styled-components'

import { LabelProps } from './interface'

export const Label = styled.label<LabelProps>`
  font-size: 1.6rem;
  font-weight: ${(props) => props.authform ? 700 : 500};
  line-height: 1.909rem;
  color: #FFFFFF; // adicionar a variável
`
