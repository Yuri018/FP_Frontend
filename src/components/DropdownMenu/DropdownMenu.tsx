import { useState } from "react"
import { DropdownProps } from "./types"
import {
  DropdownMenuContainer,
  DropdownMenuList,
  DropdownMenuLink,
  DropdownMenuItem,
} from "./styles"
import Button from "../Button"

function DropdownMenu({
  HeaderDropDown,
  isGeneralPage,
  buttonProps,
}: DropdownProps) {
  const [isShowCityMenu, setIsShowCityMenu] = useState(false)
  const handleToggle = () => {
    setIsShowCityMenu(!isShowCityMenu)
  }
  return (
    <>
      {isGeneralPage && (
        <Button
          name={"Выбери свой город"}
          onClick={handleToggle}
          type={"button"}
        />
      )}
      {HeaderDropDown && (
        <Button
          name={"Выбери свой город"}
          onClick={handleToggle}
          type={"button"}
        />
      )}
      {isShowCityMenu && (
        <DropdownMenuContainer>
          <DropdownMenuList>
            <DropdownMenuItem>
              <DropdownMenuLink to="/berlin">БЕРЛИН</DropdownMenuLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownMenuLink to="/munich">МЮНХЕН</DropdownMenuLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownMenuLink to="/frankfurt">ФРАНКФУРТ</DropdownMenuLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownMenuLink to="/dusseldorf">ДЮССЕЛЬДОРФ</DropdownMenuLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DropdownMenuLink to="/hamburg">ГАМБУРГ</DropdownMenuLink>
            </DropdownMenuItem>
          </DropdownMenuList>
        </DropdownMenuContainer>
      )}
    </>
  )
}

export default DropdownMenu
