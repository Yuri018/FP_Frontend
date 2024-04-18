import type { ReactNode } from 'react';

export interface MainUpperPartProps {
  children?: ReactNode
  mainTitle?: string
  bcgImgDescr?: { src: string; alt: string }
  isMainPage?: boolean
  isGeneralPage?: boolean
}