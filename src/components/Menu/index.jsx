import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import Menu1 from '../Menu1';

Menu.propTypes = {

};

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2)
  }));

function Menu(props) {
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item elevation={0}>
                              <Menu1 />
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item elevation={0}>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Menu;