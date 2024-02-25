export interface ButtunProps {
  name?: string;
  type?: 'submit' | 'reset' | 'button' | 'undefined'
  onClick?: () => void;
}
