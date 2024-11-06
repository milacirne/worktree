'use client'

import styled from 'styled-components'

import { LogoProps } from './interface'

export const Container = styled.div<LogoProps>`
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  margin-right: 0.8rem;
`
