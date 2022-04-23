import styled from "styled-components";
import MaterialNav from "../components/MaterialNav";
import Meetups from "../components/Meetups";

const AllMeets = () => {
  return (
    <Container>
      <MaterialNav />
      <Meetups />
    </Container>
  );
};

const Container = styled.div`
    
    
`;
export default AllMeets;