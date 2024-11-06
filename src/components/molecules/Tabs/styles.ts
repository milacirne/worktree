'use client'

import styled from 'styled-components'

import { TabsProps } from './interface'

export const Container = styled.div<TabsProps>`
  display: inline-flex;
  border: 1px solid #052b2e; // alterar a variável
  border-radius: 9.9rem;
  background-color: #141A1F; // alterar a variável
  background-color: ${(props) => props.$authtabs ? '#141A1F' : '#080A0C'};
`
