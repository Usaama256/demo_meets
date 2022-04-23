import { Button, TextField } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const NewMeetupForm = () => {
  return (
    <Container>
        <TextField id="filled-basic" label="Title" required variant="filled" sx={{width: "100%", margin: "10px 0"}} />
        <TextField id="filled-basic" label="Location" required variant="filled" sx={{width: "100%", margin: "10px 0"}} />
        <TextField id="filled-basic" label="Image Url" variant="filled" sx={{width: "100%", margin: "10px 0"}} />
        <TextField id="filled-basic" label="Description" required variant="filled" sx={{width: "100%", margin: "10px 0"}} />
        <TextField id="filled-basic" label="More Description" variant="filled" sx={{width: "100%", margin: "10px 0"}} />
        <Button variant="outlined" sx={{width: "100%", margin: "10px 0"}}>ADD</Button>
    </Container>
  );
};
const Container = styled.div`
    width: 100%
`;
export default NewMeetupForm;