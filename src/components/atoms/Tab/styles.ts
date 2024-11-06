'use client'

import styled from 'styled-components'

import { TabProps } from './interface';

export const TabButton = styled.button<TabProps>`
  margin: ${(props) => props.$authtab ? '0.4rem' : '0.3rem' };
  padding: ${(props) => props.$authtab ? '1.6rem 3.2rem' : '1.0rem 1.6rem' };
  font-size: ${(props) => props.$authtab ? '1.6rem' : '1.4rem'};
  font-weight: ${(props) => {
    if (props.$active) {
      return props.$authtab
      ? 500
      : 700
    }
    return 500
  }};
  line-height: ${(props) => props.$authtab ? '1.909rem' : '1.671rem'};;
  color: ${(props) =>
    props.$active
      ? '#FFFFFF'
      : props.$authtab
      ? '#AFAFAF'
      : '#B0B0B0'
  };
  background: ${(props) => {
    if (props.$active) {
      return props.$authtab
      ? 'linear-gradient(180deg, #825BDD 0%, #5327BA 100%)'
      : '#101419';
    }
    return 'transparent';
  }};
  border: none;
  border-radius: 9.9rem;
  cursor: pointer;
`;
