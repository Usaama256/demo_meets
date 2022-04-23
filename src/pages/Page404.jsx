import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
  return (
    <Container>
      <h1>Ooops!!! Looks Like You're Lost</h1>
      <div>
      <Link to="/home" style={{textDecoration: "none"}}><Button variant="outlined" style={{color: "white", padding: "10px", margin: "20px", backgroundColor: "green"}}>Go To Home</Button></Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3a4cec;
    min-height: 100vh;
`;

export default Page404;

