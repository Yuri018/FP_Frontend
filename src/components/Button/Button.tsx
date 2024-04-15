import { ButtunProps } from "./types"
import { ButtonComponent } from "./styles"

function Button({ name, onClick, type }: ButtunProps) {
  return (
    <ButtonComponent type="submit" onClick={onClick}>
      {name}
    </ButtonComponent>
  )
}

export default Button
