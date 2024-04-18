import type { ReactNode } from 'react';
export interface MainUpperPartProps {
  children?: ReactNode
  firstImgDescr?: { src: string; alt: string }
  secondImgDescr?: { src: string; alt: string }
  thirdImgDescr?: { src: string; alt: string }
  fourthImgDescr?: { src: string; alt: string }
  fifthImgDescr?: { src: string; alt: string }
  firstImgTitle?: string
  secondImgTitle?: string
  thirdImgTitle?: string
  fourthImgTitle?: string
  fifthImgTitle?: string
  isMainPage?: boolean
}