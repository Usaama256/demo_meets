import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { dummyMeets } from "../store/dummyData";
import MeetupItem from "./MeetupItem";

const Meetups = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[1]

  return (
    <Container>
        {page === "home"
            ? dummyMeets.map((item) => {
                return (
                    <MeetupItem meetup={item} key={item.id}/>
                );
                })
            : dummyMeets.filter((item) => {return item.favorite === true}).map((item) => {
                return (
                    <MeetupItem meetup={item} key={item.id}/>
                );
             })
        }
    </Container>
  );
};
const Container = styled.div`
    margin: 20px;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    
`;
export default Meetups;