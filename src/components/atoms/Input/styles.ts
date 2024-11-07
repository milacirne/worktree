'use client'

import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 5.1rem;
  padding: 0 2.4rem;
  margin-top: 1.6rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 9.9rem;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.909rem;
  color: ${(props) => props.theme.inputTextColor};

  ::placeholder {
    color: ${(props) => props.theme.inputTextColor};
  }
`
