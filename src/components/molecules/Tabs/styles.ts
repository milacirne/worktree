'use client'

import styled from 'styled-components'

import { TabsProps } from './interface'

export const Container = styled.div<TabsProps>`
  display: inline-flex;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 9.9rem;
  background-color: ${(props) => props.$authtabs ? props.theme.backgroundBoxList : props.theme.inputBackgroundColor};
`
