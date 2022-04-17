import styled from "styled-components";
import MaterialNav from "../components/MaterialNav";
import MeetupItem from "../components/MeetupItem";
import SideBar from "../components/SideBar";

const AllMeets = () => {
  return (
    <Container>
      <MaterialNav />
      <MeetupItem />
    </Container>
  );
};

const Container = styled.div`
    
    
`;
export default AllMeets;