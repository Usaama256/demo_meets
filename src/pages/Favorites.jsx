import styled from "styled-components";
import MaterialNav from "../components/MaterialNav";
import Meetups from "../components/Meetups";

const Favorites = () => {
  return (
    <Container>
      <MaterialNav />
      <Meetups />
    </Container>
  );
};

const Container = styled.div`
    
    
`;
export default Favorites;