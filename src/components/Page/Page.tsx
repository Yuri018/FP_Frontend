import { PageWrapper, PageContainer, ButtonContainer } from './styles';
import Button from 'components/Button';

function Page() {
  return(
    <PageWrapper>
      <PageContainer>
        <ButtonContainer>
          <Button name='name' onClick={() => {}} />
        </ButtonContainer>
      </PageContainer>
    </PageWrapper>    
    
  )
}

export default Page;
