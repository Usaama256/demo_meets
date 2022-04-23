import styled from "styled-components";
import MaterialNav from "../components/MaterialNav";
import NewMeetupForm from "../components/NewMeetupForm";

const AddMeetup = () => {
  return (
    <Container>
      <MaterialNav />
      <FormContainer>
         <NewMeetupForm />
      </FormContainer>
    </Container>
  );
};

const Container = styled.div``;

const FormContainer = styled.div`
    margin: 20px auto;
    padding: 20px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default AddMeetup;