import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
        <h1>Meetups Demo</h1>
        <ul>
            <li>All Meetups</li>
            <li>Favorites</li>
            <li>Add Meetup</li>
        </ul>
    </Nav>
  );
};
const Nav = styled.div`
    
`;
export default NavBar;