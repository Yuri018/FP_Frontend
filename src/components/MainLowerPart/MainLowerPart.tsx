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
          <MainLowerPartTitle>MainLowerPartItem</MainLowerPartTitle>
        </MainLowerPartItem>
        <MainLowerPartItem>
          <MainLowerPartTitle>MainLowerPartItem</MainLowerPartTitle>
        </MainLowerPartItem>
        <MainLowerPartItem>
          <MainLowerPartTitle>MainLowerPartItem</MainLowerPartTitle>
        </MainLowerPartItem>
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart;