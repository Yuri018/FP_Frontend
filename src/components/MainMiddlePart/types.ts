import type { ReactNode, MouseEventHandler } from 'react';

export interface MainMiddlePartProps {
  children?: ReactNode
  mainTitle?: string
  bcgImgDescr?: { src: string; alt: string }
  isMainPage?: boolean
  isGeneralPage?: boolean
  readButtonPath: string;
  handleReadButton: (path: string) => void;
  onClick?: MouseEventHandler<any> | undefined;
}