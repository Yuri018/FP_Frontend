import {
  MainLowerPartContainer,
  MainLowerPartFlex,
  MainLowerPartItem,
  MainLowerPartTitle,
} from "./styles";

function MainLowerPart() {
  return (
    <MainLowerPartContainer>
      <MainLowerPartFlex>
        <MainLowerPartItem>
          <MainLowerPartTitle>Main Lower Part Item</MainLowerPartTitle>
        </MainLowerPartItem>
        <MainLowerPartItem>
          <MainLowerPartTitle>Main Lower Part Item</MainLowerPartTitle>
        </MainLowerPartItem>
        <MainLowerPartItem>
          <MainLowerPartTitle>Main Lower Part Item</MainLowerPartTitle>
        </MainLowerPartItem>
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart;