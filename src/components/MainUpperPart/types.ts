import type { ReactNode } from 'react';

import type { ButtunProps } from "components/Button/types"
export interface MainUpperPartProps {
  children?: ReactNode
  mainTitle?: string
  bcgImgDescr?: { src: string; alt: string }
  firstImgDescr?: { src: string; alt: string }
  secondImgDescr?: { src: string; alt: string }
  thirdImgDescr?: { src: string; alt: string }
  fourthImgDescr?: { src: string; alt: string }
  firstImgTitle?: string
  secondImgTitle?: string
  thirdImgTitle?: string
  fourthImgTitle?: string
  isMainPage?: boolean
  isGeneralPage?: boolean
  buttonProps?: ButtunProps
}