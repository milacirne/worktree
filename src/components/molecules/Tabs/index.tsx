'use client'

import { useState } from 'react'

import Tab from '@/components/atoms/Tab'

import { TabsProps } from './interface'

import * as S from './styles'

const Tabs = ( { tabs, $authtabs } : TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index)
  }

  return (
    <S.Container $authtabs={$authtabs}>
      {tabs?.map((tab, index) => (
        <Tab
          key={index}
          $active={activeTabIndex === index}
          onClick={() => handleTabClick(index)}
          $authtab={tab.$authtab}
        >
          {tab.children}
        </Tab>
      ))}
    </S.Container>
  )
}

export default Tabs
